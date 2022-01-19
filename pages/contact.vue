<template>
  <div class="contact">
    <div class="contact__detail container">
      <div class="contact__item">
        <div class="contact__desc">
          <div class="contact__logo">
            <img src="../assets/svg/phoone.svg" />
          </div>
          <div class="contact__text">
            <p>شماره تماس و پشتیبانی</p>
            <p class="eng-number">021 9131 0333</p>
          </div>
        </div>
        <!--  -->
        <div class="contact__desc">
          <div class="contact__logo">
            <img src="../assets/svg/envelope.svg" />
          </div>
          <div class="contact__text">
            <p>ایمیل</p>
            <p class="eng-number">info@vipon.ir</p>
          </div>
        </div>
        <!--  -->
        <div class="contact__desc">
          <div class="contact__logo">
            <img src="../assets/svg/fax.svg" />
          </div>
          <div class="contact__text">
            <p>فکس</p>
            <p class="eng-number">021 9131 0333</p>
          </div>
        </div>
        <!--  -->
        <div class="contact__desc">
          <div class="contact__logo">
            <img src="../assets/svg/dollar-coin.svg" />
          </div>
          <div class="contact__text">
            <p>کد اقتصادی</p>
            <p class="eng-number">411664387994</p>
          </div>
        </div>
        <!--  -->
        <div class="contact__desc">
          <div class="contact__logo">
            <img src="../assets/svg/phoone.svg" />
          </div>
          <div class="contact__text">
            <p>شناسه ملی</p>
            <p class="eng-number">14009296230</p>
          </div>
        </div>
        <!--  -->
        <div class="contact__desc">
          <div class="contact__logo">
            <img src="../assets/svg/phoone.svg" />
          </div>
          <div class="contact__text">
            <p>شماره ثبت</p>
            <p class="eng-number">7945</p>
          </div>
        </div>
        <!--  -->
        <div class="contact__desc">
          <div class="contact__logo">
            <img src="../assets/svg/placeholder.svg" />
          </div>
          <div class="contact__text">
            <p>دفتر مرکزی :</p>
            <p class="max">
              اهواز - کیانپارس خیابان <span class="eng-number">18</span> فاز
              <span class="eng-number">2</span> غربی - پلاک
              <span class="eng-number">59</span>
            </p>
          </div>
        </div>
        <!--  -->
        <div class="contact__desc">
          <div class="contact__logo">
            <img src="../assets/svg/barcode.svg" />
          </div>
          <div class="contact__text">
            <p>کد پستی</p>
            <p class="eng-number">61558 84836</p>
          </div>
        </div>
      </div>
      <!-- placeholder for image -->
      <img src="../assets/image/building.jpg" class="contact__building" />
    </div>
    <!-- form -->
    <div class="contact__form-wrapper container">
      <form class="contact__form" @submit.prevent="handleSubmitForm">
        <div class="contact__form-title">فرم تماس با ما</div>
        <div class="contact__form--top">
          <div class="contact__form-item">
            <input
              v-model="name"
              type="text"
              placeholder="نام و نام خانوادگی"
            />
            <img src="../assets/svg/vipon/user.svg" />
          </div>
          <div class="contact__form-item">
            <input v-model="email" type="text" placeholder="ایمیل" />
            <img src="../assets/svg/envelope.svg" />
          </div>
          <div class="contact__form-item">
            <input v-model="phone" type="text" placeholder="موبایل" />
            <img src="../assets/svg/smartphone.svg" />
          </div>
          <div class="contact__form-item">
            <input v-model="title" type="text" placeholder="عنوان" />
            <img src="../assets/svg/vipon/resume.svg" />
          </div>
        </div>
        <div class="contact__form--bot">
          <textarea v-model="description" placeholder="توضیحات"></textarea>
        </div>
        <!-- <button type="submit" class="contact__btn">ارسال</button> -->
        <button class="contact__btn" type="submit">ارسال</button>
      </form>
    </div>
    <div class="contact__map container">
      <a
        href="https://www.google.com/maps/place/%D8%A8%D8%A7%D8%B4%DA%AF%D8%A7%D9%87+%D9%85%D8%B4%D8%AA%D8%B1%D9%8A%D8%A7%D9%86+%D9%88%D9%8A%D9%BE%D9%88%D9%86%E2%80%AD/@31.3547421,48.683424,18z/data=!3m1!4b1!4m5!3m4!1s0x3fc3df739e37b949:0x5334596903437a2f!8m2!3d31.3547398!4d48.6845183"
        target="_blank"
        class="contact__link"
        ><img src="../assets/image/location2.PNG"
      /></a>
    </div>
  </div>
</template>

<script>
import {
  schemaMaker,
  requiredString,
  requiredStringMin,
  requiredMaxMin,
} from '../plugins/Joy'
const schema = schemaMaker({
  user: requiredStringMin('نام کاربر', 3),
  email: requiredString('ایمیل'),
  description: requiredStringMin('توضیحات', 20),
  title: requiredStringMin('عنوان', 2),
  phone: requiredMaxMin('شماره تماس', 11, 11),
})
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      title: '',
      phone: '',
      email: '',
      description: '',
    }
  },
  head() {
    return {
      title: 'ویپون | vipon - تماس با ما',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  methods: {
    validation() {
      const { value, error } = schema.validate(
        {
          user: this.name,
          phone: this.phone,
          description: this.description,
          title: this.title,
          email: this.email,
        },
        {
          abortEarly: false,
        }
      )
      return { value, error }
    },
    async handleSubmitForm() {
      const validatedData = this.validation().value
      const errors = this.validation().error

      if (errors) {
        this.validation().error.details.forEach((i) => {
          this.$toast.error(i.message)
        })
      } else {
        const formData = new FormData()
        formData.append('name', validatedData.user)
        formData.append('phone_number', validatedData.phone)
        formData.append('title', validatedData.title)
        formData.append('email', validatedData.email)
        formData.append('description', validatedData.description)

        try {
          await this.$axios.$post('/contact/', formData, {
            'Content-Type': 'multipart/form-data',
          })
        } catch (error) {
          this.$toast.error(error.message)
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f8f9fb;
}
.contact__map {
  width: 100%;
  margin-bottom: 50px;
}
.contact__detail {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  align-items: flex-start;
  padding-top: 1rem;
}
.contact__link img {
  width: 100%;
  border-radius: 10px;
  height: 100%;
  object-position: center;
  object-fit: cover;
  min-height: 350px;
}
//
.contact__item {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
}
.contact__desc {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #eee;
  padding: 10px;
  border-radius: 10px;
  min-height: 60px;
  margin-bottom: 5px;
}

.contact__logo {
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 25px;
    height: 25px;
  }
}
.contact__text {
  max-width: 220px;
  p {
    font-size: 15px;
    color: #222;
  }
  .max {
    font-size: 14px;
  }
}

.contact__feedback {
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact__form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2.5rem;
  margin-top: 20px;
  ::placeholder {
    font-size: 14px;
    color: #999;
  }
  .contact__form-title {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .contact__form--top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    width: 100%;
    .contact__form-item {
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
.contact__form--bot {
  margin: 5px 0 10px;
  textarea {
    border-radius: 5px;
    min-width: 100%;
    max-width: 100%;
    min-height: 200px;
    max-height: 300px;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
    padding: 10px;
    font-size: 16px;
    color: #222;
    resize: none;
    background-color: #fff;
  }
}
.contact__btn {
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
.eng-number {
  direction: ltr;
  text-align: right;
  font-family: 'OpenSans';
}
.contact__building {
  position: relative;
  top: -15px;
  width: 100%;
}
@media only screen and (max-width: 1200px) {
  .contact__building {
    top: 5px;
  }
}
@media only screen and (max-width: 1100px) {
  .contact__building {
    top: 15px;
  }
}
@media only screen and (max-width: 1000px) {
  .contact__building {
    top: 20px;
  }
}

@media only screen and (max-width: 950px) {
  .contact__detail {
    grid-template-columns: 1fr;
  }
  .contact__building {
    order: 1;
    width: 100%;
    max-height: auto;
    margin-bottom: 20px;
  }
  .contact__item {
    order: 2;
    padding-top: 0;
  }
}
@media only screen and (max-width: 800px) {
  .contact__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 550px) {
  .contact__list {
    font-size: 14px;
  }
}
@media only screen and (max-width: 550px) {
  .contact__building {
    border-radius: 0 0 10px 10px;
  }

  .contact__desc {
    .contact__logo {
      height: 60px;
      width: 60px;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  .contact__form .contact__form--top {
    grid-template-columns: 1fr;
  }
}
.contact__form-wrapper {
  display: flex;
  width: 100%;
}
</style>