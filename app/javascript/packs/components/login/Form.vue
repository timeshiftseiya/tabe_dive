<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
    <el-form-item label="Name" prop="name">
      <el-input v-model="ruleForm2.name" auto-complete="off" name="sign_up[name]"></el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input type="email" v-model="ruleForm2.email" auto-complete="off" name="sign_up[email]"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" name="sign_up[password]"></el-input>
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" name="sign_up[password]"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">Sign UP</el-button>
      <el-button type="primary" @click="LoginForm('ruleForm2')">Login</el-button>
      <el-button @click="resetForm('ruleForm2')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          name: '',
          email: '',
          pass: '',
          checkPass: '',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post('/api/auth', { name: this.ruleForm2.name, email: this.ruleForm2.email, password: this.ruleForm2.pass, password_confirmation: this.ruleForm2.checkPass}).then((res) => {
            this.$router.push('/restaurants')
          })
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      LoginForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            axios.post('/api/auth/sign_in', { name: this.ruleForm2.name, email: this.ruleForm2.email, password: this.ruleForm2.pass}).then((res) => {
            sessionStorage.setItem('accessToken', res.headers["access-token"]);
            sessionStorage.setItem('client', res.headers.client);
            sessionStorage.setItem('uid', res.headers.uid);
            
            this.$router.push('/restaurants')
          })
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>