<template>
    <div class="hbinput">
        <div v-if="commData.type == 'text'">
            <mu-text-field :label="commData.label" :hintText="commData.hintText" v-model="commData.value" ref="profile"
                           fullWidth/>
        </div>
        <div v-if="commData.type == 'button'" @click="clickOnthefocus">
            <div class="mu-text-field-label">{{commData.label}}</div>
            <mu-raised-button class="demo-raised-button" :label="commData.value" icon="location_on" primary/>
        </div>
        <div v-if="commData.type == 'text-number'">
            <mu-text-field :label="commData.label" :hintText="commData.hintText" v-model="commData.value" type="tel" :errorText = commData.errorText fullWidth/>
        </div>
        <div v-if="commData.type == 'text-number-point'">
            <mu-text-field :label="commData.label" :hintText="commData.hintText" v-model="commData.value" type="text" @change="textfieldChange" :errorText = commData.errorText fullWidth/>
        </div>
        <div v-if="commData.type == 'text-person-number'">
            <mu-text-field :label="commData.label" :hintText="commData.hintText" v-model="commData.value" type="text" @change="persontextfieldChange" :errorText = commData.errorText fullWidth/>
        </div>
        <div v-if="commData.type == 'date'">
            <mu-date-picker  :label="commData.label" :hintText="commData.hintText" v-model="commData.value"  mode="portrait"   fullWidth/>
            <br/>
        </div>
        <div v-if="commData.type == 'time'">
            <mu-time-picker :label="commData.label" :hintText="commData.hintText" v-model="commData.value" format="24hr" fullWidth/>
            <br/>
        </div>
        <div v-if="commData.type == 'raido'" ref="profile">
            <h4 class="demo-popover-title">{{commData.label}}</h4>
            <div v-for="item in commData.items">
                <mu-radio :label="item.label" name="group" :nativeValue="item.value" v-model="commData.value"/>
            </div>
        </div>
        <div v-if="commData.type == 'selectfield'" ref="profile">
            <mu-select-field v-model="commData.value" :labelFocusClass="['label-foucs']" :label="commData.label" fullWidth>
                <mu-menu-item v-for="item in commData.items"  :value="item.value" :title="item.label" />
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
                if(!isNaN(value)){
                    this.commData.errorText = ''
                }
                else{
                    var currentNumber = value.substring(0,value.length-1);
                    setTimeout(()=>{
                        this.commData.value = currentNumber;
                    },1);
                    this.commData.errorText = '请输入数字'
                }
            },
            persontextfieldChange(value){
                var lastNumber = value.substring(value.length-1,value.length);
                if (value.length==18&&lastNumber == 'X'){
                    this.commData.errorText = ''
                }
                else{
                    if(!isNaN(value)){
                        this.commData.errorText = ''
                    }
                    else{
                        var currentNumber = value.substring(0,value.length-1);
                        setTimeout(()=>{
                            this.commData.value = currentNumber;
                        },1);
                        this.commData.errorText = '请输入正确的格式'
                    }
                }
            }
        }
    }
</script>

<style>
.hbinput .mu-date-picker{

}
</style>
