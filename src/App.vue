<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted(){
    //当前组件挂载完成后需要异步请求全局设置信息
    var url = this.$store.state.globalSettings.apiUrl+'/admin/settings';
    this.$axios.get(url).then((result)=>{
      //将请求回来的数据存入Vuex仓库中
      this.$store.commit('setGlobalSettings',result.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>
<style lang="scss">
  #app{
    color:#303133;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
