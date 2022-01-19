<template>
  <main>
    <section class="blog container" :class="[dataRetrived && 'blog--retrived']">
      <BlogSidebar />
      <div class="blog__articles" ref="articles">
        <BlogItem
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
          :showTag="false"
        />
      </div>
    </section>
    <div class="blog__observer">
      <Observer
        v-if="articles.length"
        @intersect="intersect"
        :dataRetrived="dataRetrived"
      />
    </div>
  </main>
</template>

<script>
const queryString = require('query-string')
export default {
  name: 'Blog',
  data: () => ({
    dataRetrived: null,
    scrollBot: false,
  }),
  async asyncData({ $axios, error }) {
    try {
      const article = await $axios.$get(`/article/`)
      console.log(article)
      const { results } = article
      return { articles: results, apiInfo: article }
    } catch (e) {
      if (e.message.includes('404')) {
        error({
          statusCode: 404,
          message: 'اطلاعات مورد نظر یافت نشد',
        })
      }
    }
  },
  methods: {
    async intersect() {
      const { next } = this.apiInfo
      if (!this.dataRetrived && next !== null) {
        this.scrollBot = true
        const nextPage = queryString.parse(next)
        const nextPageNumber = Object.values(nextPage)[0]
        try {
          const res = await this.$axios.$get(`/article/?page=${nextPageNumber}`)

          if (res.next == null) {
            this.dataRetrived = true
          }

          res.results.forEach((i) => {
            this.articles = [...this.articles, i]
          })
        } catch (error) {
          console.log(error)
        } finally {
          this.scrollBot = false
        }
      }
    },
  },
  watch: {
    scrollBot(newVal) {
      const body = document.querySelector('body')
      if (newVal) {
        body.style.top = `-${window.scrollY}px`
        body.style.overflow = 'hidden'
      }
      if (newVal == false) {
        const scrollY = body.style.top
        document.body.style.top = ''
        body.style.overflow= 'auto'
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
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
  background-color: #f7f6f5;
}
.blog__articles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}
.blog__observer {
  width: 100%;
}
.blog--retrived {
  padding-bottom: 2rem;
}
// queries
@media only screen and (max-width: 1100px) {
  .blog {
    grid-template-columns: 1fr;
  }
  .blog__articles {
    grid-template-columns: 1fr;
  }
}
</style>