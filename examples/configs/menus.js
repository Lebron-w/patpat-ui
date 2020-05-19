module.exports = [
  {
    name: 'base',
    title: '基础组件',
    components: [
      {
        name: 'button',
        title: 'Button 按钮',
        readmeComponent: () => import('../../packages/button/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/base/ButtonDemo.vue')
      },
      {
        name: 'icon',
        title: 'Icon 图标',
        readmeComponent: () => import('../../packages/icon/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/base/IconDemo.vue')
      },
      {
        name: 'image',
        title: 'Image 图片',
        readmeComponent: () => import('../../packages/icon/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/base/IconDemo.vue')
      },
      {
        name: 'layout',
        title: 'Layout 布局',
        readmeComponent: () => import('../../packages/icon/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/layouts/Layout.vue')
      },
      {
        name: 'popup',
        title: 'Popup 弹出层',
        readmeComponent: () => import('../../packages/popup/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/base/PopupDemo.vue')
      },
      {
        name: 'overlay',
        title: 'Overlay 遮罩层',
        readmeComponent: () => import('../../packages/overlay/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/base/OverlayDemo.vue')
      },
      {
        name: 'indicator',
        title: 'Indicator 加载提示框',
        readmeComponent: () => import('../../packages/indicator/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/base/IndicatorDemo.vue')
      },
      {
        name: 'loading',
        title: 'Loading 加载动画',
        readmeComponent: () => import('../../packages/loading/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/base/LoadingDemo.vue')
      },
    ]
  },
  {
    name: 'form',
    title: '表单组件',
    components: [
      {
        name: 'from',
        title: '表单验证',
        readmeComponent: () => import('../../packages/form-validation/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/form/FromValDemo.vue')
      },
      {
        name: 'coding2',
        title: '开发中2',
        readmeComponent: () => import('../../packages/button/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/layouts/Layout.vue')
      },
    ]
  },
  {
    name: 'feedback',
    title: '反馈组件',
    components: [
      {
        name: 'dialog',
        title: 'Dialog 弹出框',
        readmeComponent: () => import('../../packages/dialog/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/feedback/DialogDemo.vue')
      },
      {
        name: 'toast',
        title: 'Toast 提示框',
        readmeComponent: () => import('../../packages/toast/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/feedback/ToastDome.vue')
      },
    ]
  },
  {
    name: 'show',
    title: '展示组件',
    components: [
      {
        name: 'swiper',
        title: '轮播',
        readmeComponent: () => import('../../packages/swiper/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/show/SwiperDemo.vue')
      },
      {
        name: 'sticky',
        title: '吸顶',
        readmeComponent: () => import('../../packages/sticky/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/show/StickyDemo.vue')
      },
      // {
      //   name: 'img-lazy-load',
      //   title: '图片懒加载',
      //   routerLink: '/component/show/img-lazy-load'
      // }
      {
        name: 'list',
        title: '列表',
        readmeComponent: () => import('../../packages/list/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/show/ListDemo.vue')
      }
    ]
  },
  {
    name: 'navigation',
    title: '导航组件',
    components: [
      {
        name: 'nav_bar',
        title: '导航栏',
        readmeComponent: () => import('../../packages/nav-bar/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/navigation/NavBarDemo.vue')
      }
    ]
  },
  {
    name: 'business',
    title: '业务组件',
    components: [
      {
        name: 'sku_update',
        title: '更新sku选项',
        readmeComponent: () => import('../../packages/sku-select/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/business/SkuUpdateDemo.vue')
      },
      {
        name: 'category_menu',
        title: '分类菜单栏',
        readmeComponent: () => import('../../packages/nav-bar/README.md'),
        demoComponent: () => import('../../examples/pages/puiDemo/components/business/Demo.vue')
      },
    ]
  }
]
