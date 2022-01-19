<template>
  <div>
    <div class="certificate container">
      <p class="certificate__header">مجوز های فعالیت</p>
      <div class="certificate__list">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="certificate__item"
        >
          <img
            :src="require(`../assets/image/certif${item.id}.jpg`)"
            class="certificate__img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Certifications',
  data() {
    return {
      modal: false,
      image: '',
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    }
  },
  head() {
    return {
      title: 'ویپون | vipon - مجوزهای فعالیت',
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
.certificate {
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
}
.certificate__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px 0;
}
.certificate__header {
  text-align: center;
  font-size: 20px;
}
.certificate__item {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
}
.certificate__img {
  width: 100%;
  height:auto;
}

</style>