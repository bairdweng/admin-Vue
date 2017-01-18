<script type="text/javascript">
    import Components from './item/index.vue';
    export default {
        data(){
            // //'tice','weiyang','test','remind'
            // var itemTypeMaps = {
            //   remind: 'TimelineRemind',
            // };
            //
            // let isLabel = !!(this.itemData.islabel);
            // var currentView = 'TimelineComment';
            //
            // if (isLabel) {
            //   currentView = 'TimelineLabel';
            // } else {
            //   //根据不同的内容 选择不同的模板;
            //   let itemType = this.itemData.itemType;
            //   if (itemTypeMaps.hasOwnProperty(itemType)) {
            //     currentView = itemTypeMaps[itemType];
            //   }
            // }
            // //console.log(this.itemData);
            // console.log(currentView);
            // return {
            //   currentView: currentView,
            //   islabel: isLabel
            // }
            return {}
        },
        props: {
            timelineList: {
                type: Array,
                default: function () {
                    return []
                }
            },
        },
        mounted: function () {

        },
        components: Components,
        render (h) {
            return h('ul', {'class': 'timeline'}, this.timelineList.map(function (itemData) {
                let isLabel = !!(itemData.islabel);
                //根据数据,渲染不同的组件;
                var itemTypeMaps = {
                    remind: 'TimeLineRemind',
                    newbabyrecord: 'TimeLineNewBaby',
                    food_record_remind: 'TimeLineRemind',
                };

                var currentView = 'TimeLineCommon';
                if (isLabel) {
                    currentView = 'TimeLineLabel';
                } else {
                    //根据不同的内容 选择不同的模板;
                    let itemType = itemData.itemType;
                    if (itemTypeMaps.hasOwnProperty(itemType)) {
                        currentView = itemTypeMaps[itemType];
                    }
                }
                return h(currentView, {'props': {'itemData': itemData}})
            }));
        }
    }

</script>

<style lang="less"  rel="stylesheet/less">
    @import "../../less/HBtheme";
    .timeline {
        position: relative;
        margin: 0 0 30px 0;
        padding: 0;
        list-style: none;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 4px;
            background: #ddd;
            left: 23px;
            margin: 0;
            border-radius: 2px;
        }

        & > li{
            position: relative;
            margin-right: 10px;
            margin-bottom: 15px;

            span.fa{
                @width:32px;
                width: @width;
                height: @width;
                line-height: @width;
                position: absolute;
                border-radius: 50%;
                text-align: center;
                left: 8px;
                top: 0;
                .material-icons{
                    font-size: 16px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    text-align:center;
                    transform: translate(-50%, -50%);
                }
            }

            .timeline-item {
                -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
                border-radius: 3px;
                margin-top: 0;
                background: #fff;
                color: #444;
                margin-left: 50px;
                margin-right: 5px;
                padding: 0;
                position: relative;

                .timeline-header {
                    margin: 0;
                    color: #555;
                    border-bottom: 1px solid #f4f4f4;
                    padding: 10px;
                    font-size: 16px;
                    line-height: 1.1;
                    margin-right: 38px;
                }

                .time {
                    color: #999;
                    float: right;
                    padding: 10px;
                    font-size: 12px;

                    position: absolute;
                    right: 0;

                    i {
                        font-size: 15px !important;
                        float: left;
                    }
                }

                .timeline-body {
                    padding: 5px 10px;
                }
                .timeline-footer {
                    padding: 5px 10px;
                    text-align: right;
                }
            }

            &:after {
                content: " ";
                display: table;
                box-sizing: border-box;
                clear: both;
            }
            &:before {
                content: " ";
                display: table;
                box-sizing: border-box;
            }

        }
    }

    .timeline{
        .timeline-button{
            min-width:48px;
            height: 26px;
            line-height: 26px;
            font-size:12px;
        }
        .tag {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background-color: whitesmoke;
            border-radius: 290486px;
            color: #4a4a4a;
            display: inline-flex;
            font-size: 12px;
            height: 2em;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            line-height: 1.5;
            padding-left: 0.875em;
            padding-right: 0.875em;
            vertical-align: top;
            white-space: nowrap;
        }

        .tag.is-white {
            background-color: white;
            color: #0a0a0a;
        }

        .tag.is-black {
            background-color: #0a0a0a;
            color: white;
        }

        .tag.is-light {
            background-color: whitesmoke;
            color: #363636;
        }

        .tag.is-dark {
            background-color: #363636;
            color: whitesmoke;
        }

        .tag.is-primary {
            background-color: #00d1b2;
            color: #fff;
        }

        .tag.is-info {
            background-color: @primaryColor;
            color: #fff;
        }

        .tag.is-success {
            background-color: #23d160;
            color: #fff;
        }

        .tag.is-warning {
            background-color: #ffdd57;
            color: rgba(0, 0, 0, 0.7);
        }

        .tag.is-danger {
            background-color: @accentColor;
            color: #fff;
        }

        .tag.is-medium {
            font-size: 1rem;
        }

        .tag.is-large {
            font-size: 1.25rem;
        }
    }

</style>
