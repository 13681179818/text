<template>
  <div class="Index">
    <span>{{msg}}</span>
    <footernav></footernav>
  </div>
</template>

<script> 
//引入公共的底部
import footernav from '@/components/public/footernav'
export default {
  name: 'Index',
  data () {
    return {
      msg:'首页'
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
