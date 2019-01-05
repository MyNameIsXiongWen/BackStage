<template>
    <header>
        <div class="logo">
            MANKU
        </div>
        <div class="headerRight">
            <el-menu
            :default-active="navIndex.toString()"
            mode="horizontal"
            @select="handleSelect"
            background-color="transparent"
            text-color="#fff"
            active-text-color="#fff">
                <el-menu-item v-for="(data,index) in navlist" :key=index :index="index.toString()">{{data.name}}</el-menu-item>
            </el-menu>
            <el-dropdown class="userinfo" @command="handleCommand">
                <div class="el-dropdown-link">
                    <div class="avatar"><img :src="login.avatarImgSrc" alt=""></div>
                    <div class="name"><span>{{login.realName}}<i></i></span></div>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command='1'>账户信息</el-dropdown-item>
                    <el-dropdown-item command='2'>修改密码</el-dropdown-item>
                    <el-dropdown-item command='3' divided>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    mounted () {
        this.login = JSON.parse(localStorage.getItem('login')).employee
    },
    data() {
        return {
            navlist: [{ url: '/', name: '首页' }, { url: '/client', name: '用户管理' }, { url: '/goodsManage', name: '商城管理' }, { url: '/orderManage', name: '订单管理' }, { url: '/activityManage', name: '活动管理' }, { url: '/houseManage', name: '小区管理' }, { url: '/provideManage', name: '供应管理' }, { url: '/systemManage', name: '系统管理' }],
            login: {}
        }
    },
    methods: {
        handleSelect (key) {
            this.$store.commit("selectNav",parseInt(key));
            this.$router.push(this.navlist[parseInt(key)].url)
        },
        handleCommand (command) {
            if (command === '3') {
                let login = JSON.parse(localStorage.getItem('login'))
                login.token = ''
                localStorage.setItem('login', JSON.stringify(login))
                this.$router.push('/login')
            }
        }
    },
    computed: {
        ...mapState(['navIndex'])
    }
}
</script>

<style lang='scss'>
header {
    z-index: 500;
    position: fixed;
    float: left;
    color: white;
    width: 100%;
    line-height: 58px;
    background-image: linear-gradient(-90deg,#9306f6 0%, #535afb 70%, #13aeff 100%), linear-gradient(#6000ff, #6000ff);
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .logo {
        font-size: 32px;
        font-weight: 500;
    }
    .headerRight {
        display: flex;
        flex-direction: row;
        align-items: center;
        .el-menu--horizontal {
            border: none;
            font-weight: 700;
            .el-menu-item {
                font-size: 18px;
            }
        }
        .userinfo {
            color: #fff;
            float: right;
            width: 160px;
            height: 60px;
            .el-dropdown-link {
                display: flex;
                flex-direction: row;
                align-items: center;
                .avatar {
                    width: 40px;
                    height: 40px;
                    margin-left: 20px;
                    margin-right: 25px;
                    img {
                        border-radius: 50%;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>
