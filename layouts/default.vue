<template>
  <div id="app">
    <Navbar />
    <nuxt />
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'Main',
  mounted() {
    !(function () {
      var i = 'UR5Sxg',
        a = window,
        d = document
      function g() {
        var g = d.createElement('script'),
          s = 'https://www.goftino.com/widget/' + i,
          l = localStorage.getItem('goftino_' + i)
        ;(g.async = !0), (g.src = l ? s + '?o=' + l : s)
        d.getElementsByTagName('head')[0].appendChild(g)
      }
      'complete' === d.readyState
        ? g()
        : a.attachEvent
        ? a.attachEvent('onload', g)
        : a.addEventListener('load', g, !1)
    })()
  },
}
</script>

<style lang="scss">
@import 'aos/dist/aos.css';

@font-face {
  font-family: 'iransans';
  src: url('../assets/fonts/iransans.ttf');
}
@font-face {
  font-family: 'OpenSans';
  src: url('../assets/fonts/OpenSans.ttf');
}
@font-face {
  font-family: 'dinar';
  src: url('../assets/fonts/dinar2.ttf');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  list-style: none;
  text-decoration: none;
  box-shadow: none;
  font-family: 'iransans';
}
body,
html {
  direction: rtl;
}
input,
select {
  border: 1px solid rgba(0, 0, 0, 0.07);
}
a {
  color: #555;
}
img {
  vertical-align: middle;
  border-style: none;
}
#app {
  min-height: 100vh;
}
.container {
  padding-right: 4.5rem;
  padding-left: 4.5rem;
}
@media only screen and (max-width: 900px) {
  .container {
    padding-right: 4rem;
    padding-left: 4rem;
  }
}
@media only screen and (max-width: 700px) {
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
  }
}
@media only screen and (max-width: 500px) {
  .container {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
/* custom aos style */
[data-aos='opacityAni'] {
  opacity: 0;
  transition-property: opacity;

  &.aos-animate {
    opacity: 1;
  }
}
// loader animation
.lds-dual-ring {
  display: inline-block;
  width: 40px;
  height: 40px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 5px solid #fff;
  border-color: #fff transparent #eee transparent;
  animation: lds-dual-ring 1.5s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
// blink
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
.nuxt-progress {
  background: #c69e4e;
}
// vue notification
@media only screen and (max-width: 600px) {
  .Vue-Toastification__container .Vue-Toastification__toast {
    width: 80%;
    margin: 0 auto 5px;
  }
}
</style>