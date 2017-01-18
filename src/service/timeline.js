/**
 * Created by David on 2017/1/6.
 */


import {stringToDate} from '../tools/utils.js';

const TimeLine = {}

//记录已经存在的 id;
TimeLine.itemIds = [];

TimeLine.formData = (data) =>{
  let years = {};
  let items = [];

  data.data.forEach((item)=>{
    if(!TimeLine.itemUnique(item.itemid)) return;
    let date = stringToDate(item.createTime);
    let yearsMonth = date.getFullYear() + ' - ' +  (date.getMonth() + 1);
    if( !years[yearsMonth]){
      items.push({
        yearsMonth,
        islabel:1
      });
      years[yearsMonth] = 1;
    }
    item.islabel = 0;
    item.yearsMonth = yearsMonth;
    item.monthDay = (date.getMonth() + 1) + '-' + date.getDate();

    items.push(item);
  })

  return items;
}

//timeLine 选项必须唯一
TimeLine.itemUnique = (itemId)=>{
  if(TimeLine.itemIds[itemId])  return false;
  TimeLine.itemIds[itemId] = true;
  return true;
}


export default TimeLine;
