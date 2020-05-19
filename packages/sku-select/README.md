# 更新sku选项
## 引入
### 代码
```javascript
import Vue from 'vue';
import { SkuSelect } from 'patpat-ui';

Vue.use(SkuSelect);
```
## 示例
### 代码
```html
<template>
  <div class="demo-main">
    <div>在页面中使用</div>
    <pui-sku-select :products="detail.products" :images="detail.images" submitText="加购入购物车" :skuId="19285088" />
    <div>在弹窗中使用</div>
    <PuiButton text="打开弹窗选商品" size="small" @click.native="showPopup('showBottom')"></PuiButton>
    <PuiPopup :model.sync="showBottom" position="bottom" width="100%">
      <pui-sku-select :products="detail.products" :images="detail.images" @getProduct="getProduct"/>
    </PuiPopup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBottom: false,
      detail: {
        products: [
          {
            product_id: 420294,
            product_name: "女嬰皺褶的領口設計短袖緊身衣",
            description:
              "*底部的卡扣\r\n*柔軟和舒適\r\n*材料：棉95％，5％聚酯\r\n*機洗，烘乾\r\n*進口",
            is_customized: 0,
            product_code: 17197232,
            like_number: 180,
            standard_size: null,
            tags: [],
            sku_id: 19285072,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 48,
            option: [
              {
                option_value_id: 8,
                option_value_parent_id: 0,
                color: "粉",
                color_en: "Pink",
                group_name_en: ""
              },
              {
                option_value_id: 700,
                option_value_parent_id: 0,
                size: "3-6個月",
                size_en: "3-6 Months",
                group_name_en: "",
                size_display: "3-6個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285076,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 49,
            option: [
              {
                option_value_id: 196,
                option_value_parent_id: 0,
                color: "米色",
                color_en: "Beige",
                group_name_en: ""
              },
              {
                option_value_id: 700,
                option_value_parent_id: 0,
                size: "3-6個月",
                size_en: "3-6 Months",
                group_name_en: "",
                size_display: "3-6個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285080,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 4,
                option_value_parent_id: 0,
                color: "綠色",
                color_en: "Green",
                group_name_en: ""
              },
              {
                option_value_id: 700,
                option_value_parent_id: 0,
                size: "3-6個月",
                size_en: "3-6 Months",
                group_name_en: "",
                size_display: "3-6個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285084,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 51,
            option: [
              {
                option_value_id: 10,
                option_value_parent_id: 0,
                color: "黃色",
                color_en: "Yellow",
                group_name_en: ""
              },
              {
                option_value_id: 700,
                option_value_parent_id: 0,
                size: "3-6個月",
                size_en: "3-6 Months",
                group_name_en: "",
                size_display: "3-6個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285088,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 48,
            option: [
              {
                option_value_id: 191,
                option_value_parent_id: 0,
                color: "灰色",
                color_en: "Grey",
                group_name_en: ""
              },
              {
                option_value_id: 700,
                option_value_parent_id: 0,
                size: "3-6個月",
                size_en: "3-6 Months",
                group_name_en: "",
                size_display: "3-6個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285092,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 49,
            option: [
              {
                option_value_id: 265,
                option_value_parent_id: 0,
                color: "玫紅色",
                color_en: "Hot Pink",
                group_name_en: ""
              },
              {
                option_value_id: 700,
                option_value_parent_id: 0,
                size: "3-6個月",
                size_en: "3-6 Months",
                group_name_en: "",
                size_display: "3-6個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285096,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 49,
            option: [
              {
                option_value_id: 9,
                option_value_parent_id: 0,
                color: "紫色",
                color_en: "Purple",
                group_name_en: ""
              },
              {
                option_value_id: 700,
                option_value_parent_id: 0,
                size: "3-6個月",
                size_en: "3-6 Months",
                group_name_en: "",
                size_display: "3-6個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285073,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 49,
            option: [
              {
                option_value_id: 8,
                option_value_parent_id: 0,
                color: "粉",
                color_en: "Pink",
                group_name_en: ""
              },
              {
                option_value_id: 701,
                option_value_parent_id: 0,
                size: "6-9個月",
                size_en: "6-9 Months",
                group_name_en: "",
                size_display: "6-9個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285077,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 49,
            option: [
              {
                option_value_id: 196,
                option_value_parent_id: 0,
                color: "米色",
                color_en: "Beige",
                group_name_en: ""
              },
              {
                option_value_id: 701,
                option_value_parent_id: 0,
                size: "6-9個月",
                size_en: "6-9 Months",
                group_name_en: "",
                size_display: "6-9個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285081,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 4,
                option_value_parent_id: 0,
                color: "綠色",
                color_en: "Green",
                group_name_en: ""
              },
              {
                option_value_id: 701,
                option_value_parent_id: 0,
                size: "6-9個月",
                size_en: "6-9 Months",
                group_name_en: "",
                size_display: "6-9個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285085,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 49,
            option: [
              {
                option_value_id: 10,
                option_value_parent_id: 0,
                color: "黃色",
                color_en: "Yellow",
                group_name_en: ""
              },
              {
                option_value_id: 701,
                option_value_parent_id: 0,
                size: "6-9個月",
                size_en: "6-9 Months",
                group_name_en: "",
                size_display: "6-9個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285089,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 191,
                option_value_parent_id: 0,
                color: "灰色",
                color_en: "Grey",
                group_name_en: ""
              },
              {
                option_value_id: 701,
                option_value_parent_id: 0,
                size: "6-9個月",
                size_en: "6-9 Months",
                group_name_en: "",
                size_display: "6-9個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285093,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 265,
                option_value_parent_id: 0,
                color: "玫紅色",
                color_en: "Hot Pink",
                group_name_en: ""
              },
              {
                option_value_id: 701,
                option_value_parent_id: 0,
                size: "6-9個月",
                size_en: "6-9 Months",
                group_name_en: "",
                size_display: "6-9個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285097,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 9,
                option_value_parent_id: 0,
                color: "紫色",
                color_en: "Purple",
                group_name_en: ""
              },
              {
                option_value_id: 701,
                option_value_parent_id: 0,
                size: "6-9個月",
                size_en: "6-9 Months",
                group_name_en: "",
                size_display: "6-9個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285074,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 8,
                option_value_parent_id: 0,
                color: "粉",
                color_en: "Pink",
                group_name_en: ""
              },
              {
                option_value_id: 703,
                option_value_parent_id: 0,
                size: "12-18個月",
                size_en: "12-18 Months",
                group_name_en: "",
                size_display: "12-18個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285078,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 196,
                option_value_parent_id: 0,
                color: "米色",
                color_en: "Beige",
                group_name_en: ""
              },
              {
                option_value_id: 703,
                option_value_parent_id: 0,
                size: "12-18個月",
                size_en: "12-18 Months",
                group_name_en: "",
                size_display: "12-18個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285082,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 49,
            option: [
              {
                option_value_id: 4,
                option_value_parent_id: 0,
                color: "綠色",
                color_en: "Green",
                group_name_en: ""
              },
              {
                option_value_id: 703,
                option_value_parent_id: 0,
                size: "12-18個月",
                size_en: "12-18 Months",
                group_name_en: "",
                size_display: "12-18個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285086,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 10,
                option_value_parent_id: 0,
                color: "黃色",
                color_en: "Yellow",
                group_name_en: ""
              },
              {
                option_value_id: 703,
                option_value_parent_id: 0,
                size: "12-18個月",
                size_en: "12-18 Months",
                group_name_en: "",
                size_display: "12-18個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285090,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 191,
                option_value_parent_id: 0,
                color: "灰色",
                color_en: "Grey",
                group_name_en: ""
              },
              {
                option_value_id: 703,
                option_value_parent_id: 0,
                size: "12-18個月",
                size_en: "12-18 Months",
                group_name_en: "",
                size_display: "12-18個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285094,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 265,
                option_value_parent_id: 0,
                color: "玫紅色",
                color_en: "Hot Pink",
                group_name_en: ""
              },
              {
                option_value_id: 703,
                option_value_parent_id: 0,
                size: "12-18個月",
                size_en: "12-18 Months",
                group_name_en: "",
                size_display: "12-18個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285098,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 9,
                option_value_parent_id: 0,
                color: "紫色",
                color_en: "Purple",
                group_name_en: ""
              },
              {
                option_value_id: 703,
                option_value_parent_id: 0,
                size: "12-18個月",
                size_en: "12-18 Months",
                group_name_en: "",
                size_display: "12-18個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285075,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 8,
                option_value_parent_id: 0,
                color: "粉",
                color_en: "Pink",
                group_name_en: ""
              },
              {
                option_value_id: 704,
                option_value_parent_id: 0,
                size: "18-24個月",
                size_en: "18-24 Months",
                group_name_en: "",
                size_display: "18-24個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285079,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 196,
                option_value_parent_id: 0,
                color: "米色",
                color_en: "Beige",
                group_name_en: ""
              },
              {
                option_value_id: 704,
                option_value_parent_id: 0,
                size: "18-24個月",
                size_en: "18-24 Months",
                group_name_en: "",
                size_display: "18-24個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285083,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 4,
                option_value_parent_id: 0,
                color: "綠色",
                color_en: "Green",
                group_name_en: ""
              },
              {
                option_value_id: 704,
                option_value_parent_id: 0,
                size: "18-24個月",
                size_en: "18-24 Months",
                group_name_en: "",
                size_display: "18-24個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285087,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 10,
                option_value_parent_id: 0,
                color: "黃色",
                color_en: "Yellow",
                group_name_en: ""
              },
              {
                option_value_id: 704,
                option_value_parent_id: 0,
                size: "18-24個月",
                size_en: "18-24 Months",
                group_name_en: "",
                size_display: "18-24個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285091,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 191,
                option_value_parent_id: 0,
                color: "灰色",
                color_en: "Grey",
                group_name_en: ""
              },
              {
                option_value_id: 704,
                option_value_parent_id: 0,
                size: "18-24個月",
                size_en: "18-24 Months",
                group_name_en: "",
                size_display: "18-24個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285095,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 265,
                option_value_parent_id: 0,
                color: "玫紅色",
                color_en: "Hot Pink",
                group_name_en: ""
              },
              {
                option_value_id: 704,
                option_value_parent_id: 0,
                size: "18-24個月",
                size_en: "18-24 Months",
                group_name_en: "",
                size_display: "18-24個月"
              }
            ],
            size_chart: 1
          },
          {
            sku_id: 19285099,
            price: "5.99",
            icon:
              "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
            msrp: "19.99",
            product_status: "11",
            stock: 50,
            option: [
              {
                option_value_id: 9,
                option_value_parent_id: 0,
                color: "紫色",
                color_en: "Purple",
                group_name_en: ""
              },
              {
                option_value_id: 704,
                option_value_parent_id: 0,
                size: "18-24個月",
                size_en: "18-24 Months",
                group_name_en: "",
                size_display: "18-24個月"
              }
            ],
            size_chart: 1
          }
        ],
        images: [
          {
            type: "image",
            color: "粉",
            option_value_id: 8,
            images: [
              [
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022953ca046.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022939d9cc2.jpg",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/5d022953f0107.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/5d02295415a72.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/5d02295437ba5.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/5d022954507b6.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d0229546112f.JPG"
              ]
            ]
          },
          {
            type: "image",
            color: "米色",
            option_value_id: 196,
            images: [
              [
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d02296a8ecc2.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/5d02296aa1f13.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/5d02296abdbe5.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/5d02296ad325e.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/5d02296b05387.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d02296b1cf95.JPG"
              ]
            ]
          },
          {
            type: "image",
            color: "綠色",
            option_value_id: 4,
            images: [
              [
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022989c5dbf.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/5d022989ef52b.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/5d02298a0e162.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/5d02298a1be36.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/5d02298a39354.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d02298a51178.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d02298a70373.JPG"
              ]
            ]
          },
          {
            type: "image",
            color: "黃色",
            option_value_id: 10,
            images: [
              [
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d0229a491809.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/5d0229a4af211.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/5d0229a4c19e4.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/5d0229a4e2351.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/5d0229a51671c.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d0229a5217ab.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d0229a53b6d2.JPG"
              ]
            ]
          },
          {
            type: "image",
            color: "玫紅色",
            option_value_id: 265,
            images: [
              [
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022a0e9bcd9.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/5d022a0ebd1a9.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/5d022a0ed5dcc.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/5d022a0f040c8.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/5d022a0f1f87c.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d022a0f394c1.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d022a0f45a93.JPG"
              ]
            ]
          },
          {
            type: "image",
            color: "紫色",
            option_value_id: 9,
            images: [
              [
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d022a4f2e7de.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/5d022a4f52005.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/5d022a4f6630f.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/5d022a4f7c5ae.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/5d022a4fb432a.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d022a4fc2127.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d022a4fe33f3.JPG"
              ]
            ]
          },
          {
            type: "image",
            color: "灰色",
            option_value_id: 191,
            images: [
              [
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/5d0229ba3c4ad.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/5d0229ba58191.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/5d0229ba6f184.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/5d0229ba84ede.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/5d0229baa7171.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d0229bac3513.JPG",
                "http://patpatwebstatic.s3.us-west-2.amazonaws.com/origin/product/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/009984000443/5d0229bad6589.JPG"
              ]
            ]
          }
        ]
      }
    };
  },
  methods: {
    showPopup(type) {
      this[type] = true;
    },
    getProduct(product) {
      console.log(product)
      this.Toast({
        type: 'icon-success',
        message: `选择的商品skuId: ${product.sku_id}, 数量为: ${product.quantity}`,
        duration: 3000
      })
    }
  }
};
</script>
```


## API

*__所有数据格式为网站返回的数据格式__*

### SkuSelect Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| products | 商品数组 | `array` | - |
| images | 商品图片 | `array` | - |
| skuId | 默认选中skuid | `number/string` | - |
| submitText | 确定按钮文案 | `string` | `Add To Cart` |
| colorText | 颜色文案 | `string` | `Color` |
| sizeText | 尺寸文案 | `string` | `Size` |
| quantityText | 数量文案 | `string` | `Quantity` |
| newSkuStyle | 使用新样式（现在网站逻辑，英文使用新样式） | `boolean` | `false` |
| showSizeChart | 是否展示尺码表点击按钮 | `boolean` | `false` |
| showSizeChart | 是否展示尺码表点击按钮 | `boolean` | `false` |
### SkuSelect Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| getProduct | 获得所选择的商品 | product, 选择的商品（包含数量等） |
| selectChange | 颜色或者尺寸改变时触发 | option, 改变后的颜色已经尺寸 |
| showChart | 点击展示尺码表按钮时触发 | 无 |