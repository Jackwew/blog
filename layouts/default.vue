<template>
  <div>
    <div class="header">
      <NuxtLink to="/" class="logo">www</NuxtLink>
      <ul class="menu-list">
        <li class="list-item">
          <NuxtLink>推荐</NuxtLink>
        </li>
        <li class="list-item">
          <NuxtLink>博客</NuxtLink>
        </li>
        <li class="list-item">
          <NuxtLink>简历</NuxtLink>
        </li>
        <li class="list-item">
          <NuxtLink>开发工具</NuxtLink>
        </li>
        <li class="list-item">
          <NuxtLink>相册</NuxtLink>
        </li>
        <li class="list-item">
          <NuxtLink>关于</NuxtLink>
        </li>
      </ul>
    </div>
    <slot />
    <div class="footer-container">
      <div class="concat-wrapper">
        <div class="content">
          <div class="concat-box">
            <a class="line" href="mailto:bugengineer.wu@gamil.com">
              <CustomIcon title="邮箱" icon-content="email" :size="20" color="#4285f4" />
              <i class="text">{{ authorInfo.email }}</i>
            </a>
            <div class="line" style="margin-top: 10px" @click="onTelephone">
              <CustomIcon title="电话" icon-content="telephone" :size="20" color="#2b7de9" />
              <i class="text">{{ authorInfo.tel }}</i>
            </div>
          </div>
          <div class="logo">
            <img src="https://mo-easy.obs.cn-north-4.myhuaweicloud.com/www/portrait.jpg" alt="portrait" />
          </div>
          <div class="intercourse">
            <Poptip trigger="hover" title="扫码加好友">
              <CustomIcon title="微信" class="icon" icon-content="wechat" :size="27" color="#04BE02" />
              <template #content>
                <div class="wechat-code-box">
                  <img src="https://mo-easy.obs.cn-north-4.myhuaweicloud.com/www/wechat_code.jpg" alt="code" />
                </div>
              </template>
            </Poptip>

            <CustomIcon title="github" class="icon" icon-content="github" />
            <CustomIcon title="gitee" class="icon" icon-content="gitee" :size="20" color="#c71d23" />
            <CustomIcon title="twitter" class="icon" icon-content="twitter" color="#1d9bf0" />
          </div>
        </div>
        <Modal v-model="visible" width="500">
          <template #header>
            <p style="color: #f60; text-align: center">
              <Icon type="ios-alert-outline" size="21" />
              <span>微信公众号</span>
            </p>
          </template>
          <div style="text-align: center">
            <p style="font-size: 20px; margin-bottom: 10px">请关注微信公众号(前端妙妙屋)获取详细手机号码</p>
            <img
              style="width: 100%; height: 100%; border-radius: 5px"
              src="https://mo-easy.obs.cn-north-4.myhuaweicloud.com/www/qrcode_for_gh.jpg"
              alt="qrcode_for_gh"
            />
          </div>
          <template #footer>
            <Button type="success" long :loading="modalLoading" @click="onConfirm">关闭</Button>
          </template>
        </Modal>
      </div>
      <div class="footer">
        <div class="record">
          <span>© {{ year }} Bug Engineer Wu All rights reserved. Welcome to the public account: </span>
          <Tooltip theme="light">
            <span>前端妙妙屋</span>
            <template #content>
              <img
                style="width: 200px"
                src="https://mo-easy.obs.cn-north-4.myhuaweicloud.com/www/qrcode_for_gh.jpg"
                alt="qrcode_for_gh"
              />
            </template>
          </Tooltip>
        </div>
        <div class="link">
          <nuxt-link to="https://www.12377.cn/">网上有害信息举报专区</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const year = ref('2023')
const visible = ref(false)
const modalLoading = ref(false)

const authorInfo = ref({
  name: 'www',
  email: 'bugengineer.wu@gamil.com',
  tel: '187******65'
})

const onConfirm = () => {
  visible.value = false
}

const onTelephone = () => {
  visible.value = true
}
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 100px;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8vw;

  .logo {
    color: #fff;
    font-size: 28px;
    font-weight: 500;
    position: relative;
    padding: 0 5px;
    background: none;
    cursor: pointer;
    font-family: orpheus-pro, serif;

    &:hover {
      &::after {
        transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        transition-duration: 0.5s;
        width: 100%;
        left: 0;
      }

      &::before {
        transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        transition-duration: 1s;
        transition-delay: 0.5s;
        width: 100%;
        left: 0;
      }
    }

    &::after {
      content: '';
      width: 0;
      height: 2px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -200%);
      display: block;
      background: #fff;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      transition-duration: 0.5s;
    }

    &::before {
      content: '';
      width: 0;
      height: 2px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, 200%);
      display: block;
      background: #fff;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      transition-duration: 0.5s;
      transition-delay: 0.5s;
    }
  }

  .menu-list {
    flex: 1;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: PingFangSC-Regular, sans-serif;

    .list-item {
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      margin: 0 15px;
      padding: 8px 2px;
      position: relative;
      a {
        color: #fff;
      }

      &:hover {
        &::after {
          transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
          transition-duration: 0.5s;
          width: 100%;
          left: 0;
        }
      }

      &::after {
        content: '';
        width: 0;
        height: 1px;
        position: absolute;
        background: #fff;
        bottom: 0.1em;
        right: 0;
        transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        transition-duration: 0.6s;
      }
    }

    .active-item::after {
      width: 100%;
    }
  }

  .tools {
    display: flex;
    font-size: 14px;

    .search {
      margin-right: 10px;
    }

    .language a {
      color: #fff;
    }
  }
}
.footer-container {
  .concat-wrapper {
    width: 100%;
    height: 200px;
    padding: 5vw 20vw;
    color: #000;
    border-top: 1px solid rgba(0, 0, 0, 0.11);

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .concat-box {
        display: flex;
        flex-direction: column;

        .line {
          display: flex;
          align-items: center;
          cursor: pointer;

          .text {
            font-style: normal;
            margin-left: 8px;
          }
        }
      }

      .logo {
        width: 80px;
        height: 80px;
        transition: All 0.4s ease-in-out;

        &:hover {
          transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .intercourse {
        min-width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icon {
          cursor: pointer;
        }

        .wechat-code-box {
          width: 200px;
          border-radius: 10px;

          img {
            width: 100%;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    padding: 5vw 10vw;
    border-top: 1px solid rgba(0, 0, 0, 0.11);

    .record {
      text-align: center;
    }

    .link {
      text-align: center;
      margin-top: 10px;

      a {
        color: #515a6e;
      }
    }
  }
}
</style>
