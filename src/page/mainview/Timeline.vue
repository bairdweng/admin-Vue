<template type="text/html">
    <div class="timeline_page">
        <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
        <timeline :timelineList="timelineList"></timeline>
        <mu-infinite-scroll  :loading="loading" loadingText="loading..." @load="loadMore"/>
    </div>
</template>


<style lang="less" rel="stylesheet/less" socped>
    @import "../../less/HBtheme";
    .timeline_page{
        background: @backgroundColorGrey;
        padding:10px;
    }
</style>
<script>
  import {testfunc} from '../../tools/utils.js';
  import Timeline from '../../components/timeline/timeline.vue'
  import api from '../../api/api.js';
  import TimelineService from '../../service/timeline.js';
  export default{
    data(){
      return {
        timelineList:[],
        loading: false,
        refreshing: false,
        trigger: null
      }
    },
    mounted: function () {
      this.trigger = this.$el;

      testfunc();
      api.fetchTimeline({}).then((response) => {
        let data = TimelineService.formData(response.data);
        if(data) this.timelineList = data;
      }).catch((error) => {
        //console.log(error)
      });
    },
      methods:{
        reloadData(){
          this.$store.commit('COMM_CONF', {
            isFooter: true,
            isBack: false,
            title: '阅读',
            selectIndex: 'tab2',
            tab2: '阅读'
          });
        },
        refresh(){
          this.refreshing = true
          setTimeout(() => {
            this.refreshing = false
          }, 1000)
        },
        loadMore () {
          this.loading = true;
          var _that = this;

          api.fetchTimeline2({}).then((response) => {
            let data = TimelineService.formData(response.data);
            //存在新的选项则插入;
            if (data.length > 0) {
              data.map(function (item) {
                return _that.timelineList.push(item);
              });
            } else {
              //_that.showToastText('没有更新数据');
            }
            //if(data)
            this.loading = false;
          }).catch((error) => {
            //console.log(error)
          });

        }
      },
      beforeRouteEnter (to, from, next) {
          next(vm => {
              vm.reloadData();
          })
      },
    components: {
      Timeline
    }
  }
</script>
