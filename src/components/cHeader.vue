<template>
<div class="header">
 <img src="../assets/cnodejs.svg">
 <el-button type="text" @click="dialogVisible = true">关于</el-button>
<el-dialog title="学习vue.js仿写的cnodeJS社区" :visible.sync="dialogVisible">
  <strong>这是本人的第一个vue项目</strong><br>
  <span>用到的技术栈如下所示</span><br>
  <ul>
  <li>vueJS</li>
  <li>vue-router</li>
  <li>element-ui</li>
  <li>axios</li>
  <li>cnodejs API</li>
  </ul>
</el-dialog>
</div>
</template>
<script>
export default{
	    data() {
      return {
        dialogVisible: false
      };
    }
}
</script>

<style scoped>
@import url('https://unpkg.com/element-ui/lib/theme-chalk/index.css');
.header{
  width:100%;
	background:#324057;
	height:3.6rem;

}
.header img {
    width: 10rem;
    height: 3.5rem;
    margin-left: 10rem;
}
.header button{
  float:right;
  font-size:20px;
  font-weight:700;
  line-height:1.8rem;
  margin-right:10rem;
}
.header strong{
  font-size:16px;
}
</style>