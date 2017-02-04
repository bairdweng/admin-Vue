<template>
        <aside class="menu app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
        <p class="menu-label">
            General
        </p>
            <ul class="menu-list">
             <li>
                <a class="is-active">
                    主页
                    <span class="icon is-small is-angle"><i class="fa fa-angle-down"></i></span>
                </a>
                 <ul>
                     <li><a>第一页</a></li>
                     <li><a>第二页</a></li>
                     <li><a>第三页</a></li>
                 </ul>
               </li>
            </ul>
        </aside>
</template>
<style>
    .app-sidebar{
        position: fixed;
        top: 50px;
        left: 0;
        bottom: 0;
        padding: 20px 0 50px;
        width: 180px;
        min-width: 45px;
        max-height: 100vh;
        height: calc(100% - 50px);
        z-index: 1024;
        background: #FFF;
        box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
        overflow-y: auto;
        overflow-x: hidden;
    }
    .app-sidebar .menu-label {
        padding-left: 5px;
    }
    .app-sidebar .icon.is-angle {
        position: absolute;
        right: 10px;
        transition: transform .377s ease;
    }
</style>
<script>
    export  default{
        props: {
            show: Boolean
        }
    }
</script>
