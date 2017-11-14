<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        background: #e6e6e6;

    }
    body{
        background: #e6e6e6;
    }
    .el-table th{
        text-align: center;
    }
</style>
