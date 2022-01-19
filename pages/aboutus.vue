<template>
  <div class="about">
    <img src="../assets/image/2.jpg" class="about__header-img" />
    <div class="about__text container">
      <span class="about__header-title">درباره ویپون</span>
      <p>
        ویپون پلتفرمی جدید و هوشمند است که به کسب و کار های خود تجربه‌ای جدیدی
        در ارتباط با مشتریان ارائه می‌کند و باعث افزایش فروش کسب‌وکار می‌شود.
        ویپون یکی از زیر مجموعه‌های هلدینگ سینوس است که فعالیت خود را از سال
        ۱۳۹۵آغاز نمود.
      </p>
      <div class="about__header">
        <span class="about__header-title">ماموریت، چشم انداز و ارزشهای سازمانی</span>
        <p>
          ما رویای آن را داریم تا در ارائه دنیایی از خدمات دیجیتالی جدید و
          جسورانه به شما پیشرو باشیم. در این راه اهدافی پیش رو داریم که ما را به
          ادامه راه امیدوار می‌کند. ارزش آفرینی و خلق تجربه‌ای متفاوت برای
          مشتریان، بهبود مشتری مداری بخش‌های خدمات‌رسان به مشتریان و فعالیت بر
          اساس اصول نوآوری در همه امور بخشی از دغدغه‌های ماست تا بتوانیم همیشه
          بهترین خدمات را به شما ارائه دهیم.
        </p>
      </div>
      <div class="about__list">
        <!-- item1 -->
        <div class="about__item">
          <span>مشتری مداری</span>
          <p>
            داوری نهایی در مورد کیفیت محصولات و خدمات با مشتری است. ایجاد
            وفاداری در مشتری و حفظ آن و به دست آوردن سهم بازار، در بهترین شکل
            ممکن از طریق توجه جدی به نیازهای مشتریان فعلی و بالقوه امکان‌پذیر
            است.
          </p>
        </div>
        <!-- item2 -->
        <div class="about__item">
          <span>رهبری و ثبات در مقاصد</span>
          <p>
            رفتار رهبران سازمان ایجادکننده شفافیت و ثبات در مقاصد سازمان است و
            محیطی را فراهم می‌سازد که در آن سازمان و کارکنان می‌توانند به سرآمدی
            دست یابند.
          </p>
        </div>
        <!-- item 3 -->
        <div class="about__item">
          <span>مدیریت بر اساس فرآیندها و واقعیات</span>
          <p>
            یک سازمان هنگامی مؤثرتر عمل می‌کند که تمامی فعالیت‌های مرتبط باهم در
            آن درک شده و به‌طور نظام‌مند مدیریت شوند و تصمیمات مرتبط با عملیات
            جاری سازمان و بهبودهای طرح‌ریزی‌شده بر اساس اطلاعات قابل‌اعتمادی که
            دربرگیرنده برداشت‌های ذینفعان است، اتخاذ شوند.
          </p>
        </div>
        <!-- item 4 -->
        <div class="about__item">
          <span>مشارکت و توسعه کارکنان</span>
          <p>
            تمامی توان بالقوه کارکنان سازمان وقتی به‌درستی بکار گرفته خواهد شد
            که یک سری ارزش‌های مشترک و فرهنگ اعتماد متقابل و توانمندسازی در
            سازمان حاکم باشد.
          </p>
        </div>
        <!-- item 5 -->
        <div class="about__item">
          <span>یادگیری، نوآوری و بهبود مداوم</span>
          <p>
            عملکرد سازمان هنگامی به بیشترین میزان خود خواهد رسید که مبتنی بر
            مدیریت دانش و به اشتراک گذاشتن آن همراه بافرهنگ یادگیری، نوآوری و
            بهبود مداوم باشد.
          </p>
        </div>
        <!-- item 6 -->
        <div class="about__item">
          <span>توسعه شراکت ها</span>
          <p>
            یک سازمان هنگامی مؤثرتر کار خواهد کرد که یک رابطه‌ی سودمند متقابل با
            شرکای تجاری خود بر اساس اعتماد، مشارکت دانش و یکپارچگی داشته باشد.
          </p>
        </div>
      </div>
    </div>
    <Certifications />
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  head() {
    return {
      title: 'ویپون | vipon - درباره ما',
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
.about {
  padding-bottom: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.about__text {
  padding-bottom: 2rem;
  padding-top: 1rem;
  text-align: justify;
}
.about__text > p {
  text-align: center;
}
.about__header-title {
  font-size: 22px;
  width: 100%;
  text-align: center;
  margin-bottom: 1.3rem;
  color: #c69e4e;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about__header {
  padding: 20px 0 10px;
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    text-align: justify;
    color: #333;
  }
}
.about__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  padding: 20px 0;
  .about__item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 10px;
    padding: 20px 20px 30px;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    span {
      font-size: 18px;
      margin-bottom: 10px;
      color: #c69e4e;
    }
    p {
      font-size: 14px;
      text-align: justify;
      color: #000;
    }
  }
}

.about__header-img {
  width: 60%;
  height: auto;
  margin: 0 auto;
  border-radius: 30px;
  object-fit: fill;
}

@media only screen and (max-width: 1000px) {
  .about__header-img {
    width: 100%;
    border-radius: 0;
  }
}
@media only screen and (max-width: 900px) {
  .about__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}
@media only screen and(max-width:700px) {
  .about__header-img {
    object-fit: fill;
    width: 100%;
    height: 300px;
  }
}
@media only screen and (max-width: 600px) {
  .about__list {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
@media only screen and (max-width: 500px) {
  .about__header-img {
    height: 250px;
  }
}
@media only screen and (max-width: 450px) {
  .about__header-img {
    height: 200px;
  }
}
</style>