<template>
  <aside :class="['sidebar', getMenuOpenDetail && 'sidebar--active']">
    <header class="sidebar__close">
      <img src="../assets/svg/cancel.svg" @click="handleCloseSidebar" />
    </header>
    <div class="sidebar__list">
      <!-- HOme -->
      <div class="sidebar__item">
        <div class="sidebar__header" @click="accordion($event, 'link', '')">
          صفحه اصلی
        </div>
      </div>
      <!-- services -->
      <!-- <div class="sidebar__item">
        <div
          ref="facilities"
          class="sidebar__header"
          @click="accordion($event, 'link', 'blog')"
        >
          بلاگ
        </div> -->
        <!-- facilities links will be return soon امکانات -->
        <!-- <div class="sidebar__content">
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'facilities/coming-soon')"
            >طرح اعتباری</span
          >
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'facilities/coming-soon')"
            >سطح بندی مشتریان</span
          >
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'facilities/coming-soon')"
            >نظرسنجی مشتریان پس از خرید</span
          >
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'facilities/coming-soon')"
            >بونوس</span
          >
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'facilities/coming-soon')"
            >قرعه کشی</span
          >
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'facilities/coming-soon')"
            >نظرسنجی</span
          >
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'facilities/coming-soon')"
            >بن خرید</span
          >
        </div> -->
      <!-- </div> -->
      <!-- services -->
      <div class="sidebar__item">
        <div
          ref="support"
          class="sidebar__header sidebar__dropdown"
          @click="accordion($event, 'passive')"
        >
          پشتیبانی
        </div>
        <div class="sidebar__content">
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'service-center')"
            >مرکز خدمات ویپون</span
          >
          <span class="sidebar__link" @click="accordion($event, 'link', 'faq')"
            >سوالات متداول</span
          >
        </div>
      </div>
      <!-- agency -->
      <div class="sidebar__item">
        <div
          class="sidebar__header"
          @click="
            accordion($event, 'link', 'cooperation'),
              $store.dispatch('navigateToCooperationPage', 'CooperationText')
          "
        >
          درخواست نمایندگی
        </div>
      </div>
      <!-- about us -->
      <div class="sidebar__item">
        <div
          ref="about"
          class="sidebar__header sidebar__dropdown"
          @click="accordion($event, 'passive')"
        >
          درباره ما
        </div>
        <div class="sidebar__content">
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'aboutus')"
            >درباره ما</span
          >
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'certificates')"
            >مجوز های فعالیت</span
          >
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'manager-message')"
            >سخن مدیرعامل</span
          >
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'deputies')"
            >مدیران ویپون</span
          >
          <span
            class="sidebar__link"
            @click="accordion($event, 'link', 'rules')"
            >قوانین و مقررات</span
          >
          <span class="sidebar__link" @click="accordion($event, 'link', 'jobs')"
            >فرصت های شغلی</span
          >
        </div>
      </div>
      <!-- about us -->
      <div class="sidebar__item">
        <div
          class="sidebar__header"
          @click="accordion($event, 'link', 'contact')"
        >
          تماس با ما
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  props: ['menuOpen'],
  computed: {
    ...mapGetters(['getMenuOpenDetail']),
  },
  methods: {
    handleCloseSidebar() {
      this.$store.dispatch('handleToggleSidebar')
    },
    accordion($event, type, path) {
      const target = $event.target
      const content = target.nextElementSibling
      switch (type) {
        case 'link':
          this.$store.dispatch('handleToggleSidebar')
          this.$router.push(`/${path}`)
          break
        case 'passive':
          target.classList.toggle('sidebar__header--active')
          if (target.classList.contains('sidebar__header--active')) {
            content.style.maxHeight = content.scrollHeight + 'px'
          } else {
            content.style.maxHeight = 0 + 'px'
          }
          break
        default:
          this.$toast.error('لینک معتبر نیست با پشتیبانی تماس بگیرید')
          break
      }
    },
  },
  updated() {
    const support = this.$refs.support
    const about = this.$refs.about
    // const facilities = this.$refs.facilities
    //
    support.classList.remove('sidebar__header--active')
    support.nextElementSibling.style.maxHeight = 0 + 'px'
    //
    about.classList.remove('sidebar__header--active')
    about.nextElementSibling.style.maxHeight = 0 + 'px'
    //
    // facilities.classList.remove('sidebar__header--active')
    // facilities.nextElementSibling.style.maxHeight = 0 + 'px'
  },
}
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  transition: all 0.4s ease;
  transform: translateX(300%);
  width: 80vw;
  height: 100vh;
  background-color: #fff;
  top: 0;
  right: 0;
  z-index: 700;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  direction: ltr;
  border-radius: 30px 0 0 0;
}
.sidebar--active {
  transform: translateX(0);
}

.sidebar__close {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 10px 10px;
  // margin-bottom: 10px;
  img {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
}
.divider {
  width: 100%;
  background-color: #aaa;
  opacity: 0.2;
  margin-left: auto;
  height: 1px;
}

// sidebar menu
.slidebar__list,
.sidebar__item {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.sidebar__list {
  position: relative;
  &::before {
    content: '';
    width: 0px;
    height: 95%;
    border: 1px dashed #eee;
    position: absolute;
    top: 20px;
    right: 4px;
  }
}
.sidebar__item {
  .sidebar__header {
    padding: 10px 20px;
    position: relative;
    color: #000;
    cursor: pointer;
    text-align: right;
    &::before {
      content: '';
      position: absolute;
      right: 0px;
      top: 18px;
      width: 10px;
      height: 10px;
      background-color: #c69e4e;
      border-radius: 50%;
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
    }
  }
  .sidebar__content {
    padding: 0px 15px;
    font-size: 20px;
    overflow: hidden;
    max-height: 0;
    transition: all 0.5s linear;
    display: flex;
    flex-direction: column;
    text-align: right;
    .sidebar__link {
      width: 100%;
      padding: 10px 0;
      padding-right: 20px;
      color: #cc9933;
      font-size: 15px;
      position: relative;
      cursor: pointer;
      &::before {
        content: '';
        position: absolute;
        height: 0px;
        width: 20px;
        border: 1px dashed #eee;
        right: -7px;
        top: 22px;
      }
    }
  }
  .sidebar__dropdown::before {
    background: #cc9933;
  }
  @keyframes blink {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
}
</style>