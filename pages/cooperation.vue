<template>
  <main class="cooperate">
    <div class="cooperate__map">
      <img src="../assets/image/a2/Map1.jpg" class="cooperate__map--img1">
      <img src="../assets/image/a2/Map2.jpg" class="cooperate__map--img2">
    </div>
    <div class="cooperate__item" :class="getCurrentComponent == 'CooperationForm' && 'cooperate__item--active' ">
      <component :is="getCurrentComponent" @navigateToForm="navigate" />
    </div>
  </main>
</template>

<script>
import CooperationText from '../components/cooperation/CooperationText.vue'
import CooperationForm from '../components/cooperation/CooperationForm.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'Cooperation',
    head() {
    return {
      title: 'ویپون | vipon - درخواست نمایندگی',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  computed:{
    ...mapGetters(['getCurrentComponent'])
  },
  components:{
    CooperationText,
    CooperationForm
  },
  methods:{
    navigate(){
      this.currentComponent = 'CooperationForm'
    }
  }
}
</script>

<style scoped lang="scss">
.cooperate {
  width: 100%;
  padding: 1.5rem 10px 4rem;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 10px;
  min-height: 100vh;
  margin-bottom: 30px;
}
.cooperate__map{
  width: 100%;
  position: relative;
  img{
    width: 100%;
    position: absolute;
  }
}
.cooperate__map--img1{
  z-index: 3;
  animation: blink2 1.3s infinite;
}
.cooperate__map--img2{
  z-index: 2;
}

.cooperate__item {
  padding: 2rem 3rem;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
}
.cooperate__item--active{
  padding: 0;
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
.eng {
  font-family: 'OpenSans';
}
@keyframes blink2 {
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
@media only screen and (max-width:900px){
  .cooperate{
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 0px;
  }
  .cooperate__map{
    width: 700px;
    height: 700px;
    margin: 0 auto;
  }
}

@media only screen and (max-width:720px){
  .cooperate__map{
    width: 500px;
    height: 500px;
  }
}
@media only screen and (max-width:520px){
    .cooperate__map{
    width: 400px;
    height: 400px;
  }
}
@media only screen and (max-width:400px){
    .cooperate__map{
    width: 330px;
    height: 330px;

  }
}
</style>