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
                    <td width="150px"><img :src="data.avatar"></td>
                    <td width="150px">{{data.name}}</td>
                    <td width="150px">{{data.phone}}</td>
                    <td width="180px">{{data.email}}</td>
                    <td width="180px">{{data.introduce}}</td>
                    <td width="150px">{{data.city}}市</td>
                    <td width="150px">{{data.sex === 1 ? '男' : '女'}}</td>
                    <td width="150px">{{data.isForbidden ? '是' : '否'}}</td>
                    <td width="180px">
                        <button>编辑</button>
                        <button>删除</button>
                    </td>
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
            datalist: [
                {
                    avatar: 'http://img0.imgtn.bdimg.com/it/u=32311714,839976110&fm=26&gp=0.jpg',
                    name: 'A同学',
                    phone: '15653298379',
                    email: 'test@163.com',
                    introduce: '暂无资料',
                    city: '杭州',
                    sex: 1,
                    isForbidden: false
                },
                {
                    avatar: 'http://tx.haiqq.com/uploads/allimg/150327/211551I17-12.jpg',
                    name: 'B同学',
                    phone: '18743453846',
                    email: 'fdkjhv@163.com',
                    introduce: '没啥好介绍的',
                    city: '杭州',
                    sex: 1,
                    isForbidden: false
                },
                {
                    avatar: 'http://img0.imgtn.bdimg.com/it/u=32311714,839976110&fm=26&gp=0.jpg',
                    name: 'C同学',
                    phone: '14793849383',
                    email: 'ffdf@qq.com',
                    introduce: '暂无资料',
                    city: '苏州',
                    sex: 2,
                    isForbidden: true
                },
                {
                    avatar: 'http://img4.imgtn.bdimg.com/it/u=2620310409,3318825009&fm=214&gp=0.jpg',
                    name: 'D同学',
                    phone: '15764598379',
                    email: 't334f@163.com',
                    introduce: '很帅',
                    city: '杭州',
                    sex: 1,
                    isForbidden: true
                },
                {
                    avatar: 'http://tx.haiqq.com/uploads/allimg/150327/211551I17-12.jpg',
                    name: 'E同学',
                    phone: '15653298379',
                    email: 'test@163.com',
                    introduce: '暂无资料',
                    city: '杭州',
                    sex: 1,
                    isForbidden: false
                },
                {
                    avatar: 'http://img4.imgtn.bdimg.com/it/u=2620310409,3318825009&fm=214&gp=0.jpg',
                    name: 'F同学',
                    phone: '15653245769',
                    email: '4873658734@qq.com',
                    introduce: '暂无介绍',
                    city: '上海',
                    sex: 2,
                    isForbidden: false
                }
            ],
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
}

input,
button {
    outline: none;
}

.info {
    background-color: white;
    margin: 15px 0;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
.info > button {
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
.info table {
    border-collapse: collapse;
}
.info th {
    padding: 15px 0;
    color: #999;
    font-weight: 400;
}
.info td {
    height: 100px;
    text-align: center;
    font-size: 14px;
    color: #333;
    border-top: solid 1px #f6f6f6;
    box-sizing: border-box;
}
.info td img {
    width: 80px;
    height: 80px;
    margin-top: 5px;
}
.info td button {
    background-color: transparent;
    border: none;
    font-size: 14px;
    padding: 5px 5px;
}
.info td button:first-child {
    color: blue;
}
.info td button:last-child {
    color: red;
}
.info td button:hover {
    cursor: pointer;
}

</style>
