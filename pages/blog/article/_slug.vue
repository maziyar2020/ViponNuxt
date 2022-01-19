<template>
  <div class="article container">
    <BlogSidebar />
    <div class="article__content">
      <BlogContent :item="article"  />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Articles',
  async asyncData({ $axios, params, error }) {
    try {
      const article = await $axios.$get(`/article/${params.slug}/`)
      return { article }
    } catch (e) {
      if (e.message.includes('404')) {
        error({
          statusCode: 404,
          message: 'صفحه مورد نظر یافت نشد',
        })
      }
    }
  },
}
</script>

<style scoped lang="scss">
.article {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  width: 100%;
  overflow-x: hidden;
  // padding: 1rem 20px 4rem;
  padding-top: 1rem;
  padding-bottom: 4rem;
  background-color: #eee;
}
.article__content{
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width : 1100px){
  .article{
    grid-template-columns: 1fr;
  }
}
</style>