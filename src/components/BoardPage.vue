<template>
  <div class="control-panel-page">
    <h1>ЩИТОВЕ УСТАТКУВАННЯ</h1>
    <div class="equipment-list">
      <div class="equipment-list-element">
        <div class="equipment-list-numeration">1</div>
        <h3><a href="boardautomatic">Щити автоматики</a></h3>
      </div>
      <div class="equipment-list-element">
        <div class="equipment-list-numeration">2</div>
        <h3><a href="notcreated">Щити управління двигунами і / або іншими споживачами електроенергії (ЩУ)</a></h3>
      </div>
      <div class="equipment-list-element">
        <div class="equipment-list-numeration">3</div>
        <h3><a href="notcreated">Ввідно-розподільний пристрій</a></h3>
      </div>
      <div class="equipment-list-element">
        <div class="equipment-list-numeration">4</div>
        <h3><a href="notcreated">Пристрої автоматичного введення резерву (АВР)</a></h3>
      </div>
      <div class="equipment-list-element">
        <div class="equipment-list-numeration">5</div>
        <h3><a href="notcreated">Щити розподільні (ЩР)</a></h3>
      </div>
    </div>
    <div class="equipment-description">
      <p>Електротехнічні щити ТОВ «СпецКомплекс» являють собою надійну конструкцію, зібрану згідно з
        нормативними документами і високими стандартами якості. Акуратність збірки і якість використовуваних
        комплектуючих - пріоритети, яких ТОВ «СпецКомплекс» дотримується при виробництві своїх виробів.
        Відповідно до побажань замовника щити автоматики можуть комплектуватися, апаратурою провідних
        європейських виробників електротехнічної продукції «Moeller» ( «EATON»), «Lovato», «Relpol», «ETI», «ABB»
        або в разі, коли замовнику необхідно бюджетне рішення, деякі вузли можуть замінюватися,
        без шкоди для функціональних можливостей, вузлами вітчизняного виробництва. Широкий спектр використовуваного
        обладнання дозволяє Замовнику проводити гнучкий і економічно ефективний вибір пристроїв різних виробників.
        <br>
        <br>
        <img src="../assets/production/boardautomatic/lamp.jpg" alt="Лампи">
        <br>
        <br>
        При виготовленні щитів велика увага приділяється не тільки якості збірки, але і зручності експлуатації
        і обслуговування виробу. Монтаж електричних ланцюгів в шафах виконується з використанням сучасних технологій.
        Кінці провідників, повинні маркуватися згідно з принциповою схемою, кольоровими пластиковими кліпсами.
        Провідники збираються в джгути і укладаються в перфорований кабельний короб.
        <br>
        <br>
        <img src="../assets/production/boardautomatic/klem.jpg" alt="Кабельний короб">
        <br>
        <br>
        За бажанням замовника ми виготовимо щит автоматики в навісному, підлоговому або вбудованому виконанні зі
        стандартними або підвищеними захисними властивостями (наприклад, для установки його в приміщенні з підвищеною
        вологістю). Щити стандартного виконання в обов'язковому порядку комплектуються герметичними сальниками
        для вводу кабелів, в бюджетній серії передбачені отвори для введення кабелю.
        <br>
        <br>
        Кожен з щитів може бути опціонально підготовлений для використання з системою диспетчеризації,
        для чого попередньо з замовником обмовляється перелік і тип ( «сухі» контакти, протокол) необхідних сигналів,
        які будуть передаватися в систему диспетчеризації. Також будь-який з щитів, за бажанням замовника може
        бути обладнаний пристроєм передачі даних на диспетчерський пункт за допомогою кабельного з'єднання,
        стільникового зв'язку, радіочастотного зв'язку або іншими пристроями. Більш докладно про можливості
        диспетчеризації можна прочитати в розділі <a href="automatization">«Автоматизація та диспетчеризація»</a>.
        <br>
        <br>
        Кожен щит на стадії виробництва, в обов'язковому порядку, проходить вихідний контроль якості і отримує
        відповідний серійний номер. Наші фахівці проводять найсуворіший контроль правильності і надійності електричної
        схеми, справності роботи апаратури і функціональних можливостей електрощитового обладнання, після чого щит
        оформлюється спеціалістами повним комплектом документації (принципові електричні схеми, паспорт,
        інструкція з експлуатації, гарантійний талон) і передається замовнику.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ControlPanelPage"
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
}
.equipment-list-element h3 {
  margin-left: 1%;
  width: 100%;
}
.equipment-list-numeration {
  border: 0.2rem solid red;
  text-align: center;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
a {
  text-decoration: none;
  color: black;
  transition: color .4s ease;
}
a:hover {
  color: red;
}
.equipment-description{
  margin: 0 15%
}
.equipment-description p {
  font-style: italic;
  color: #717171;
  font-size: large;
  text-align: justify;
}
.equipment-description img {
  display: block;
  margin: 0 auto;
}
@media only screen and (max-width: 750px) {
  .equipment-description{
    margin: 0 5%
  }
  .equipment-description p {
    font-size: medium;
  }
}
</style>