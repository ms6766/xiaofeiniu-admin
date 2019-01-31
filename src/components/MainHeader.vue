<template>
  <div class="xfn-main-header">
    <h3 class="xfn-title">{{$store.state.globalSettings.appName}}管理后台</h3>
    <div class="xfn-right">
      登陆用户:{{$store.state.adminName}}
      <el-button @click="quit"  type="primary" size='mini' plain>退出</el-button> 
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    quit(){
      this.$store.commit('setAdminName','')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
  .xfn-main-header{
    background:#dcdfe6;
    border-radius:4px;
    line-height:60px;
    height:60px;
    padding:0 6px;
    .xfn-title{
      color:#303133;
      float:left;
      margin:0
    }
    .xfn-right{
      float:right;
    }
  }
</style>

