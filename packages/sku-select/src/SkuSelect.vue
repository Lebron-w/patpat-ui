<template>
  <div class="sku-wrap">
    <div class="select-sku" :class="{'new-sku-style': newSkuStyle, 'sku-style': !newSkuStyle}">
      <div class="sku-color" v-if="haveColor" :class="{'no-select': !selectColorFlag}">
        <div class="title">{{colorText}}</div>
        <div class="color-wrap">
          <div v-for="(item,index) in selectColors" :key="index"  class="color-item">
            <div class="select-color" :class="{'selected': item.isSelectColor, 'none-stock': !allColors[index].isHasColor}" @click="isSelectCol(index, allColors[index].color)">
              <div class="img-wrap">
                <img :src="allColors[index]['image']" alt="">
              </div>
              <p>{{allColors[index].color}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sku-size" v-if="haveSize" :class="{'no-select': !selectRuleFlag}">
        <div class="title">{{sizeText}} <span class="size-chart" v-if="showSizeChart" @click="showChart">{{sizeChartText}}</span></div>
        <div class="rules-wrap">
          <div v-for="(item,index) in selectRules" :key="index" class="rule-item">
            <div class="select-rule"
              :class="{'selected': item.isSelectRule, 'none-stock': !allRules[index].isHasRule}"
              @click="isSelectSize(index, allRules[index].rules)">
              <div v-if="newSkuStyle">
                <p>{{allRules[index]['sizeOne']}}</p>
                <p>{{allRules[index]['sizeTwo']}}</p>
              </div>
              <div v-else>
                {{allRules[index].rules}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sku-qty">
        <div class="title">{{quantityText}}</div>
        <div class="select-qty">
          <div class="btn minus" :class="{'disabled': quantity < 2}" @click="minus">-</div>
          <input class="quantity" v-model.number="quantity" min="1" :max="selectedGoods.stock" type="number" @input="input">
          <div class="btn add" :class="{'disabled': quantity >= selectedGoods.stock}" @click="add">+</div>
        </div>
      </div>
    </div>
    <div class="sku-submit">
      <PuiButton :text="submitText" size="large" color="#f1435a" @click="submit"></PuiButton>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PuiSkuSelect',
  props: {
    products: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    },
    newSkuStyle: {
      type: Boolean,
      default: false
    },
    showSizeChart: {
      type: Boolean,
      default: false
    },
    sizeChartText: {
      type: String,
      default: 'Size Chart'
    },
    colorText: {
      type: String,
      default: 'Color'
    },
    sizeText: {
      type: String,
      default: 'Size'
    },
    quantityText: {
      type: String,
      default: 'Quantity'
    },
    submitText: {
      type: String,
      default: 'Add To Cart'
    },
    skuId: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      selectColorFlag: true,
      selectRuleFlag: true,
      isSelectColor: '',
      isSelectRule: '',
      selectedGoods: {},
      allColors: [],
      expressSelected: '选择 颜色分类 尺码',
      allRules: [],
      selectColors: [],
      selectRules: [],
      haveColor: false,
      haveSize: false,
      quantity: 1
    }
  },
  computed: {
  },
  methods: {
    getRightData () {
      let allColors = []
      let allRules = []
      for (let i = 0; i < this.products.length; i++) {
        let curProductOption = this.products[i]['option']

        if (this.skuId && this.products[i].sku_id == this.skuId) {
          this.selectedGoods = this.products[i]
          this.isSelectColor = curProductOption[0].color
          if (curProductOption[1] && curProductOption[1].size) {
            this.isSelectRule = curProductOption[1].size
          }
        }

        if (curProductOption[0] && curProductOption[0].color) {
          allColors.push(curProductOption[0].color)
        } else if (curProductOption[0] && curProductOption[0].size) {
          allRules.push(curProductOption[0].size)
        }
        if (curProductOption[1] && curProductOption[1].size) {
          allRules.push(curProductOption[1].size)
        }
      }

      // 每个颜色对应尺寸设置是否有库存的标签
      let newAllRules = []
      for (let i = 0; i < Array.from(new Set(allRules)).length; i++) {
        let selColor = {
          'rules': Array.from(new Set(allRules))[i],
          'isHasRule': false
        }
        newAllRules.push(selColor)
      }

      for (let i = 0; i < newAllRules.length; i++) {
        for (let j = 0; j < this.products.length; j++) {
          let curSizeOption = this.products[j]['option'][1]
          if (this.newSkuStyle) {
            let sizeArr = this.splitSize(curSizeOption['size'] || curSizeOption['size_display'])
            if (sizeArr.length > 1) {
              newAllRules[i].sizeOne = sizeArr[0]
              newAllRules[i].sizeTwo = sizeArr[1]
            }
          }
          newAllRules[i].sizeEn = curSizeOption['size_en']
          newAllRules[i].sizeDisplay = curSizeOption['size_display']
          newAllRules[i].groupNameEn = curSizeOption['group_name_en']
          if (curSizeOption.size === newAllRules[i].rules && this.products[j].stock > 0) {
            newAllRules[i].isHasRule = true
            break
          }
        }
      }

      this.allRules = newAllRules
      if (this.allRules.length > 0) {
        this.haveSize = true
      }

      // 每个尺寸对应的颜色设置是否有库存标签
      let newAllColors = []
      for (let i = 0; i < Array.from(new Set(allColors)).length; i++) {
        let selRule = {
          'color': Array.from(new Set(allColors))[i],
          'isHasColor': false
        }
        newAllColors.push(selRule)
      }

      for (let i = 0; i < newAllColors.length; i++) {
        for (let j = 0; j < this.products.length; j++) {
          for (let k = 0; k < this.images.length; k++) {
            if (newAllColors[i].color === this.images[k].color) {
              newAllColors[i].image = this.images[k]['images'][0][0]
            }
          }
          if (this.products[j]['option'][0].color === newAllColors[i].color && this.products[j].stock > 0) {
            newAllColors[i].colorEn = this.products[j]['option'][0]['color_en']
            newAllColors[i].groupNameEn = this.products[j]['option'][0]['group_name_en']
            newAllColors[i].isHasColor = true
            break
          }
        }
      }

      this.allColors = newAllColors
      if (newAllColors.length > 0) {
        this.haveColor = true
      }

      let selColors = []
      let selRules = []

      // 获取每个颜色对应的尺寸
      for (let i = 0; i < this.allColors.length; i++) {
        let allRules = []
        for (let j = 0; j < this.products.length; j++) {
          if (this.allColors[i].color === this.products[j]['option'][0].color) {
            allRules.push(this.products[j])
          }
        }
        let colorAndRule
        if (this.isSelectColor != '' && this.allColors[i].color === this.isSelectColor) {
          colorAndRule = {
            'isSelectColor': true
          }
        } else {
          colorAndRule = {
            'isSelectColor': false
          }
        }
        let eveColor = this.allColors[i].color
        colorAndRule[eveColor] = allRules
        selColors.push(colorAndRule)
      }

      // allColors
      for (let i = 0; i < this.allRules.length; i++) {
        let allColors = []
        for (let j = 0; j < this.products.length; j++) {
          if (this.allRules[i].rules === this.products[j]['option'][1].size) {
            allColors.push(this.products[j])
          }
        }
        let eveRule = this.allRules[i].rules
        let colorAndRule
        if (this.isSelectRule != '' && this.allRules[i].rules === this.isSelectRule) {
          colorAndRule = {
            'isSelectRule': true
          }
        } else {
          colorAndRule = {
            'isSelectRule': false
          }
        }
        colorAndRule[eveRule] = allColors
        selRules.push(colorAndRule)
      }

      this.selectRules = selRules
      this.selectColors = selColors
    },
    // 点击选中颜色
    isSelectCol (index, color) {
      if (!this.allColors[index].isHasColor) {
        return false
      }
      this.selectColorFlag = true
      let hasRules = []

      for (let i = 0; i < this.selectColors.length; i++) {
        if (index === i) {
          this.selectColors[i].isSelectColor = true
          for (let key in this.selectColors[i]) {
            if (key === color) {
              hasRules = this.selectColors[i][key]
              this.isSelectColor = color
            }
          }
        } else {
          this.selectColors[i].isSelectColor = false
        }
      }

      // 所有尺寸全为空
      for (let j = 0; j < this.allRules.length; j++) {
        this.allRules[j].isHasRule = false
      }

      // 库存中存在的致为可选
      for (let i = 0; i < hasRules.length; i++) {
        for (let j = 0; j < this.allRules.length; j++) {
          if (this.allRules[j].rules === hasRules[i]['option'][1].size && hasRules[i].stock > 0) {
            this.allRules[j].isHasRule = true
          }
        }
        if (this.isSelectRule !== '' || !this.haveSize) {
          if (this.haveSize && hasRules[i]['option'][1].size === this.isSelectRule) {
            this.selectedGoods = hasRules[i]
          } else {
            this.selectedGoods = hasRules[i]
          }
        }
      }

      if (this.isSelectRule === '') {
        this.expressSelected = '请选择尺码'
      } else {
        this.expressSelected = '已选' + ' ' + this.isSelectColor + ' 尺码' + this.isSelectRule
      }
      let selectOption = {
        size: this.isSelectRule,
        color: this.isSelectColor
      }
      this.$emit('selectChange', selectOption)
    },
    // 选择尺寸
    isSelectSize (index, rule) {
      if (!this.allRules[index].isHasRule) {
        return false
      }

      this.selectRuleFlag = true
      let hasColors = []

      for (let i = 0; i < this.selectRules.length; i++) {
        if (index === i) {
          this.selectRules[i].isSelectRule = true
          for (let key in this.selectRules[i]) {
            if (key === rule) {
              hasColors = this.selectRules[i][key]
              this.isSelectRule = rule
            }
          }
        } else {
          this.selectRules[i].isSelectRule = false
        }
      }

      // 所有尺寸全为空
      for (let j = 0; j < this.allColors.length; j++) {
        this.allColors[j].isHasColor = false
      }

      // 库存中存在的致为可选
      for (let i = 0; i < hasColors.length; i++) {
        for (let j = 0; j < this.allColors.length; j++) {
          if (this.allColors[j].color === hasColors[i]['option'][0].color && hasColors[i].stock > 0) {
            this.allColors[j].isHasColor = true
          }
        }

        if (this.isSelectColor !== '') {
          if (hasColors[i]['option'][0].color === this.isSelectColor) {
            this.selectedGoods = hasColors[i]
          }
        }
      }

      if (this.isSelectColor === '') {
        this.expressSelected = '请选择颜色'
      } else {
        this.expressSelected = '已选' + ' ' + this.isSelectColor + ' 尺码' + this.isSelectRule
      }
      let selectOption = {
        size: this.isSelectRule,
        color: this.isSelectColor
      }
      this.$emit('selectChange', selectOption)
    },
    splitSize (sizeName) {
      let one = ''
      let two = ''
      // 匹配包含Months 或 Years 或 US 的字符串
      let reg1 = /Months|Years|US/g
      // 匹配所有除字母或空格以外的字符串(单个单词也匹配)
      let reg2 = /[^a-zA-Z\s]|^[a-zA-Z]+$/g
      // 如果属性值种有months,years,us时统一从这三个单词之前的空格换行
      if (sizeName.match(reg1)) {
        let keyword = sizeName.match(reg1)[0]
        one = sizeName.substring(0, sizeName.indexOf(keyword))
        two = sizeName.substring(sizeName.indexOf(keyword))
      } else if (!sizeName.match(reg2)) {
        // 多个纯单词，按最后一个空格划分
        let lastIndex = sizeName.lastIndexOf(' ')
        one = sizeName.substring(0, lastIndex)
        two = sizeName.substring(lastIndex)
      }

      if (one && two) {
        // 去掉前后空格
        one = one.replace(/(^\s*)|(\s*$)/g, '')
        // 去掉前后空格
        two = two.replace(/(^\s*)|(\s*$)/g, '')
        return [one, two]
      } else {
        return [sizeName]
      }
    },
    input() {
      if (Object.keys(this.selectedGoods).length === 0) {
        this.quantity = 1
        return
      }
      if (this.quantity < 1) {
        this.quantity = 1
      }
      if (this.quantity >= this.selectedGoods.stock) {
        this.quantity = this.selectedGoods.stock
      }
    },
    // 增添数辆
    add () {
      if (this.haveColor && this.isSelectColor === '') {
        console.log('请选择颜色')
        this.selectColorFlag = false
        return
      }
      if (this.haveSize && this.isSelectRule === '') {
        console.log('请选择尺码')
        this.selectRuleFlag = false
        return
      }
      if (this.quantity < this.selectedGoods.stock) {
        this.quantity++
      } else {
        console.log('库存不足')
      }
    },
    // 减少购买数辆
    minus () {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    // 确定
    submit () {
      if (this.haveColor && this.isSelectColor === '') {
        console.log('请选择颜色')
        this.selectColorFlag = false
        return
      }

      if (this.haveSize && this.isSelectRule === '') {
        console.log('请选择尺码')
        this.selectRuleFlag = false
        return
      }
      this.selectedGoods.quantity = this.quantity

      this.$emit('getProduct', this.selectedGoods)
      // console.log(this.selectedGoods)
    },
    showChart() {
      this.$emit('showChart')
    }
  },
  mounted () {
    this.getRightData()
  }
}
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
} /* 这是针对缺省样式 (必须的) */
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.2);
} /* 滚动条的滑轨背景颜色 */

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0px;
} /* 滑块颜色 */

::-webkit-scrollbar-button {
  background-color: #7c2929;
  height: 0;
  width: 0px;
} /* 滑轨两头的监听按钮颜色 */

::-webkit-scrollbar-corner {
  background-color: black;
} /* 横向滚动条和纵向滚动条相交处尖角的颜色 */
.sku-wrap {
  background: #fff;
  padding: 10px 0;
  .title {
    padding: 0 18px;
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
    height: 24px;
    line-height: 24px;
  }
  .sku-color {
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }
  .sku-size {
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    .size-chart {
      float: right;
      text-decoration: underline;
      font-size: 12px;
      color: #b1b3b7;
    }
  }
  .no-select {
    border: 1px solid #f00;
  }
  .select-sku {
    &.new-sku-style {
      text-align: left;
      .color-wrap {
        box-sizing: border-box;
        .color-item {
          display:inline-block;
          .select-color{
            display: inline-block;
            text-align: center;
            vertical-align: top;
            position: relative;
            padding-left: 0 !important;
            margin: 0 5px;
            .img-wrap {
              height: 46px;
              width: 46px;
              margin: auto;
              border-radius: 50%;
              overflow: hidden;
              position: relative;
              -webkit-box-sizing: content-box;
              box-sizing: content-box;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              font-size: 0;
              border: 2px solid #fff;
              img {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                -webkit-appearance: none;
                border: 1px solid #f1f3f2;
              }
            }
            p {
              color: #444;
              width: 62px;
              margin-top: 5px;
              display: -webkit-box;
              box-orient: vertical;
              -webkit-box-orient: vertical;
              line-clamp: 2;
              -webkit-line-clamp: 2;
              overflow: hidden;
              font-size: 12px;
              line-height: 15px;
              word-break: break-all;
            }
            &.selected {
              .img-wrap {
                border: 2px solid #f1435a;
              }
              p {
                color: #f1435a;
              }
            }
            &.none-stock {
              .img-wrap {
                position: relative;
                &::before {
                  content: "";
                  position: absolute;
                  top: 50%;
                  width: 86%;
                  height: 1px;
                  background: #a5a5a5;
                  -webkit-transform: rotate(-45deg);
                  transform: rotate(-45deg);
                }
                &::after {
                  content: "";
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  width: 36px;
                  height: 36px;
                  border: 1px solid #a5a5a5;
                  border-radius: 100%;
                  -webkit-transform: translate(-50%,-50%);
                  transform: translate(-50%,-50%);
                }
              }
            }
          }
        }
      }
      .rules-wrap {
        background: #fff;
        padding: 5px 0;
        font-size: 0;
        overflow-x: auto;
        display: flex;
        width: 100%;
        border-right: 10px solid #fff;
        border-left: 10px solid #fff;
        box-sizing: border-box;
        .select-rule{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          background-color: rgba(241, 243, 242, 0.5);
          text-align: center;
          font-size: 13px;
          margin-right: 10px;
          margin-bottom: 10px;
          position: relative;
          height: 50px;
          min-width: 65px;
          line-height: 15px;
          border-radius: 4px;
          box-sizing: border-box;
          &.none-stock {
            border-radius: 4px;
            white-space: nowrap;
            background-color: rgba(241, 243, 242, 0.5);
            p {
              color: #cdd2d3;
            }
          }
          &.selected {
            border: 1px solid #f1435a;
            background-color: #ffe3e7;
            p {
              color: #f1435a;
            }
          }
        }
      }
    }
    &.sku-style {
      text-align: left;
      .color-wrap {
        background: #fff;
        padding: 0 10px;
        box-sizing: border-box;
        .color-item {
          display: inline-block;
          .select-color {
            white-space: nowrap;
            font-size: 14px;
            border: 1px solid #f1f3f2;
            min-width: 50px;
            text-align: center;
            margin-right: 10px;
            margin-bottom: 10px;
            position: relative;
            padding: 3px 8px 3px 36px;
            height: 28px;
            line-height: 22px;
            border-radius: 4px;
            overflow: hidden;
            box-sizing: border-box;
            .img-wrap {
              position: absolute;
              top: 1px;
              left: 1px;
              display: inline-block;
              width: 24px;
              height: 24px;
              img {
                width: 24px;
                height: 24px;
              }
            }
            p {
              display: inline-block;
            }
            &.selected {
              border-color: #ff2556;
              p {
                color: #ff2556;
              }
              &::before {
                content: "";
                width: 10px;
                height: 10px;
                position: absolute;
                bottom: 0;
                right: 0;
                background: #ff2556;
                border-top-left-radius: 7px;
              }
              &::after {
                content: "";
                width: 6px;
                height: 3px;
                position: absolute;
                bottom: 4px;
                right: 1px;
                border-bottom: 1px solid #fff;
                border-left: 1px solid #fff;
                transform: rotate(-45deg);
              }
            }
          }
        }
      }
      .rules-wrap {
        background: #fff;
        padding: 0 10px;
        font-size: 0;
        box-sizing: border-box;
        .rule-item {
          display: inline-block;
          .select-rule {
            white-space: nowrap;
            display: inline-block;
            font-size: 14px;
            border: 1px solid #f1f3f2;
            min-width: 50px;
            text-align: center;
            margin-right: 10px;
            margin-bottom: 10px;
            position: relative;
            padding: 3px 8px;
            height: 28px;
            line-height: 22px;
            border-radius: 4px;
            overflow: hidden;
            box-sizing: border-box;
            &.selected {
              border-color: #ff2556;
              div {
                color: #ff2556;
              }
            }
            &.none-stock {
              border: 1px solid #f1f3f2;
              border-radius: 4px;
              div {
                color: #cdd2d3;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
    .sku-qty {
      height: 30px;
      padding-right: 18px;
      margin-bottom: 20px;
      .title {
        float: left;
        height: 30px;
        line-height: 30px;
        margin-bottom: 0px;
      }
      .select-qty {
        float: right;
        line-height: 30px;
        .btn {
          width: 30px;
          height: 30px;
          float: left;
          text-align: center;
          line-height: 30px;
          background: #f1f3f2;
          font-size: 20px;
          color: #676767;
          &.disabled {
            color: #dadcdb;
          }
          &.minus {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          &.add {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
        .quantity {
          float: left;
          background: #f1f3f2;
          width: 50px;
          height: 30px;
          margin: 0 2px;
          text-align: center;
          line-height: 30px;
          color: #444;
          outline: none;
          border: none;
        }
      }
    }
  }
  .sku-submit {
    box-sizing: border-box;
    width: 100%;
    padding: 0 15px;
    /deep/ .pui-button {
      margin: 0;
    }
  }
}
</style>