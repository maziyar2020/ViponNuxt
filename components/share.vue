<template>
  <main class="main-section">
    <Subscription />
  </main>
</template>

<script>
export default {
  name: 'Share',
  head() {
    return {
      title: 'Vipon',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.main-section{
  margin-bottom: 3rem;
}
</style>