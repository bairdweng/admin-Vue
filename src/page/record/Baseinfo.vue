<template>
    <div>
        <div class="newpage-container">
            <Hbinput :commData="item" v-on:clickOnthehbinput="clickOntheInput" v-for="item in items"></Hbinput>
        </div>
        <div class="baseinfo-tips">
            <p>*您填写的信息仅用于记录您的个人健康档案，不会用于其它用途，请放心填写使用</p>
        </div>
        <div class="newpage-raised-button">
            <mu-raised-button v-on:click="finish" label="完成" fullWidth primary/>
            </br></br>
        </div>
        <adresspicker v-if="showPic" class="adresspicker" v-on:clickOntheEvent="clickOnthePicker"></adresspicker>
    </div>
</template>
<script>
    import Hbinput from '../../components/Hbinput'
    import adresspicker from '../../components/Adresspicker'
    export default {
        data(){
            return {
                items: [{
                    type: 'date',
                    label: '出生日期',
                    hintText: '请输入宝宝的出生日期',
                    value: "",
                    key: 'birthday'
                }, {
                    type: 'text',
                    label: '宝宝姓名',
                    hintText: '请输入宝宝的姓名',
                    value: "",
                    key: 'name'
                }, {
                    type: 'text-number',
                    label: '胎次',
                    hintText: '请输入宝宝的胎次',
                    value: "",
                    key: 'name'
                }, {
                    type: 'text-number',
                    label: '出生证号',
                    hintText: '请输入宝宝的出生证号',
                    value: "",
                    key: 'childtime'
                }, {
                    type: 'text-person-number',
                    label: '身份证号',
                    hintText: '请输入宝宝的身份证号',
                    value: "",
                    key: 'number'
                }, {
                    type: 'button',
                    label: '户口所在地',
                    hintText: '请输入宝宝的户口所在地',
                    value: "",
                    key: 'adress'
                }],
                showPic: false
            }
        },
        components: {
            Hbinput,
            adresspicker
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.reloadData();
            })
        },
        methods: {
            finish: function () {
                for (var index in this.items) {
                    var item = this.items[index];
                    if (item.value.length == 0) {
                        this.showToastText('请输入宝宝的' + item.label);
                        return;
                    }
                }
                this.showLoadingText('正在保存');
                var weak_this = this;
                setTimeout(function () {
                    weak_this.hblocalForage.saveRecordWithbirthinfo('1', weak_this.items, function (error) {
                        weak_this.showLoadingDissmiss();
                        if (error == null) {
                            weak_this.showToastText('保存成功');
                            setTimeout(function () {
                                weak_this.$router.go(-1);
                            }, 1000);
                        }
                        else {
                            weak_this.showToastText('保存失败');
                        }
                    });
                }, 1000);
            },
            clickOnthePicker(value){
                if (value.length > 0) {
                    var adressObj = this.items[5];
                    adressObj.value = value;
                }
                this.showPic = !this.showPic;
            },
            clickOntheInput(value){
                this.showPic = !this.showPic;
            },
            reloadData: function () {
                var title = this.$route.params.title;
                if (title) {
                    this.$store.commit('COMM_CONF', {
                        isFooter: false,
                        isBack: true,
                        title: title
                    });
                }
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import '../../less/HBtheme';
    .newpage-container {
        background: white;
        border-radius: 5px;
        margin: 5px 5px 5px 5px;
        overflow: hidden;
    }
    .newpage-raised-button {
        margin: 10px 10px 10px 10px;
    }
    .baseinfo-tips {
        margin: 0px 10px 0px 10px;
        color: @pinkA200;
        font-size: 12px;
    }
    .baseinfo-content {
        background: white;
        border-radius: 5px;
        margin: 5px 5px 5px 5px;
    }
</style>
