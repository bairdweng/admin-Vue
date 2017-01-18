/**
 * Created by dsong on 2017/1/12.
 */

// echart 的工具函数
const Echart = {};

Echart.authSetHeight = function (width) {
    return +width * 1 / 2;
}

/**
 *
 * @param list
 * @param standarType
 * @param standarName
 * @param standarData
 * @param startMonth
 * @param endMonth
 * @param config
 * @returns {{}}
 */
Echart.makeStandarCharOption = function makeStandarCharOption(list, standarType, standarName, standarData, startMonth, endMonth, config) {
    var option = {};
    var __config = {
        'yAxisMaxADD': 2
    };
    var _config = {
        height: Object.assign({title:'身高成长曲线'}, __config),
        weight: Object.assign({title:'体重成长曲线'}, __config),
        bmi: Object.assign({title:'IBM成长曲线'}, __config)
    };
    config = Object.assign(_config[standarType], config);

    //表格数据
    var xAxisMinValue = startMonth + ''; //x轴最小值
    var xAxisMaxValue = endMonth + ''; //x轴最大值
    var yAxisMinValue = Math.max(0, Math.ceil(standarData[0]['SD_1'] - config['yAxisMaxADD'])) + ''; //Y轴最小值
    var yAxisMaxValue = Math.ceil(standarData[standarData.length - 1]['SD1'] - 0 + config['yAxisMaxADD'] ) + ''; //Y轴最大值

    var chartPiont = []; //身高数据点
    var StandarMaxPiont = []; //身高数据点
    var StandarMinPiont = []; //身高数据点

    var _preHPiont;
    var _preHStandarMaxPiont;
    var _preHStandarMinPiont;
    var _piont;
    var _month;

    var _temp = 0;
    var k = 0;
    for (var i = startMonth; i <= endMonth; i++) {
        _month = i + '';
        if (list[i] !== undefined) {
            _temp = list[i][standarType];
            _temp = parseFloat(_temp) > parseFloat(yAxisMaxValue) ? yAxisMaxValue : ( parseFloat(_temp) < parseFloat(yAxisMinValue) ? yAxisMinValue : _temp);
            _piont = {'coord': [_month, _temp]};
            //身高数据生成
            if (_preHPiont !== undefined) {
                chartPiont.push([_preHPiont, _piont]);
            }
            _preHPiont = _piont; //保存点作为下一条线的开始坐标
        }

        //身高标准数据点;
        _piont = {'coord': [_month, standarData[k]['SD1']]};
        //身高数据生成
        if (_preHStandarMaxPiont !== undefined) {
            StandarMaxPiont.push([_preHStandarMaxPiont, _piont]);
        }
        _preHStandarMaxPiont = _piont; //保存点作为下一条线的开始坐标

        //身高标准数据点;
        _piont = {'coord': [_month, standarData[k]['SD_1']]};
        //身高数据生成
        if (_preHStandarMinPiont !== undefined) {
            StandarMinPiont.push([_preHStandarMinPiont, _piont]);
        }
        _preHStandarMinPiont = _piont; //保存点作为下一条线的开始坐标

        k++;
    }

    option = {
        title: {
            text: config.title ? config.title : "体格成长表",
            x: "center",
            textStyle:{
                fontSize:14,
            },
            padding: [10,0,0,0]
        },
        grid: {
            show:true,
            left: '12%',
            right: '12%',
            bottom: '14%',
            containLabel: false,
            backgroundColor:'#fdf2ff'
        },
        xAxis: [
            {
//                            type : 'category',
//                            boundaryGap : false,
//                            data : xAxisValue,
//                            name: "1",
//                            splitLine: {show: false}
                type: 'value',
                name: "月龄",
                min: xAxisMinValue,
                splitLine: {show: true},
                max: xAxisMaxValue
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: standarName,
                min: yAxisMinValue,
                splitLine: {show: true},
                max: yAxisMaxValue
            }
        ],
        series: [
            {
                name: standarName,
                type: 'line',
                markLine: {
                    symbol: 'none',
                    lineStyle: {
                        normal: {
                            color: '#f58bdc',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    data: chartPiont
                }
            },
            {
                name: '身高标准最大值',
                type: 'line',
                markLine: {
                    symbol: 'none',
                    lineStyle: {
                        normal: {
                            color: '#e6c2df',
                            type: 'solid'
                        }
                    },
                    data: StandarMaxPiont
                }
            },
            {
                name: '身高标准最小值',
                type: 'line',
                markLine: {
                    symbol: 'none',
                    lineStyle: {
                        normal: {
                            color: '#e6c2df',
                            type: 'solid'
                        }
                    },
                    data: StandarMinPiont
                }
            }
        ]
    };

    return option;
}

export default Echart;
