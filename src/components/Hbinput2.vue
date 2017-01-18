<template>
    <div class="hbinput">
        <div v-if="commData.type == 'text'" class="twocolumn">
            <div class="label">{{commData.label}}</div>
            <mu-text-field :hintText="commData.hintText" v-model="commData.value"/>
        </div>
        <div v-if="commData.type == 'button'" @click="clickOnthefocus">
            <div class="mu-text-field-label">{{commData.label}}</div>
            <mu-raised-button class="demo-raised-button" icon="location_on" primary/>
        </div>
        <div v-if="commData.type == 'text-number'"  class="twocolumn">
            <div class="label">{{commData.label}}</div>
            <mu-text-field :hintText="commData.hintText" v-model="commData.value" type="tel"
                           :errorText="commData.errorText" />
        </div>
        <div v-if="commData.type == 'text-number-point'" class="twocolumn">
            <div class="label">{{commData.label}}</div>
            <mu-text-field :hintText="commData.hintText" v-model="commData.value" type="text" @change="textfieldChange"
                           :errorText="commData.errorText"/>
        </div>
        <div v-if="commData.type == 'text-person-number'" class="twocolumn">
            <div class="label">{{commData.label}}</div>
            <mu-text-field  :hintText="commData.hintText" v-model="commData.value" type="text"
                           @change="persontextfieldChange" :errorText=commData.errorText />
        </div>
        <div v-if="commData.type == 'date'" class="twocolumn">
            <div class="label">{{commData.label}}</div>
            <mu-date-picker :hintText="commData.hintText" v-model="commData.value" mode="portrait"/>
        </div>
        <div v-if="commData.type == 'time'" class="twocolumn">
            <div class="label">{{commData.label}}</div>
            <mu-time-picker :hintText="commData.hintText" v-model="commData.value" format="24hr"/>
            <br/>
        </div>
        <div v-if="commData.type == 'raido'" class="twocolumn">
            <div class="label">{{commData.label}}</div>
            <div v-for="item in commData.items">
                <mu-radio :label="item.label" name="group" :nativeValue="item.value" v-model="commData.value"/>
            </div>
        </div>
        <div v-if="commData.type == 'selectfield'" class="twocolumn">
            <div class="label">{{commData.label}}</div>
            <mu-select-field v-model="commData.value" :labelFocusClass="['label-foucs']" >
                <mu-menu-item v-for="item in commData.items" :value="item.value" :title="item.label"/>
            </mu-select-field>
        </div>
    </div>
</template>
<script>
    export  default{
        props: {
            commData: {
                type: Object
            }
        },
        methods: {
            clickOnthefocus(){
                this.$emit('clickOnthehbinput')
            },
            textfieldChange(value){
                if (!isNaN(value)) {
                    this.commData.errorText = ''
                }
                else {
                    var currentNumber = value.substring(0, value.length - 1);
                    setTimeout(() => {
                        this.commData.value = currentNumber;
                    }, 1);
                    this.commData.errorText = '请输入数字'
                }
            },
            persontextfieldChange(value){
                var lastNumber = value.substring(value.length - 1, value.length);
                if (value.length == 18 && lastNumber == 'X') {
                    this.commData.errorText = ''
                }
                else {
                    if (!isNaN(value)) {
                        this.commData.errorText = ''
                    }
                    else {
                        var currentNumber = value.substring(0, value.length - 1);
                        setTimeout(() => {
                            this.commData.value = currentNumber;
                        }, 1);
                        this.commData.errorText = '请输入正确的格式'
                    }
                }
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import "../less/HBtheme";

    .hbinput .mu-date-picker {

    }

    .twocolumn {
        display: flex;
        .label {
            flex: 0 0 30%;
            word-break: keep-all;
            align-self: center;
            padding-bottom: 10px;
        }
        & > div {
            flex: 1;
        }
    }
</style>
