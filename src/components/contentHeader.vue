<template>
    <div class="cheader">
        <span>
            |||
        </span>
        <ul>
            <li v-for="(data, index) in navDataList" :key=index>
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(["navDataList"])
    }
}
</script>

<style>
.cheader {
    margin: 10px 20px;
    background-color: antiquewhite;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
.cheader span {
    font-weight: 700;
    /* float: left; */
    margin: 0 20px;
    line-height: 30px;
}
.cheader li {
    /* float: left; */
    display: inline-block;
    list-style: none;
    margin: 0 10px;
    padding: 0 10px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    line-height: 30px;
}
</style>
