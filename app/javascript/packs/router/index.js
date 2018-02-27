import VueRouter from 'vue-router'
import Top from '../components/top/index'
import RestaurantsIndex from '../components/restaurants/index'
import CreateRestaurant from '../components/restaurants/CreateRestaurant'


const routes = [
  { path: '/', component: Top },
  { path: '/restaurants_new', component: CreateRestaurant },
  { path: '/restaurants', component: RestaurantsIndex },
];

export default new VueRouter({ routes });