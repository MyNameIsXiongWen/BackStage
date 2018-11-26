<template>
    <header>
        <div class="logo">
            MANKU
        </div>
        <div class="headerRight">
            <div class="nav">
                <ul>
                <li v-for="(nav,index) in navlist" :key=index @click="clickli(index)" :class="flag[index]?'current':''">
                    {{nav}}
                </li>
            </ul>
            </div>
            <div class="userinfo">
                <img src="../assets/avatar.png" alt="">
                <span @click="displayUserInfo">超管<i></i></span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navlist:['首页','用户管理','商城管理','订单管理','活动管理','小区管理','系统管理','供应链管理'],
            flag: [false,false,false,false,false,false,false]
        }
    },
    methods: {
        displayUserInfo() {
            console.log('点击超管');
        },
        clickli(index) {
            console.log(index);
            this.$store.commit("selectnav",index);
            this.flag = [false,false,false,false,false,false,false];
            this.flag[index] = true;
        }
    }
}
</script>

<style>
header {
position: fixed;
float: left;
color: white;
width: 100%;
line-height: 58px;
background-image: linear-gradient(-90deg,#9306f6 0%, #535afb 70%, #13aeff 100%), linear-gradient(#6000ff, #6000ff);
padding: 0 60px 0 20px;
box-sizing: border-box;
font-size: 15px;
}
.logo {
    float: left;
    font-size: 32px;
    font-weight: 500;
}
.headerRight {
    float: right;
}
.headerRight .nav {
    float: left;
}
.headerRight li {
    float: left;
    list-style: none;
    padding: 0 10px;
    height: 60px;
    box-sizing: border-box;
}
.headerRight li:hover {
    background-color: white;
    color: #409EFF;
}
.headerRight .nav .current {
    border-bottom: solid 2px #fff;
}
.headerRight .userinfo {
    float: right;
    width: 140px;
}
.headerRight .userinfo img {
    float: left;
    width: 40px;
    height: 40px;
    padding: 10px 25px 10px 20px;
}
.headerRight .userinfo span {
    cursor: pointer;
}
</style>
