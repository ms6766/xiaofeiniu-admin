<template>
  <div class="login">
    <el-card class="xfn-login-card">
      <div slot="header">管理员登陆</div>
      <div>
        <el-form label-width="100px">
          <el-form-item label="管理员名:">
            <el-input v-model="formData.aname" placeholder="请输入管理员名"></el-input>
          </el-form-item>
          <el-form-item label="登陆密码:">
            <el-input v-model="formData.apwd" type="password" placeholder="请输入登陆密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doLogin">登陆</el-button>
            <el-button @click="doCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return {
      formData:{ //表单中用户输入的两个数据
        aname:"admin",
        apwd:"123456"
      }
    } 
  },
  methods:{
    //执行登陆
    doLogin(){
      var url = this.$store.state.globalSettings.apiUrl+`/admin/login/${this.formData.aname}/${this.formData.apwd}`
      this.$axios.get(url).then((result)=>{
        if(result.data.code == 200){
          //把用户名存入Vuex中
          this.$store.commit('setAdminName',this.formData.aname)
          this.$router.push('/main')
        }else{
          this.$alert('用户名或密码有误!','登陆失败',{type:'error'}).then(()=>{}).catch(()=>{})
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    //清除用户输入
    doCancel(){
      this.formData.aname=""
      this.formData.apwd=""
    }
  }
}
</script>

<style lang="scss">
  .xfn-login-card{
    width:450px;
    margin:200px auto;
    .el-card__header{
      text-align: center;
      font-size: 1.2em;
    } 
  }
</style>
