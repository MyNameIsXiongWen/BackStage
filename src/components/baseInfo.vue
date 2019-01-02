<template>
    <div class="base-info">
        <el-collapse v-model="active" accortion class="block-area">
                <el-collapse-item :name="1">
                    <template slot="title">
                        <span>用户信息搜索</span>
                    </template>
                    <div class="block-search">
                        <div class="search-input">
                            <span>昵称：</span>
                            <el-input placeholder="请输入昵称"></el-input>
                        </div>
                        <div class="search-input">
                            <span>手机号：</span>
                            <el-input placeholder="请输入手机号"></el-input>
                        </div>
                        <div class="search-input">
                            <el-button class="btn-padding" type="primary" @click="searchDemand">搜索</el-button>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        <div class="block-area">
            <div class="block-title">
                <el-button type="success">新增用户</el-button>
            </div>
            <el-table :data="datalist" stripe>
                <el-table-column label="头像" prop="avatar">
                    <template slot-scope="scope">
                        <img class="avatar" :src="scope.row.avatar" :alt="scope.row.name">
                    </template>
                </el-table-column>
                <el-table-column label="昵称" prop="name"></el-table-column>
                <el-table-column label="手机号" prop="phone"></el-table-column>
                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column label="介绍" prop="introduce"></el-table-column>
                <el-table-column label="定位城市" prop="city">
                    <template slot-scope="scope">
                        {{scope.row.city + '市'}}
                    </template>
                </el-table-column>
                <el-table-column label="性别" prop="sex">
                    <template slot-scope="scope">
                        {{scope.row.sex == 1 ? '男' : scope.row.sex == 0 ? '女' : '保密'}}
                    </template>
                </el-table-column>
                <el-table-column label="是否禁用" prop="isForbidden">
                    <template slot-scope="scope">
                        {{scope.row.isForbidden ? '禁用' : '启用'}}
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" class="">编辑</el-button>
                        <el-button type="text" class="delete-text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageData.currentPage"
        :page-sizes="pageData.pageSizes"
        :page-size="pageData.pageSize"
        :total="pageData.total"
        layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
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
                    sex: 0,
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
            active: 1,
            pageData: {
                currentPage: 1,
                pageSize: 10,
                pageSizes: [10, 15, 20, 50, 100],
                total: 6
            }
        }
    },
    methods: {
        searchDemand () {

        },
        handleSizeChange () {

        },
        handleCurrentChange () {

        }
    }
}
</script>

<style lang="scss">
.avatar {
  width: 80px;
  height: 80px;
}
</style>
