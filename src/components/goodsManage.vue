<template>
  <div class="goods">
    <div class="goodsleft">
      商品类目树形
    </div>
    <div class="goodsright">
      类目展示{{this.title}}
      <goodsChild :title=this.title></goodsChild>
    </div>
  </div>
</template>

<script>
import goodsChild from './goodsChild'
export default {
  name: 'goodsManage',
  data() {
    return {
      title: '父组件传到子组件的属性a'
    }
  },
  methods: {
    
  },
  components: {
    goodsChild
  }
}
</script>

<style>
.goodsleft,
.goodsright {
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: 600px;
}
.goodsleft {
  float: left;
  width: 285px;
  margin: 20px 20px 50px 0;
}
.goodsright {
  float: left;
  margin: 20px 0 50px 0;
}
</style>
