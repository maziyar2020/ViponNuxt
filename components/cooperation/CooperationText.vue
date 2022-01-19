<template>
  <div class="cooperate__text">
    <p class="cooperate__header">شرایط دریافت نمایندگی</p>
    <p class="item__text">
      یکی از بزرگترین اهداف ویپون، همکاری با علاقمندان به حوزه‌فناوری در
      زمینه‌‌توسعه‌کسب و کار است. به همین دلیل ویپون برنامه‌منسجمی را در
      زمینه‌جذب نمایندگی با شرایط ویژه ایجاد کرده است.
    </p>
    <p class="item__text">
      براین اساس تمامی اشخاص حقیقی و حقوقی (شخص یا شرکت) واجد شرایط که تمایل به
      همکاری در زمینه‌نمایندگی رسمی فروش را دارند می‌توانند از طریق تکمیل فرم
      زیر، تماس با شماره‌های اعلام‌شده یا ارسال رزومه به آدرس ایمیل، درخواست خود
      را ارائه نمایند.
    </p>
    <div class="cooperate__list">
      <div class="cooperate__detail">
        <p>آدرس ایمیل</p>
        <p>agents@vipon.ir</p>
      </div>
      <div class="cooperate__detail">
        <p>شماره‌های تماس</p>
        <p><i> داخلی </i>(411) 021-9131-0333</p>
      </div>
    </div>
    <div @click="navigateToForm('CooperationForm')" class="item__btn">
      <p>فرم درخواست</p>
    </div>
  </div>
</template>

<script>
export default {
    name : 'CooperationText',
    methods:{
        navigateToForm(navigateTo){
            this.$store.dispatch('navigateToCooperationPage',navigateTo)
        }
    }
}
</script>

<style scoped lang="scss">
.cooperate__text {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.cooperate__header {
  color: #c69e4e;
  font-size: 25px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.item__text {
  color: #000;
  text-align: justify;
  margin-bottom: 10px;
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
.cooperate__list {
  display: flex;
  flex-direction: column;
}
.cooperate__detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  i {
    font-size: 16px;
  }
}
</style>