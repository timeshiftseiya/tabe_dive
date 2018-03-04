import VueRouter from 'vue-router'
import Top from '../components/top/index'
import Login from '../components/login/Form'
import RestaurantsIndex from '../components/restaurants/index'
import CreateRestaurant from '../components/restaurants/CreateRestaurant'


const routes = [
  { path: '/', component: Top },
  { path: '/restaurants_new', component: CreateRestaurant },
  { path: '/restaurants', component: RestaurantsIndex },
  { path: '/login', component: Login }
];

export default new VueRouter({ routes });