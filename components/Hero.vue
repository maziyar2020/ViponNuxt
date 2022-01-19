<template>
  <div class="hero">
    <div class="hero__header">
      <img
        src="../assets/image/a2/AX1.jpg"
        alt=""
        class="hero__header__img hero--first-img"
      />
      <img
        src="../assets/image/a2/AX2.jpg"
        alt=""
        class="hero__header__img hero--second-img"
      />
      <div class="hero__header__animation">
        <img
          src="../assets/svg/Jomleh.svg"
          class="hero__header__animation-svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.hero__cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  background: #fff;
  border-radius: 0 0 30px 30px;
  padding: 10px;
}
.hero__item {
  width: 100%;
  background-color: #000;
  border-radius: 30px;
  img {
    width: 100%;
    border-radius: 30px 30px 0 0;
  }
}
.hero__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}
.hero__desc {
  color: #eee;
  text-align: center;
  font-size: 30px;
  font-family: 'dinar';
}
.hero__detail {
  font-size: 18px;
  font-family: 'OpenSans';
  color: #fff;
}
.hero__btn {
  width: 150px;
  background-color: #c69e4e;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  color: #000;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  font-family: 'dinar';
  font-size: 20px;
  animation: blink 1.3s infinite;
}

.service__list {
  background-color: #f5f5f5;
  border-radius: 0 0 30px 30px;
  width: 100%;
  align-self: center;
  padding: 10px 20px;
  margin: 10px 0 0;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: -1px;
}

.service__list__item {
  position: relative;
  padding: 5px 30px 0 5px;
  margin-bottom: 4px;
  color: #777;
  font-size: 15px;
}
.service__list__item::before {
  content: url('../assets/svg/tick-gold.svg');
  width: 15px;
  height: 15px;
  position: absolute;
  right: 0;
  top: 6px;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 10px auto 15px;
}

// hero header
.hero__header {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 500px;
}
.hero__header__img {
  position: absolute;
  height: 500px;
  right: -700px;
  top: 0;
  width: auto;
}
.hero--first-img {
  z-index: 2;
  animation: blink2 1.3s infinite;
}
.hero--second-img {
  z-index: 1;
}
.hero__header__animation {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 160px;
  top: 140px;
  z-index: 3;
  img {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (max-width: 1250px) {
  .hero__header__img {
    right: -730px;
  }
}
@media only screen and (max-width: 1200px) {
  .hero__header__img {
    right: -780px;
  }
}

@media only screen and (max-width: 1150px) {
  .hero__header__img {
    right: -810px;
  }
}
@media only screen and (max-width: 1100px) {
  .hero__header__img {
    right: -840px;
  }
}

@media only screen and (max-width: 1050px) {
  .hero__header {
    flex-direction: column;
    align-items: center;
    height: 600px;
  }

  .hero__header__img {
    height: 400px;
    right: -400px;
  }
  .hero__header__animation {
    right: 0;
    left: 0;
    width: 100%;
    top: 400px;
    margin: 0 auto;
    background: #000;
    height: 200px;
    img {
      position: relative;
      width: 100%;
      height: 100%;
      top: -10px;
    }
  }
}

@media only screen and (max-width: 950px) {
  .hero__header__img {
    right: -430px;
  }
}
@media only screen and (max-width: 900px) {
  .hero__header__img {
    right: -450px;
  }
}
@media only screen and (max-width: 850px) {
  .hero__header__img {
    right: -500px;
  }
}
@media only screen and (max-width: 800px) {
  .hero__cards {
    grid-template-columns: 1fr;
  }
  .hero__header__img {
    right: -550px;
  }
}

@media only screen and (max-width: 750px) {
  .hero__header__img {
    right: -600px;
  }
}
@media only screen and (max-width: 700px) {
  .hero__header__img {
    right: -580px;
  }
}
@media only screen and (max-width: 600px) {
  .hero__header__img {
    right: -610px;
  }
}
@media only screen and (max-width: 550px) {
  .hero__header__img {
    right: -650px;
  }
}
@media only screen and (max-width: 500px) {
  .hero__header {
    height: 460px;
  }
  .hero__header__img {
    height: 300px;
    right: -470px;
  }
  .hero__header__animation {
    width: 100%;
    height: 140px;
    right: 0;
    left: 0;
    top: 300px;
    img{
      height: 180px;
      top: -20px;
    }
  }

}
@media only screen and (max-width: 460px) {
  .hero__header__img {
    right: -460px;
  }
  .hero__desc {
    font-size: 25px;
  }
}
@media only screen and (max-width: 430px) {
  .hero__header__img {
    right: -490px;
  }
  .hero__desc {
    font-size: 25px;
  }
}
@media only screen and (max-width: 400px) {
  .hero__header__img {
    right: -510px;
  }
  .hero__desc {
    font-size: 25px;
  }
}
@media only screen and (max-width: 370px) {
  .hero__header__img {
    right: -500px;
  }
  .hero__desc {
    font-size: 25px;
  }
}
@keyframes blink2 {
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