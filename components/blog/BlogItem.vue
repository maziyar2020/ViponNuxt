<!--  eslint-disable  -->
<template>
  <div class="blog__item">
    <div class="blog__detail">
      <img :src="article.image" />
      <p class="blog__header">{{ article.title }}</p>
      <p>{{ article.category.title }}</p>
      <p class="blog__short-text">{{ article.short_text }}</p>
      <div class="blog__tags" v-if="showTag">
        <NuxtLink
          :to="`/blog/tag/${tag}`"
          v-for="(tag, index) in article.tags"
          :key="index"
          class="blog__tag"
        >
          {{ tag }}
        </NuxtLink>
      </div>
    </div>
    <NuxtLink class="blog__btn" :to="`/blog/article/${article.slug}`"
      >ادامه مطلب</NuxtLink
    >
  </div>
</template>

<script>
export default {
  name: 'BlogItem',
  props: ['article', 'showTag'],
}
</script>

<style scoped lang="scss">
.blog__item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.07);
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px 10px;
  border-radius: 8px;
  .blog__detail{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  img {
    width: 300px;
    height: auto;
    max-width: 800px;
    border-radius: 10px;
  }
}

.blog__header{
  font-size: 30px;
  text-align: center;
  margin: 10px 0;
  width: 100%;
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
}
.blog__short-text{
  color: #777;
}
.blog__tags {
  position: relative;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}
.blog__tag {
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  color: #555;
  cursor: pointer;
}
.blog__btn {
  margin: 10px 0;
  border: 1px solid rgba(0, 0, 0, 0.03);
  height: 40px;
  width: 150px;
  border-radius: 10px;
  background-color: #c69e4e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
}
@media only screen and (max-width:1000px){
  .blog__item{
    img{
      width: 250px;
    }
  }
}
@media only screen and (max-width:700px){
  .blog__item{
    img{
      width: 90%;
    }
  }
}
</style>