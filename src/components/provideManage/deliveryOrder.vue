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
            <el-input class="input-small-min" v-model='provider'></el-input>
          </div>
          <div class="search-input">
            <el-button class="btn-padding" type="success" @click="clickSearch">搜索</el-button>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 1
    }
  }
}
</script>

<style lang="scss">
</style>
