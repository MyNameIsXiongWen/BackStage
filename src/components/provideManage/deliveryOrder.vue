<template>
  <div class="delivery-order">
    <el-collapse class="block-area" accordion v-model="active">
      <el-collapse-item :name="1">
        <template slot="title">
          <span>搜索&筛选</span>
        </template>
        <div class="block-search">
          <div class="search-input">
            <span>供应商：</span>
            <el-select v-model="providerId" class="input-mini" placeholder="请选择供应商">
              <el-option v-for="item in providerList" :key="item.id" :label="item.supplierName" :value="item.id">{{item.supplierName}}</el-option>
            </el-select>
          </div>
          <div class="search-input">
            <el-button class="btn-padding" type="success" @click="refresh">搜索</el-button>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="block-area">
      <div class="block-title">
        <el-button type="success">打印提货单</el-button>
        <el-button type="danger">导出</el-button>
      </div>
      <el-table :data="tableData">
        <el-table-column fixed type="selection"></el-table-column>
        <el-table-column label="提货日期" prop="pickUpTime"></el-table-column>
        <el-table-column label="提货单号" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="text">{{scope.row.pickUpOrderNo}}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="流程状态" prop="processStatusName">
          <template slot-scope="scope">
              <span v-if="scope.row.processStatus === 1" class="success-text">{{scope.row.processStatusName}}</span>
              <span v-else-if="scope.row.processStatus === 2" class="info-text">{{scope.row.processStatusName}}</span>
              <span v-else-if="scope.row.processStatus === 3" class="error-text">{{scope.row.processStatusName}}</span>
              <span v-else>--</span>
            </template>
        </el-table-column>
        <el-table-column label="审批节点" prop="processStepName">
          <template slot-scope="scope">
            <template v-if="scope.row.currentNode.approvalUser.length > 0">
              {{scope.row.currentNode.stepName}}【<span v-for="(item, index) in scope.row.currentNode.approvalUser" :key="index">{{item.userName + (index === scope.row.currentNode.approvalUser.length - 1 ? '' : ',')}}</span>】
              </template>
              <template v-else>--</template>
            </template>
        </el-table-column>
        <el-table-column label="供应商" prop="supplierName"></el-table-column>
        <el-table-column label="仓库" prop="warehouseName"></el-table-column>
      </el-table>
    </div>
    <div class="pagination block-page">
      <el-pagination
        @size-change='pageSizeChange'
        @current-change='pageCurrentChange'
        :current-page='pageData.currentPage'
        :page-size='pageData.pageSize'
        :page-sizes='pageData.pageSizes'
        :total='pageData.total'
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'deliveryOrder',
  mounted () {
    this.refresh()
    this.searchProvider()
  },
  data () {
    return {
      active: 1,
      tableData: [],
      providerId: '',
      providerList: [], // 供应商列表
      pageData: {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [10, 15, 20, 50, 100],
        total: null
      }
    }
  },
  methods: {
    refresh () {
      this.ajax({
        method: 'get',
        url: 'manku-item-admin/pick-order/page',
        data: {
          pageNum: this.pageData.currentPage,
          pageSize: this.pageData.pageSize,
          supplierId: this.providerId
        }
      }).then(res => {
        this.tableData = res.data.data.data
        this.pageData.rows = res.data.data.rows
      })
    },
    searchProvider () { // 查询供应商
      this.ajax({
        method: 'get',
        url: 'manku-item-admin/supplier/find/all',
        data: {
          pageNum: 1,
          pageSize: 100
        }
      }).then(res => {
        console.log(res)
        this.providerList = res.data.data
        this.providerList.unshift({ 'id': '', 'supplierName': '全部' })
      })
    },
    pageCurrentChange (pageNum) {
      this.pageData.currentPage = pageNum
      this.refresh()
    },
    pageSizeChange (pageSize) {
      this.pageData.pageSize = pageSize
      this.refresh()
    }
  }
}
</script>

<style lang="scss">
</style>
