<!-- eslint-disable -->
<template>
  <div class="videos-wrapper container">
    <p class="videos__title">مشاهده ویدیو ها</p>
    <div class="videos">
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="video__item"
        @click="openVideo(video)"
      >
        <img :src="video.thumbnail" alt="" />
        <div class="video__play-image">
          <svg class="" viewBox="0 0 448 512" @click.self="isOpen = !isOpen">
            <path
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <NuxtLink to="/videos" class="videos__button"> مشاهده همه </NuxtLink>
    <VideoModal
      :isOpen="isOpen"
      v-if="isOpen"
      :src="src"
      @player-closed="isOpen = !isOpen"
    />
  </div>
</template>

<script>
export default {
  name: 'VideoSection',
  data() {
    return {
      isOpen: false,
      videos: [],
      src : ''
    }
  },
  async fetch() {
    // const { results } = await this.$axios.$get('/api/v1/video/')
    // this.videos = results
  },
  methods: {
    openVideo(object) {
      this.src = object.video
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scope>
.videos-wrapper {
  background-color: #000;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
}
.videos__title {
  color: #fff;
  text-align: center;
  margin: 20px 0;
  font-size: 20px;
}
.videos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
.video__item {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
}
.video__item:hover .video__play-image {
  box-shadow: 0px 0px 5px 1px rgba(229, 188, 108, 1);
}

.video__play-image {
  width: 50px;
  height: 50px;
  position: absolute;
  left: calc(50% - 35px);
  right: calc(50% - 25px);
  top: calc(50% - 25px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  transition: all 0.2s ease;
}
.video__play-image svg {
  width: 20px;
  height: 20px;
  fill: #222;
  margin-left: 5px;
}
.video__item img {
  filter: saturate(0.1);
  width: 100%;
  border-radius: 5px;
  height: 100%;
}
.videos__button {
  width: 130px;
  margin: 30px 0 0;
  background: linear-gradient(
    159deg,
    rgba(148, 105, 16, 1) 0%,
    rgba(229, 188, 108, 1) 100%
  );
  align-self: center;
  padding: 5px 10px;
  border-radius: 10px;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 1100px) {
  .videos {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 678px) {
  .videos {
    grid-template-columns: 1fr;
  }
}
</style>