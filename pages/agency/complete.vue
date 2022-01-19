<template>
  <div class="complete">
    <p class="complete__confirm">درخواست شما تایید شد</p>
    <span class="complete__contact">با شما تماس گرفته خواهد شد</span>
    <span class="complete__link" @click="redirectHome">برگشت به صفحه اصلی</span>
  </div>
</template>

<script>
export default {
  name: 'FormCompleted',
  middleware({ store, redirect }) {
    if (!store.state.formCompleted) {
      return redirect('/error')
    }
  },
  head() {
    return {
      title: 'ویپون | vipon - وضعیت درخواست نمایندگی',
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
    redirectHome() {
      this.$store.dispatch('handleFormInfo', false)
      this.$router.push('/')
    },
  },
}
</script>

<style scoped lang="scss">
.complete {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem;
  min-height: 60vh;
}
.complete__confirm {
  font-size: 25px;
  text-align: center;
  color: #c69e4e;
}
.complete__contact {
  text-align: center;
  font-size: 18px;
  color: #aaa;
  margin: 10px 0;
}
.complete__link {
  color: blue;
  text-align: center;
  cursor: pointer;
}
</style>