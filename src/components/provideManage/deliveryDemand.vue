<template>
  <div class="delivery-demand">
    <el-collapse class="block-area" accordion v-model="collapse">
      <el-collapse-item :name='1'>
        <template slot="title">
          <span>提货需求池</span>
        </template>
        <div class="block-search">
          <div class="search-input">
            <span>供应商：</span>
            <el-select v-model="searchData.provider" placeholder="请选择供应商">
              <el-option v-for="item in providerList" :key="item.id" :label="item.supplierName" :value="item.id">{{item.supplierName}}</el-option>
            </el-select>
          </div>
          <div class="search-input">
            <span>交期：</span>
            <el-date-picker
              v-model="searchData.deadline"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="search-input">
            <span>仓库：</span>
            <el-select v-model="searchData.warehouse" placeholder="请选择仓库">
              <el-option v-for="item in warehouseList" :key="item.id" :label="item.warehouseName" :value="item.id">{{item.warehouseName}}</el-option>
            </el-select>
          </div>
          <div class="search-input">
            <span>满屋型号：</span>
            <el-input v-model="searchData.mankuType" placeholder="请输入满屋型号"></el-input>
          </div>
          <div class="search-input">
            <span>需求来源：</span>
            <el-select v-model="searchData.demandResource" class="input-mini" placeholder="请选择需求来源">
              <el-option v-for="item in demandResourceList" :key="item.id" :label="item.name" :value="item.id">{{item.name}}</el-option>
            </el-select>
          </div>
          <div class="search-input">
            <el-button class="btn-padding" type="success" @click="refresh">搜索</el-button>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="block-area">
      <el-table :data="tableData">
        <el-table-column type="selection" fixed></el-table-column>
        <el-table-column label='图片' prop=''>
          <template slot-scope="scope">
            <img class="product-img" :src="scope.row.imgSrc" alt="">
          </template>
        </el-table-column>
        <el-table-column label='商品名称' prop='productName'></el-table-column>
        <el-table-column label='供应商' prop='supplierName'></el-table-column>
        <el-table-column label='满屋型号' prop='productSkuMankuCode'></el-table-column>
        <el-table-column label='工厂型号' prop='productSkuFactoryCode'></el-table-column>
        <el-table-column label='需求来源' prop='pickUpDemandTypeName'></el-table-column>
        <el-table-column label='交期已核实' prop='unVerifyItemNumber'></el-table-column>
        <el-table-column label='交期未核实' prop='verifyItemNumber'></el-table-column>
        <el-table-column label='仓库' prop='warehouseName'></el-table-column>
        <el-table-column label='备注'>
          <template slot-scope="scope">
            {{scope.row.remark ? scope.row.remark : '无'}}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination block-page">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change='handleCurrentChange'
      :current-page="pageData.currentPage"
      :page-sizes="pageData.pageSizes"
      :page-size="pageData.pageSize"
      :total="pageData.total"
      layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'deliveryDemand',
  mounted () {
    this.refresh()
    this.getProviderList()
    this.getWarehouseList()
  },
  data () {
    return {
      collapse: 1,
      providerList: [], // 供应商列表
      demandResourceList: [{ id: '', name: '全部' }, { id: '1', name: '补件需求' }, { id: '2', name: '上样需求' }, { id: '3', name: '售后需求' }, { id: '4', name: '订单需求' }],
      warehouseList: [], // 仓库
      tableData: [],
      searchData: {
        provider: '',
        warehouse: '',
        mankuType: '',
        demandResource: '',
        deadline: []
      },
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
      console.log(this.searchData)
      this.ajax({
        method: 'get',
        url: 'manku-item-admin/pick/page',
        data: {
          pageNum: this.pageData.currentPage,
          pageSize: this.pageData.pageSize,
          supplierId: this.searchData.provider,
          warehouseId: this.searchData.warehouse,
          productSkuMankuCode: this.searchData.mankuType,
          pickUpDemandType: this.searchData.demandResource,
          beginDeliveryTime: this.searchData.deadline[0],
          endDeliveryTime: this.searchData.deadline[1]
        }
      }).then(res => {
        this.tableData = res.data.data.data
        this.pageData.total = res.data.data.rows
      })
    },
    getProviderList () {
      this.ajax({
        method: 'get',
        url: 'manku-item-admin/supplier/find/all',
        data: {
          pageNum: 1,
          pageSize: 100
        }
      }).then(res => {
        this.providerList = res.data.data
        this.providerList.unshift({ 'id': '', 'supplierName': '全部' })
      })
    },
    getWarehouseList () {
      this.ajax({
        method: 'post',
        url: 'manku-item-admin/warehouse/list'
      }).then(res => {
        this.warehouseList = res.data.data
      })
    },
    createDeliveryOrder () {
      // 'manku-item-admin/pick/pro-create-pick-up-order'
    },
    handleSizeChange (pageSize) {
      this.pageData.pageSize = pageSize
      this.refresh()
    },
    handleCurrentChange (pageNum) {
      this.pageData.currentPage = pageNum
      this.refresh()
    }
  }
}
</script>

<style lang='scss'>
.product-img {
  width: 80px;
  height: 80px;
}
</style>