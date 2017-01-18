<template>
    <div class="attention hb-plane">
        <div class="hb-title">
            <i class="mu-icon fa material-icons">done</i> 今日关注
        </div>
        <div class="hb-body">
            <div class="attention-item healthcheck">
                <div class="itemIcon">
                    <i class="mu-icon fa material-icons">alarm_on</i>
                </div>
                <div class="itemCon">
                    <div class="itemCon-t">检查提醒</div>
                    <div class="">产后访视 (产后 28天)</div>
                </div>
                <div class="itemStatus">
                    未完成
                </div>
            </div>
            <div class="attention-item healthrecord">
                <div class="itemIcon">
                    <i class="mu-icon fa material-icons">assignment</i>
                </div>
                <div class="itemCon">
                    <div class="itemCon-t">健康记录</div>
                    <div class=""> 本月健康记录已完成 </div>
                </div>
                <div class="itemStatus done">
                    已完成
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .attention{
        .attention-item{
            display: flex;
            border-bottom: 1px solid #ddd;
            padding:10px 0;
            .itemIcon{
                flex: 3;
                padding-left: 20px;
                i{
                    font-size: 1.6em;
                    color: #fff;
                    padding: 10px;
                    border-radius: 50%;
                    background: #00b0ff;
                }
            }
            .itemCon{
                flex:6;
                align-self:center;
                line-height: 24px;
                color: #888;
            }
            .itemCon-t{
                color:#000000;
            }
            .itemStatus{
                flex:3;
                align-self:center;
                text-align: center;
                color: #d0a601;
                &.done{
                    color: #16c548;
                }
            }

            &.healthcheck{
                .itemIcon i{ background: #00b0ff;}
            }
            &.healthrecord{
                .itemIcon i{ background: #00c853;}
            }
        }
    }
</style>
<script>
    export default {
        data:function () {
            return {
            }
        },
        methods: {
        },
        mounted: function () {

        }
    }
</script>
