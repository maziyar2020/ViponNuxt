<template>
  <div class="service-wrapper container">
    <div class="service">
      <!-- first text box -->
      <div class="service__item" :class="[mobile && 'service__item--centered']">
        <p class="service__item-header">افزایش سطح مشتریان</p>
        <p class="service__item-desc">
          مشتری های شما یکسان نیستند، بعضی ها ارزش بیشتری دارند، بیشتر مراجعه می
          کنند، بیشتر خرید می کنند و به شما سود بیشتری می رسانند و طبیعتا، باید
          به سطح بالاتری برسند و امتیاز بیشتری بگیرند، تا مزایای وفاداری خود را
          نسبت به سایر مشتریان داشته باشند و انگیزه شان برای وفادار ماندن بالا
          تر برود.
        </p>
        <p v-if="!mobile" class="service__item-desc">
          مشتری های جدید نیز تلاش می کنند که خرید های بیشتری انجام دهند تا به
          سطح های بالاتری برسند و شامل تخفیف ها و مزایای بهتری شوند، باشگاه
          مشتریان ویپون اهداف زیر را محقق می سازد:
        </p>
        <ul class="service__list">
          <li class="service__list__item">افزایش وفاداری</li>
          <i class="divider"></i>
          <li class="service__list__item">افزایش فروش</li>
          <i class="divider"></i>
          <li class="service__list__item">جذب مشتری جدید</li>
          <i class="divider"></i>
          <li class="service__list__item">تبدیل مشتری عادی به مشتری وفادار</li>
        </ul>
      </div>
      <!-- first img -->
      <div class="service__item">
        <img src="../assets/svg/grades.svg" class="service__image" />
      </div>
      <!-- second img -->
      <div
        class="service__item eagle__img-wrapper"
      >
        <img src="../assets/svg/eagle.svg" class="service__image" />
      </div>
      <!-- second text box -->
      <div
        class="service__item eagle__text-wrapper"
      >
        <p class="service__item-header">آنالیز و گزارش گیری دقیق</p>
        <p class="service__item-desc">
          آنالیز ها و گزارش های دقیق سیستم به شما کمک می کند رشد عملکرد کسب و
          کار خود را مشاهده نموده و نارضایتی های احتمالی را قبل از تبدیل شدن به
          مشکل بزرگتر و از دست دادن مشتری، برطرف نموده و در جهت بهبود کسب و کار
          خود حرکت نمایید.
        </p>
        <p class="service__item-desc">
          بزرگترین سرمایه شما، مشتریان هستند، باشگاه مشتریان فعالیت بازاریابی
          رابطه‌ای است که اول بر حفظ مشتریان فعلی و افزایش فروش و سپس به جذب
          مشتری جدید می پردازد، زیرا هزینه به دست آوردن یک مشتری جدید بسیار
          بیشتر از حفظ مشتری است و وقتی شما یک مشتری را از دست می دهید، تنها یک
          فروش از دست نمی رود، بلکه کل جریان خریدهایی که مشتری می توانسته در طول
          زندگی خود انجام دهد را از دست می دهید.
        </p>
        <ul class="service__list">
          <li class="service__list__item">دریافت میزان رضایت پس از خرید</li>
          <i class="divider"></i>
          <li class="service__list__item">دریافت پیشنهاد و انتقاد سیستمی</li>
          <i class="divider"></i>
          <li class="service__list__item">مشتریان در حال پیشرفت</li>
          <i class="divider"></i>
          <li class="service__list__item">مشتریان در حال از دست رفتن</li>
        </ul>
      </div>
    </div>
    <div class="service__benefit">
      <p class="service__benefit__title">مزایا و برتری ها</p>
      <p class="service__benefit__desc">
        ویپون حاصل سالها تحقیق و برنامه ریزی در زمینه فروش و وفاداری مشتری می
        باشد و در امکانات و مدل کارکرد سیستم نسبت به سایر سیستم های باشگاه
        مشتریان، مزایا و برتری های ویژه ای دارد:
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceInfo',
  data() {
    return {
      mobile: false,
    }
  },
  mounted() {
    // check window size
    const checkSize = () => {
      if (window.innerWidth <= 1000) {
        this.mobile = true
      } else {
        this.mobile = false
      }
    }
    // set window event listener for resize
    window.addEventListener('resize', () => {
      checkSize()
    })
    // when document loaded call the checkSize function
    checkSize()
  },
}
</script>

<style scoped>
.service-wrapper {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  padding-top: 7rem;
  padding-bottom: 3rem;
}
.service {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}
.service__image {
  filter: saturate(0.8);
  border-radius: 20px;
  width: 100%;
}
.service__item--centered {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.service__item-header {
  font-size: 30px;
  color: #c69c4e;
  margin-bottom: 10px;
}
.service__item-desc {
  color: #777;
  text-align: justify;
  margin-bottom: 20px;
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
/*  */
.service__benefit {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 30px;
}
.service__benefit__title {
  font-size: 45px;
  color: #c69c4e;
  margin-bottom: 10px;
}
.service__benefit__desc {
  font-size: 15px;
  color: #999;
  text-align: center;
  width: 50%;
}
/* divider */

.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 10px auto 15px;
}
.service__list {
  background-color: #f5f5f5;
  border-radius: 20px;
  width: 100%;
  align-self: center;
  padding: 10px 20px;
  margin: 10px 0 30px 0;
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 1000px) {
  .service {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .service-wrapper {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 30px;
  }
  .service__item-header {
    font-size: 25px;
  }
  .service__item {
    align-items: center;
    justify-content: center;
  }
  .service__item-desc {
    text-align: center;
  }
  .service__item-header {
    margin-bottom: 15px;
  }
  .service__benefit__desc {
    width: 100%;
  }
  .service__benefit__title {
    font-size: 30px;
  }
  .eagle__img-wrapper{
    order: 4;
  }
  .eagle__text-wrapper{
    order: 3;
  }
}
@media only screen and (max-width: 600px) {
  .service__item-header {
    font-size: 26px;
  }
}
</style>