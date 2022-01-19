<template>
  <main class="job container">
    <div class="job__item">
      <p class="job__header">فرصت های شغلی</p>
      <p class="item__text">
        ما معتقدیم افراد حرفه ای فقط برای حقوق و تامین معیشت کار نمیکنند، آنها
        به دنبال منزلت، جایگاه اجتماعی و زندگی کاری باکیفیت هم هستند. در همین
        راستا در تلاشیم تا تجربه ای متفاوت و ناب از همکاری برای همراهانمان ایجاد
        کنیم. صداقت، تعهد به سازمان و تلاش برای بهبود مستمر ارزش های اساسی
        خانواده ی ویپون هستند که در کنار تحصیلات و دانش کاری عوامل کلیدی جذب
        استعدادها و نیروهای جدید در ویپون اند.
      </p>
      <p class="item__text">
        اگر متعهد، مسئولیت پذیر و کیفیت گرا هستید و می خواهید زندگی در سازمانی
        حرفه ای با محیطی دوستانه را تجربه کنید، ما در ویپون از شما استقبال
        خواهیم کرد.
      </p>
    </div>
    <ul class="job__list">
      <NuxtLink
        v-for="(job, index) in jobs"
        :key="index"
        :to="`/job/${job.id}/`"
        class="job__field"
      >
        <p>{{ job.title }}</p>
        <div class="job__image">
          <img src="../assets/svg/left-chevron.svg" />
        </div>
      </NuxtLink>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Cooperation',
  async asyncData({ $axios }) {
    const api = await $axios.$get('/job/')
    const jobs = api.results
    return { jobs }
  },
  head() {
    return {
      title: 'ویپون | vipon - فرصت شغلی',
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
.job {
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  width: 100%;
}
.job__header {
  color: #c69e4e;
  font-size: 25px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.job__item {
  padding: 2rem 3rem;
  border-radius: 25px;
  margin-top: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
}
.item__text {
  color: #000;
  text-align: justify;
  margin-bottom: 10px;
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
.job__list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 0;
}
.job__field {
  width: 100%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 1rem;
  .job__image {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #f8f7f6;
    img {
      width: 15px;
      height: 15px;
    }
  }
}

@media only screen and (max-width: 687px) {
  .job__list {
    grid-template-columns: 1fr;
  }
}
</style>