<template>
  <div class="observer" :class="[dataRetrived && 'observer--off']">
    <div class="loading-wrapper" v-if="!dataRetrived">
      <img src="../../assets/svg/vipon-simple-logo.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'observer',
  data() {
    return {
      observer: null,
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('intersect')
      }
    })

    this.observer.observe(this.$el)
  },
  props: ['dataRetrived'],
}
</script>

<style scoped>
.observer {
  height: 120px;
  background-color: #f7f6f5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.observer--off {
  height: 0;
}
.loading-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}
.loading-wrapper img {
  width: 100px;
  height: 100px;
  margin-top: -20px;
}
</style>