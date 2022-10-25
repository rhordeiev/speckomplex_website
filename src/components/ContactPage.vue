<template>
  <div class="contact-page">
    <h1>КОНТАКТИ</h1>
    <h2>Зв'яжіться з нами:</h2>
    <div class="contact-info">
      <div class="tel-email-info">
        <div class="tel-email-block">
          <span class="material-icons" style="font-size: 60px">call</span>
          <div class="tel-email-block-text">
            <h3>Подзвоність нам:</h3>
            <p>(044) 292-11-66;</p>
          </div>
        </div>
        <div class="tel-email-block">
          <span class="material-icons" style="font-size: 60px">email</span>
          <div class="tel-email-block-text">
            <h3>Напишіть нам:</h3>
            <p>main@speckompleks.com.ua</p>
          </div>
        </div>
      </div>
      <div class="location-info">
        <div class="location-info-header">
          <p>ТОВ "СпецКомплекс"</p>
        </div>
        <p>02105, м.Київ, пр. Миру 4,<br><br>
          3 поверх, офіс №302</p>
      </div>
    </div>
    <h2>Ми на карті:</h2>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8781116967566!2d30.620548915615576!3d50
        .44337097947435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c55ba305bd51%3A0x57f12e2dea8428fe
        !2z0L_RgNC-0YHQvy4g0JzQuNGA0LAsIDQsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1625757586114!5m2!1sru!2sua"
              allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage"
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.contact-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5%;
}
.tel-email-info {
  display: flex;
  flex-direction: column;
  width: 44%;
  height: 200px;
}
.tel-email-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border: 3px solid black;
  border-radius: 5px;
  height: 80px;
  margin: 2% 0;
  transition: border-color .4s ease;
}
.tel-email-block:hover {
  border: 3px solid red;
}
.tel-email-block p, h3 {
  margin-left: 10%;
  margin-top: 0%;
  margin-bottom: 0%;
  width: 100%;
}
.tel-email-block p {
  font-style: italic;
  color: #717171;
}
.tel-email-block span {
  border: 3px solid black;
  border-radius: 20%;
  margin-left: 10%;
  transition: border-color .4s ease;
}
.tel-email-block:hover span {
  border: 3px solid red;
}
.tel-email-block-text {
  display: flex;
  flex-direction: column;
}
.location-info {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 3px black solid;
  margin: 1% 0;
  padding: 0;
  width: 30%;
  height: 170px;
  transition: border-color .4s ease;
}
.location-info:hover {
  border: 3px solid red;
}
.location-info-header {
  position: relative;
  font-weight: bold;
  border: 3px black solid;
  bottom: 3px;
  border-radius: 0 0 20px 20px;
  transition: border-color .4s ease;
  padding: 0 1%;
  text-align: center;
}
.location-info:hover .location-info-header {
  border: 3px solid red;
}
.location-info > p {
  display: block;
  margin: auto 0;
  text-align: center;
  font-style: italic;
  color: #717171;
}
.map iframe {
  width: 70%;
  height: 450px;
  border: 3px solid black;
  display: block;
  margin: 2% auto;
  transition: border-color .4s ease;
}
.map iframe:hover {
  border: 3px solid red;
}
@media only screen and (max-width: 1200px) {
  .tel-email-info {
    width: 50%;
  }
}
@media only screen and (max-width: 850px) {
  .contact-info {
    flex-direction: column;
    margin-left: 25%;
  }
  .tel-email-info {
    width: 75%;
  }
  .location-info {
     width: 75%;
  }
}
@media only screen and (max-width: 750px) {
  .contact-info {
    margin-left: 20%;
  }
  .contact-info p, h3 {
    font-size: 14px;
  }
  .tel-email-info {
    width: 85%;
  }
  .location-info {
    width: 85%;
  }
}
@media only screen and (max-width: 650px) {
  .contact-info {
    margin-left: 5%;
  }
  .tel-email-info {
    width: 100%;
  }
  .location-info {
    width: 100%;
  }
}
@media only screen and (max-width: 650px) {
  .tel-email-info p {
    font-size: 9px;
  }
  .tel-email-info h3 {
    font-size: 13px;
  }
  .location-info p {
    font-size: 13px;
  }
}
</style>