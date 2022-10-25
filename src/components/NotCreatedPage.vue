<template>
  <div class="not-created-page">
    <div class="not-created-text">
      Сторінка знаходиться у стадії розробки
    </div>
  </div>
</template>

<script>
export default {
  name: "NotCreatedPage"
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
  margin: 8.2%;
  color: #717171;
}
@media only screen and (max-width: 1300px) {
  div {
    margin: 11%;
  }
}
</style>