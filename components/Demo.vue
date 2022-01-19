<template>
  <div class="demo container">
    <div class="demo__inner">
      <p class="demo__title">درخواست دمو</p>
      <p class="demo__description">
        با تکمیل فرم زیر، همکاران ما در اولین زمان ممکن با شما تماس می گیرند
      </p>
      <NuxtLink to="/request-demo" class="demo__btn">
        <p>ادامه</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
}
</script>

<style scoped lang="scss">
.demo {
  padding-top: 4rem;
  padding-bottom: 2.5rem;
  background-color: #fff;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.demo__inner{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  padding: 40px 0;
}
.demo__title {
  font-size: 45px;
  color: #c69c4e;
  /* margin-bottom: 10px; */
}

.demo__description {
  font-size: 15px;
  color: #999;
  text-align: center;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.demo__btn {
  width: 200px;
  height: 50px;
  background: #000;
  color: #c69c4e;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    animation: blink 1.3s infinite;
  }
}
@media only screen and (max-width: 900px) {
  .demo {
    padding-top: 5rem;
    padding-bottom: 4rem;
  }
  .demo__title {
    font-size: 35px;
  }
  .demo__description {
    width: 70%;
  }
}
@media only screen and (max-width: 680px) {
  .demo__title {
    font-size: 30px;
  }
  .demo__description {
    width: 90%;
  }
}
@media only screen and (max-width: 500px) {
  .demo {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>