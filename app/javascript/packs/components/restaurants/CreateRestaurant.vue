<template>
  <div class="">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity time">
      <el-col :span="11">
        <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.on_foot" style="width: 100%;"></el-time-picker>
      </el-col>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="Activity image">
        <el-input type="textarea" v-model="form.image_url"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import headerData from '../../utils/setHeader'
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          name: '',
          description: '',
          on_foot: 0,
          image_url: ''
        }
      }
    },
    methods: {
      onSubmit() {
        axios({ method: 'POST', url: '/api/restaurants', 
          headers: headerData.setHeader(),
          data: { restaurant: this.form } 
        }).then((res) => {
         this.$router.push('/restaurants')
        })
      }
    }
  }
</script>
