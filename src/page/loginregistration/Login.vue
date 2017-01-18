<template>
    <div>
        <div class="login-content">
            <mu-card>
                <div class="login-content">
                    <div v-for="item in items" >
                        <mu-text-field :label="item.label" :hintText="item.hintText" v-model=item.value  :type="item.type" fullWidth/><br/>
                    </div>
                    <mu-raised-button @click = "clickOntheLogin" label="登录" fullWidth class="login-button" primary/>
                    <br><br>
                    <router-link to="/regis">
                        <div class="regis-button">
                            <mu-raised-button label="注册" class="demo-raised-button" primary/>
                            <br><br>
                        </div>
                    </router-link>
                </div>
                <p>{{info}}</p>
            </mu-card>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title:'登录',
                toast:false,
                message:'',
                items: [{
                    label: '用户名',
                    hintText:'请输入您的用户名',
                    value:"15625098995",
                    type:""
                }, {
                    label: '密码',
                    hintText:'请输入您的密码',
                    value:"111111",
                    type:"password"
                }]
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.reloadData();
            })
        },
        created:function () {
            console.log(this.info);
        },
        methods:{
            clickOntheLogin(){
                for (var index in this.items) {
                    var item = this.items[index]
                    if (item.value.length == 0) {
                        this.showToastText('请输入您的' + item.label);
                        return;
                    }
                }
                var username = this.items[0].value;
                var password = this.items[1].value;
                this.showLoadingText('登录中');
                this.$store.dispatch('getnewToken',{username:username,password:password});
            },
            reloadData(){
                this.$store.commit('COMM_CONF',{
                    isFooter:false,
                    isBack:false,
                    title:'登录'
                });
            },
            loginSucess(){
                this.showLoadingDissmiss();
                this.showToastText('登录成功');
                this.$router.push('/mainview');
            },
            loginError(text){
                this.showLoadingDissmiss();
                this.showToastText(text);
            }
        },
        computed:{
            info:function(){
                var Obj = this.$store.getters.getnewToken;
                var result = Obj['result'];
                if (result == 1){
                    this.loginSucess();
                }
                else{
                    var Text = Obj['Text'];
                    if (Text){
                        this.loginError(Text);
                    }
                }
                return "";
            }
        }
    }
</script>
<style lang="less">
    .login-content{
        margin: 10px 10px 10px 10px;
    }
    .regis-button{
        top: 0px;
        text-align:right;
    }
    /*noinspection ALL*/
    .login-button{
        background:red50;
    }
</style>