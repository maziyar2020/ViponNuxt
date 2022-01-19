<template>
  <nav class="navbar container">
    <div class="navbar__nav">
      <div class="navbar__flag">
        <img src="../assets/svg/flag.svg" />
      </div>
      <ul class="navbar__list" lor.type>
        <li class="navbar__item">
          <nuxt-link to="/" class="navbar__link">صفحه اصلی</nuxt-link>
        </li>
        <i class="navbar__divider"></i>
        <!-- <li
          class="navbar__item navbar__dropdown"
          @mouseenter="handleOpenDropdown('facilitiesOpen')"
          @mouseleave="handleOpenDropdown('facilitiesClose')"
        >
          <span class="navbar__link">امکانات</span>
          <div
            class="dropdown"
            :class="[
              facilities && 'dropdown__content',
              getDropDownStatus && 'dropdown__hidden',
            ]"
          >
            <NuxtLink to="/facilities/coming-soon">طرح اعتباری</NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/facilities/coming-soon">سطح بندی مشتریان</NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/facilities/coming-soon">نظرسنجی مشتریان پس از خرید</NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/facilities/coming-soon">بونوس</NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/facilities/coming-soon">قرعه کشی</NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/facilities/coming-soon">نظر سنجی</NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/facilities/coming-soon">بن خرید</NuxtLink>
          </div>
        </li> -->
        <!-- <li class="navbar__item">
          <NuxtLink to="/blog" class="navbar__link">بلاگ</NuxtLink>
        </li> -->
        <!-- <i class="navbar__divider"></i> -->
        <li
          class="navbar__item navbar__dropdown"
          @mouseenter="handleOpenDropdown('supportOpen')"
          @mouseleave="handleOpenDropdown('supportClose')"
        >
          <span class="navbar__link">پشتیبانی</span>
          <div
            class="dropdown"
            :class="[
              support && 'dropdown__content',
              getDropDownStatus && 'dropdown__hidden',
            ]"
          >
            <NuxtLink to="/service-center">مرکز خدمات ویپون</NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/faq">سوالات متداول</NuxtLink>
          </div>
        </li>
        <i class="navbar__divider"></i>
        <li class="navbar__item" @click="$store.dispatch('navigateToCooperationPage','CooperationText')">
          <nuxt-link to="/cooperation" class="navbar__link"
            >درخواست نمایندگی</nuxt-link
          >
        </li>
        <i class="navbar__divider"></i>
        <li
          class="navbar__item navbar__dropdown"
          @mouseenter="handleOpenDropdown('aboutOpen')"
          @mouseleave="handleOpenDropdown('aboutClose')"
        >
          <span class="navbar__link">درباره ما</span>
          <div
            class="dropdown"
            :class="[
              about && 'dropdown__content',
              getDropDownStatus && 'dropdown__hidden',
            ]"
          >
            <NuxtLink to="/aboutus">درباره ما</NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/certificates"> مجوز های فعالیت </NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/manager-message"> سخن مدیر عامل </NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/deputies">مدیران ویپون</NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/rules"> قوانین و مقررات </NuxtLink>
            <i class="divider"></i>
            <NuxtLink to="/jobs">فرصت های شغلی</NuxtLink>
          </div>
        </li>
        <i class="navbar__divider"></i>
        <li class="navbar__item">
          <nuxt-link to="/contact" class="navbar__link">تماس با ما</nuxt-link>
        </li>
      </ul>
      <div
        class="navbar__expand"
        :class="[getMenuOpenDetail && 'navbar__expand--active']"
        @click="navbarExpand"
      >
        <div class="navbar__expand-button"></div>
      </div>
    </div>
    <NuxtLink to="/" class="navbar__logo">
      <img src="../assets/svg/vipon.svg" />
    </NuxtLink>
    <div
      v-if="getMenuOpenDetail"
      class="sidebar__overlay"
      @click.self="navbarExpand"
    ></div>
    <Sidebar />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  data: () => ({
    facilities: false,
    support: false,
    about: false,
  }),
  computed: {
    ...mapGetters([
      'getNavbarAbout',
      'getNavbarSupport',
      'getMenuOpenDetail',
      'getDropDownStatus',
    ]),
  },
  watch: {
    getMenuOpenDetail(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
  },
  methods: {
    navbarExpand() {
      this.$store.dispatch('handleToggleSidebar')
    },
    handleOpenDropdown(item) {
      switch (item) {
        case 'facilitiesOpen':
          if (!this.getDropDownStatus) {
            this.facilities = true
          }
          break
        case 'facilitiesClose':
          this.facilities = false
          break
        case 'supportOpen':
          if (!this.getDropDownStatus) {
            this.support = true
          }
          break
        case 'supportClose':
          this.support = false
          break
        case 'aboutOpen':
          if (!this.getDropDownStatus) {
            this.about = true
          }
          break
        case 'aboutClose':
          this.about = false
          break
        default:
          break
      }
    },
  },
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 5px;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 60;
  background-color: #fff;
  transition: 0.3s ease all;
  height: 65px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
}
/* navbar logo styles */
.navbar__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
}
.navbar__logo img {
  width: 100%;
  height: 100%;
}
.fil0v {
  fill: black;
}
.fil4v {
  fill: #8f6d28;
}
.fil2v {
  fill: #999999;
}
.fil3v {
  fill: #cc9933;
}
.fil1v {
  fill: gray;
  fill-rule: nonzero;
}
.logo {
  width: 100px;
  height: 30px;
}
/* navbar logo styles end */
.navbar__flag {
  width: 30px;
  margin-left: 10px;
  height: 18px;
  margin-bottom: 5px;
}
.navbar__flag img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.07);
}
/* navbar list */
.navbar__nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.navbar__list {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.navbar__item {
  margin: 0 10px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 60px;
}
.chevron__img {
  width: 7px;
  height: 7px;
  transition: all 0.3s ease;
}
.chevron--active {
  transform: rotateX(180deg);
}
.dropdown {
  max-width: 400px;
  width: 250px;
  position: absolute;
  background-color: #fff;
  z-index: 3;
  transition: all 0.5s ease;
  color: #fff;
  opacity: 0;
  pointer-events: none;
  top: 90px;
  padding: 10px 20px;
  right: -15px;
  border-radius: 10px;
  box-shadow: 2px 3px 10px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  a {
    margin: 10px 0;
    font-size: 15px;
    color: #111;
  }
}

.navbar__item--color {
  background-color: #bbb;
}
/* navbar expand */
.navbar__expand {
  display: none;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.navbar__expand-button {
  width: 20px;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 0.5px;
  transition: all 0.3s ease-in-out;
}
.navbar__expand-button::before,
.navbar__expand-button::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 0.5px;
  transition: all 0.3s ease-in-out;
}
.navbar__expand-button::before {
  transform: translateY(-7px);
}
.navbar__expand-button::after {
  transform: translateY(7px);
}
.navbar__expand--active .navbar__expand-button {
  transform: translateX(-40px);
  background: transparent;
}
.navbar__expand--active .navbar__expand-button::after {
  transform: rotate(-45deg) translate(20px, 20px);
}
.navbar__expand--active .navbar__expand-button::before {
  transform: rotate(45deg) translate(20px, -20px);
}

.navbar__divider {
  width: 1px;
  height: 10px;
  background: #aaa;
  margin: auto 0;
}
// .navbar__dropdown:hover .dropdown__content {
//   top: 57px;
//   pointer-events: all;
//   opacity: 1;
// }
.dropdown__content {
  top: 57px;
  pointer-events: all;
  opacity: 1;
}
.dropdown__hidden {
  top: 90px;
  pointer-events: none;
  opacity: 0;
}
/* media queries */
@media only screen and (max-width: 1100px) {
  .navbar__list {
    display: none;
  }
  .navbar__expand {
    display: flex;
  }
  .navbar__flag {
    width: 30px;
    margin-left: 10px;
    margin-top: 2.5px;
    height: 18px;
    align-self: flex-start;
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 530px) {
  .navbar__logo {
    width: 150px;
  }
}
.navbar__link {
  position: relative;
  padding: 5px 10px;
  font-size: 14px;
  color: #111;
}
.sidebar__overlay {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 550;
  position: fixed;
  top: 0;
  right: 0;
}
.divider {
  width: 100%;
  background-color: #aaa;
  opacity: 0.2;
  margin-left: auto;
  height: 1px;
}
</style>