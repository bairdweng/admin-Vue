// https://github.com/nuysoft/Mock/wiki
let Mock = require('mockjs');
Mock.setup({
    timeout: 400
})
var Random = Mock.Random;
Random.cname();
Random.image('200x100');
Random.cparagraph();
Random.ctitle();
Random.datetime('yyyy-MM-dd HH:mm:ss')
/*
 * 首页数据
 *
 * */
Mock.mock(
    '/api/handbook/timeline2',
    {
        "data": [
            {
                "itemid": 3,
                "itemType": 'remind',  //体检类型;
                "title": "体检提醒",
                "detail": "还没有您宝宝出生体检记录哦，快去体检一下做个记录吧。",
                "author": "@cname",
                "createTime": "2016-10-2 12:30:10",
                "icon_string": "domain",
            },
            {
                "itemid": 1,
                "itemType": 'common',  //体检类型;
                "title": "宝宝出生记录",
                "detail": "2017-1-10 宝宝出生了。",
                "author": "@cname",
                "createTime": "2016-10-1 12:30:10",
                "icon_string": "person",
            }
        ]
    }
)

/***
 *  icon_string 定义图标类型: person 用户输入  domain 医院数据 local_florist 幼儿园数据
 *  itemType 数据类型:
 *  tice 身高体重检测
 *  food_record 喂养记录
 *  examination 体检记录
 *  food_record_remind
 */

    .mock(
        '/api/handbook/timeline',
        {
            "data": [

                {
                    "itemid": 9,
                    "itemType": 'examination',
                    "title": "3个月健康检查记录。",
                    "detail": "",
                    "author": "@cname",
                    "createTime": "2017-1-2 12:30:10",
                    "icon_string": "local_hospital",
                },
                {
                    "itemid": 9,
                    "itemType": 'food_record_remind',
                    "title": "您还没有记录3个月育儿记录哦。",
                    "detail": "",
                    "author": "@cname",
                    "createTime": "2017-1-2 12:30:10",
                    "icon_string": "person",
                },
                {
                    "itemid": 8,
                    "itemType": 'examination',
                    "title": "1个月健康检查记录",
                    "detail": "",
                    "author": "@cname",
                    "createTime": "2016-11-2 12:30:10",
                    "icon_string": "local_hospital",
                },
                {
                    "itemid": 7,
                    "itemType": 'examination',
                    "title": "1个月育儿记录",
                    "detail": "",
                    "author": "@cname",
                    "createTime": "2016-11-2 12:30:10",
                    "icon_string": "person",
                },
                {
                    "itemid": 6,
                    "itemType": 'examination',
                    "title": "新生儿育儿记录",
                    "detail": "",
                    "author": "@cname",
                    "createTime": "2016-10-19 12:30:10",
                    "icon_string": "person",
                },
                {
                    "itemid": 6,
                    "itemType": 'examination',
                    "title": "新生儿检查记录",
                    "detail": "",
                    "author": "@cname",
                    "createTime": "2016-10-19 12:30:10",
                    "icon_string": "local_hospital",
                },
                {
                    "itemid": 5,
                    "itemType": 'food_record_remind',
                    "title": "喂养记录提醒",
                    "detail": "你的宝宝已经第七天了，还没有喂养记录哦，快去完成吧。",
                    "author": "@cname",
                    "createTime": "2016-10-9 12:30:10",
                    "icon_string": "local_hospital",
                },
                {
                    "itemid": 4,
                    "itemType": 'newbabyrecord',  //体检类型;
                    "title": "日龄3天喂养记录",
                    "detail": "",
                    "author": "@cname",
                    "createTime": "2016-10-5 12:30:10",
                    "icon_string": "person",
                }
            ]
        }
    )
export default Mock;
