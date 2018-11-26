<template>
    <div class="cheader">
        <span>
            |||
        </span>
        <ul>
            <li v-for="(data, index) in navDataList" :key=index @click="clickli(index)">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'contentHeader',
    methods: {
        clickli(index) {
            this.$store.commit("deleteHistory", index)
        }
    },
    computed: {
        ...mapState(["navDataList"])
    }
}
</script>

<style>
.cheader {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    height: 50px;
}
.cheader span {
    font-weight: 700;
    float: left;
    margin: 0 10px 0 20px;
    line-height: 50px;
}
.cheader li {
    float: left;
    list-style: none;
    margin: 10px 10px;
    padding: 0 10px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    line-height: 30px;
    color: white;
}
</style>
