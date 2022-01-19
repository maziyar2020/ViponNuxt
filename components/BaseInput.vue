<!-- eslint-disable -->
<template>
  <div class="input">
    <!-- input label -->
    <label class="input__label">{{ name }}</label>
    <!-- input for username -->
    <div v-if="elementType == 'userName'" class="input__wrapper">
      <div class="input__field">
        <input v-model="username" type="text" :placeholder="name" />
        <div v-if="getErrors.length && errorsArray['username'].length !== 0">
          {{ errorsArray['username'].message }}
        </div>
      </div>
    </div>
    <!-- input for phonenumber -->
    <div v-if="elementType == 'phone'" class="input__wrapper">
      <div class="input__field">
        <input v-model="phone" type="text" :placeholder="name" />
        <div v-if="getErrors.length && errors.phone">
          {{ errorsArray['phone'].message }}
        </div>
      </div>
    </div>
    <!-- input for email -->
    <div v-if="elementType == 'email'" class="input__wrapper">
      <div class="input__field">
        <input v-model="email" type="text" :placeholder="name" />
      </div>
    </div>
    <!-- input for working field -->
    <div v-if="elementType == 'jobField'" class="input__wrapper">
      <div class="input__field">
        <input v-model="jobField" type="text" :placeholder="name" />
      </div>
    </div>
    <!-- input for city and province -->
    <div v-if="elementType == 'cityAndProvince'" class="input__wrapper">
      <div class="input__field">
        <div class="input__trigger">
          <span class="input__city" @click="handleChooseLocation">{{
            cityAndProvinceText
          }}</span>
        </div>
      </div>
    </div>
    <!-- radio btn 2x options -->
    <div v-if="elementType == 'radio'" class="input__wrapper">
      <div class="input__radio-box">
        <label class="checkbox">
          <input
            type="radio"
            name="gender"
            :checked="male == true"
            @click="male = true"
          />
          <span class="checkmark"></span>
          <p>{{ firstOption }}</p>
        </label>
      </div>
      <div class="input__radio-box">
        <label class="checkbox">
          <input
            type="radio"
            name="gender"
            :checked="male == false"
            @click="male = false"
          />
          <span class="checkmark"></span>
          <p>{{ secondOption }}</p>
        </label>
      </div>
    </div>
    <!-- text area for exprience -->
    <div v-if="elementType == 'exprience'" class="input__wrapper">
      <textarea
        v-model="exprience"
        class="input__text-area"
        name=""
        :placeholder="name"
      ></textarea>
    </div>
    <!-- text area for description -->
    <div v-if="elementType == 'desc'" class="input__wrapper">
      <textarea
        v-model="description"
        class="input__text-area"
        name=""
        :placeholder="name"
      ></textarea>
    </div>
    <!-- file uploaders -->
    <div v-if="elementType == 'file'" class="input__wrapper">
      <div class="input__file">
        <div class="input__resume">
          <p class="input__header">رزومه</p>
          <span class="input__desc"
            >فایل ورودی نباید بیش از 2 مگابایت باشد</span
          >
          <div class="input__dropzone">
            <div v-if="resumeUploaded" class="input__resume__status">
              <img src="../assets/svg/tick-green.svg" />
              <p>{{ resumeName }}</p>
            </div>
            <input type="file" @change="$emit('resume', $event)" />
          </div>
        </div>
        <div class="input__pic">
          <p class="input__header">عکس پرسنلی</p>
          <span class="input__desc"
            >فایل ورودی نباید بیش از 2 مگابایت باشد</span
          >
          <div class="input__dropzone">
            <img v-if="image !== null" :src="image" />
            <input type="file" @change="$emit('profile', $event)" />
          </div>
        </div>
      </div>
    </div>
    <div class="modal" v-if="modal.prov">
      <div class="modal__header">
        <p>انتخاب استان</p>
      </div>
      <div class="modal__items">
        <p
          v-for="province in provinces"
          :key="province.id"
          @click="handleSelectProv(province)"
        >
          {{ province.name }}
        </p>
      </div>
    </div>
    <div
      class="overlay"
      v-if="modal.prov"
      @click="
        modal.prov = !modal.prov
        city = ''
        province = ''
      "
    ></div>
    <div class="modal" v-if="modal.city">
      <div class="modal__header">
        <p>انتخاب استان</p>
      </div>
      <div class="modal__items">
        <p
          v-for="city in cities"
          :key="city.id"
          @click="handleSelectCity(city)"
        >
          {{ city.name }}
        </p>
      </div>
    </div>
    <div
      class="overlay"
      v-if="modal.city"
      @click="
        modal.city = !modal.city
        city = ''
        province = ''
      "
    ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
/* eslint-disable */
export default {
  name: 'BaseInput',
  props: [
    'name',
    'elementType',
    'firstOption',
    'secondOption',
    'image',
    'resumeUploaded',
    'resumeFileName',
  ],
  data() {
    return {
      username: '',
      male: null,
      gender: '',
      phone: '',
      email: '',
      exprience: '',
      description: '',
      jobField: '',
      city: '',
      province: '',
      resumeName: '',
      provinces: [],
      cities: [],
      modal: {
        prov: null,
        city: null,
      },
      demo: {
        city: '',
        prov: '',
      },
      errors: {
        username: false,
        phone: false,
      },
      errorsArray: {
        username: [],
        phone: [],
        email: [],
        jobField: [],
        cityAndProvince: [],
      },
    }
  },
  watch: {
    username(newVal) {
      this.$store.dispatch('handleUpdateUserName', newVal)
    },
    male(newVal) {
      newVal ? (this.gender = '1') : (this.gender = '2')
      this.$store.dispatch('handleUpdateGender', this.gender)
    },
    phone(newVal) {
      this.$store.dispatch('handlePhoneNumber', newVal)
    },
    email(newVal) {
      this.$store.dispatch('handleEmail', newVal)
    },
    exprience(newVal) {
      this.$store.dispatch('handleExprience', newVal)
    },
    description(newVal) {
      this.$store.dispatch('handleDescription', newVal)
    },
    jobField(newVal) {
      this.$store.dispatch('handleJobField', newVal)
    },
    city(newVal) {
      this.$store.dispatch('handleCity', newVal)
    },
    resumeFileName(newVal) {
      if (newVal.length > 40) {
        const fileName = newVal.slice(0, 20) + '...'
        this.resumeName = fileName
      } else {
        this.resumeName = newVal
      }
    },
    'modal.prov'(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
    'modal.city'(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
  },
  methods: {
    async handleChooseLocation() {
      try {
        const { data } = await this.$axios.get('/core/province')
        this.modal.prov = true
        this.provinces = data
      } catch (error) {
        console.log(error)
      }
    },
    async handleSelectProv(item) {
      this.modal.prov = false
      this.province = item
      const { data } = await this.$axios.get(
        `/core/city?province_id=${item.id}`
      )
      this.cities = data
      this.modal.city = true
    },
    handleSelectCity(item) {
      this.modal.city = false
      this.city = item
      this.demo = {
        prov: this.province,
        city: item,
      }
      this.$emit('demo', this.demo)
    },
  },
  computed: {
    ...mapGetters(['getErrors']),
    cityAndProvinceText() {
      if (this.province == '' && this.city == '') {
        return 'انتخاب شهر و استان'
      }
      if (this.province !== '' && this.city == '') {
        return `انتخاب شهر || ${this.province.name}`
      } else {
        return `${this.province.name} | ${this.city.name}`
      }
    },
  },
  updated() {

    if (this.getErrors.length) {
      const errorList = this.getErrors
      errorList.forEach((i) => {
        if (i.path == 'name') {
          this.errors.username = true
          this.errorsArray['username'] = i
        }
        if (i.path == 'phone') {
          this.errors.phone = true
          this.errorsArray['phone'] = i
        }
      })

    }
  },
}
</script>

<style scoped lang="scss">
// custom radio btn
@import '../assets/styles/custom-radio';

.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
}
.input__label {
  width: 100%;
  background: linear-gradient(
    270deg,
    rgba(217, 199, 163, 1) 0%,
    rgba(225, 226, 226, 1) 55%
  );
  padding: 5px 12px;
  border-radius: 5px;
  color: #776541;
  margin-bottom: 10px;
  &::selection {
    background: black;
    color: #fff;
  }
}
input::selection,
textarea::selection {
  background: #000;
  color: #fff;
}
/* text */
.input__field {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}
.input__field input {
  border-radius: 4px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  display: block;
  height: 55px;
  border: 1px solid #e6e6e6;
  position: relative;
  // flex: 1 1 auto;
  width: 100%;
}
::placeholder {
  color: #cecece;
  font-size: 14px;
}
/* radio */
.input__wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.input__radio-box {
  width: 100px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  p {
    padding-right: 35px;
    font-size: 17px;
    line-height: 19px;
  }
}

.input__text-area {
  min-width: 100%;
  max-height: 200px;
  height: 100px;
  max-width: 100%;
  padding: 10px;
  font-size: 15px;
  color: #222;
}
.input__file {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
}
.input__resume {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  position: relative;
  .input__dropzone {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    background: #fff url('../assets/svg/vipon/resume.svg') no-repeat center;
    position: relative;
    input {
      opacity: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      cursor: pointer;
    }
  }
}
.input__pic {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  .input__dropzone {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    background: #fff url('../assets/svg/vipon/user.svg') no-repeat center;
    position: relative;
    input {
      opacity: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
    }
  }
}
.input__header {
  font-size: 22px;
}
.input__desc {
  font-size: 15px;
  color: #aaa;
  margin-bottom: 10px;
}
.input__works {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  .input__work {
    padding-right: 10px;
  }
}
.input__workfield-text {
  padding-right: 35px;
  font-size: 17px;
  line-height: 19px;
}
// resume uploader
.input__resume__status {
  background-color: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  div {
    margin-top: -20px;
  }
  img {
    width: 50px;
    height: 50px;
    position: relative;
  }
  p {
    font-size: 10px;
    color: #222;
    text-align: center;
    width: 80%;
    direction: ltr;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1000px) {
  .input__file {
    grid-template-columns: 1fr;
    gap: 5px;
  }
  .input__pic {
    margin-bottom: 20px;
  }
  .input__works {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    .checkbox {
      padding-left: 0;
    }
  }
}
.input__trigger {
  display: grid;
  grid-template-columns: repeat(1fr);
  gap: 30px;
  width: 100%;
  span {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  left: 0;
  margin: auto;
  width: 80vw;
  height: 50vh;
  top: 0px;
  bottom: 0;
  background: #fff;
  z-index: 2000;
  overflow: hidden;
  direction: ltr;
  border-radius: 10px;
  .modal__header {
    background: #eee;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: #c69e4e;
    font-size: 17px;
  }
  .modal__items {
    padding: 10px 15px;
    overflow: auto;
    p {
      margin-bottom: 10px;
      background-color: #f5f6f7;
      border-radius: 10px;
      padding: 10px;
      text-align: center;
      cursor: pointer;
    }
  }
}
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 70;
}
</style>