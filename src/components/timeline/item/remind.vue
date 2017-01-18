<template>
    <li>
        <span class="fa tag is-danger"><i class="mu-icon material-icons ">{{itemData.icon_string ? itemData.icon_string : 'date_range' }}</i></span>
        <div class="timeline-item">
            <span class="time"><i class="mu-icon fa material-icons">date_range</i> {{itemData.monthDay}}</span>
            <h3 class="timeline-header" v-html="itemData.title"></h3>
            <div class="timeline-body" v-if="itemData.detail" v-html="itemData.detail"></div>
            <div class="timeline-footer">
                <mu-raised-button label="去完成" class="timeline-button" secondary/>
            </div>
        </div>
    </li>
</template>
<style>
</style>
<script type="text/javascript">
    export default {
        data(){
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
