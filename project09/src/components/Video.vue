<template>
  <div class="Video">
      <span>{{msg}}</span>
      <footernav></footernav>
  </div>
</template>

<script> 
//引入公共的底部
import footernav from '@/components/public/footernav'
export default {
  name: 'Video',
  data () {
    return {
      msg:'视频'
    }
  },
  
  components:{
  	footernav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
    
</style>
