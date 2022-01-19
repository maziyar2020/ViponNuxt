<!-- eslint-disable -->
<template>
  <div class="video-wrapper" v-if="isOpen">
    <div class="video__center" v-if="videoEnded" @click="repeatVideo">
      <svg class="video__center-icon" viewBox="0 0 448 512">
        <path
          d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
        ></path>
      </svg>
    </div>
    <button
      class="video__btn btn--close"
      @click="$emit('player-closed')"
      v-if="!largeScreen"
    >
      <svg viewBox="0 0 512 512">
        <path
          d="M174.6 252.89l205.16 -205.16c7.2,-7.21 7.2,-18.89 0,-26.1 -7.2,-7.2 -18.88,-7.2 -26.09,0l-221.43 221.44c-7.2,7.2 -7.2,18.88 0,26.09l221.43 221.43c7.33,7.08 19.01,6.87 26.09,-0.46 6.91,-7.15 6.91,-18.48 0,-25.63l-205.13 -205.13 0 -0.03c-0.82,-0.83 -1.33,-1.97 -1.33,-3.23 0,-1.26 0.51,-2.4 1.33,-3.22l-0.03 0z"
        />
      </svg>
    </button>
    <div class="video__loading" v-if="!loadedContent">
      <img src="../assets/svg/loading-vipon-white.svg" alt="" />
    </div>
    <video
      @loadstart="handleStart"
      @play="handlePlay"
      @pause="handlePause"
      @timeupdate="handleTimeUpdate"
      @ended="handleEnded"
      class="video"
      ref="video"
      @click.self="togglePlay"
      :class="[largeScreen && 'video--full-screen']"
    >
      <source :src="src" />
    </video>
    <div class="video__controls" ref="control" v-if="showControl">
      <div class="video__controls--top">
        <!-- play btn -->
        <div class="video__controls__left">
          <button class="video__btn" @click="togglePlay">
            <svg
              v-if="!isPlaying"
              class="video__icon play-pause-icons"
              viewBox="0 0 448 512"
            >
              <path
                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
              ></path>
            </svg>
            <svg
              v-else
              class="video__icon play-pause-icons"
              viewBox="0 0 448 512"
            >
              <path
                d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
              ></path>
            </svg>
          </button>
          <div class="video__sound-control">
            <input
              type="range"
              ref="range"
              v-model="volume"
              min="0"
              max="100"
              step="5"
              class="video__sound__range"
              @input="setVolume"
            />
            <!-- sound icon mute -->
            <svg
              v-if="mute"
              viewBox="0 0 448.075 448.075"
              @click="handleMuteVideo"
            >
              <path
                d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"
              />
              <path
                d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
	c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
	c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
	c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"
              />
            </svg>
            <!-- sound icon not mute -->
            <svg v-else @click="handleMuteVideo" viewBox="0 0 480 480">
              <path
                d="M278.944,17.577c-5.568-2.656-12.128-1.952-16.928,1.92L106.368,144.009H32c-17.632,0-32,14.368-32,32v128
	c0,17.664,14.368,32,32,32h74.368l155.616,124.512c2.912,2.304,6.464,3.488,10.016,3.488c2.368,0,4.736-0.544,6.944-1.6
	c5.536-2.656,9.056-8.256,9.056-14.4v-416C288,25.865,284.48,20.265,278.944,17.577z"
              />
              <path
                d="M368.992,126.857c-6.304-6.208-16.416-6.112-22.624,0.128c-6.208,6.304-6.144,16.416,0.128,22.656
	C370.688,173.513,384,205.609,384,240.009s-13.312,66.496-37.504,90.368c-6.272,6.176-6.336,16.32-0.128,22.624
	c3.136,3.168,7.264,4.736,11.36,4.736c4.064,0,8.128-1.536,11.264-4.64C399.328,323.241,416,283.049,416,240.009
	S399.328,156.777,368.992,126.857z"
              />
              <path
                d="M414.144,81.769c-6.304-6.24-16.416-6.176-22.656,0.096c-6.208,6.272-6.144,16.416,0.096,22.624
	C427.968,140.553,448,188.681,448,240.009s-20.032,99.424-56.416,135.488c-6.24,6.24-6.304,16.384-0.096,22.656
	c3.168,3.136,7.264,4.704,11.36,4.704c4.064,0,8.16-1.536,11.296-4.64C456.64,356.137,480,299.945,480,240.009
	S456.64,123.881,414.144,81.769z"
              />
            </svg>
          </div>
        </div>
        <div class="controls__right">
          <span @click="toggleFullScreen" class="controls__screen">
            <!-- shrink btn -->

            <svg
              version="1.1"
              v-if="largeScreen"
              class="screen__btn screen--shrink"
              viewBox="0 0 385.331 385.331"
            >
              <path
                d="M264.943,156.665h108.273c6.833,0,11.934-5.39,11.934-12.211c0-6.833-5.101-11.85-11.934-11.838h-96.242V36.181
			c0-6.833-5.197-12.03-12.03-12.03s-12.03,5.197-12.03,12.03v108.273c0,0.036,0.012,0.06,0.012,0.084
			c0,0.036-0.012,0.06-0.012,0.096C252.913,151.347,258.23,156.677,264.943,156.665z"
              />
              <path
                d="M120.291,24.247c-6.821,0-11.838,5.113-11.838,11.934v96.242H12.03c-6.833,0-12.03,5.197-12.03,12.03
			c0,6.833,5.197,12.03,12.03,12.03h108.273c0.036,0,0.06-0.012,0.084-0.012c0.036,0,0.06,0.012,0.096,0.012
			c6.713,0,12.03-5.317,12.03-12.03V36.181C132.514,29.36,127.124,24.259,120.291,24.247z"
              />
              <path
                d="M120.387,228.666H12.115c-6.833,0.012-11.934,5.39-11.934,12.223c0,6.833,5.101,11.85,11.934,11.838h96.242v96.423
			c0,6.833,5.197,12.03,12.03,12.03c6.833,0,12.03-5.197,12.03-12.03V240.877c0-0.036-0.012-0.06-0.012-0.084
			c0-0.036,0.012-0.06,0.012-0.096C132.418,233.983,127.1,228.666,120.387,228.666z"
              />
              <path
                d="M373.3,228.666H265.028c-0.036,0-0.06,0.012-0.084,0.012c-0.036,0-0.06-0.012-0.096-0.012
			c-6.713,0-12.03,5.317-12.03,12.03v108.273c0,6.833,5.39,11.922,12.223,11.934c6.821,0.012,11.838-5.101,11.838-11.922v-96.242
			H373.3c6.833,0,12.03-5.197,12.03-12.03S380.134,228.678,373.3,228.666z"
              />
            </svg>
            <!-- wide btn -->
            <svg
              viewBox="0 0 469.333 469.333"
              class="screen__btn screen--wide"
              v-else
            >
              <path
                d="M160,0H10.667C4.771,0,0,4.771,0,10.667V160c0,5.896,4.771,10.667,10.667,10.667S21.333,165.896,21.333,160V21.333H160
				c5.896,0,10.667-4.771,10.667-10.667S165.896,0,160,0z"
              />
              <path
                d="M458.667,0H309.333c-5.896,0-10.667,4.771-10.667,10.667s4.771,10.667,10.667,10.667H448V160
				c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667V10.667C469.333,4.771,464.563,0,458.667,0z"
              />
              <path
                d="M458.667,298.667c-5.896,0-10.667,4.771-10.667,10.667V448H309.333c-5.896,0-10.667,4.771-10.667,10.667
				c0,5.896,4.771,10.667,10.667,10.667h149.333c5.896,0,10.667-4.771,10.667-10.667V309.333
				C469.333,303.437,464.563,298.667,458.667,298.667z"
              />
              <path
                d="M160,448H21.333V309.333c0-5.896-4.771-10.667-10.667-10.667S0,303.437,0,309.333v149.333
				c0,5.896,4.771,10.667,10.667,10.667H160c5.896,0,10.667-4.771,10.667-10.667C170.667,452.771,165.896,448,160,448z"
              />
            </svg>
          </span>
          <div class="video__time">
            <time class="time--font">{{ duration }}</time>
            <span> / </span>
            <time class="time--font">{{ currentTime }}</time>
          </div>
        </div>
      </div>
      <div class="video__controls--bottom">
        <div class="video__progress" @click="setProgress">
          <i class="video__seek" :style="{ width: seekWidth }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'BasePlayer',
  data() {
    return {
      currentTime: '00:00',
      seekWidth: 0,
      isPlaying: false,
      duration: '',
      showControl: false,
      control: null,
      largeScreen: false,
      volume: 100,
      mute: false,
      videoEnded: false,
      video: {},
      loadedContent: false,
    }
  },
  emits: ['player-closed'],
  props: ['isOpen', 'src'],
  methods: {
    setVolume() {
      const video = this.$refs.video

      video.volume = this.volume / 100

      if (video.volume == 0) {
        this.mute = true
        video.muted = true
      } else {
        this.mute = false
        video.muted = false
      }
    },

    handleMuteVideo() {
      const video = this.$refs.video
      if (!this.mute) {
        this.mute = true
        video.muted = true
        this.volume = 0
      } else {
        this.mute = false
        video.muted = false
        this.volume = 100
        video.volume = '1'
      }
    },

    formatTime(time) {
      if (time < 60) {
        if (time < 10) {
          return '00:0' + Math.floor(time)
        }
        return '00:' + Math.floor(time)
      }
      if (time > 60 && time < 3600) {
        let minute = Math.floor(time / 60)
        let second = Math.floor(time - minute * 60)
        minute = minute < 10 ? '0' + minute : minute
        second = second < 10 ? '0' + second : second
        return `${minute}:${second}`
      }
      if (time > 3600) {
        let hours = Math.floor(time / 3600)
        time %= 3600
        let minutes = Math.floor(time / 60)
        let seconds = time % 60

        minutes < 10 ? '0' + minutes : minutes
        seconds < 10 ? '0' + seconds : seconds
        if (hours < 10) {
          return `0${hours}:${minutes}:${seconds}`
        }
        return `${hours}:${minutes}:${seconds}`
      }
    },

    togglePlay() {
      const video = this.$refs.video
      if (video.ended || video.paused) {
        video.play()
      } else {
        video.pause()
      }
    },

    handleStart() {
      const video = this.$refs.video
      video.addEventListener('loadeddata', () => {
        this.loadedContent = !this.loadedContent
      })
      const videoWorks = !!document.createElement('video').canPlayType
      if (videoWorks) {
        video.controls = false
        this.showControl = true
        video.play()
      }
    },

    handlePlay() {
      this.isPlaying = true
    },

    handlePause() {
      this.isPlaying = false
    },

    handleEnded() {
      this.isPlaying = false
    },

    handleTimeUpdate($event) {
      const { currentTime: curr, duration: dur } = $event.target
      // setTime
      if (!this.duration) {
        this.duration = this.formatTime(dur)
      }
      this.currentTime = this.formatTime(curr)
      // Set seeker width
      this.seekWidth = (curr / dur) * 100 + '%'
      if (this.duration == this.currentTime) {
        this.videoEnded = true
      } else {
        this.videoEnded = false
      }
    },

    setProgress($event) {
      const video = this.$refs.video
      // seek pointer event is nont
      const width = $event.target.clientWidth
      const offset = $event.offsetX
      const duration = video.duration

      video.currentTime = (offset / width) * duration
      this.seekWidth = (offset / width) * 100 + '%'
    },

    toggleFullScreen() {
      if (
        !document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          this.largeScreen = true
          document.documentElement.requestFullscreen()
        } else if (document.documentElement.mozRequestFullScreen) {
          this.largeScreen = true
          document.documentElement.mozRequestFullScreen()
        } else if (document.documentElement.webkitRequestFullscreen) {
          this.largeScreen = true
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          )
        }
      } else {
        if (document.cancelFullScreen) {
          this.largeScreen = false
          document.cancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          this.largeScreen = false
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          this.largeScreen = false
          document.webkitCancelFullScreen()
        }
      }
    },

    // Handle Modal
    applyModalEffect() {
      const body = document.querySelector('body')
      body.style.top = `-${window.scrollY}px`
      body.style.position = 'fixed'
      body.style.overflow = 'hidden'
    },

    removeModalEffect() {
      const body = document.querySelector('body')
      const scrollY = document.body.style.top
      body.style.position = ''
      body.style.top = ''
      body.style.overflow = 'auto'
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    },

    repeatVideo() {
      this.videoEnded = false
      this.togglePlay()
    },
  },

  mounted() {
    if (this.isOpen) {
      this.applyModalEffect()
    } else {
      this.isPlaying = false
      this.seekWidth = 0
      this.duration = ''
      this.currentTime = '00:00'
      this.removeModalEffect()
    }
  },

  beforeDestroy() {
    this.removeModalEffect()
  },
}
</script>

<style scoped>
.video-wrapper {
  position: fixed;
  z-index: 201;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  /* padding-top: 50px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 500;
}
.video__center {
  position: fixed;
  height: 80px;
  width: 80px;
  background-color: #fff;
  z-index: 501;
  border-radius: 50%;
  left: calc(50% - 40px);
  right: calc(50% - 40px);
  top: calc(50% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.video__center-icon {
  fill: #333;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  padding-right: 5px;
}
.video {
  width: 100%;
  max-width: 1000px;
  position: relative;
}

.video--full-screen {
  max-width: 100vw;
}

.controls__left {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  direction: rtl;
}

.controls__right {
  display: flex;
  align-items: center;
  width: 140px;
  justify-content: space-between;
  direction: rtl;
}

.video__controls__left {
  display: flex;
  align-items: center;
  width: 80%;
  direction: ltr;
}

.video__controls {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  direction: ltr;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  background: #111;
  transition: all 0.3s ease;
}
.video__btn {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background: transparent;
  cursor: pointer;
}
.btn--close {
  position: absolute;
  left: 10px;
  top: 10px;
}
.btn--close svg {
  width: 30px;
  height: 30px;
  fill: #777;
}
.video__icon {
  width: 20px;
  height: 20px;
  fill: #fff;
}
.video__time {
  width: 100px;
  color: #fff;
  font-size: 13px;
  margin-top: 3px;
}
.video__progress {
  width: 80%;
  height: 7px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  direction: ltr;
}
.video__seek {
  display: block;
  width: 0;
  border-radius: 5px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  /* transition: width 0.01s linear; */
  pointer-events: none;
}
.time--font {
  font-family: 'OpenSans';
}
.controls__screen {
  display: flex;
  fill: #fff;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.screen__btn {
  width: 15px;
  height: 15px;
  fill: #fff;
  transition: all 0.3s ease;
}
.screen__btn:focus {
  transform: scale(0.98);
}
.screen--shrink {
  width: 18px;
  height: 18px;
}
.video__sound-control {
  transition: all 0.3s ease;
  overflow: hidden;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  direction: rtl;
  background: #151515;
  border-radius: 10px;
  padding: 0 10px;
}
.video__sound-control svg {
  width: 15px;
  height: 15px;
  fill: #fff;
  cursor: pointer;
  margin-right: auto;
}
.video__sound__range {
  direction: ltr;
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-left: 10px;
  cursor: pointer;
}
.video__sound-control:hover .video__sound__range {
  width: 75px;
  opacity: 1;
  visibility: visible;
}
.play-pause-icons {
  width: 15px;
  height: 15px;
}
.video__sound__range::-webkit-slider-thumb {
  width: 10px;
  -webkit-appearance: none;
  height: 10px;
  cursor: ew-resize;
  background: red;
}
/* loading */
.video__loading {
  position: fixed;
  width: 50%;
  height: 50%;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}
.video__controls--top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  padding-top: 5px;
}
.video__controls--bottom {
  display: flex;
  width: 100%;
  direction: rtl;
  align-items: center;
  justify-content: center;
  height: 25px;
}
</style>
