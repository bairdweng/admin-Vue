<template>
    <div>
        <div class="newpage-container">
            <Hbinput :commData="item" v-for="item in items"></Hbinput>
        </div>
        <div class="newpage-raised-button">
            <mu-raised-button v-on:click = "finish" label="完成" fullWidth/></br></br>
            <mu-toast v-if="toast" :message="message"/><br>
        </div>
    </div>
</template>
<script>
    import Hbinput from '../../components/Hbinput'
    export default {
        data(){
            return {
                items: [{
                    type:'date',
                    label: '出生日期',
                    hintText:'请输入宝宝的出生日期',
                    value:""
                },{
                    type:'time',
                    label: '出生时间',
                    hintText:'请输入宝宝的出生时间',
                    value:""
                },{
                    type:'text',
                    label: '出生地点',
                    hintText:'请输入宝宝的出生地点',
                    value:""
                },{
                    type:'text',
                    label: '接生机构',
                    hintText:'请输入宝宝的接生机构',
                    value:""
                },{
                    type:'text-number',
                    label: '出生体重(kg)',
                    hintText:'请输入宝宝的出生体重',
                    value:""
                },{
                    type:'text-number',
                    label: '出生身长(cm)',
                    hintText:'请输入宝宝的出生身长',
                    value:""
                },{
                    type:'raido',
                    label: '宝宝性别',
                    value:'',
                    items:[{label:'男',nativeValue:'1'},{label:'女',nativeValue:'0'}],
                },],
                toast: false,
                title:"",
                message:''
            }
        },
        components:{
            Hbinput
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.reloadData();
            })
        },
        methods: {
            finish: function () {
                for (var index in this.items){
                    var item = this.items[index];
                    if (item.value.length == 0){
                        this.showToastText('请输入宝宝的' + item.label);
                        return;
                    }
                }
                this.showLoadingText('正在保存');
                var weak_this = this;
                setTimeout(function (){
                    weak_this.showLoadingDissmiss();
                    weak_this.showToastText('保存成功');
                    weak_this.hblocalForage.saveRecordWithbaseinfo('1',weak_this.items);
                },1000);
            },
            reloadData: function () {
                var title = this.$route.params.title;
                if (title){
                    this.$store.commit('COMM_CONF',{
                        isFooter:false,
                        isBack:true,
                        title:title
                    });
                }
            }
        }
    }
</script>
<style>
    .newpage-container{
        background: white;
        border-radius:5px;
        margin: 5px 5px 5px 5px;
    }
    .newpage-raised-button{
        margin: 10px 10px 10px 10px;
    }
</style>
