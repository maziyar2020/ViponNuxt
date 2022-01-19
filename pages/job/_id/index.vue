<!-- eslint-disable --> 
<template>
  <div class="jobs container">
    <div v-html="job.description"></div>
    <NuxtLink :to="`/job/${$route.params.id}/apply`" class="jobs__link">تکمیل فرم</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Job',
  async asyncData({ $axios, params , error }) {
    try {
      const job = await $axios.$get(`/job/${params.id}/`)
      return { job }
    } catch (e) {
      if(e.message.includes('404')){
        error({
          statusCode : 404,
          message : 'صفحه مورد نظر یافت نشد'
        })
      }
    }
  },
  head() {
    return {
      title: ` ویپون | vipon - ${this.job.title}`,
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
.jobs {
  padding-top: 10px;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.jobs__link{
  background: #c69e4d;
  margin: 1rem 0;
  color: #111;
  height: 40px;
  font-family: 'IranSans';
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 10px;
}
</style>