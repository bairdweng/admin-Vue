<template>
    <div id="echarts_weight" class="echarts_item"  v-bind:style="{ height: echartHeight + 'px' }"></div>
</template>
<style>
    .echarts_item{
        width: 100%;
    }
</style>
<script>
    import {demoHeightList, demoStanderDataList} from  'service/demo.service.js';
    import echarts from 'echarts/lib/echarts';
    require('echarts/lib/chart/line');
    //require('echarts/lib/chart/bar');
    //require('echarts/lib/chart/pie');
    //require('echarts/lib/component/legend');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/title');
    //require('echarts/lib/component/markPoint');
    require('echarts/lib/component/markLine');
    import EchartsFun from  'tools/echarts';


    export default {
        data:function () {
            let height = EchartsFun.authSetHeight(document.body.clientWidth);
            height = height > 400 ? 400 : (height < 120 ? 120 : height );
            return {
                echartHeight: height
            }
        },
        methods: {

        },
        mounted: function () {
            var list = demoHeightList();
            var standerData = demoStanderDataList();
            var standarW = standerData.weight;
            var startMonth = 11;
            var endMonth = 47;
            let option = EchartsFun.makeStandarCharOption(list,'weight','体重',standarW,startMonth,endMonth);
            let mychart = echarts.init(document.getElementById('echarts_weight'));
            mychart.setOption(option, true);
        }
    }
</script>
