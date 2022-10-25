<template>
  <div class="kipa-page">
    <h1>АВТОМАТИКА, ЗАСОБИ КВП і А</h1>
    <div class="equipment-list">
      <div class="equipment-list-element">
        <div class="equipment-list-numeration">1</div>
        <img src="../assets/production/kipa/simplex.png" alt="Контролери CERTA">
        <h3>Контролери CERTA</h3>
      </div>
      <ul>
        <li>&mdash; Simplex 10H, Simplex 100, Simplex 200, Simplex 300</li>
      </ul>
      <div class="equipment-list-element">
        <div class="equipment-list-numeration">2</div>
        <img src="../assets/production/kipa/mio8ui8di.png" alt="Пристрої зв'язку з об'єктом (УСО) CERTA"
             style="width: 120px;">
        <h3>Пристрої зв'язку з об'єктом (УСО) CERTA</h3>
      </div>
      <ul>
        <li>&mdash; MIO RS-8UI.8DI, MIO RS-8DI.6DO</li>
      </ul>
      <div class="equipment-list-element">
        <div class="equipment-list-numeration">3</div>
        <img src="../assets/production/kipa/vario.png" alt="Регулятор потужності електронагрівача CERTA"
             style="width: 120px;">
        <h3>Регулятор потужності електронагрівача CERTA</h3>
      </div>
      <ul>
        <li>&mdash; VARIO 2V40, VARIO 2D40</li>
      </ul>
      <div class="equipment-list-element">
        <div class="equipment-list-numeration">4</div>
        <img src="../assets/production/kipa/temp_pictures.png" alt="Датчики температури, термостати,
        датчики вологості та гігростати" style="width: 120px;">
        <h3>Датчики температури, термостати, датчики вологості та гігростати</h3>
      </div>
      <ul>
        <li>&mdash; Датчики температури Certa: Pt1000, NTC-10k</li>
        <li>&mdash; Датчики вологості та температурм Сerta: HTM1A, HM1A, HTM1R, HM1R</li>
        <li>&mdash; Термостати и хронотермостати</li>
      </ul>
      <div class="equipment-list-element">
        <div class="equipment-list-numeration">5</div>
        <img src="../assets/production/kipa/level.png" alt="Сигналізатори рівня рідини CERTA"
             style="width: 120px;">
        <h3>Сигналізатори рівня рідини CERTA</h3>
      </div>
      <ul>
        <li>&mdash; ALS-3, LS-4</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "KipaPage"
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.equipment-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.equipment-list-element {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8rem;
}
.equipment-list-element h3 {
  margin-left: 1%;
  width: 100%;
}
.equipment-list-element img{
  margin-left: 1%;
}
.equipment-list-numeration {
  border: 0.2rem solid red;
  text-align: center;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 40px;
}
ul {
  list-style-type: none;
  color: #717171;
}
li {
  color: #717171;
  font-style: italic;
}
</style>