<template>
  <div class="faq container">
    <p class="faq__header">سوالات متداول</p>
    <div class="faq__accordion">
      <!-- 1 -->
      <div class="faq__item">
        <span
          ref="firstItem"
          class="faq__question"
          @click="handleOpenAccordion($event)"
        >
          آیا ویپون مهلت دمو دارد ؟
        </span>
        <div ref="firstAnswer" class="faq__answer">
          بله، پس از تکمیل فرم توسط شما کارشناسان فروش ما در اولین فرصت با شما
          تماس خواهند گرفت و علاوه بر مشاوره رایگان، دمو نرم افزار را خدمت شما
          ارسال خواهند کرد
        </div>
      </div>
      <!-- 2 -->
      <div class="faq__item">
        <span class="faq__question" @click="handleOpenAccordion($event)">
          آیا ویپون خدمات پس از فروش دارد ؟
        </span>
        <div class="faq__answer">
          بله، پس از خرید نرم افزار شما یکسال پشتیبانی رایگان خواهید داشت و
          کارشناسان پشتیبانی ویپون پاسخ گوی تمام سوالات شما خواهند بود به علاوه
          شما عضو باشگاه مشتریان ویپون خواهید شد و از خدمات گسترده تری بهره مند
          خواهید شد
        </div>
      </div>
      <!-- 3 -->
      <div class="faq__item">
        <span class="faq__question" @click="handleOpenAccordion($event)">
          آیا ویپون فقط روی موبایل کار میکند ؟
        </span>
        <div class="faq__answer">
          یر ویپون با استفاده از جدید ترین تکنولوژی روز دنیا مولتی پلتفرم
          میباشد و روی سیستم تبلت و موبایل قابل استفاده میباشد
        </div>
      </div>
      <!-- 4 -->
      <div class="faq__item">
        <span class="faq__question" @click="handleOpenAccordion($event)">
          چطور میتونم ویپون کامل یاد بگیرم ؟
        </span>
        <div class="faq__answer">
          کارشناسان ویپون به صورت رایگان آموزش خواهند داد ضمن اینکه تمام بخش های
          نرم افزار ویپون دارای فیلم های آموزشی است که به صورت کامل در اختیار
          شما قرار خواهد گرفت
        </div>
      </div>
      <!-- 5 -->
      <div class="faq__item">
        <span class="faq__question" @click="handleOpenAccordion($event)">
          چی باشگاه مشتریان ویپون رو از بقیه رقبا متمایز می کنه ؟
        </span>
        <div class="faq__answer">
          با اطمینان اعتقاد داریم که تنها ابزار وفاداری مشتری هستیم باساده ترین
          محیط کاربری امکانات خیلی زیادی در مسیر رشد فروش به کسب و کار ها میدهیم
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  head() {
    return {
      title: 'ویپون | vipon - سوالات متداول',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  // mounted() {
  //   this.$refs.firstItem.classList.add('faq__question--active')
  //   this.$refs.firstAnswer.style.maxHeight =
  //     this.$refs.firstAnswer.scrollHeight + 'px'
  // },
  methods: {
    handleOpenAccordion($event) {
      const item = $event.target
      const content = item.nextElementSibling

      item.classList.toggle('faq__question--active')

      if (item.classList.contains('faq__question--active')) {
        content.style.maxHeight = content.scrollHeight + 'px'
      } else {
        content.style.maxHeight = 0 + 'px'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.faq {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  padding-top: 5px;
  padding-bottom: 3rem;
}
.faq__header {
  width: 100%;
  text-align: center;
  font-size: 22px;
  color: #d5a951;
}
.faq__item {
  display: flex;
  flex-direction: column;
  border: 1px dashed rgba(0, 0, 0, 0.07);
  border-top: none;

  &:first-child{
    border-top: 1px dashed rgba(0, 0, 0, 0.07);
  }

  .faq__question {
    padding: 10px 20px;
    position: relative;
    color: #000;
    cursor: pointer;
    text-align: right;
    width: 100%;
    border-bottom: none;
    border-radius: 5px;
  }
  .faq__answer {
    padding: 0px 15px;
    font-size: 17px;
    overflow: hidden;
    max-height: 0;
    transition: all 0.5s linear;
    display: flex;
    flex-direction: column;
    text-align: right;
    background-color: #f7f6f5;
    line-height: 40px;
    color: #d5a951;
  }
}
</style>