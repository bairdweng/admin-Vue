<template>
    <div>
        <div class="newpage-container">
            <Hbinput :commData="item" v-for="item in items"></Hbinput>
        </div>
        <div class="newpage-raised-button">
            <mu-raised-button v-on:click = "finish" label="完成" fullWidth primary/></br></br>
            <mu-toast v-if="toast" :message="message"/><br>
        </div>
    </div>
</template>
<script>
    import Hbinput from '../../components/Hbinput2'
    export default {
        data(){
            return {
                items: [{
                    type:'date',
                    label: '出生日期',
                    hintText:'请输入宝宝的出生日期',
                    value:"",
                    key:'birthday'
                },{
                    type:'time',
                    label: '出生时间',
                    hintText:'请输入宝宝的出生时间',
                    value:"",
                    key:'birthtime'
                },{
                    type:'text',
                    label: '出生地点',
                    hintText:'请输入宝宝的出生地点',
                    value:"",
                    key:'birthplace'
                },{
                    type:'text',
                    label: '接生机构',
                    hintText:'请输入宝宝的接生机构',
                    value:"",
                    key:'institutions'
                },{
                    type:'text-number-point',
                    label: '出生体重(kg)',
                    hintText:'请输入宝宝的出生体重',
                    value:"",
                    key:'height'
                },{
                    type:'text-number-point',
                    label: '出生身长(cm)',
                    hintText:'请输入宝宝的出生身长',
                    value:"",
                    key:'weight'
                },{
                    type:'selectfield',
                    label: '宝宝性别',
                    value:'',
                    items:[{label:'男',value:'1'},{label:'女',value:'0'}],
                    key:'gender'
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
                    weak_this.hblocalForage.saveRecordWithbirthinfo('1',weak_this.items,function (error){
                        weak_this.showLoadingDissmiss();
                        if (error == null){
                            weak_this.showToastText('保存成功');
                            setTimeout(function (){
                                weak_this.$router.go(-1);
                            },1000);
                        }
                        else{
                            weak_this.showToastText('保存失败');
                        }
                    });
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
<style lang="less" rel="stylesheet/less" scoped>
    .newpage-container{
        background: white;
        border-radius:5px;
        margin: 10px;
        padding: 10px;
    }
    .newpage-raised-button{
        margin: 10px 10px 10px 10px;
    }
</style>
