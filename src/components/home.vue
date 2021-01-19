<template class="home">
  <div id="home" class="main" >
    <div class="photos">
        <ul class="display">
            <li><span><a href="#"><img src="src\img\1-1.jpg" width="350" height="400"   /></a></span>
            <span>Airsoft kalasi</span>
            <p>Opis ide ovdje...</p>
            <a href="">Detalji...</a>
            </li>
            <li><a href="#"><img src="src\img\1-2.jpg" width="350" height="400"  /></a>
            <span>Maslinovo ulje</span>
            <p>Opis ide ovdje...</p>
            <a href="">Detalji...</a>
            </li>
            <li><a href="#"><img src="src\img\1-3.jpg" width="350" height="400"  /></a>
            <span>Krumpiri</span>
            <p>Opis ide ovdje...</p>
            <a href="#">Detalji...</a>
            </li>
            
        </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.home{
  margin: auto;
}
.display{
  width: 70%;
  margin: auto;
}
.photos {
  
  display: block;
}

.photos ul {
  
  list-style: none;

}

.photos ul li { 
    display: inline;
    list-style: none;
    float: left;
    padding: 20px;
    margin: 10px;
    text-align:center; 
    background-color: #fff;  
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);  
}

.photos ul li span {
    color: rgb(5, 5, 5);
}

.photos ul li a {

  display: block;
  /*
  margin-right: 10px;
  margin-bottom: 7px; */
  opacity: 0.75;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;

}
.photos ul li a:hover {
  opacity: 1.0;
}

.photos ul li a img {
  border: 6px solid #4CAF50;
}
</style>