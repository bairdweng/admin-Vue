<template>
<<<<<<< HEAD
   <div>
       <nav class="nav">
           <div class="nav-left">
               <a class="nav-item">
                   <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
               </a>
           </div>
           <div class="nav-center">
               <a class="nav-item">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
               </a>
               <a class="nav-item">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
               </a>
           </div>

           <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
           <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
           <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

           <!-- This "nav-menu" is hidden on mobile -->
           <!-- Add the modifier "is-active" to display it on mobile -->
           <div class="nav-right nav-menu">
               <a class="nav-item">
                   Home
               </a>
               <a class="nav-item">
                   Documentation
               </a>
               <a class="nav-item">
                   Blog
               </a>

               <span class="nav-item">
              <a class="button">
                <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
              <a class="button is-primary">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
           </div>
       </nav>
   </div>
</template>
<style>
    .navContent{
        background: red;
=======
    <div class="app-container com-app-box">
        <Hearderbar :commData="commConf"></Hearderbar>
        <div class="zhanwei"></div>
        <div class="com-app">
            <transition :name="transitionName">
                <keep-alive >
                    <router-view class="child-view" v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
            </transition>
            <transition :name="transitionName">
                <router-view v-if="!$route.meta.keepAlive" class="child-view"></router-view>
            </transition>
        </div>
        <div class="zhanwei" v-show="commConf.isFooter"></div>
        <Footerbar :commData="commConf" v-show="commConf.isFooter"></Footerbar>
        <Loadingbar :LoadingText="loadingConf.loadingText"  v-show="loadingConf.isLoading"></Loadingbar>
        <mu-toast v-if="loadingConf.isToast" :message="loadingConf.toastText" />
    </div>
</template>
<script>
    import Hearderbar from './components/Header.vue'
    import Footerbar from './components/Footer.vue'
    import Loadingbar from './components/loading/Loading.vue'
    export default {
        components: {
            Hearderbar,
            Footerbar,
            Loadingbar
        },
        data () {
            return {
                commData:{
                    title:'育儿期',
                    isFooter:true
                },
                transitionName:"slide-left-s"
          }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right-s' : 'slide-left-s'
            }
        },
        //获取vuex的公共参数。
        computed:{
            commConf:function () {
                return  this.$store.getters.commConf
            },
            loadingConf:function () {
                var  Obj = this.$store.getters.loadingConf;
                return  Obj
            }
        }
    }
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
>>>>>>> ef646ee534ff3a8b2a88f580fa0457c629c301e7
    }

    .child-view {
        position: absolute;
        width: 100%;
        transition: all .2s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-s-enter, .slide-right-s-leave-active {
        opacity: 0;
        -webkit-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    .slide-left-s-leave-active, .slide-right-s-enter {
        opacity: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);
    }
    .com-app{
        position: relative;
        height: calc(100vh - 2.66667rem);
        width: 100%;
        overflow: scroll;
    }
    .com-app-box{
        position: relative;
        height: 100vh;
    }
</style>

