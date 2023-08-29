// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        },
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || ''
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/c/font_2813191_pd1kpmcpg7f.css' } // 新增全局字体样式
      ],
      style: [],
      script: [
        {
          src: '/js/bideo.js'
        }
      ],
      noscript: []
    }
  },
  // typescript: {
  //   typeCheck: true
  // },
  modules: [
    [
      '@nuxtjs/eslint-module',
      {
        cache: true,
        lintOnStart: false
      }
    ]
  ],
  plugins: [
    {
      src: '/plugins/viewUiPlus/index',
      mode: 'client'
    }
  ],
  webpack: {
    loaders: {
      scss: ''
    }
  },
  runtimeConfig: {
    app: {
      baseURL: '/',
      buildAssetsDir: '/_nuxt/',
      cdnURL: ''
    },
    public: {
      baseURL: '/api'
    }
  },
  devServer: {
    host: '127.0.0.1',
    port: 3001
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        prependPath: true
      }
    }
  },
  debug: false,
  dev: false,
  buildDir: 'nuxt-build'
})
