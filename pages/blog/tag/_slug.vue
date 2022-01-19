<template>
  <div class="blog container">
    <BlogSidebar />
    <div class="blog__items">
      <BlogItem
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
        :showTag="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  async asyncData({ $axios, params, error }) {
    try {
      const articles = await $axios.$get(`/article/tags/${params.slug}/`)

      return { articles }
    } catch (e) {
      if (e.message.includes('404')) {
        error({
          statusCode: 404,
          message: 'صفحه مورد نظر یافت نشد',
        })
      }
    }
  },
  computed: {
    pageSlug() {
      return this.$route.params.slug
    },
  },
}
</script>

<style scoped lang="scss">
.blog {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  width: 100%;
  overflow-x: hidden;
  padding-top: 1rem;
  padding-bottom: 4rem;
  background-color: #eee;
}
.blog__items {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.blog__item {
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
}
.blog__image {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
}
@media only screen and (max-width:1100px){
  .blog{
    grid-template-columns: 1fr;
  }
}
</style>