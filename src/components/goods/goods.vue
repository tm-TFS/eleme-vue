<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <active class="icon" :type="item.type" :size="18"></active>{{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  import active from 'components/active/active';

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      };
    },
    components: {
      active
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

      this.$http.get('/api/goods').then((response) => {
        let _res = response.body;
        if (_res.status === 1) {
          this.goods = _res.data;
        } else {
          alert('请求错误');
        }
      }, response => {
        alert('网络异常');
      });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixin";

  .goods
    display flex
    position absolute
    width 100%
    top 165px
    bottom 46px
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px //不设width 安卓不兼容
      background #f3f5f7
      .menu-item
        display table
        padding 0 12px
        height 54px
        width 56px
        line-height 14px
        .icon
          margin-right 2px
        .text
          display table-cell
          width 56px
          vertical-align middle
          border-1px(rgba(7,17,27,0.1))
          font-size 12px
    .foods-wrapper
      flex 1
</style>
