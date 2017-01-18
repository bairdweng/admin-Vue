<template>
    <div class="mulistagelist">
        <mu-list>
            <mu-list-item :title="title" toggleNested>
                <mu-icon slot="left" value="show_chart" color="#03A9F4"/>
                <div v-for="item in items" slot="nested">
                    <mu-list-item slot="nested" :title="item.text" afterText="去记录" afterTextClass="afterTextClass-right" @click="ClickOnthemulist(item)">
                    </mu-list-item>
                </div>
            </mu-list-item>
        </mu-list>
    </div>
</template>
<script>
    import "less/HBtheme.less";
    export  default{
        data(){
            return{
            }
        },
        props:{
            items:{
                type:Array
            },
            title:''
        },
        methods: {
            ClickOnthemulist(item){
                this.$router.push({ name:item.router, params: { title: item.text}})
            }
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    @import "../../less/HBtheme";
    .mulistagelist .afterTextClass-right{
        color: @pinkA200
    }
</style>

