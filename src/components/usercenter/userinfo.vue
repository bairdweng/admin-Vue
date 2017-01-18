<template>
    <div class="userinfo">
        <div class="avatar">
            <img src="../../assets/avatar.jpg" alt="" />
        </div>
        <div class="info">
            <div class="line">
                <div class="line-item">宝宝姓名：{{userinfo.name}}</div>
                <div class="line-item">性别：{{userinfo.sex}}</div>
            </div>
            <div class="line">
                <div class="line-item">体重：{{userinfo.weight}} kg</div>
                <div class="line-item">身高：{{userinfo.height}} cm</div>
            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .userinfo{
        display: flex;
        .avatar{
            flex:0 0 22%;
            padding: 10px;
            align-self: center;
            img{
                float: left;
                width:100%;
                max-width: 4em;
                border: 1px solid #ddd;
                border-radius: 50%;
            }
        }
        .info{
            flex:4;
            padding: 15px 0;
            .line{
                display: flex;
                margin-top:5px;
                .line-item{
                    flex: 1;
                }
            }
        }
    }
</style>
<script>
    export default {
        data:function () {
            let userinfo = {
                name: '小小',
                birthday: '2017-1-1',
                sex: '女',
                weight: '3.8',
                height: '49',
            }
            return {
                userinfo
            }
        },
        methods: {
        },
        mounted: function () {

        }
    }
</script>
