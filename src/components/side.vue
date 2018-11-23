<template>
    <div class="side">
        <ul>
            <li v-for="(data,index) in datalist[navindex]" :key=index @click="clickli(index)">
                <i>{{data.thumb}}</i>
                {{data.title}}
                <span v-if="data.subitem.length>0"></span>
                <ul v-show="data.isshow">
                    <li v-for="(subdata, tag) in data.subitem" :key=tag @click="clicksubli(tag)">
                        {{subdata.title}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            datalist: [
                [],
                [
                    {
                        title: '用户信息',
                        thumb: '',
                        isshow: false,
                        subitem: [
                            {title: '基础信息'}
                        ]
                    }
                ],
                [
                    {
                         title: '商品类目',
                         thumb: '',
                         isshow: false,
                         subitem:[]
                    },
                    {
                        title: '商品管理',
                        thumb: '',
                        isshow: false,
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
                        isshow: false,
                        subitem: [
                            {title: '方案已上架'},
                            {title: '方案已下架'},
                            {title: '方案草稿箱'}
                        ]
                    },
                    {
                        title: '商城配置',
                        thumb: '',
                        isshow: false,
                        subitem: [
                            {title: '税收分类配置'}
                        ]
                    }
                ],
                [
                    {
                        title: '成品订单',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    },
                    {
                        title: '定制订单',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    },
                    {
                        title: '配套订单',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    },
                    {
                        title: '饰品订单',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    },
                    {
                        title: '代金券订单',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    },
                    {
                        title: '流水管理',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    }
                ],
                [
                    {
                        title: '活动折扣',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    },
                    {
                        title: '赠品管理',
                        thumb: '',
                        isshow: false,
                        subitem:[
                            {title: '赠品信息'},
                            {title: '满赠配置'},
                            {title: '买赠配置'}
                        ]
                    },
                    {
                        title: '充值活动',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    },
                    {
                        title: '营销规则',
                        thumb: '',
                        isshow: false,
                        subitem:[
                            {title: '红包配置'},
                            {title: '代金券配置'},
                            {title: '特权卡配置'}
                        ]
                    },
                    {
                        title: '限时抢购',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    },
                    {
                        title: '热门拼团',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    },
                    {
                        title: '爆品管理',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    },
                    {
                        title: '银行管理',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    }
                ],
                [
                    {
                        title: '小区管理',
                        thumb: '',
                        isshow: false,
                        subitem:[]
                    }
                ],
                [
                    {
                        title: '组织架构',
                        thumb: '',
                        isshow: false,
                        subitem:[
                            {title: '部门管理'},
                            {title: '员工管理'}
                        ]
                    },
                    {
                        title: '权限管理',
                        thumb: '',
                        isshow: false,
                        subitem:[
                            {title: '权限管理'},
                            {title: '角色管理'},
                            {title: '角色组管理'}
                        ]
                    },
                    {
                        title: '系统日志',
                        thumb: '',
                        isshow: false,
                        subitem:[
                            {title: '登录日志'},
                            {title: '后台操作日志'},
                            {title: '接口调用日志'}
                        ]
                    },
                    {
                        title: '系统配置',
                        thumb: '',
                        isshow: false,
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
                        isshow: false,
                        subitem:[]
                    }
                ],
                [
                    {
                        title: '供应管理',
                        thumb: '',
                        isshow: false,
                        subitem:[
                            {title: '供应商信息'}
                        ]
                    },
                    {
                        title: '仓库管理',
                        thumb: '',
                        isshow: false,
                        subitem:[
                            {title: '仓库信息'}
                        ]
                    }
                ]
            ]
        }
    },
    methods: {
        clickli(index) {
            this.datalist[this.navindex][index].isshow = !this.datalist[this.navindex][index].isshow;
        }
    },
    computed: {
        ...mapState(['navindex'])
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
i,
span {
    font-family: icomoon;
    font-weight: normal;
    font-style: normal;
}
i {
    padding-right: 5px;
}
.side {
    position: fixed;
    left: 0;
    top:60px;
    height: 100%;
    width: 200px;
    border-right: solid 1px rgba(0, 0, 0, 0.1);
}
.side li {
    line-height: 55px;
    list-style: none;
    padding: 0 20px;
    cursor: pointer;
}
.side li li {
    padding: 0;
}
.side li span {
    float: right;
}
.side li:hover {
    background-color: rgba(0, 0, 0, 0.2);
}
.side li li:hover {
    background-color: rgba(0, 0, 0, 0);
}
</style>
