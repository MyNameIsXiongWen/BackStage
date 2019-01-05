<template>
    <div class="content-header">
        <div class="block-area">
            <span class="leftTag">
                | | |
            </span>
            <div class="content-title">
                <div v-for="(data, index) in navDataList" :key=index @click="clickli(index)">
                    <el-tag closable @close="handleClose(index)">
                        {{data}}
                    </el-tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'contentHeader',
    methods: {
        clickli (index) {
            console.log(index)
        },
        handleClose (index) {
            this.$store.commit("deleteHistory", index)
        }
    },
    computed: {
        ...mapState(["navDataList"])
    }
}
</script>

<style lang='scss'>
.content-header {
    position: absolute;
    left: 220px;
    top:60px;
    right: 20px;
    .block-area {
        display: flex;
        flex-direction: row;
    }
    .leftTag {
        font-weight: 700;
        margin: 0 10px 0 20px;
        line-height: 50px;
    }
    .content-title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        &>div {
            cursor: pointer;
        }
        .el-tag {
            background: #8391a5;
            color: #fff;
            margin: 0 10px;
            .el-icon-close {
                color: #fff;
                &:hover {
                    background: #fff;
                    color: #8391a5;
                }
            }
        }
    }
}
</style>
