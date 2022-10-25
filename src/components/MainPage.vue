<template>
  <div class="main-page">
    <div class="slider">
      <br>
      <br>
      <div class="slideshow-container">
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="../assets/header/sliderimg1.jpg" style="width:90%; height: 570px">
          <div class="text">Щитове устаткування</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="../assets/header/sliderimg2.jpg" style="width:90%; height: 570px">
          <div class="text">Автоматика, Засоби КВП і А</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="../assets/header/sliderimg3.jpg" style="width:90%; height: 570px">
          <div class="text">Засоби управління електропривідом</div>
        </div>
      </div>
      <div class="dots" style="text-align:center">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    <h1 class="topic-header">НАША ПРОДУКЦІЯ</h1>
    <div class="production-divs">
      <div class="production-div">
        <span class="material-icons" style="font-size: 48px">hvac</span>
        <h4>Системи вентиляції, <br>кондиціонування, опалення</h4>
        <p></p>
      </div>
      <div class="production-div">
        <span class="material-icons" style="font-size: 48px">autorenew</span>
        <h4>Системи автоматизації та <br>диспетчеризації</h4>
        <p></p>
      </div>
      <div class="production-div">
        <span class="material-icons" style="font-size: 48px">offline_bolt</span>
        <h4>Системи електропостачання та <br>освітлення</h4>
        <p></p>
      </div>
    </div>
    <h1 class="topic-header">ПРО НАС</h1>
    <div class="about-us-article">
      <p>
        <img src="../assets/header/builderhat.jpg" alt="Каска будівельника">
        Заснована в 2007 році фірма «СпецКомплекс» - інженерна компанія, що динамічно розвивається. За час своєї роботи на
        ринку України заслужила репутацію компетентної і стабільної компанії.
        <br>
        <br>
        Компанія «СпецКомплекс» була заснована для комплексного вирішення завдань проектування, постачання обладнання та
        комплектуючих матеріалів, установки, налагодження та сервісного обслуговування систем вентиляції, кондиціонування,
        електропостачання, автоматизації та диспетчеризації різного інженерного обладнання.
        <br>
        <br>
        Фахівці нашої фірми успішно виконують проєкти і втілюють в життя завдання по автоматизації, диспетчеризації та
        електропостачання різної складності: від невеликих офісів, квартир, до адміністративно-житлових багатоповерхових
        будинків, котеджів, ресторанів, медичних установ, приміщень з підвищеними вимогами до мікроклімату
        (операційні, серверні і телекомунікаційні).
        <br>
        <br>
        У 2010 році наша компанія почала власне виробництво контролерів, датчиків вологості і датчиків температури для
        систем вентиляції. У 2011 році була розроблена SCADA-система "Wheel", яка використовується для диспетчеризації і
        моніторингу різних технологічних процесів і обладнання. У 2012 році було освоєно виробництво пристроїв зв'язку
        з об'єктом, які використовуються для збору і подальшої передачі сигналів від технологічного об'єкта (нижній рівень)
        до робочого місця оператора (верхній рівень). На сьогоднішній день ведуться роботи по розробці програмного забезпечення,
        яке дозволить програмувати наші контролери в графічній мові програмування (FBD).
        <br>
        <br>
        Одно з найголовніших правил ефективної роботи - встановлення довірчих відносин з клієнтами і зміцнення їх з
        плином часу. Свої відносини з клієнтами ми будуємо на базі довгострокових договорів про співпрацю,
        які передбачають, зокрема, ряд заохочувальних заходів для постійних клієнтів
        (бонуси, знижки, накопичувальні знижки і т.д.). Маючи великий досвід успішної роботи, ми на сьогоднішній день
        можемо запропонувати клієнту високу якість обслуговування і максимально зручні строки установки обладнання</p>
      <h3>НАША ЛІЦЕНЗІЯ:</h3>
      <img class="license-img" src="../assets/header/licence.png" alt="Ліцензія">
    </div>
  </div>
</template>

<script>
var slideIndex = 0;
window.onload = () => {
  showSlides();
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000);
}
export default {
  name: "MainPage"
}
</script>

<style scoped>
* {
  box-sizing:border-box
}
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: 1% auto;
}
.mySlides {
  display: none;
}
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 3rem;
  width: 100%;
  text-align: center;
}
.numbertext {
  color: #f2f2f2;
  font-size: 16px;
  padding: 1%;
  margin: 5% 10%;
  position: absolute;
  border: 2px solid #f2f2f2;
  top: 0;
}
.slider img {
  display: block;
  margin: 0 auto;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.dot {
  position: relative;
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  bottom: 4rem;
  background-color: #f2f2f2;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s linear;
}
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
.production-divs {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.production-divs div {
  text-align: center;
  margin: 2%;
  padding: 2%;
  width: 250px;
  height: 250px;
  vertical-align: center;
}
.production-div span{
  border: 3px solid black;
  border-radius: 25%;
  margin-top: 15%;
  transition: border-color .4s ease;
}
.production-div {
  border: 3px solid black;
  border-radius: 7%;
  transition: border-color .4s ease;
}
.production-div:hover span {
  border: 3px solid red;
}
.production-div:hover {
  border: 3px solid red;
}
.topic-header {
  text-align: center;
  border-top: 3px solid #717171;
  padding-top: 2%;
}
.about-us-article{
  margin: 0 15%
}
.about-us-article p {
  font-style: italic;
  color: #717171;
  font-size: large;
  text-align: justify;
}
.about-us-article p img {
  width: 50%;
  float: left;
  margin-right: 2%;
}
.license-img {
  width: 100%;
  height: 100%;
  transition: transform .2s;
}
.license-img:hover {
  transform: scale(1.5);
}
@media only screen and (max-width: 1000px) {
  .slider img {
    height: 500px !important;
  }
}
@media only screen and (max-width: 750px) {
  .slider img {
    height: 400px !important;
  }
  .production-divs {
    flex-direction: column;
  }
  .about-us-article{
    margin: 0 5%
  }
  .about-us-article p {
    font-size: medium;
  }
}
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
  .slider img {
    height: 300px !important;
  }
}
</style>