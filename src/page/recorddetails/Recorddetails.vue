<template>
    <div class="recorddetails">
        <div v-for="item in recordList">

            <div v-if="item.showtip == true">
                <p class="title-content">{{item.name}}</p>
                <mu-chip class="chip-red" >
                    <mu-avatar :size="32" icon="face"  class="icon-avatar-red"/> {{item.checkContent}}
                </mu-chip>
            </div>
            <div v-if="item.showtip == false">
                <p class="title-content">{{item.name}}</p>
                <mu-chip class="chip-blue" >
                    <mu-avatar :size="32" icon="face"  class="icon-avatar-blue"/> {{item.checkContent}}
                </mu-chip>
            </div>
        </div>
    </div>
</template>
<script>
    import demorecord from '../../service/demorecord.js';
    export default{
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.reloadData();
        })
    },
    data(){
        return{
            recordList:[]
        }
    },
    methods:{
        reloadData: function (){
            var title = this.$route.params.title;
            if (title){
                this.$store.commit('COMM_CONF', {
                    isFooter: false,
                    isBack: true,
                    title: title
                });
            }
            this.recordList = [];
            this.showLoadingText('获取中...')
            var Weakthis = this;
            setTimeout(function (){
                Weakthis.showLoadingDissmiss()
                if (title=='1个月健康检查记录'||title=='1个月育儿记录'){
                    Weakthis.recordList = demorecord.getrecordWithMonths(1);
                }
                else if(title=='3个月健康检查记录。'){
                    Weakthis.recordList = demorecord.getrecordWithMonths(3);
                }
                else if(title=='宝宝出生记录'){
                    Weakthis.recordList = demorecord.getrecordWithMonths(1000);
                }
                else if(title=='新生儿育儿记录'){
                    Weakthis.recordList = demorecord.getrecordWithMonths(1001);
                }
                else if(title=='日龄3天喂养记录'){
                    Weakthis.recordList = demorecord.getrecordWithMonths(1003);
                }
                else {
                    Weakthis.recordList = [];
                    Weakthis.showToastText('您的宝宝没有录入数据');
                }
            },500)
        }
    }
}
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../less/HBtheme.less";
    .recorddetails{
        display: flex;
        flex-wrap: wrap;
        background: white;
        margin: 10px;
        border-radius: 10px;
    }
    .recorddetails .title-content{
        margin: 20px 10px 10px 10px;
        text-align: left;
        color: @darkBlack;
    }

    .recorddetails .icon-avatar-red{
        color: white;
        background: @accentColor;
    }
    .recorddetails .icon-avatar-blue{
        color: white;
        background: @lightBlue500;
    }
    .recorddetails .chip-red{
        margin: -5px 10px 10px 10px;
        color: @accentColor;
    }
    .recorddetails .chip-blue{
        margin: -5px 10px 10px 10px;
        color: @lightBlue500;
    }
</style>
