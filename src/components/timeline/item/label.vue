<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <li class="time-label">
    <span class="tag is-danger" v-html="labelText">
        10 Feb. 2014
     </span>
  </li>
</template>
<script>
export default {
  data(){
    let labelText = this.itemData.yearsMonth;
    return {
      labelText
    }
  },
  props: {
    itemData:{
      type: Object,
      default: function () {
        return { yearsMonth: '' }
      }
    },
  },
}
</script>
<style lang="less">
</style>
