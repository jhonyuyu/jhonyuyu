<template>
  <div id="app">
      <cHeader></cHeader>
      <router-view name='main'></router-view>
        <router-view name='side' ref='child'></router-view>
  </div>
</template>
<script>

import cHeader from './components/cHeader';

export default {
  name: 'app',
  data(){
  return{
     
   }
  },
  components:{
     cHeader,
  }
}
</script>

<style>
#app{
	font-family:"Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
body{
  margin:0;
  padding:0;
}
</style>
