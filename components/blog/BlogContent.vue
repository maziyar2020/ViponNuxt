<template>
  <div class="blog__content">
    <img :src="item.image" class="blog__image" />
    <h1 class="blog__title">{{ item.title }}</h1>
    <div class="blog__desc">
      <div class="blog__time">
        <span>تاریخ انتشار : </span>
        <p>{{ timeFormater }}</p>
      </div>
      <NuxtLink
        :to="`/blog/category/${item.category.slug}`"
        class="blog__category"
        >{{ item.category.title }}</NuxtLink
      >
    </div>
    <div class="blog__text" v-html="item.text"></div>
    <div class="blog__tags-wrapper">
      <p>tags :</p>
      <div class="blog__tags">
        <NuxtLink
          class="blog__tag-item"
          v-for="(tag, index) in item.tags"
          :key="index"
          :to="`/blog/tag/${tag.slug}`"
        >
          {{ tag.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogContent',
  props: ['item'],
  computed: {
    timeFormater() {
      const timeOption = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        formatMatcher: 'basic',
      }
      const date = new Date(this.item.created_at)

      const dateFormater = date.toLocaleDateString('FA-IR', timeOption)

      const persianToEnglish = (param) =>
        param.replace(/[۰-۹]/g, (num) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(num))

      const finalDate = `${persianToEnglish(dateFormater)}`

      return finalDate
    },
  },
}
</script>

<style scoped lang="scss">
.blog__content {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  border-radius: 8px;
}
.blog__image {
  width: 100%;
  height: auto;
  max-width: 600px;
  border-radius: 10px;
}
.blog__title {
  font-weight: normal;
}
.blog__category {
  font-size: 15px;
  color: #c69e4e;
}
.blog__desc {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.07);
  padding: 6px 12px;
  border-radius: 10px;
  margin-bottom: 20px;
  p {
    font-family: 'OpenSans';
  }
}
.blog__time{
  display: flex;
  align-items: center;
  span{
    margin-left: 10px;
  }
}
.blog__tags-wrapper {
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    margin-bottom: 10px;
  }
}
.blog__tags {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  .blog__tag-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border-radius: 10px;
    font-size: 15px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.07);
  }
}
</style>