<template>
    <div>
        <div class="search-top" @click="clickBottom()">
            <p>用户信息搜索</p>
            <span>⬇️</span>
        </div>
        <div class="search-bottom" v-if=isshow>
                <span>昵称:</span><input type="text">
                <span>手机号:</span><input type="text">
                <button>搜索</button>
        </div>
        <div class="info">
            <button>新增用户</button>
            <span></span>
            <table>
                <tr>
                    <th>头像</th>
                    <th>昵称</th>
                    <th>手机号</th>
                    <th>邮箱</th>
                    <th>介绍</th>
                    <th>定位城市</th>
                    <th>性别</th>
                    <th>是否禁用</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(data, index) in datalist" :key=index>
                    <td>aaa</td>
                    <td>aaa</td>
                    <td>aaa</td>
                    <td>aaa</td>
                    <td>aaa</td>
                    <td>aaa</td>
                    <td>aaa</td>
                    <td>aaa</td>
                    <td>aaa</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'baseInfo',
    data() {
        return {
            datalist: [1,1,1,1,1,1,1],
            isshow:true
        }
    },
    methods: {
        clickBottom() {
            this.isshow = !this.isshow;
        }
    }
}
</script>

<style>
.search-top {
    height: 70px;
    line-height: 70px;
    background-color: white;
    margin-top: 15px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
.search-top p {
    float: left;
    margin-left: 30px;
}
.search-top span {
    float: right;
    margin-right: 30px;
}
.search-bottom {
    background-color: white;
    border-top: solid 1px #f6f6f6;
    padding: 15px 0 0 40px;
    height: 80px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
.search-bottom span {
    font-size: 14px;
    padding-left: 45px;
    padding-right: 15px;
}
.search-bottom input {
    height: 40px;
    width: 230px;
    border-radius: 5px;
    border: solid 1px lightgray;
    outline: none;
    padding-left: 15px;
    box-sizing: border-box;
}
.search-bottom input:hover {
    border: solid 1px blue;
}
.search-bottom button {
    background-color: blue;
    width: 90px;
    height: 40px;
    color: white;
    border-radius: 5px;
    border: none;
    font-size: 15px;
    margin-left: 110px;
    outline: none;
}

.info {
    background-color: white;
    margin: 15px 0;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
.info button {
    margin: 15px 0 0 30px;
    font-size: 15px;
    height: 40px;
    padding: 0 20px;
    background-color: green;
    color: white;
    border-radius: 5px;
    border: none;
    outline: none;
}
.info span {
    display: inline-block;
    width: 100%;
    background-color: #f6f6f6;
    height: 1px;
}
/* .info table {
    background-color: pink;
} */
.info th {
    padding: 15px 40px;
    color: #999;
    font-weight: 400;
}
.info td {
    line-height: 100px;
    text-align: center;
    border-bottom: solid 1px #f6f6f6;
}

</style>
