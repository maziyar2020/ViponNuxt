<!-- eslint-disable -->
<template>
  <div class="branch-wrapper">
    <form class="branch" @submit.prevent="formSub">
      <p class="branch__title">درخواست نمایندگی</p>
      <BaseInput elementType="userName" name="نام و نام خانوادگی" />
      <BaseInput elementType="phone" name="شماره تماس" />
      <BaseInput elementType="jobField" name="زمینه فعالیت" />
      <BaseInput elementType="cityAndProvince" name="استان | شهر" />
      <button type="submit" class="branch__btn">ارسال درخواست</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  schemaMaker,
  requiredStringMin,
  requiredMaxMin,
  requiredNumber,
} from '../../plugins/Joy'
const schema = schemaMaker({
  name: requiredStringMin('نام کاربر', 3),
  phone: requiredMaxMin('شماره تماس', 11, 11),
  jobField: requiredStringMin('زمینه فعالیت', 2),
  province: requiredNumber('استان'),
  city: requiredNumber('شهر'),
})
export default {
  name: 'Branch',
  data:()=>({
    errors : []
  }),
  computed: {
    ...mapGetters(['getJobField', 'getCity', 'getPhone', 'getUser']),
  },
  methods: {
    validation() {
      const { error, value } = schema.validate(
        {
          name: this.getUser,
          phone: this.getPhone,
          jobField: this.getJobField,
          province: this.getCity.province,
          city: this.getCity.id,
        },
        {
          abortEarly: false,
        }
      )
      return { error, value }
    },
    async formSub() {
      const values = this.validation().value

      if (this.validation().error) {
        this.errors = []
        this.validation().error.details.forEach((i) => {
          this.errors.push(i)
        })
        this.$store.dispatch('handleFormErrors',this.errors)
      } else {
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('phone_number', values.phone)
        formData.append('activity_field', values.jobField)
        formData.append('province', values.province.toString())
        formData.append('city', values.city.toString())

        try {
          await this.$axios
            .$post('/agent/', formData, {
              'Content-Type': 'multipart/form-data',
            })
            .then((Response) => {
              this.$store.dispatch('handleFormInfo', true)
              this.$toast.success('درخواست شما موفقیت آمیز بود')
              this.$router.push('/agency/complete')
            })
        } catch (error) {
          if (error.message.includes('404')) {
            this.$toast.error('یافت نشد')
          }
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.branch-wrapper {
  background-color: #f8f9fa;
  padding: 1.5rem 2rem 2rem;
  border-radius: 30px;
}
.branch {
  display: flex;
  flex-direction: column;
}
.branch__title {
  font-size: 22px;
  color: #555;
  margin-bottom: 20px;
}
.branch__btn {
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
  margin: 20px auto 0;
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
@media only screen and (max-width: 500px) {
  .branch-wrapper {
    padding: 1rem 1rem 2rem;
  }
}
</style>