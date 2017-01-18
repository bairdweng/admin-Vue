<template>
    <li class="tl-newbaby-wrap">
        <router-link
            :to="{ name: 'newbabyrecord', params: { type:itemData.itemType,id:itemData.itemid,title:itemData.title}}">
            <span class="fa tag is-info"><i class="mu-icon material-icons ">{{itemData.icon_string ? itemData.icon_string : 'date_range' }}</i></span>
            <div class="timeline-item">
                <span class="time"><i class="mu-icon fa material-icons">date_range</i> {{itemData.monthDay}}</span>
                <h3 class="timeline-header" v-html="itemData.title"></h3>
                <div class="timeline-body" >
                    <div class="record_item_wrap">
                        <div class="record_item">喂养方式：母乳</div>
                        <div class="record_item">体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重： 3.8kg</div>
                        <div class="record_item">小便次数： 9次</div>
                        <div class="record_item">大便次数： 2次</div>
                        <div class="record_item">皮肤黄染： 有</div>
                        <div class="record_item">喂养次数： 10次</div>
                    </div>
                </div>
            </div>
        </router-link>
    </li>
</template>
<style lang="less" rel="stylesheet/less">
    .tl-newbaby-wrap {
        .record_item_wrap {
            display: flex;
            flex-wrap: wrap;
            .record_item {
                min-width: 107px;
                flex: 0 0 50%;
            }
        }
    }

</style>
<script type="text/javascript">
    export default {
        data(){

            //console.log(this.itemData);
            return {}
        },
        computed: {},
        props: {
            itemData: {
                type: Object,
                default: function () {
                    return {}
                }
            },
        },
    }
</script>
