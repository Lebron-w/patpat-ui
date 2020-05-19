<template>
  <div class="img-load">
    <ul>
      <li v-for="(img, index) in imgList" :key="index">
        <img v-lazy="img.src" />
        <p>{{img.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
// import {menusManager} from '../../../../mixins/menusManager.js'
export default {
  // mixins: [menusManager],
  data () {
    return {
      imgList: [
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000486000208/5d09fe2baf367.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000400000355/5d2310fb91710.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/006414000458/5d22f5ec59717.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000400000260/5c53ec3551b37.png/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000189000649/5b2dee8621caf.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000189000649/5b2dee8621caf.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000124001032/5c9ad1e017bdc.JPG/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000001013097/5cb53cc2c4619.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000484000002/5a634b5077324.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/007384000000/5c7e5673e8b8e.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000596000721/5cb19b9d7c6b3.png/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000001016243/5cd51d99589ac.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/009798000108/5d03333aa1848.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000669002336/5d23585ddd573.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/008407000220/5d36a616bbc71.jpg/350x350'
        },
        {
          title: '图片懒加载',
          src: 'https://img.ppwebstatic.com/origin/product/000524001591/5c7261da32613.jpg/350x350'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
*{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
ul {
  font-size: 0;
  display: inline-block;
  border-top: 1px solid #f5f5f5;
  li {
    float:left;
    width: 50%;
    font-size: 14px;
    padding-top: 10px;
    border-bottom: 1px solid #f5f5f5;
    p {
      padding: 10px 0;
    }
    img {
      display: block;
      width: 100%;
    }
    &:nth-child(odd) {
      padding-right: 5px;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background: #f5f5f5;
      }
    }
    &:nth-child(even) {
      padding-left: 5px;
    }
  }
}
</style>