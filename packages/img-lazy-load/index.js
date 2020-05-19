// 导入组件
import Vue from 'vue'

let optionData

Vue.install = function (Vue, option) {
  optionData = option
}

Vue.directive('lazy', {
  inserted: function (el, binding) {
    el.setAttribute('data-src', binding.value)
    el.setAttribute('src', optionData.loading)
    el.setAttribute('lazy', 'loading')
    viewImg(el)
    window.addEventListener('scroll', function () {
      viewImg(el)
    })
  }
})
function viewImg (imgEl) {
  let ImgObj = new Image()
  ImgObj.src = imgEl.getAttribute('data-src')

  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  let elemTop = imgEl.offsetTop
  let elem = imgEl.offsetParent
  while (elem != null) { //只要还有相对定位的父元素 
    elemTop += elem.offsetTop;
    elem = elem.offsetParent;
  }
  if (scrollTop + window.innerHeight >= elemTop) {
    ImgObj.onload = function () {
      if (ImgObj.width > 0 && ImgObj.height > 0) {
        imgEl.src = imgEl.getAttribute('data-src')
        imgEl.setAttribute('lazy', 'success')
      } else {
        imgEl.setAttribute('lazy', 'error')
      }
    }
    
  }
}

window.addEventListener('scroll', function () {

})

// 默认导出组件
export default Vue
