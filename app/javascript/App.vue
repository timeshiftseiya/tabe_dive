<template>
  <div>
    <top></top>
    <router-view></router-view>
    <router-link to="/restaurants">Top</router-link>
    <router-link to="/restaurants_new">お店を登録する</router-link>
  </div>
</template>

<script>
import Top from './packs/components/top/index.vue'
export default {
  components: {
    "top": Top
  }
}
</script>