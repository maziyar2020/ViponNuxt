<template>
  <div class="subscription">
    <div class="subscription__header">اشتراک</div>
    <p class="subscription__text">
      بسته های اشتراک زیر، لایسنس استفاده از امکانات مدیریت باشگاه مشتریان، در
      مدت های متفاوت هستند و قابل تمدید می باشند، هزینه های ارسال پیام، چاپ کارت
      هدیه و امکانات جانبی جداگانه محاسبه می گردد.
    </p>
    <div class="subscription__items container">
      <div class="subscription__item">
        <div class="subscription__item__header">
          <p>3</p>
          <span>ماهه</span>
        </div>
        <p class="subscription__price">580,000</p>
        <span class="subscription__price-fa">تومان</span>
        <ul class="subscription__list">
          <li class="subscription__list-item">تحویل فوری</li>
          <li class="subscription__list-item">فول امکانات سیستم</li>
          <li class="subscription__list-item">
            پشتیبانی 24 ساعته حتی روزهای تعطیل
          </li>
          <li class="subscription__list-item">مشاوره تعیین سطح مشتریان</li>
          <li class="subscription__list-item">
            گارانتی بازگشت وجه، در صورت عدم رضایت تا 50 ساعت
          </li>
        </ul>
        <button class="subscription__btn">سفارش دهید</button>
      </div>
      <!-- item 2 180 days -->
      <div class="subscription__item">
        <div class="subscription__item__header">
          <p>6</p>
          <span>ماهه</span>
        </div>
        <p class="subscription__price">980,000</p>
        <span class="subscription__price-fa">تومان</span>
        <ul class="subscription__list">
          <li class="subscription__list-item">تحویل فوری</li>
          <li class="subscription__list-item">فول امکانات سیستم</li>
          <li class="subscription__list-item">
            پشتیبانی 24 ساعته حتی روزهای تعطیل
          </li>
          <li class="subscription__list-item">مشاوره تعیین سطح مشتریان</li>
          <li class="subscription__list-item">
            گارانتی بازگشت وجه، در صورت عدم رضایت تا 50 ساعت
          </li>
        </ul>
        <button class="subscription__btn">سفارش دهید</button>
      </div>
      <!-- item 3 365 days -->
      <div class="subscription__item">
        <div class="subscription__item__header">
          <p>1</p>
          <span>ساله</span>
        </div>
        <p class="subscription__price">1,980,000</p>
        <span class="subscription__price-fa">تومان</span>
        <ul class="subscription__list">
          <li class="subscription__list-item">تحویل فوری</li>
          <li class="subscription__list-item">فول امکانات سیستم</li>
          <li class="subscription__list-item">
            پشتیبانی 24 ساعته حتی روزهای تعطیل
          </li>
          <li class="subscription__list-item">مشاوره تعیین سطح مشتریان</li>
          <li class="subscription__list-item">
            گارانتی بازگشت وجه، در صورت عدم رضایت تا 50 ساعت
          </li>
        </ul>
        <button class="subscription__btn">سفارش دهید</button>
      </div>
      <!-- item 4  2 years -->
      <div class="subscription__item">
        <div class="subscription__item__header">
          <p>2</p>
          <span>ساله</span>
        </div>
        <p class="subscription__price">3,980,000</p>
        <span class="subscription__price-fa">تومان</span>
        <ul class="subscription__list">
          <li class="subscription__list-item">تحویل فوری</li>
          <li class="subscription__list-item">فول امکانات سیستم</li>
          <li class="subscription__list-item">
            پشتیبانی 24 ساعته حتی روزهای تعطیل
          </li>
          <li class="subscription__list-item">مشاوره تعیین سطح مشتریان</li>
          <li class="subscription__list-item">
            گارانتی بازگشت وجه، در صورت عدم رضایت تا 50 ساعت
          </li>
        </ul>
        <button class="subscription__btn">سفارش دهید</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscription',
}
</script>

<style scoped lang='scss'>
.subscription {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  background-color: #f8f9fa;
  align-items: center;
  justify-content: center;
}
.subscription__header {
  font-size: 25px;
  color: #c69e4e;
  margin-bottom: 10px;
}
.subscription__text {
  font-size: 15px;
  color: #aaa;
  width: 50%;
  text-align: center;
  margin: 0 auto;
}
.subscription__items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
  transition: all 0.3s ease;
  width: 100%;
}
.subscription__item {
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(51, 51, 51, 1) 30%,
    rgba(0, 0, 0, 1) 100%
  );
  padding: 30px 18px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.subscription__item__header {
  color: #fff;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  justify-content: center;
  p {
    font-family: 'OpenSans';
    font-size: 21px;
    margin-left: 5px;
    color: #ccc;
  }
  span {
    font-size: 20px;
    color: #ccc;
  }
}
.subscription__price {
  color: #eac171;
  font-size: 30px;
  font-family: 'OpenSans';
  align-self: center;
}
.subscription__price-fa {
  font-size: 17px;
  color: #ccc;
  margin-top: -5px;
  align-self: center;
}
.subscription__list {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
.subscription__list-item {
  position: relative;
  margin-bottom: 10px;
  padding-right: 25px;
  align-self: flex-start;
  color: #aaa;
  font-size: 15px;
}
.subscription__list-item::before {
  content: url('../assets/svg/tick-white.svg');
  position: absolute;
  right: 0;
  top: 2px;
  width: 15px;
  height: 15px;
  fill: #fff;
}
.subscription__btn {
  width: 120px;
  height: 40px;
  background: linear-gradient(
    159deg,
    rgba(148, 105, 16, 1) 0%,
    rgba(229, 188, 108, 1) 100%
  );
  color: #000;
  font-size: 15px;
  border-radius: 10px;
  margin: auto;
  transition: all 0.1s ease;
  cursor: pointer;
  text-align: center;
  margin-bottom: 10px;
}
.subscription__btn:hover {
  box-shadow: 0px 0px 5px 0px #c69e4e;
}
.slider {
  margin-top: 20px;
}
@media only screen and (max-width: 1000px) {
  .subscription__text {
    width: 70%;
  }
  .subscription__items {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 650px) {
  .subscription__text {
    width: 90%;
  }
  .subscription__items {
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 550px) {
  .subscription__list-item {
    font-size: 13px;
  }
}
</style>