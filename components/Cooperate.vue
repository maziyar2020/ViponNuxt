<template>
  <div class="cooperate container">
    <div class="cooperate__items">
      <!-- <div class="cooperate__item">
        <p class="cooperate__header">دریافت دمو / DEMO</p>
        <p class="item__text">
          اگر مشاور کسب و کارها، مدیر مارکتینگ، مدیر تبلیغات یا مدیر فروش هستید،
          می توانید با ما همکاری نمایید
        </p>
        <NuxtLink to="/recruitment" class="item__btn">
          <p>ادامه</p>
        </NuxtLink>
      </div> -->
      <div class="cooperate__item">
        <p class="cooperate__header">دریافت نمایندگی</p>
        <p class="item__text">
          اگر مشاور کسب و کارها، مدیر مارکتینگ، مدیر تبلیغات یا مدیر فروش هستید،
          می توانید با ما همکاری نمایید
        </p>
        <NuxtLink to="/cooperation" class="item__btn">
          <p>ادامه</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='scss'>
.cooperate {
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #fff;
}
.cooperate__header {
  color: #c69e4e;
  font-size: 25px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.cooperate__items {
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: all 0.3s ease;
}
.cooperate__item {
  padding: 2rem 3rem;
  border-radius: 25px;
  margin-top: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.07);
}
.item__text {
  color: #000;
  text-align: center;
}
.item__btn {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #000;
  color: #c69e4e;
  margin: 20px auto 0;
  font-size: 17px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    animation: blink 1.3s infinite;
  }
}

@keyframes blink {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>