<template>
  <div class="deputies">
    <div class="deputies__header">
      <img src="../assets/image/Darbareye-Ma.jpg" />
    </div>
    <div class="deputies__content container">
      <div class="deputies__title">
        <p>مدیران ویپون</p>
      </div>
      <div class="deputies__list">
        <!-- first item -->
        <div class="deputies__item">
          <img src="../assets/image/management/mr-sorosh.jpg" alt="" />
          <div class="deputies__description">
            <div class="deputies__description">
              <div class="deputies__detail__header">
                <span class="deputies__name">علی سروش</span>
              </div>
              <i class="divider"></i>
              <div class="deputies__detail__situation">
                <p>مدیرعامل</p>
              </div>
            </div>
          </div>
        </div>
        <!-- first item -->
        <div class="deputies__item">
          <img src="../assets/image/management/1.jpg" alt="" />
          <div class="deputies__description">
            <div class="deputies__description">
              <div class="deputies__detail__header">
                <span class="deputies__name">شایان نظری</span>
              </div>
              <i class="divider"></i>
              <div class="deputies__detail__situation">
                <p>رئیس هیئت مدیره</p>
              </div>
            </div>
          </div>
        </div>
        <!-- second item -->
        <div class="deputies__item">
          <img src="../assets/image/management/2.jpg" />
          <div class="deputies__description">
            <div class="deputies__description">
              <div class="deputies__detail__header">
                <span class="deputies__name">نوید صالحی پور</span>
              </div>
              <i class="divider"></i>
              <div class="deputies__detail__situation">
                <p>عضو هیئت مدیره</p>
                <p>معاونت فنی</p>
              </div>
            </div>
          </div>
        </div>
        <!-- fifth item -->
        <div class="deputies__item">
          <img src="../assets/image/management/5.jpg" />
          <div class="deputies__description">
            <div class="deputies__description">
              <div class="deputies__detail__header">
                <span class="deputies__name">میلاد جلیل زاده</span>
              </div>
              <i class="divider"></i>
              <div class="deputies__detail__situation">
                <p>عضو هیئت مدیره</p>
                <p>معاونت توسعه و بازاریابی</p>
              </div>
            </div>
          </div>
        </div>

        <!-- third item -->
        <div class="deputies__item">
          <img src="../assets/image/management/3.jpg" />
          <div class="deputies__description">
            <div class="deputies__description">
              <div class="deputies__detail__header">
                <span class="deputies__name">امین ظهرابی فر</span>
              </div>
              <i class="divider"></i>
              <div class="deputies__detail__situation">
                <p>عضو هیئت مدیره</p>
                <p>معاونت زیرساخت</p>
              </div>
            </div>
          </div>
        </div>

        <!-- fourth item -->
        <div class="deputies__item">
          <img src="../assets/image/management/4.jpg" />
          <div class="deputies__description">
            <div class="deputies__description">
              <div class="deputies__detail__header">
                <span class="deputies__name">اسرا راد</span>
              </div>
              <i class="divider"></i>
              <div class="deputies__detail__situation">
                <p>معاونت مالی و اداری</p>
              </div>
            </div>
          </div>
        </div>
        <!-- sixth item -->
        <!-- <div class="deputies__item">
          <img src="../assets/image/management/1.jpg" />
          <div class="deputies__description">
            <div class="deputies__description">
              <div class="deputies__detail__header">
                <span class="deputies__name">اسرا راد</span>
              </div>
              <p class="deputies__detail__situation">
                مدیریت امور مالی و اداری
              </p>
            </div>
            <div class="deputies__detail">
              <p class="deputies__email-field">ایمیل :</p>
              <span class="deputies__email">example@gmail.com</span>
            </div>
          </div>
        </div> -->
        <!-- end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Deputies',
  head() {
    return {
      title: 'ویپون | vipon - مدیران ویپون',
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
.deputies {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.deputies__header {
  width: 100%;
  height: 260px;
  background: #000;
  position: relative;
  overflow: hidden;
  img {
    width: auto;
    height: 100%;
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
}
.deputies__content {
  padding-bottom: 3rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.deputies__title {
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #222;
}
.deputies__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 1.5rem 0;
}
.deputies__item {
  width: 100%;
  display: flex;
  flex-direction: column;
  .deputies__img {
    background: #eee;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 50px;
      height: 50px;
    }
  }
  img {
    width: 100%;
    border-radius: 10px;
    filter: saturate(0);
  }
}
.deputies__item > .deputies__description {
  padding: 10px 0;
}
.deputies__description {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
}

.deputies__detail__situation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  p {
    text-align: center;
    font-size: 15px;
    color: #777;
  }
}

@media only screen and (max-width: 700px) {
  .deputies__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .deputies__item {
    img {
      max-width: 350px;
      margin: 0 auto;
    }
  }
  .deputies__description {
    justify-content: center;
    align-items: center;
  }
}

.divider {
  height: 1px;
  width: 70%;
  background-color: #ddd;
  margin: 5px auto;
}
@media only screen and (max-width : 710px){
  .deputies__header{
    height: 200px;
  }
}
@media only screen and (max-width : 550px){
  .deputies__header {
    height: 160px;
  }
}
@media only screen and (max-width:440px){
  .deputies__header{
    height: 135px;
  }
}
</style>