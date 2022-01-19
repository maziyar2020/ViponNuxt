<template>
  <div class="soon">
    <div class="soon-inner container">
      <p class="soon__message">
        این صفحه به زودی در اختیار شما کاربر عزیز قرار خواهد گرفت
      </p>
      <NuxtLink to="/">بازگشت به صفحه اصلی</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Soon',
  head() {
    return {
      title: 'ویپون | vipon - به زودی',
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
.soon {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  background: url('../assets/image/turn-around.jpg') center;
  background-size: cover;
  margin-top: -60px;
}
.soon-inner {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  p {
    color: #c69e4e;
    font-size: 25px;
  }
  a {
    color: #eee;
    margin-top: 20px;
  }
}
@media only screen and (max-width: 700px) {
  .soon-inner {
    p {
      font-size: 18px;
    }
    a {
      margin-top: 10px;
    }
  }
}
@media only screen and (max-width: 500px) {
  .soon-inner {
    p {
      font-size: 16px;
    }
    a {
      margin-top: 8px;
    }
  }
}
</style>