<template>
    <div class="mainpage usercenter_page">

        <div class="usercenter_user">
            <user-info></user-info>
        </div>

        <div class="growcurve hb-plane">
            <div class="hb-title">
                <i class="mu-icon fa material-icons">show_chart</i> 宝贝成长曲线
            </div>
            <echart-height></echart-height>
            <echart-weight></echart-weight>
            <echart-bmi></echart-bmi>
        </div>

        <attention></attention>

    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    @import "../../less/HBtheme";
    .usercenter_page {
        background: #eee;
    }
    .usercenter_user{
        background: #fff;
    }

</style>
<script>
    import Attention from 'components/usercenter/attention';
    import UserInfo from 'components/usercenter/userinfo';
    import EchartHeight from 'components/echart/height-line';
    import EchartWeight from 'components/echart/weight-line';
    import EchartBmi from 'components/echart/bmi-line';


    export default {
        data:function () {
            return {
            }
        },
        methods: {
            reloadData(){
                this.$store.commit('COMM_CONF', {
                    isFooter: true,
                    isBack: false,
                    title: '育儿期 13天',
                    selectIndex: 'tab3',
                    tab3: '我'
                });
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.reloadData();
            })
        },
        mounted: function () {
        },
        components:{
            EchartHeight,
            EchartWeight,
            EchartBmi,
            UserInfo,
            Attention
        }
    }

</script>
