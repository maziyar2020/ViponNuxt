<template>
  <div class="container">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <img src="../assets/carousel/1.jpg" alt="" />
          </li>
          <li class="glide__slide">
            <img src="../assets/carousel/2.jpg" alt="" />
          </li>
          <li class="glide__slide">
            <img src="../assets/carousel/3.jpg" alt="" />
          </li>
          <li class="glide__slide">
            <img src="../assets/carousel/4.jpg" alt="" />
          </li>
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          <img src="../assets/svg/left-chevron.svg" alt="" />
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          <img src="../assets/svg/right-chevron.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'
export default {
  mounted() {
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 4,
      direction: 'rtl',
      autoplay: 2000,
      hoverpause: true,
      breakpoints: {
        1000: {
          perView: 3,
        },
        750: {
          perView: 2,
        },
        600: {
          perView: 1,
        },
      },
    }).mount()
  },
}
</script>

<style scoped lang="scss">
@import '../node_modules/@glidejs/glide/src/assets/sass/glide.core';
@import '../node_modules/@glidejs/glide/src/assets/sass/glide.theme';
.glide {
  padding: 30px 0;
  width: 100%;
  img {
    width: 100%;
    height: 200px;
    object-fit: fill;
  }
}
.glide__arrow {
  img {
    width: 12px;
    height: 12px;
  }
}
</style>