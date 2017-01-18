<template>
    <div class="container">
    </div>
</template>
<script>
    export default {
        methods:{
            reloadData(){
                this.$store.commit('COMM_CONF',{
                    isFooter:true,
                    isBack:false,
                    title:'阅读',
                    selectIndex:'tab2',
                    tab2:'阅读'
                });
            },
            LogOut(){
                this.$router.push('/login');
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.reloadData();
            })
        }
    }
</script>