<template>
  <div class="blog container">
    <BlogSidebar />
    <div class="blog__content">
      <BlogItem
      v-for="(category, index) in categories"
      :key="index"
      :article="category"
      :showTag="false"
    />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCategory',
  async asyncData({ $axios, error, params }) {
    try {
      const article = await $axios.$get(`/article/categories/${params.slug}`)
      console.log(article)

      return { categories: article }
    } catch (e) {
      if (e.message.includes('404')) {
        error({
          statusCode: 404,
          message: 'اطلاعات مورد نظر یافت نشد',
        })
      }
    }
  },
}
</script>

<style scoped lang="scss">
.blog{
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
}
.blog__content{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 15px;
  width: 100%;
  margin-bottom: 30px;
}
@media only screen and (max-width: 1000px) {
  .blog{
    grid-template-columns: 1fr;
  }
  .blog__item{
    margin-bottom: 10px;
  }
  .blog__item:last-child{
    margin-bottom: 0;
  }
  .blog__content{
    grid-template-columns: 1fr;
    margin-bottom: 0px;
  }
}
</style>