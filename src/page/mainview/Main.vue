<template>
    <div class="mainview-container">
        <div v-for="item in items">
            <router-link :to="{ name: item.router, params: { title: item.name}}">
                <mu-list-item :title="item.name">
                </mu-list-item>
                <mu-divider/>
            </router-link>
        </div>
        <div v-for="item in mlistData">
            <multistagelist :title="item.title" :items="item.items"></multistagelist>
        </div>
    </div>
</template>
<script>
    import multistagelist from '../../components/multistagelist/multistagelist'
    export default{
        data(){
            return{
                items:[{
                    name:'宝宝出生记录',
                    router:'birthrecords'
                },{
                    name:'宝宝基本信息',
                    router:'baseinfo'
                }],
                commData:{
                  type:'raido'
                },
                mlistData:[{
                    title:'0-1岁婴儿期',
                    items:[{
                        text:'新生儿早期记录',
                        router:'birthrecords'
                    },{
                        text:'1月记录',
                        router:'birthrecords'
                    },{
                        text:'3月记录',
                        router:'birthrecords'
                    },{
                        text:'6月记录',
                        router:'birthrecords'
                    },{
                        text:'8月记录',
                        router:'birthrecords2'
                    }]
                },{
                    title:'1-3岁婴儿期',
                    items:[{
                        text:'1岁记录'
                    },{
                        text:'1岁6个月记录'
                    },{
                        text:'2岁'
                    },{
                        text:'2岁6个月记录'
                    }]
                },{
                    title:'3-6岁学龄前期',
                    items:[{
                        text:'3岁儿童'
                    },{
                        text:'4岁儿童'
                    },{
                        text:'5岁儿童'
                    },{
                        text:'6岁儿童'
                    }]
                }]
            }
        },
        methods:{
            reloadData:function () {
                this.$store.commit('COMM_CONF',{
                    isFooter:true,
                    isBack:false,
                    title:'育儿期',
                    selectIndex:'tab1',
                    tab1:'育儿期'
                });
            }
        },
        components: {
            multistagelist,
        },
        beforeRouteEnter (to, from, next) {
            next(vm =>{
                vm.reloadData();
            });
        }
    }
</script>
<style>
    .mainview-container{
        background: white;
        border-radius:5px;
        margin: 5px 5px 5px 5px;
    }
</style>





