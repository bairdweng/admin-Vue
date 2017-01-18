<template>
    <div>
        <div class="login-content">
            <mu-card>
                <div class="login-content">
                    <div v-for="item in items" >
                        <div v-if="item.showbtn == true">
                            <mu-text-field :label="item.label" :hintText="item.hintText" v-model=item.value  :type="item.type" fullWidth/>
                            <div class="raised-button">
                              <mu-raised-button  @click="getVCode" label="获取验证码" class="demo-raised-button" primary /><br><br>
                            </div>
                        </div>
                        <div v-if="item.showbtn == false">
                            <mu-text-field :label="item.label" :hintText="item.hintText" v-model=item.value  :type="item.type" fullWidth/><br/>
                        </div>
                    </div>
                    <mu-raised-button @click = "finish" label="注册" fullWidth class="login-button" primary/>
                    <p>{{info}}</p>
                    <br><br>
                </div>
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
                    type:"",
                    showbtn:false
                }, {
                    label: '密码',
                    hintText:'请输入您的密码',
                    value:"111111",
                    type:"password",
                    showbtn:false
                },{
                    label: '验证码',
                    hintText:'请输入您的短信验证码',
                    value:"",
                    type:"",
                    showbtn:true
                }]
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.reloadData();
            })
        },
        methods:{
            finish(){
                for (var index in this.items) {
                    var item = this.items[index]
                    if (item.value.length == 0&&index!=2) {
                        this.showToastText('请输入您的' + item.label);
                        return;
                    }
                }
                var mobile = this.items[0].value;
                var password = this.items[1].value;
                var key = "";
                this.showLoadingText('正在注册');
                this.$store.dispatch('getRegister',{
                            mobile:mobile,
                            password:password,
                            key:key
                        });
            },
            getVCode(){
                console.log('点击获取验证码');
            },
            reloadData(){
                this.isloadmore = true;
                this.$store.commit('COMM_CONF',{
                    isFooter:false,
                    isBack:true,
                    title:'注册'
                });
            },
            regisSucess(){
                this.showLoadingDissmiss();
                this.showToastText('注册成功');
                this.$router.go(-1);
            },
            regisError(text){
                this.showLoadingDissmiss();
                this.showToastText(text);
            }
        },
        computed:{
            info:function(){
                var Obj = this.$store.getters.getRegister;
                var result = Obj['result'];
                if (result == 1){
                    this.regisSucess();
                }
                else{
                    var Text = Obj['Text'];
                    if (Text){
                        this.regisError(Text);
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
    /*noinspection ALL*/
    .login-button{
        background:red50;
    }
    .raised-button{
        top: -100px;
        text-align:right;
    }
</style>