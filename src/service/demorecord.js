/**
 * Created by baird on 2017/1/13.
 */
function getrecordWithMonths(month){
    if (month == 1){
        return getOneMonthData();
    }
    else if (month == 3){
        return getthreeMonthData();

    }
    else if (month == 1000){
        return getbirthData();

    }
    else if (month == 1001){
        return getOnedayData();

    }
    else if (month == 1003){
        return getthreedayData();
    }
    else {
        return [];
    }
}
//一月
function getOneMonthData(){
    let data = [
        {name:'脐带脱落',checkContent:'30天',showtip:false},
        {name:'黄染消退',checkContent:'30天',showtip:false},
        {name:'吃奶次数',checkContent:'20次',showtip:true},
        {name:'小便次数',checkContent:'30次',showtip:false},
        {name:'大便次数',checkContent:'30次',showtip:true},
        {name:'喂养方式',checkContent:'母乳',showtip:false},
        {name:'吃奶情况',checkContent:'30天',showtip:false},
        {name:'听到较大声音时，有无受惊手脚或开始哭泣？',checkContent:'有',showtip:true},
        {name:'经常苦恼不易安慰？',checkContent:'有',showtip:true},
        {name:'补充维生素D或者AD？',checkContent:'无',showtip:true}
    ]
    return data;
}
//三月
function getthreeMonthData() {
    let data = [
        {name:'喂养方式',checkContent:'人工',showtip:false},
        {name:'吃奶情况',checkContent:'不好',showtip:true},
        {name:'继续补充维生素D或者AD？',checkContent:'是',showtip:false},
        {name:'经常和宝宝说话吗？',checkContent:'是',showtip:false},
        {name:'对很大声音有反应吗？',checkContent:'有',showtip:false},
        {name:'逗引时发音或微笑吗？',checkContent:'是',showtip:false},
        {name:'吃奶情况',checkContent:'30天',showtip:false},
        {name:'注视人脸或追视移动的人吗？',checkContent:'否',showtip:true},
        {name:'仰卧时会抬头微笑吗？',checkContent:'会',showtip:false},
        {name:'每天户外活动时间？',checkContent:'30分钟',showtip:true}
    ]
    return data;
}
//出生
function getbirthData(){
    let data = [
        {name:'出生日期',checkContent:'2017-01-15',showtip:false},
        {name:'出生时间',checkContent:'18:08',showtip:false},
        {name:'出生地点',checkContent:'广州',showtip:false},
        {name:'接生机构',checkContent:'江川幼儿保健中心',showtip:false},
        {name:'宝宝性别',checkContent:'女',showtip:true},
        {name:'体重',checkContent:'3.2kg',showtip:false},
        {name:'身长',checkContent:'70cm',showtip:false},
    ]
    return data;
}
//1天
function getOnedayData(){
    let data = [
        {name:'小便次数',checkContent:'2次',showtip:false},
        {name:'大便次数',checkContent:'1次',showtip:true},
        {name:'喂养方式',checkContent:'母乳',showtip:false},
        {name:'皮肤黄染',checkContent:'否',showtip:true},
        {name:'体重',checkContent:'4.8kg',showtip:false},
    ]
    return data;
}
//3天
function getthreedayData(){
    let data = [
        {name:'小便次数',checkContent:'10次',showtip:false},
        {name:'大便次数',checkContent:'3次',showtip:true},
        {name:'喂养方式',checkContent:'母乳',showtip:false},
        {name:'皮肤黄染',checkContent:'否',showtip:true},
        {name:'体重',checkContent:'5kg',showtip:true},
    ]
    return data;
}
exports.getrecordWithMonths = getrecordWithMonths;
