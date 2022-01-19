<template>
  <div class="manager container">
    <img src="../assets/image/Ali--Soroosh.jpg" class="manager__top-img" />
    <div class="manager__message">
      <div class="manager__message-text">
        <div class="manager__message__header">
          <img src="../assets/image/cama.png" />
          <p>پیام مدیر عامل</p>
        </div>
        <p class="manager__message__content">
          ارتباط هوشمند یک فرصت است؛ هم برای مردم و هم کسب و کارها. پس لازم بود
          راهی آسان، مطمئن و کم‌هزینه برای مدیریت هوشمند ارتباط و تعامل با مشتری
          وجود داشته باشد. ویپون با تکیه بر توان متخصصان داخلی و با به کارگیری
          به روز ترین فن آوری های جهان چشم انداز خود را رسیدن به مطلوب ترین
          سرویس ارایه دهنده سرویس مشتری مداری تا سال ۱۴۰۱ خورشیدی قرارد داده و
          در راه رسیدن به این قله رفیع گام های بس بلندی را برداشته است.،ما می
          خواهیم سهمی مهم در رشد و پیشرفت کسب و کار ها داشته باشیم .
        </p>
        <div class="manager__message__footer">
          <img src="../assets/image/cama.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerMessage',
  head() {
    return {
      title: 'ویپون | vipon - سخن مدیرعامل',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.manager {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: #ddd;
}
.manager__message {
  display: flex;
  width: 100%;
  background: #eee;
  height: auto;
  border-radius: 20px;
  padding: 30px 15px;
  height: 325px;
  max-height: 500px;
}
.manager__message-text {
  display: flex;
  flex-direction: column;
  text-align: justify;
  .manager__message__header {
    font-size: 30px;
    color: #000;
    position: relative;
    display: flex;
    align-items: center;
    img {
      margin-left: 10px;
    }
  }
  .manager__message__content {
    font-size: 14px;
    color: #333;
    margin: 20px 0;
  }
  .manager__message__footer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
      transform: rotate(180deg);
    }
  }
}

@keyframes blink {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 0.2;
  }
}

// media query
.manager__top-img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  margin: 0 auto;
}

@media only screen and (max-width: 1220px) {
  .manager__message {
    height: 350px;
  }
}
@media only screen and (max-width: 1070px) {
  .manager__message {
    height: 375px;
  }
}
@media only screen and (max-width: 1000px) {
  .manager {
    grid-template-columns: 1fr;
  }
  .manager__message {
    height: 275px;
  }
}
@media only screen and (max-width:925px){
  .manager__message{
    height: 300px;
  }
}
@media only screen and (max-width: 770px) {
  .manager__message {
    height: 325px;
  }
}
@media only screen and (max-width: 630px) {
  .manager__message {
    height: 350px;
  }
}

@media only screen and (max-width: 500px) {
  .manager__top-img {
    width: 92%;
  }
}
@media only screen and (max-width: 440px) {
  .manager__message {
    height: 400px;
  }
}

@media only screen and (max-width: 450px) {
  .manager__top-img {
    width: 92%;
  }
}

@media only screen and (max-width: 400px){
  .manager__message{
    height: 425px;
  }
}

@media only screen and (max-width: 375px){
  .manager__message{
    height: 450px;
  }
}

</style>