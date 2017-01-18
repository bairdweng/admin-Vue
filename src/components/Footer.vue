<template>
  <div class="fixed_bottom">
    <mu-paper>
      <mu-bottom-nav :value="commData.selectIndex" @change="handleChange">
        <mu-bottom-nav-item value="tab1" :title="commData.tab1" icon="home"/>
        <mu-bottom-nav-item value="tab2" :title="commData.tab2" icon="timeline"/>
        <mu-bottom-nav-item value="tab3" :title="commData.tab3" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<script>
  export default{
    props: {
      commData: {
        type: Object
      }
    },
    methods: {
      handleChange (val){
        switch (val) {
          case 'tab1':
            this.$router.push('/');
            break;
          case 'tab2':
            this.$router.push('/timeline');
            break;
          case 'tab3':
            this.$router.push('/setting');
            break;
          default:
        }
      }
    }
  }
</script>
