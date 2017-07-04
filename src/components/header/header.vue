<template>
  <div class="header">
    <div class="content" @click="showSupportsDetail()">
      <div class="avatar">
        <img :src="seller.avatar" alt="avatar" width="64" height="64">
      </div>
      <div class="right-block">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达

        </div>
        <div class="supports" v-if="seller.supports">
          <active class="active-icon" :type="seller.supports[0].type" :size="12"></active>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports">
        <span class="count">
          {{ seller.supports.length }}个
        </span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="foot">
      <span class="icon"></span>
      <span class="text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="background" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div class="supports-detail" v-show="supportsDetailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-content">
            <h1 class="name">{{ seller.name }}</h1>
            <div class="star-wrapper">
              <star :size="36" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item, index) in seller.supports">
                <active class="active-icon" :type="seller.supports[index].type" :size="16"></active>
                <span class="text">{{ seller.supports[index].description }}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="supportsDetailShow = 0">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  import active from 'components/active/active';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        supportsDetailShow: 0
      }
    },
    methods: {
      showSupportsDetail(){
        this.supportsDetailShow = 1;
      }
    },
    created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'special'];

    },
    components: {
      star,
      active
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixin";
  .header
    position relative
    overflow hidden
    color rgb(255, 255, 255)
    background rgba(7, 17, 27, 0.5)
    blur 10px
    .content
      position relative
      padding 14px 16px 18px 24px
      font-size 0
      .avatar
        display: inline-block
        vertical-align top
        margin-right 16px
        img
          border-radius 2px
      .right-block
        display inline-block
        font-size 14px
        .title
          margin 2px 0 8px
          .brand
            vertical-align top
            display inline-block
            width: 30px
            height 18px
            bg-image('brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
            line-height 18px
        .description
          margin-bottom 10px
          line-height 12px
          font-size 12px
        .supports
          margin-bottom 2px
          line-height 12px
          .active-icon
            margin-right 4px
          .text
            line-height 12px
            font-size 10px
      .supports-count
        position absolute
        right 12px
        bottom 14px
        background-color rgba(0, 0, 0, 0.2)
        display inline-block
        padding 0 8px
        border-radius 14px
        height 24px
        line-height 26px
        font-size 10px
        text-align center
        .count
          vertical-align top
        .icon-keyboard_arrow_right
          margin-left 2px
          line-height 24px
    .foot
      padding 0 22px 0 12px
      background-color rgba(7, 17, 27, 0.2)
      font-size 10px
      height 28px
      line-height 28px
      text-overflow: ellipsis
      white-space: nowrap
      overflow: hidden
      position relative
      .icon
        vertical-align top
        display inline-block
        margin-top: 8px
        width 22px
        height 12px
        bg-image('bulletin')
        background-size 22px 12px
        background-repeat no-repeat
      .text
        vertical-align top
      .icon-keyboard_arrow_right
        position absolute
        right 12px
        top 8px

    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter blur(5px)
    .supports-detail
      position fixed
      z-index 100
      top 0
      left 0
      background rgba(7, 17, 27, 0.8)
      overflow auto
      width 100%
      height 100%
      backdrop-filter blur(10px)
      &.fade-enter-active, &.fade-leave-active
        transition: all 0.5s
      &.fade-enter, &.fade-leave-active
        opacity: 0
        background: rgba(7, 17, 27, 0)
      .detail-wrapper
        width 100%
        min-height 100%
        .detail-content
          text-align center
          margin-top: 64px
          padding-bottom: 64px
          .name
            font-size 16px
            font-weight 700
            line-height 16px
          .star-wrapper
            margin-top 16px
            padding 2px 0
          .title
            display flex
            width 80%
            margin 28px auto 24px auto
            .line
              flex 1px
              position relative
              top -6px
              border-bottom 1px solid rgba(255, 255, 255, 0.2)
            .text
              padding 0 12px
              font-size 14px
              font-weight 700
          .supports
            text-align left
            width: 80%
            margin: 0 auto
            .support-item
              padding: 0 12px
              margin-bottom: 12px
              font-size: 0
              &:last-child
                margin-bottom: 0
              .active-icon
                margin-right: 6px
              .text
                line-height: 16px
                font-size: 12px

          .bulletin
            text-align left
            width: 80%
            margin: 0 auto
            .content
              padding: 0 12px
              line-height: 24px
              font-size: 12px
      .detail-close
        position relative
        width 32px
        height: 32px
        margin -60px auto 0 auto
        clear: both
        font-size: 32px
</style>
