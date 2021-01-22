import home from './components/home.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import onama from './components/onama.vue'
import kontakt from './components/kontakt.vue'
import ticket from './components/ticket.vue'

export default [
    {path:'/',component: home},
    {path:'/login',component: login},
    {path:'/register',component: register},
    {path:'/onama',component: onama},
    {path:'/kontakt',component: kontakt},
    {path:'/ticket',component: ticket},
]