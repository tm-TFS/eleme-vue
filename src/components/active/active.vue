<template>
  <span :class="[classMap[type], 'icon-'+size]" v-if="type != -1"></span>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      size: {
        type: Number
      },
      type: {
        type: Number
      }
    },
    created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'special'];
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixin";

  .icon-12
    display: inline-block
    vertical-align top
    width 12px
    height 12px
    background-size 12px 12px
    background-repeat no-repeat
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.guarantee
      bg-image('guarantee_1')
    &.invoice
      bg-image('invoice_1')
    &.special
      bg-image('special_1')

  .icon-16
    display: inline-block
    width: 16px
    height: 16px
    vertical-align: top
    background-size: 16px 16px
    background-repeat: no-repeat
    &.decrease
      bg-image('decrease_2')
    &.discount
      bg-image('discount_2')
    &.guarantee
      bg-image('guarantee_2')
    &.invoice
      bg-image('invoice_2')
    &.special
      bg-image('special_2')

  .icon-18
    display: inline-block
    width: 16px
    height: 16px
    vertical-align: top
    background-size: 12px 12px
    background-repeat: no-repeat
    &.decrease
      bg-image('decrease_3')
    &.discount
      bg-image('discount_3')
    &.guarantee
      bg-image('guarantee_3')
    &.invoice
      bg-image('invoice_3')
    &.special
      bg-image('special_3')
</style>
