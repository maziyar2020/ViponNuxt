<template>
  <main>
    <Hero />
    <Benefits />
    <Device />
    <Demo />
    <Certifications />
    <Cooperate />
  </main>
</template>

<script>
import AOS from 'aos'
export default {
  name: 'Home',
  head() {
    return {
      title: 'ویپون | vipon - خانه',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'باشگاه مشتریان ویپون',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'باشگاه مشتریان ویپون',
        },
      ],
    }
  },
  mounted() {
    AOS.init({})
  },
}
</script>
<style scoped>
main {
  margin-bottom: 80px;
}
</style>