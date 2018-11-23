<template>
    <div class="container">
        <appHeader></appHeader>
        <div class="contain-main">
            <appSide></appSide>
            <div class="contentHeader">
                <contentHeader></contentHeader>
            </div>
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
.contentHeader {
    margin-left: 200px;
    margin-top: 60px;
    background-color: #f6f6f6;
}
</style>
