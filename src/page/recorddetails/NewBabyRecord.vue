<template>
    <div class="newbabyrecord_wrap">
        <div class="dayitem hb-plane-m">
            <div class="hb-title">第一天</div>
            <div class="record_item_wrap hb-body">
                <div class="record_item">喂养方式：母乳</div>
                <div class="record_item">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重： 3.8kg</div>
                <div class="record_item">小便次数： 9次</div>
                <div class="record_item">大便次数： 2次</div>
                <div class="record_item">皮肤黄染： 有</div>
                <div class="record_item">喂养次数： 10次</div>
            </div>
        </div>
        <div class="dayitem hb-plane-m">
            <div class="hb-title">第二天</div>
            <div class="record_item_wrap hb-body">
                <div class="record_item">喂养方式：母乳</div>
                <div class="record_item">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重： 3.8kg</div>
                <div class="record_item">小便次数： 9次</div>
                <div class="record_item">大便次数： 2次</div>
                <div class="record_item">皮肤黄染： 有</div>
                <div class="record_item">喂养次数： 10次</div>
            </div>
        </div>
        <div class="dayitem hb-plane-m">
            <div class="hb-title">第三天</div>
            <div class="record_item_wrap hb-body">
                <div class="record_item">喂养方式：母乳</div>
                <div class="record_item">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重： 3.8kg</div>
                <div class="record_item">小便次数： 9次</div>
                <div class="record_item">大便次数： 2次</div>
                <div class="record_item">皮肤黄染： 有</div>
                <div class="record_item">喂养次数： 10次</div>
            </div>
        </div>
        <div class="dayitem hb-plane-m">
            <div class="hb-title">第四天</div>
            <div class="record_item_wrap hb-body">
                <div class="record_item">喂养方式：母乳</div>
                <div class="record_item">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重： 3.8kg</div>
                <div class="record_item">小便次数： 9次</div>
                <div class="record_item">大便次数： 2次</div>
                <div class="record_item">皮肤黄染： 有</div>
                <div class="record_item">喂养次数： 10次</div>
            </div>
        </div>
        <div class="dayitem hb-plane-m">
            <div class="hb-title">第五天</div>
            <div class="record_item_wrap hb-body">
                <div class="record_item">喂养方式：母乳</div>
                <div class="record_item">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重： 3.8kg</div>
                <div class="record_item">小便次数： 9次</div>
                <div class="record_item">大便次数： 2次</div>
                <div class="record_item">皮肤黄染： 有</div>
                <div class="record_item">喂养次数： 10次</div>
            </div>
        </div>
        <div class="dayitem hb-plane-m">
            <div class="hb-title">第六天</div>
            <div class="record_item_wrap hb-body">
                <div style="text-align: center;flex: 1;">
                    还没有数据记录。<br> <mu-raised-button label="添加" class="demo-raised-button" primary/>
                </div>
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
            return {
                recordList: []
            }
        },
        methods: {
            reloadData(){
                this.$store.commit('COMM_CONF', {
                    isFooter: false,
                    isBack: true,
                    title: '新生儿喂养记录',
                    selectIndex: 'tab2',
                    tab2: '阅读'
                });
            },
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../less/HBtheme.less";
    .newbabyrecord_wrap{
        padding:1px 0;
        background: @appbarBackgroundColor;
        .dayitem{
            margin:10px;
            padding:10px;
            background: @dialogBackgroundColor;
        }
        .record_item_wrap{
            padding:0 10px;
            display: flex;
            flex-wrap: wrap;
            .record_item{
                flex: 0 0 50%;
            }
        }
        .hb-title{height: 28px;line-height: 28px;}
    }
</style>
