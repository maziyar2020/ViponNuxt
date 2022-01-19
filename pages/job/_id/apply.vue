<!-- eslint-disable -->
<template>
  <div class="recruitment-wrapper container">
    <form class="recruitment" @submit.prevent="formSubmitted">
      <div class="recruitment__title">فرم استخدام</div>
      <BaseInput elementType="userName" name="نام و نام خانوادگی " />
      <BaseInput elementType="email" name="ایمیل" />
      <BaseInput elementType="phone" name="شماره تماس" />
      <BaseInput elementType="desc" name="متن توضیحات" />
      <BaseInput
        elementType="file"
        name="عکس پرسنلی و رزومه"
        @resume="handleResume"
        @profile="handleProfile"
        :image="imageBaseCode"
        :resumeUploaded="resumeUploaded"
        :resumeFileName="resumeFileName"
      />
      <button
        type="submit"
        :class="[
          'recruitment__btn',
          !formCompleted && 'recruitment__btn--deactive',
        ]"
        :disabled="checkFormField"
      >
        <p v-if="!formConfirmed" class="btn__text">ارسال درخواست</p>
        <div class="lds-dual-ring" v-else></div>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  schemaMaker,
  requiredString,
  requiredObject,
  requiredStringMin,
} from '../../../plugins/Joy'
const schema = schemaMaker({
  userName: requiredStringMin('نام و نام خانوادگی', 3),
  cv: requiredObject('رزومه'),
  description: requiredString('شماره تماس'),
  email: requiredString('ایمیل'),
  phoneNumber: requiredStringMin('شماره تماس', 11),
  profileImage: requiredObject('عکس پرسنلی'),
})
export default {
  name: 'Apply',
  async asyncData({ params, error, $axios, store }) {
    try {
      const data = await $axios.$get(`/job/${params.id}/`)
      store.dispatch('handleJobId', data)
      return { data }
    } catch (e) {
      if (e.message.includes('404')) {
        error({
          statusCode: 404,
          message: 'صفحه مورد نظر یافت نشد',
        })
      }
    }
  },
  data() {
    return {
      resume: null,
      resumeBlob: null,
      image: null,
      imageBlob: null,
      uploader: null,
      imageBaseCode: null,
      resumeUploaded: false,
      resumeFileName: '',
      formCompleted: false,
      formConfirmed: false,
    }
  },
  head() {
    return {
      title: 'ویپون | vipon - فرم استخدام',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getPhone',
      'getEmail',
      'getExp',
      'getDesc',
      'getResume',
      'getPersonalImage',
      'getJobId',
    ]),
    checkFormField() {
      if (this.imageBlob && this.resumeBlob) {
        this.formFieldsCompleted()
        return false
      } else return true
    },
  },
  methods: {
    formFieldsCompleted() {
      this.formCompleted = true
    },
    validation() {
      const { error, value } = schema.validate(
        {
          userName: this.getUser,
          cv: this.resumeBlob,
          description: this.getDesc,
          email: this.getEmail,
          phoneNumber: this.getPhone,
          profileImage: this.imageBlob,
        },
        { abortEarly: false }
      )
      // returning the errors and values whenever this method called
      return { error, value }
    },
    handleResume(resume) {
      const file = resume.target.files[0]
      if (file !== undefined) {
        if (
          file.size > 2000000 ||
          (!file.type.match('image.*') && !file.type.match('application/pdf'))
        ) {
          this.$toast.error('فایل ورودی باید عکس یا PDF باشد')
        } else {
          this.uploader = 'resume'
          const reader = new FileReader()
          this.resumeFileName = file.name
          reader.addEventListener('load', (event) => {
            this.resume = event.target.result
            this.$store.dispatch('handleResume', this.resume)
            this.blobConvert()
          })
          reader.readAsDataURL(file)
        }
      } else {
        this.$toast.error('فایل ورودی مجاز نمیباشد')
      }
    },
    handleProfile(image) {
      const file = image.target.files[0]
      if (file !== undefined && file.type.match('image.*')) {
        if (file.size > 2000000) {
          this.$toast.error('حجم فایل ورودی بیش از حد مجاز است')
        } else {
          this.uploader = 'image'
          const reader = new FileReader()
          reader.addEventListener('load', (event) => {
            this.image = event.target.result
            this.imageBaseCode = this.image
            this.$store.dispatch('handlePersonalImage', this.image)
            this.blobConvert()
          })
          reader.readAsDataURL(file)
        }
      } else {
        this.$toast.error('فایل ورودی مجاز نمیباشد')
      }
    },
    async formSubmitted() {
      this.formConfirmed = true
      const validatedData = this.validation().value

      if (this.validation().error) {
        this.validation().error.details.forEach((i) => {
          this.$toast.error(i.message)
        })
        this.formConfirmed = false
      } else {
        const formDetail = {
          username: validatedData.userName,
          phoneNumber: validatedData.phoneNumber,
          email: validatedData.email,
          description: validatedData.description,
          resume: validatedData.cv,
          personalImage: validatedData.profileImage,
        }
        const formData = new FormData()
        formData.append('name', formDetail.username)
        formData.append('email', formDetail.email)
        formData.append('phone_number', formDetail.phoneNumber)
        formData.append('description', formDetail.description)
        formData.append('cv', formDetail.resume, 'image.jpg')
        formData.append('personal_image', formDetail.personalImage, 'image.jpg')
        formData.append('job', this.getJobId.id)

        try {
          await this.$axios.post(
            `/job/${this.$route.params.id}/apply/`,
            formData,
            {
              'Content-Type': 'multipart/form-data',
            }
          )

          this.$store.dispatch('handleClearFormFields')
          this.$store.dispatch('handleFormInfo', true)
          this.$router.push(`/job/${this.$route.params.id}/complete`)
        } catch (error) {
          this.$toast.error(error.message)
        } finally {
          this.formConfirmed = false
        }
      }
    },
    blobConvert() {
      // convert url to blob
      function dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        const byteString = atob(dataURI.split(',')[1])

        // separate out the mime component
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        const arrayBuffer = new ArrayBuffer(byteString.length)
        const _ia = new Uint8Array(arrayBuffer)
        for (let i = 0; i < byteString.length; i++) {
          _ia[i] = byteString.charCodeAt(i)
        }

        const dataView = new DataView(arrayBuffer)
        const blob = new Blob([dataView.buffer], { type: mimeString })
        return blob
      }
      if (this.uploader === 'resume') {
        this.resumeBlob = dataURItoBlob(this.getResume)
        this.resumeUploaded = true
      }
      if (this.uploader === 'image') {
        this.imageBlob = dataURItoBlob(this.getPersonalImage)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.recruitment-wrapper {
  background-color: #f8f9fa;
  padding-top: 1.5rem;
  padding-bottom: 5rem;
}
.recruitment {
  display: flex;
  flex-direction: column;
}
.recruitment__title {
  font-size: 22px;
  color: #555;
  margin-bottom: 20px;
}
.recruitment__btn {
  width: 200px;
  height: 50px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin: 10px auto 0;
  box-shadow: 0px 0px 10px 2px rgba(229, 188, 108, 0.5);
}
@keyframes warm {
  0% {
    background-position: 0% 99%;
  }
  50% {
    background-position: 100% 2%;
  }
  100% {
    background-position: 0% 99%;
  }
}
.recruitment__btn--deactive {
  opacity: 0.5;
  cursor: no-drop;
}
</style>