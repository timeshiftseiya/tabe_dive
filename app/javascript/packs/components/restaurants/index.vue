<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="restaurant in restaurants[0]">
        <el-card :body-style="{ padding: '0px' }">
          <img v-bind:src="restaurant.image_url" class="post_image" />
          <div style="padding: 14px;">
            <span>{{ restaurant.name }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ restaurant.description }}</time>
              <time class="time">徒歩{{ restaurant.on_foot }}</time>
              <!-- <el-button type="text" class="button">Operating button</el-button> -->
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import headerData from '../../utils/setHeader'
  import axios from 'axios'

  export default {
  data () {
    return {
      restaurants: []
    }
  },
  methods: {
    fetchRestaurants() {
      axios.get('/api/restaurants', { headers: headerData.setHeader()
    }).then((res) => {
       this.restaurants.push(res.data.restaurants)
      headerData.setAccessToken(res)
      })
    }
  },
  mounted() {
    this.fetchRestaurants()
  },
}

</script>
