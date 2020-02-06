<template>
    <div class="articles">
        <h1>{{ title }}</h1>
        <p>Published on : {{ published.getDate() }}</p>
        <p>Shares: {{ shares }}</p>
        <p class="lead">{{ content }}</p>
        <auther :firstName="author.firstName" :lastName="author.lastName"></auther>
        <br><br>
        <social :articles="$data" @articlesWasShared="shared"></social>
    </div>
</template>

<script>
    // import moment from 'moment'
    import Auther from './Auther.vue'
    import Social from './Social.vue'
    export default {
        data(){
            return {
                title: "10 reasons why Vue.js is beautifull",
                published: new Date(),
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel sunt quas eaque, sint velit in iusto consequatur harum maiores. Quisquam non sed nulla harum ipsum optio, facilis molestias repudiandae.',
                author: {
                    firstName: 'Yves',
                    lastName: 'Kouadio',
                },
                shares: 0
            }
        },
        methods:{
            shared:function(){
                this.shares++
            }
        },
        components: {Auther,Social}
        // filters: {
        //     moment: function(value){
        //         return moment(value).format('MMM Do')
        //     }
        // }
    }
</script>
