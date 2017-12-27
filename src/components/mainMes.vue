<template>
<div class="mainDiv" v-loading="loading">
   <div v-for="item of items" :key="item.id">
    	 <router-link :to='{name: "userRoute",params:{name: item.author.loginname}}'>
           	<img :src='item.author.avatar_url' :title='item.author.loginname'>
    	 </router-link>
    	 <div class='textDiv'>
                <router-link :to='{name:"articleRoute",params:{id:item.id}}'>{{item.title}}</router-link>
                <div class='ansCreate'>
                    <span>回复：{{item.reply_count}}</span>
                    <span>创建于：{{String(item.create_at).match(/.{10}/)[0]}}</span>
                </div>
         </div>
    </div>
</div>
</template>

<script>
export default {
	data(){
	     return {
           items: [],
            limit: 0,
            loading: true,
        };
	},
	methods:{
		Scroll(){
			const sumH = document.body.scrollHeight || document.documentElement.scrollHeight;
            const viewH = document.documentElement.clientHeight;
            const scrollH = document.body.scrollTop || document.documentElement.scrollTop;
            if (viewH + scrollH >= sumH) {
                this.getData();
            } 
	  },
	  getData(){
	     this.limit +=9; //因为页数是1，而且limit这个是每一页的主题量，所以是+=9
	     this.$http({
	        url:'https://cnodejs.org/api/v1/topics',
	        method:'get',
	        params:{
	         page:1,    //页数
	         limit:this.limit,  //每一页的主题量
	         mdrender: 'false', //如果为true，那么会渲染出现所有markdown格式文本
	        },

	     }).then((response)=>{
	     		this.items=response.data.data;
	     }).catch((error)=>{
              alert('出错了....'+error);
	     });
	  },
	},
	mounted(){
	 window.addEventListener('scroll', this.Scroll);
	},
	  created() {
        this.getData();
    },
    watch: {
        items(val) {
            if (val) {
                this.loading = false;
            }
        },
    },	
};
</script>
<style scoped>
.mainDiv {
    width: 60%;
    margin: 0 auto;
    background: #F9FAFC;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    font-size: 22px;
    padding: 2rem;
    min-height: 40rem;
}
a {
    text-decoration: none;
}
.mainDiv>div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.5rem 0;
    border-bottom: 2px solid #C0CCDA;
    padding-bottom: 1rem;
}

.mainDiv>div img {
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
}

.textDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
}

.textDiv a {
    color: grey;
    font-size: 25px;
}

.textDiv a:hover {
    color: #005ab5;
}

.ansCreate {
    font-size: 17px;
    margin-top: 1rem;
    color: #8492A5;
}

.ansCreate span:first-child {
    margin-right: 2rem;
}
</style>