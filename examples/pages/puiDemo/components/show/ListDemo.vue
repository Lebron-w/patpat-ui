<template>
    <PuiList v-model="loading" loadingText="拼命加载中" 
    @load="onLoad()" 
    :error.sync="loadError" errorText="加载失败，点击重新加载"
    :finished="loadFinished" finishedText="没有更多了">
      <div v-for="(img, index) in imgList" :key="index">
        <img :src="img.src">
        <p v-text="img.title"></p>
      </div>
    </PuiList>
</template>
<script>
export default {
  data () {
    return {
      imgList: [
        {
          title: '商品名称',
          src: 'https://img.ppwebstatic.com/origin/product/000486000208/5d09fe2baf367.jpg/350x350'
        },
        {
          title: '商品名称',
          src: 'https://img.ppwebstatic.com/origin/product/000400000355/5d2310fb91710.jpg/350x350'
        },
        {
          title: '商品名称',
          src: 'https://img.ppwebstatic.com/origin/product/006414000458/5d22f5ec59717.jpg/350x350'
        },
        {
          title: '商品名称',
          src: 'https://img.ppwebstatic.com/origin/product/000400000260/5c53ec3551b37.png/350x350'
        }
      ],
      loading: false, // 加载中
      loadError: false, // 加载错误
      loadFinished: false, // 加载完成
      loadPage: 1,
      testLoadError: true
    }
  },
  mounted() {
    console.log(this.loading)
    setTimeout(() => {
      this.loading = false
      
    }, 3000);
  },
  methods: {
   onLoad() {
    const imgList = this.imgList
    setTimeout(() => {
      this.loading = false
      // 根据api状态做对应处理 （例子暂且那page数做判断）
      if (this.loadPage === 3 && this.testLoadError) { // 判断加载错误
        this.loadError = true
        this.testLoadError = false
      } else if (this.loadPage === 5) { // 判断加载完成
        this.loadFinished = true
      } else {
        let data = [{
          title: '商品名称',
          src: 'https://img.ppwebstatic.com/origin/product/000189000649/5b2dee8621caf.jpg/350x350'
        },
        {
          title: '商品名称',
          src: 'https://img.ppwebstatic.com/origin/product/000189000649/5b2dee8621caf.jpg/350x350'
        },
        {
          title: '商品名称',
          src: 'https://img.ppwebstatic.com/origin/product/000124001032/5c9ad1e017bdc.JPG/350x350'
        },
        {
          title: '商品名称',
          src: 'https://img.ppwebstatic.com/origin/product/000001013097/5cb53cc2c4619.jpg/350x350'
        }]
        imgList.push(...data)
        this.loadPage ++
      }
    }, 1500);
   }
  }
}
</script>
<style lang="less" scoped>

</style>