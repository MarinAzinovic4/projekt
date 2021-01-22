<template>
  <div class>
  <app-header></app-header>
  <router-view></router-view>
  <modal-direction></modal-direction>

  
  </div>
</template>

<script>
import header from './components/header.vue'
import home from './components/home.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import ticket from './components/ticket.vue'
 import ModalDirection from 'src\components\modals\modal.vue';

export default {
  components:{
    'app-header': header,
    'home': home,
    'login': login,
    'register': register,
    'ticket': ticket,
    ModalDirection,

  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
