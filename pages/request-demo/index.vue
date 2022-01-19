<!-- eslint-disable -->
<template>
  <div class="demo container">
    <form class="demo__form" @submit.prevent="handleSubmitForm">
      <div class="demo-title">فرم تماس با ما</div>
      <div class="demo--top">
        <div class="demo-item">
          <input v-model="name" type="text" placeholder="نام و نام خانوادگی" />
          <img src="../../assets/svg/vipon/user.svg" />
        </div>
        <div class="demo-item">
          <input v-model="phone" type="text" placeholder="موبایل" />
          <img src="../../assets/svg/smartphone.svg" />
        </div>
      </div>
      <BaseInput elementType="cityAndProvince" name="استان | شهر" @demo="handleDemo" />
      <button class="demo__btn" type="submit">ارسال</button>
    </form>
    <img src="../../assets/image/building.jpg" class="demo__building" />
  </div>
</template>
<!-- eslint-disable -->
<script>

export default {
  name: 'RequestDemo',
  data: () => ({
    name: '',
    phone: '',
  }),
  methods: {
    handleSubmitForm() {
      console.log('hi')
    },
    handleDemo(test){
      console.log(test)
    }
  },
}
</script>
<!-- eslint-disable -->
<style scoped lang="scss">
.demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  align-items: flex-start;
  padding-top: 1rem;
  background-color: #f8f9fb;
}
.demo__form{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2.5rem;
  margin-top: 45px;
  ::placeholder {
    font-size: 14px;
    color: #999;
  }
  .demo-title {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .demo--top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    width: 100%;
    margin-bottom: 5px;
    .demo-item {
      position: relative;
      width: 100%;
      padding-right: 35px;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      height: 50px;
      display: flex;
      align-items: center;
      background: #fff;
      margin-bottom: 5px;
    }
    input {
      border: none;
      width: 100%;
      background: #fff;
    }
    img {
      position: absolute;
      right: 7px;
      top: 15px;
      width: 20px;
      height: 20px;
    }
  }
}

.demo__btn {
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 17px;
  color: #222;
  animation: warm 2s ease infinite;
  transition: cubic-bezier(0.86, 0, 0.07, 1);
  color: black;
  background: linear-gradient(
    159deg,
    rgba(148, 105, 16, 1) 0%,
    rgba(229, 188, 108, 1) 100%
  );
  cursor: pointer;
  border-radius: 5px;
}
.demo__building {
  position: relative;
  top: -15px;
  width: 100%;
}
@media only screen and (max-width: 1200px) {
  .demo__building {
    top: 5px;
  }
}
@media only screen and (max-width: 1100px) {
  .demo__building {
    top: 15px;
  }
}
@media only screen and (max-width: 1000px) {
  .demo__building {
    top: 20px;
  }
}
@media only screen and (max-width: 950px) {
  .demo{
    grid-template-columns: 1fr;
  }
  .demo__form{
    order: 2;
    margin-bottom: 30px;
  }
  .demo__detail {
    grid-template-columns: 1fr;
  }
  .demo__building {
    order: 1;
    width: 100%;
    max-height: auto;
    margin-bottom: 20px;
  }
  .demo__item {
    order: 2;
    padding-top: 0;
  }
}
@media only screen and (max-width: 800px) {
  .demo__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 550px) {
  .demo__list {
    font-size: 14px;
  }
}
@media only screen and (max-width: 550px) {
  .demo__building {
    border-radius: 0 0 10px 10px;
  }

  .demo__desc {
    .demo__logo {
      height: 60px;
      width: 60px;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  .demo .demo--top {
    grid-template-columns: 1fr;
  }
}
</style>