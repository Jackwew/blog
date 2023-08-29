<template>
  <div class="index-container">
    <NuxtLayout>
      <div class="home-video">
        <Video />
        <div class="title">
          Front-end Dev <br />
          & Photography Enthusiast.
        </div>
        <div class="options">
          <div class="about-button">了解我</div>
          <div class="show-video">Watch Video</div>
        </div>
      </div>
      <div class="empty"></div>
      <section class="content-wrapper person">
        <div class="person-img gs_reveal_fromLeft" ref="gs_reveal">
          <img src="https://mo-easy.obs.cn-north-4.myhuaweicloud.com/www/myself_to.jpg" alt="travel" />
        </div>
        <div class="person-info gs_reveal_fromRight" ref="gs_reveal">
          <h2>My job is a front-end / full stack development</h2>
          <p>
            我目前是一名前端开发工程师, 主要工作地在四川 - 成都, 使用的技术有: <a>Html5</a>, <a>Css/Css3</a>,
            <a>Javascript</a>, <a>TypeScript</a>, <a>Nodejs</a>, <a>Java</a>。 对于框架的研究有：<a>React</a>,
            <a>Vue2/3</a>, <a>webpack</a>,<a>vite</a>,
            <a>React Native</a
            >。截至目前已经在成都工作五年有余，成都是一座来了就不想离开的城市。如果你想了解更多关于和我一起工作的信息,
            或者成都这座美丽的城市, 请联系我
          </p>
          <div class="person-more" @click="getList">
            <span>LEARN MORE →</span>
          </div>
        </div>
      </section>
      <section class="content-wrapper blog">
        <div class="title">
          <div class="title-letter">LATEST BLOG POSTS</div>
          <div class="title-big">关于我做为前端开发工程师的一些想法和见解{{ foo }}</div>
        </div>
        <div class="blog-wrapper">
          <div class="blog-item" v-for="blog in blogList" :key="blog.id">
            <img :src="blog.blogImg" alt="expansions" />
            <div class="blog-title">{{ blog.blogName }}</div>
            <div class="blog-short-desc">{{ blog.shortContent }}</div>
            <NuxtLink :to="`/detail/${blog.blogId}`" class="read-more">Read More</NuxtLink>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>
<script setup>
const foo = useFoo()
const blogList = ref([])
const getList = async () => {
  const data = await useFetch('http://localhost:3000/api/project/find', {
    method: 'get'
  })
  const info = unref(data).data
  // const data = await useRequest.get('http://localhost:3000/api/user/find')
  console.log(unref(data).data, 12345)
}
onMounted(() => {})
</script>

<style scoped lang="scss">
.index-container {
  width: 100%;
  height: 100%;
  position: relative;
  .home-video {
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    overflow: hidden;

    .title {
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      font-family: orpheus-pro;
      font-style: normal;
      margin-top: 200px;
      color: #fff;
      font-size: calc((6.4 - 1) * 1.2vw + 1rem);
      text-align: center;
      font-weight: 400;
    }

    .options {
      min-height: 100px;
      color: #fff;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .about-button {
        width: 204px;
        height: 65px;
        text-align: center;
        line-height: 65px;
        border: 1px solid #e1a87a;

        &:hover {
          background-color: #e1a87a;
          border-color: #e1a87a;
          color: #fff;
        }
      }

      .show-video {
        height: 65px;
        text-align: center;
        line-height: 65px;
        padding: 0 20px;
        cursor: pointer;

        &:hover {
          opacity: 0.5;
        }

        &:before {
          background-position: center;
          background-repeat: no-repeat !important;
          background-size: 64px 64px;
          content: '';
          display: inline-block;
          height: 64px;
          margin: 0 8px 0 0;
          vertical-align: middle;
          width: 64px;
          background: url('/images/show.svg');
        }
      }
    }
  }
  .empty {
    height: calc(100vh - 100px);
  }
  .content-wrapper {
    width: 100%;
    padding: 6vw 15vw 0vw;
    color: #000;
    font-family: orpheus-pro;

    .title {
      width: 100%;
      padding: 0 200px;
      font-size: 14px;

      .title-big {
        text-align: center;
        font-size: 40px;
        font-weight: 300;
      }
    }
  }

  .person {
    display: flex;

    .person-img {
      width: 30vw;
      height: 700px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .person-info {
      flex: 1;
      margin-left: 100px;
      margin-top: 120px;

      h2 {
        font-size: calc((2.6 - 0.5) * 1.2vw + 1rem);
        font-weight: 200;
        font-style: normal;
        letter-spacing: 0em;
        text-transform: none;
        line-height: 1.2;
      }

      p {
        font-size: 16px;
        margin-top: 40px;
        font-family: PingFangSC-Regular, sans-serif;
        line-height: 40px;
      }

      .person-more {
        width: 200px;
        height: 63px;
        border: 2px solid #e1a87a;
        text-align: center;
        line-height: 63px;
        margin-top: 60px;
        position: relative;
        background: transparent;
        border-radius: 5px;
        cursor: pointer;

        span {
          z-index: 999;
        }

        &:after {
          content: 'LEARN MORE →';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 0;
          z-index: -1;
          background: transparent;
          transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
          transition-duration: 0.5s;
        }

        &:hover {
          background: transparent;

          &:after {
            z-index: 1;
            height: 100%;
            background: #e1a87a;
          }
        }
      }
    }
  }
}
</style>
