<template>
  <div class="certification">
    <p class="certification__header">مجوز ها و گواهینامه ها</p>
    <p class="certification__text">دارای مجوز رسمی از شاپرک</p>
    <p class="certification__desc">( شبکه پرداخت بانک مرکزی جمهوری اسلامی ایران )</p>
    <div class="certification__items">
      <img src="../assets/logo/Logo-Jobs.jpg" class="certification__item" />

      <img src="../assets/logo/Logo-Nezam.jpg" class="certification__item" />
      <img src="../assets/logo/Logo-Enamad.jpg" class="certification__item" />
      <img
        src="../assets/logo/Logo-Samandehi.jpg"
        class="certification__item"
      />
      <img src="../assets/logo/Logo-Arvand2.jpg" class="certification__item" />
      <img src="../assets/logo/Logo-Ayandeh3.jpg" class="certification__item" />

      <img src="../assets/logo/Logo-Otagh.jpg" class="certification__item" />
      <img src="../assets/logo/Logo-Iso.jpg" class="certification__item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style scoped>
.certification {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 30px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
}

.certification__items {
  display: grid;
  grid-template-columns: repeat(4, 150px);
  gap: 15px;
  width: auto;
  margin: 0 auto;
}
.certification__item {
  width: 100%;
  border-radius: 5px;
}
.certification__header {
  color: #fff;
  font-size: 25px;
  padding: 20px 0 10px;
}
.certification__text {
  color: #c69e4e;
  font-size: 17px;
  margin: 0 10px 2px;
  text-align: center;
}
.certification__desc{
  color: #fff;
  text-align: center;
  margin: 0 10px 25px;
  font-size: 14px;
}
@media only screen and (max-width: 1050px) {
  .certification__items {
    grid-template-columns: repeat(4, 120px);
    gap: 10px;
  }
}
@media only screen and (max-width: 750px) {
  .certification__items {
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .certification__item {
    border-radius: 10px;
    width: 130px;
  }
  .certification__header {
    font-size: 20px;
  }
}
@media only screen and (max-width: 470px) {
  .certification__items {
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .certification__item {
    width: 100px;
  }
}
@media only screen and (max-width: 350px) {
  .certification__items {
    padding: 0 5px;
  }
  .certification__item {
    width: 90px;
  }
}
</style>