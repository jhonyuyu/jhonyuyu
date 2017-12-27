<template>
    <div class='userDiv'>
        <div class='person' v-loading.lock='loading'>
            <div>
                <img :src='userMes.avatar_url' :title='userMes.loginname'>
                <span>{{userMes.loginname}}</span>
            </div>
            <p>
                <icon name='score' scale='4'></icon>
                <span>积分：</span>{{userMes.score}}</p>
            <p>
                <icon name='github' scale='4'></icon>
                <span>Github：</span> https://github.com/{{userMes.githubUsername}}</p>
            <p>
                <icon name='time' scale='4'></icon>
                <span>注册时间:</span>{{String(userMes.create_at).match(/.{10}/)[0]}}</p>
        </div>

        <div class='joinTopics' v-loading.lock='loading'>
            <p>最近参与的话题</p>
            <template v-for='(items,index) of userMes.recent_replies'>
                <div v-if='index < 4' :key='index'>
                    <router-link :to='{name: "userRoute",params:{name: items.author.loginname}}'>
                        <img :src='items.author.avatar_url' :title='items.author.loginname'>
                    </router-link>
                    <router-link :to='{name: "articleRoute",params:{id:items.id}}'>
                        <p class='userTitle'>{{items.title}}</p>
                    </router-link>
                </div>
            </template>
        </div>

        <div class='createTopics' v-loading.lock='loading'>
            <p>最近创建的话题</p>
            <template v-for='(item,index) of userMes.recent_topics'>
                <div v-if='index < 5 && item' :key='index'>
                    <img :src='item.author.avatar_url' :title='item.author.loginname'>
                    <router-link :to='{name: "articleRoute",params:{id:item.id}}'>
                        <p class='userTitle'>{{item.title}}</p>
                    </router-link>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    data(){
         return {
            userMes:{
            create_at: '2017-12-20',
            },
            loading: true,
        };
    },
    created(){
      this.$http({
        url:`https://cnodejs.org/api/v1${this.$route.path}`,
        method:'get'
      }).then((response)=>{
            this.userMes=response.data.data;
      }).catch((error)=>{
            alert('报错了...'+error);
      })
    },
      beforeRouteUpdate(to, from, next) {
        this.$http({
            url: `https://cnodejs.org/api/v1${to.path}`,
            method: 'get',
        }).then((response) => {
            this.userMes = response.data.data;
        }).catch((response) => {
        });
        next();
    },
       watch: {
        userMes(val) {
            if (val) {
                this.loading = false;
            }
        },
    },
}
</script>
<style scoped>
.userDiv {
    width: 50%;
    margin:100px auto;
    padding: 0;
    box-sizing: border-box;
    border: none;
}

a{  
    color: black;
    text-decoration: none;
}
.person {
    padding: 1rem;
    background: #EFF2F7;
    border-radius: 0.3rem;
}

.person div {
    margin-bottom: 1.5rem;
}

.person div span {
    font-size: 25px;
    color: black;
    margin-left: 1rem;
}

.person p {
    display: flex;
    align-items: center;
    color: grey;
    margin: 0.5rem 0;
}

.person p span {
    margin: 0 0.5rem;
    color: black;
}

.person svg {
    color: black;
    margin-left: 0.2rem;
}

.createTopics img,
.joinTopics img {
    width: 5rem;
    height: 5rem;
}

.createTopics>p,
.joinTopics>p {
    font-size:18px;
    margin-bottom: 1rem;
    color: black;
    padding-bottom: 1.5rem;
}

.userTitle {
    font-size: 25px;
}

.createTopics {
    padding: 1rem;
    background: #D3DCE6;
    border-radius: 0.3rem;
}

.joinTopics {
    background: #E5E9F2;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.3rem;
}

.joinTopics div,
.createTopics div {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    border-bottom: 2px solid #C0CCDA;
    padding-bottom: 1rem;
}

.createTopics div {
    border-bottom: 2px solid #99A9BF;
}

.joinTopics div img,
.createTopics div img {
    margin-right: 1rem;
}
</style>
