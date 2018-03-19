<template>
  <div id="footernav">
     <!-- 底部公共导航 -->
     <nav class="footer">
         <ul>
             <router-link to="/" tag="li">
                <span class="iconfont" :class=" $route.path=='/'?'icon-shouye01':'icon-shouye' "></span>
                <p :class=" $route.path=='/'?'changeColor':'NOchangeColor' ">首页</p>
             </router-link>
             <router-link to="/Video" tag="li">
                <span class="iconfont" :class=" $route.path=='/Video'?'icon-sanjiaoshouqi':'icon-bofangsanjiaoxing' "></span>
                <p :class=" $route.path=='/Video'?'changeColor':'NOchangeColor' ">视频</p>
             </router-link>
             <router-link to="/Toutiao" tag="li">
                <span class="iconfont" :class=" $route.path=='/Toutiao'?'icon-xinxi1':'icon-xinxi' "></span>
                <p :class=" $route.path=='/Toutiao'?'changeColor':'NOchangeColor' ">微头条</p>
             </router-link>
             <router-link to="/Me" tag="li">
                <span class="iconfont" :class=" result=='Me'?'icon-mine-red':'icon-wode' "></span>
                <p :class=" $route.path=='/Me'?'changeColor':'NOchangeColor' ">我的</p>
             </router-link>
         </ul>
     </nav>
  </div>
</template>

<script>
export default {
  name: 'footernav',
  computed:{
    result:function(){
      //将路径以/切割得到数组
      var arr=this.$route.path.split('/');
      //将数据返回到页面上
       return arr[1];
    }
  }
}
</script>
<!-- 1.样式后坠 并且引入样式文件-->
<style scoped lang="scss">
  @import '../../assets/css/base.scss';
    *{font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif};
   .footer{
       position: fixed;
       bottom: rem(0px);
       width:100%;
       height:rem(100px);
       ul{
         display: flex;
         width:100%;
         height:rem(100px);
         li{
           width: 25%;
           height:rem(100px);
           text-align: center;
           font-size: rem(24px);
           background: red;
           span{
             font-size: rem(60px);
           }
          .changeColor{
            color: #00A9FF;
          }
          .NOchangeColor{
            color: #9E9E9E;
          }
         }
       }
   }

</style>
