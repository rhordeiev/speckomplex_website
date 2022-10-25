<template>
  <div class="production-page">
    <div class="kipa-classification">
      <h1><a href="board"><span>Щитове устаткування</span></a></h1>
      <div class="kipa-element">
        <img src="../assets/production/board.jpg" alt="Щитове устаткування" style="width: 20rem; height: 20rem;">
        <ul>
          <li>&mdash; Щити автоматики (ЩА)</li>
          <li>&mdash; Щити управління двигунами і / або іншими споживачами електроенергії (ЩУ)</li>
          <li>&mdash; Ввідно-розподільний пристрій (ВРП)</li>
          <li>&mdash; Пристрої автоматичного введення резерву (АВР)</li>
          <li>&mdash; Щити розподільні (ЩР)</li>
        </ul>
      </div>
      <h1><a href="kipa"><span>Автоматика, Засоби КВП і А</span></a></h1>
      <div class="kipa-element">
        <img src="../assets/production/kipa.jpg" alt="Автоматика, Засоби КВП і А" style="width: 20rem; height: 15rem;">
        <ul>
          <li>&mdash; Контрольно-вимірювальна апаратура</li>
          <li>&mdash; Мікропроцесорні контролери</li>
          <li>&mdash; Електроприводи</li>
        </ul>
      </div>
      <h1><a href="electricdrive"><span>Засоби управління електропривідом</span></a></h1>
      <div class="kipa-element">
        <img src="../assets/production/electricdrive.jpg" alt="Засоби управління електропривідом" style="width: 20rem; height: 20rem;">
        <ul>
          <li>&mdash; Перетворювачі частоти</li>
          <li>&mdash; Пристрої плавного пуску</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductionPage"
}
</script>

<style scoped>
.kipa-classification {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5%;
}
.kipa-element {
  display: flex;
  flex-direction: row;
  align-items: center;
}
li {
  list-style-type: none;
  color: #717171;
  font-style: italic;
}
h1 {
  text-align: center;
}
a {
  text-decoration: none;
  color: black;
  transition: color .4s ease;
}
a:hover {
  color: red;
}
.kipa-classification span {
  border-bottom: 3px solid #717171;
}
@media only screen and (max-width: 670px) {
  .kipa-element {
    flex-direction: column;
  }
}
</style>