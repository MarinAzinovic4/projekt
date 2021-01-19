<template>
  <div class>
  <app-header></app-header>
  <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue'
import home from './components/home.vue'
import login from './components/login.vue'
import register from './components/register.vue'


export default {
  components:{
    'app-header': header,
    'home': home,
    'login': login,
    'register': register,
    

  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
