<template>
  <div class="Me">
    <footernav></footernav>
     <div class="Mynav">
          <ul>
              <router-link to="/Me/" tag="li">加入我们</router-link> 
              <router-link to="/Me/Dashang" tag="li">打赏我们</router-link> 
              <router-link to="/Me/Hezuo" tag="li">商业合作</router-link> 
          </ul>
      </div>
  <router-view/>
  </div>
</template>

<script> 
//引入公共的底部
import footernav from '@/components/public/footernav'
export default {
  name: 'Me',
  data () {
    return {
      msg: 'Me'
    }
  },
  
  
  components:{
    footernav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   @import '../assets/css/base.scss';
    .Mynav{
       width:100%;
       height:rem(100px);
       ul{
         display: flex;
         width:100%;
         text-align: center;
         line-height: rem(100px);
         height:rem(100px);
         font-size: rem(40px);
         li{
            width:33.33%;
            height:rem(100px);
            background: red;
         }
      }
    }

</style>
