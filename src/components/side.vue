<template>
    <div class="side">
        <el-menu @open="handleOpen" @close="handleClose">
            <div v-for="(data,index) in datalist[navIndex]" :key=index>
                <el-submenu v-if="data.subitem.length>0" :index="data.title">
                    <template slot="title">
                        <i>{{data.thumb}}</i>
                        <span>{{data.title}}</span>
                    </template>
                    <el-menu-item 
                    v-for="(subData, subIndex) in data.subitem" 
                    :key=subIndex 
                    :index="subData.title"
                    @click="clickMenuItem(subData.url, subData.title)">
                        <i>{{subData.thumb}}</i>
                        <span slot="title">{{subData.title}}</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="data.title" @click="clickMenuItem(data.url, data.title)">
                        <i>{{data.thumb}}</i>
                    <span slot="title">{{data.title}}</span>
                </el-menu-item>
            </div>
        </el-menu>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    mounted () {
        // 判断当前浏览器地址是哪个导航栏下的
        this.datalist.map((data, index) => {
            data.map((subData, subIndex) => {
                if (subData.url === this.$route.path) {
                    this.$store.commit('selectNav', index)
                    return
                }
                subData.subitem.map(subSubData => {
                    if (subSubData.url === this.$route.path) {
                        this.$store.commit('selectNav', index)
                        return
                    }
                })
            })
        })
    },
    data() {
        return {
            datalist: [
                [],
                [
                    {
                        title: '用户信息',
                        thumb: '',
                        url: '/client',
                        subitem: [
                            {title: '基础信息',url: '/client/baseInfo'}
                        ]
                    }
                ],
                [
                    {
                         title: '商品类目',
                         thumb: '',
                         url: '/goodsManage/goodsManage',
                         subitem:[]
                    },
                    {
                        title: '商品管理',
                        thumb: '',
                        subitem: [
                            {title: '出售中的商品'},
                            {title: '已下架的商品'},
                            {title: '商品草稿箱'},
                            {title: '新增商品'},
                        ]
                    },
                    {
                        title: '方案管理',
                        thumb: '',
                        subitem: [
                            {title: '方案已上架'},
                            {title: '方案已下架'},
                            {title: '方案草稿箱'}
                        ]
                    },
                    {
                        title: '商城配置',
                        thumb: '',
                        subitem: [
                            {title: '税收分类配置'}
                        ]
                    }
                ],
                [
                    {
                        title: '成品订单',
                        thumb: '',
                        subitem:[]
                    },
                    {
                        title: '定制订单',
                        thumb: '',
                        subitem:[]
                    },
                    {
                        title: '配套订单',
                        thumb: '',
                        subitem:[]
                    },
                    {
                        title: '饰品订单',
                        thumb: '',
                        subitem:[]
                    },
                    {
                        title: '代金券订单',
                        thumb: '',
                        subitem:[]
                    },
                    {
                        title: '流水管理',
                        thumb: '',
                        subitem:[]
                    }
                ],
                [
                    {
                        title: '活动折扣',
                        thumb: '',
                        subitem:[]
                    },
                    {
                        title: '赠品管理',
                        thumb: '',
                        subitem:[
                            {title: '赠品信息'},
                            {title: '满赠配置'},
                            {title: '买赠配置'}
                        ]
                    },
                    {
                        title: '充值活动',
                        thumb: '',
                        subitem:[]
                    },
                    {
                        title: '营销规则',
                        thumb: '',
                        subitem:[
                            {title: '红包配置'},
                            {title: '代金券配置'},
                            {title: '特权卡配置'}
                        ]
                    },
                    {
                        title: '限时抢购',
                        thumb: '',
                        subitem:[]
                    },
                    {
                        title: '热门拼团',
                        thumb: '',
                        subitem:[]
                    },
                    {
                        title: '爆品管理',
                        thumb: '',
                        subitem:[]
                    },
                    {
                        title: '银行管理',
                        thumb: '',
                        subitem:[]
                    }
                ],
                [
                    {
                        title: '小区管理',
                        thumb: '',
                        subitem:[]
                    }
                ],
                [
                    {
                        title: '供应管理',
                        thumb: '',
                        subitem:[
                            {title: '供应商信息'}
                        ]
                    },
                    {
                        title: '仓库管理',
                        thumb: '',
                        subitem:[
                            {title: '仓库信息'}
                        ]
                    },
                    {
                        title: '采购购理',
                        thumb: '',
                        url: '/provideManage',
                        subitem:[
                            {title: '提货单', url: '/provideManage/deliveryOrder'},
                            {title: '提货需求池', url: '/provideManage/deliveryDemand'}
                        ]
                    }
                ],
                [
                    {
                        title: '组织架构',
                        thumb: '',
                        subitem:[
                            {title: '部门管理'},
                            {title: '员工管理'}
                        ]
                    },
                    {
                        title: '权限管理',
                        thumb: '',
                        subitem:[
                            {title: '权限管理'},
                            {title: '角色管理'},
                            {title: '角色组管理'}
                        ]
                    },
                    {
                        title: '系统日志',
                        thumb: '',
                        subitem:[
                            {title: '登录日志'},
                            {title: '后台操作日志'},
                            {title: '接口调用日志'}
                        ]
                    },
                    {
                        title: '系统配置',
                        thumb: '',
                        subitem:[
                            {title: '系统参数'},
                            {title: '数据字典'},
                            {title: '接口调用凭证'},
                            {title: '图片管理'}
                        ]
                    },
                    {
                        title: '营业区域',
                        thumb: '',
                        subitem:[]
                    }
                ]
            ],
        }
    },
    methods: {
        handleOpen (key, keyPath) {
            // console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
            // console.log(key, keyPath)
        },
        clickMenuItem (url, title) {
            this.$store.commit("addHistory", title);
            if (url) {
                this.$router.push(url);
            }
        }
    },
    computed: {
        ...mapState(['navIndex'])
    }
}
</script>

<style>
@font-face {
    font-family: 'icomoon';
    src:  url('../assets/fonts/icomoon.eot?dn18ym');
    src:  url('../assets/fonts/icomoon.eot?dn18ym#iefix') format('embedded-opentype'),
    url('../assets/fonts/icomoon.ttf?dn18ym') format('truetype'),
    url('../assets/fonts/icomoon.woff?dn18ym') format('woff'),
    url('../assets/fonts/icomoon.svg?dn18ym#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
}
.side {
    position: fixed;
    left: 0;
    top:60px;
    height: 100%;
    width: 200px;
    border-right: solid 1px rgba(0, 0, 0, 0.1);
    background-color: white;
}
i {
    font-family: icomoon;
    font-weight: normal;
    font-style: normal;
    padding-right: 10px;
}
.el-menu {
    border: none;
}
</style>
