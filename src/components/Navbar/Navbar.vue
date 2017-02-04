<template>
    <div class="Navbar">
        <nav class="nav">
            <div class="nav-left">
                <span class="nav-toggle" @click="ClickOntheLeftBtn">
                    <span></span>
                    <span></span>
                    <span></span>
            </span>
            </div>
            <div class="nav-center">
                <a class="nav-item">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                </a>
            </div>
            <div class="nav-right nav-menu">
            </div>
        </nav>
   </div>
</template>
<style>
.Navbar .nav{
    position: fixed;
    min-width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
}
</style>
<script>
    export default{
        methods:{
            ClickOntheLeftBtn(){
                var commConf =  this.$store.getters.commConf;
                var showSiderbar = commConf.showSiderbar;
                this.$store.commit('COMM_CONF',{
                    showSiderbar:!showSiderbar
                });
            }
        }
    }
</script>
