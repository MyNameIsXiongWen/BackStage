<template>
    <div class="container">
        <appHeader></appHeader>
        <appSide></appSide>
        <div class="content">
            <contentHeader></contentHeader>
            <baseInfo></baseInfo>
        </div>
    </div>
</template>

<script>
import appHeader from './header'
import appSide from './side'
import contentHeader from './contentHeader'
import baseInfo from './baseInfo'
export default {
    name: 'home',
    components: {
        appHeader,
        appSide,
        contentHeader,
        baseInfo
    }
}
</script>

<style>
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
    margin: 70px 20px 0 220px;
}
</style>
