<template>
  <div class="container">
    <div class="infodiv">
      ТОВ СпецКомплекс <br />
      м. Київ, вул. проспект Миру 4, оф. 302
    </div>
    <div class="infodiv">
      т. (044) 292-11-16
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
 .container {
   display: flex;
   background: lightgray;
   justify-content: space-between;
   align-items: center;
   color: gray;
   font-size: 14px;
 }
 .container div {
   margin: 1% 5%;
 }
 .infodiv {
   margin: 4%;
   border-radius: 1.5em;
   padding: 1%;
 }
 @media only screen and (max-width: 880px) {
   .infodiv {
     padding: 2%;
   }
 }
</style>