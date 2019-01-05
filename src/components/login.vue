<template>
  <div class="login">
    <el-form class="login-area" :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item prop="userName">
        <span>用户名</span>
        <el-input placeholder="请输入用户名" value="number" v-model="ruleForm.userName" clearable></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span>密码</span>
      <el-input placeholder="请输入用户密码" type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item class="checkbox">
          <el-checkbox v-model="checked" name="memory">记住账号</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button @click="login('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  mounted () {
    this.autoSetPhone()
  },
  data () {
    return {
      checked: false,
      ruleForm: {
        userName: '', // 18737611679
        password: '', // 123456
      },
      rules: {
        userName: [
          { required: true, message: '请输入手机号码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    autoSetPhone () {
      let login = JSON.parse(localStorage.getItem('login'))
      if (login) {
        if (login.checked) {
          this.checked = login.checked
          this.ruleForm.userName = login.employee.phoneNumber
        }
      }
    },
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.removeItem('login')
          this.ajax({
            method: 'post',
            url: 'manku-system-admin/login',
            data: {
              username: this.ruleForm.userName,
              password: this.ruleForm.password
            }
          }).then(res => {
            res.data.data.checked = this.checked
            console.log(res.data.data)
            localStorage.setItem('login', JSON.stringify(res.data.data))
            this.$router.push('/')
          })
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style lang='scss'>
.login-area {
  position: absolute;
  right: 60px;
  top: 115px;
  width: 440px;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  padding: 25px 55px;
  // .el-form-item__content span {
  //   margin: 30px 0;
  // }
  .el-button {
    height: 45px;
    width: 100%;
    border-radius: 22.5px;
    background: rgb(27, 32, 181);
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    border: 0;
    margin-top: 55px;
  }
}
</style>
