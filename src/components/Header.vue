<template>
  <div class="container">
    <div class="logo">
      <h1 class="logoname"><a href="/"><div>С</div>пец<br><div>К</div>омплекс</a></h1>
    </div>
    <div class="menu">
      <div><a href="/">Головна</a></div>
      <span class="slash">/</span>
      <div class="dropdown">
        <a href="production">▼Продукція</a>
        <div class="dropdown-inner">
          <div><a href="board">Щитове устаткування</a></div>
          <div><a href="kipa">Автоматика, Засоби КВП і А</a></div>
          <div><a href="electricdrive">Засоби управління електропривідом</a></div>
        </div>
      </div>
      <span class="slash">/</span>
      <div><a href="automatization">Автоматизація та диспетчеризація</a></div>
      <span class="slash">/</span>
      <div><a href="electricity">Електропостачання</a></div>
      <span class="slash">/</span>
      <div><a href="service">Сервіс</a></div>
      <span class="slash">/</span>
      <div><a href="objects">Об'єкти</a></div>
      <span class="slash">/</span>
      <div><a href="contact">Контакти</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-bottom: 3px solid #717171;
}
div {
  align-items: center;
}
.menu {
  display: flex;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 5%;
}
.menu div{
  margin: 0 2%;
}
.menu > div > a {
  transition:color .4s ease;
}
.menu > div > a:hover{
  color: red;
}
button:hover {
  color: red;
}
.dropdown {
  position: relative;
}
.dropdown > a{
  padding-bottom: 60px;
}
.dropdown-inner {
  display: none;
  position: absolute;
  background: white;
  text-align: left;
  opacity: 0;
  width: 280%;
  top: 515%;
  z-index: 1;
}
.dropdown-inner div{
  padding: 5%;
  border-bottom: 2px solid #717171;
}
.dropdown-inner div a{
  transition:color .4s ease;
}
.dropdown-inner div a:hover{
  color: red;
}
.dropdown:hover .dropdown-inner{
  display: block;
  opacity:1;
}
a {
  text-decoration: none;
  color: black;
}
.logoname div {
  display: inline-block;
  color: black;
  border: 0.2rem solid red;
  text-align: center;
  width: 2rem;
  height: 2rem;
}
@media only screen and (max-width: 1400px) {
  .container {
    flex-direction: column;
  }
  .menu {
    margin-right: 0;
  }
  .menu div {
    margin: 2% 1%;
  }
  .dropdown-inner {
    top: 220%;
  }
}
@media only screen and (max-width: 880px) {
  .menu {
    flex-direction: column;
  }
  .dropdown-inner {
    position: relative;
    width: 100%;
  }
  .menu > div{
    margin: 5%;
  }
  .slash{
    display: none;
  }
}
</style>
