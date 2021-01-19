<template>
  <div id="register" class="login-page">
      <div class="form"> 
       <form v-if="!submitted" class="login-form" >
         <input type="text" placeholder="Ime" required v-model="register.ime"/>
         <input type="password" placeholder="Lozinka" required v-model="register.lozinka"/>
         <input type="text" placeholder="Email adresa" required v-model="register.email"/>
         <button v-on:click.prevent="post">Napravite račun</button>
         <p class="message">Vec ste registrirani? <a><router-link to="/login" exact>Prijavite se</router-link></a></p>
       </form>
       <div v-if="submitted">
      <h3>Napravili ste račun</h3>
      <p><a><router-link to="/login" exact>Prijavite se</router-link></a></p>
  </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  
  data () {
    return {
      register:{
        ime:"",
        lozinka: "",
        email: "",
      },
      submitted: false,
    }
  },
  methods:{
      post(){
          axios.post('https://projekt-test-6a916-default-rtdb.firebaseio.com/posts.json', this.register).then(data => {
              console.log(data);
              this.submitted=true;
          });
      }

  }
}
</script>

<style scoped>
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #76b852; 
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
</style>