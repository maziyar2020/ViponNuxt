<template>
  <div class="error">
    <div class="error-inner">
      <p class="error__status">{{ error.statusCode }}</p>

      <span v-if="notFound">{{ notFound }}</span>

      <span v-else>{{ error.message }}</span>

      <NuxtLink to="/">بازگشت به صفحه اصلی</NuxtLink>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Error',
  data: () => ({
    notFound: false,
  }),
  layout: 'noNavbar',
  props: ['error'],
  mounted() {
    if (this.error == 404) this.notFound = true
    else this.notFound = false
  },
}
</script>

<style scoped lang="scss">
.error {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: url('../assets/image/turn-around.jpg') center;
  background-size: cover;
  align-items: center;
}
.error-inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.error__status {
  font-family: 'OpenSans';
  color: #fff;
  font-size: 60px;
  margin-bottom: 10px;
}
span {
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
}
a {
  font-size: 16px;
  color: #c69e4b;
}
</style>