<template>
  <div class="benefit">
    <p class="benefit__title">ویپون چیست ؟</p>
    <p class="benefit__description">
      ویپون حاصل سالها تحقیق و برنامه ریزی در زمینه فروش و وفاداری مشتری می باشد
      و در امکانات و مدل کارکرد سیستم نسبت به سایر سیستم های باشگاه مشتریان،
      مزایا و برتری های ویژه ای دارد:
    </p>
    <Services />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.benefit {
  padding: 4rem 0 2.5rem;
  background-color: #fff;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.benefit__title {
  font-size: 45px;
  color: #c69c4e;
  /* margin-bottom: 10px; */
}
.benefit__description {
  font-size: 15px;
  color: #999;
  text-align: center;
  width: 50%;
}
@media only screen and (max-width: 900px) {
  .benefit {
    padding: 5rem 0 4rem;
  }
  .benefit__title {
    font-size: 35px;
  }
  .benefit__description {
    width: 70%;
  }
}
@media only screen and (max-width: 680px) {
  .benefit__title {
    font-size: 30px;
  }
  .benefit__description {
    width: 90%;
  }
}
@media only screen and (max-width:500px){
  .benefit{
    padding: 0.5rem 0;
  }
}
</style>