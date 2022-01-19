<template>
  <div class="customer">
    <div class="customer__services">
        <ServicesInfo />
    </div>
  </div>
</template>

<script>
export default {
    name : 'Customer',
      head() {
    return {
      title: 'ویپون | vipon - مشتریان',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.customer{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.customer__services{
    margin-top: -50px;
    width: 100%;
}
@media only screen and (max-width:1000px){
    .customer__services{
        margin-top: 0;
    }
}
</style>