<template>
  <div class="service">
    <!-- <div class="service__header">
      <img src="../assets/image/manager.jpg" />
    </div> -->
    <div class="service__content">
      <div class="service__title">
        <p>شبانه‌روز پاسخگوی شما هستیم</p>
        <span>پشتیبانی ۲۴ ساعته ویپون</span>
      </div>
      <div class="service__text container">
        <p>
          مرکز تماس اختصاصی ویپون، به‌طور ۲۴ ساعته در دسترس و آماده پاسخ‌گویی به
          سوالات و رفع مشکل مشترکین است. متخصصان ویپون در لایه‌های مختلف از تمام
          توان خود بهره می‌گیرند تا مشکلات احتمالی را در کمترین زمان ممکن و به
          بهترین شکل حل کنند.
        </p>
        <div class="service__desc">
          <p>آنلاین در ارتباط باشید</p>
          <span>چت آنلاین</span>
        </div>
        <span>
          مشترکین و بازدیدکنندگان وب‌سایت ویپون می‌توانند علاوه‌بر تمامی راه‌های
          تماس از طریق گفتگوی آنلاین با کارشناسان ویپون پرسش‌های خود را مطرح
          کنند
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCenter',
  head() {
    return {
      title: 'ویپون | vipon - مرکز خدمات',
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
.service {
  display: flex;
  flex-direction: column;
}
.service__header {
  width: 100%;
  img {
    width: 100%;
  }
}
.service__content {
  padding-top: 1rem;
  padding-bottom: 4rem;
}
.service__title {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  p {
    font-size: 22px;
    color: #c69e4e;
    margin-bottom: 5px;
  }
  span {
    font-size: 20px;
    color: #222;
    margin-bottom: 5px;
  }
}
.service__desc {
  margin-top: 15px;
  margin-bottom: 10px;
}
.service__text > p {
  margin-bottom: 5px;
  margin-top: 10px;
}
.service__text > span {
  text-align: justify;
  margin-bottom: 5px;
}
</style>