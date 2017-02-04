<template>
<div id="app">
    <Navbar></Navbar>
    <Slidebar :show="commConf.showSiderbar"></Slidebar>
</div>
</template>

<script>
    import Navbar from './components/Navbar/Navbar.vue'
    import Slidebar from './components/Sidebar/Sidebar.vue'
    export default{
        components:{
            Navbar,
            Slidebar
        },
        data(){
            return{
            }
        },
        computed:{
            commConf:function () {
                console.log(this.$store.getters.commConf.showSiderbar);

                return  this.$store.getters.commConf
            }
        },
        //监听设备状态,电脑状态下需要隐藏。
        beforeMount (){
            const { body } = document
            const WIDTH = 768
            const RATIO = 3
            const handler = () => {
                if (!document.hidden) {
                    let rect = body.getBoundingClientRect()
                    let isMobile = rect.width - RATIO < WIDTH
                    if (!isMobile){
                        this.$store.commit('COMM_CONF',{
                            showSiderbar:true
                        });
                    }
                }
            }
            document.addEventListener('visibilitychange', handler)
            window.addEventListener('DOMContentLoaded', handler)
            window.addEventListener('resize', handler)
        },
    }
</script>

<style>

</style>

