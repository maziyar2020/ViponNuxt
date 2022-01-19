<template>
  <aside class="blog__sidebar">
    <section class="blog__list">
      <p class="blog__list-title">دسته‌بندی‌های بلاگ</p>
      <div class="loading" v-if="loading">
        <img src="../../assets/svg/vipon-simple-logo.svg">
      </div>
      <NuxtLink
        :to="`/blog/category/${category.slug}`"
        class="blog__list-item"
        v-for="(category, index) in getCategories"
        :key="index"
        >{{ category.title }}</NuxtLink
      >
    </section>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BlogSidebar',
  data:()=>({
    loading : false
  }),
  computed: {
    ...mapGetters(['getCategories']),
  },
  methods: {
    async fetchCategories() {
      try {
        const { results } = await this.$axios.$get('/article/category/')
        this.$store.dispatch('handleCategory', results)
      } catch (error) {
        console.log(error)
      }finally{
        this.loading = false
      }
    },
  },
  mounted() {
    if (!this.getCategories.length) {
      this.loading = true
      this.fetchCategories()
    }
  },
}
</script>

<style scoped lang="scss">
.blog__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 10px 15px 15px;
  background-color: #fff;
  min-height: 100px;

  .blog__list-title {
    position: relative;
    color: #aaa;
    padding-right: 25px;
    font-size: 15px;
    align-self: flex-start;

    &:before {
      position: absolute;
      content: '';
      right: 0px;
      top: 6px;
      background: url('../../assets/image/blog/list.svg') no-repeat;
      width: 18px;
      height: 18px;
    }
  }
  .blog__list-item {
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.04);
    width: 100%;
    margin-top: 10px;
    padding: 3px 10px;
    color: #888;
    transition: all 0.4s ease;
    cursor: pointer;
    &:hover {
      border: 2px solid #c69e4ec4;
    }
  }
}
.loading{
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 30%;
  }
}

@media only screen and (max-width: 1100px) {
  .blog__sidebar {
    order: 2;
  }
  .blog__sidebar {
    margin-bottom: 30px;
  }
}
</style>