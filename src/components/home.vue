<template>
    <div class="container">
        <appHeader></appHeader>
        <appSide></appSide>
        <contentHeader></contentHeader>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import appHeader from './header'
import appSide from './side'
import contentHeader from './contentHeader'
export default {
    name: 'home',
    components: {
        appHeader,
        appSide,
        contentHeader
    }
}
</script>

<style lang='scss'>
* {
    padding: 0;
    margin: 0;
}
.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.content {
    margin: 140px 20px 0 220px;
}
</style>
