<template>
    <div class="articles">
        <h1>{{ title }}</h1>
        <p>Published on : {{ published.getDate() }}</p>
        <p class="lead">{{ content }}</p>
        <auther :firstName="author.firstName" :lastName="author.lastName"></auther>
    </div>
</template>

<script>
    // import moment from 'moment'
    import Auther from './Auther.vue'
export default {
    data(){
        return {
            title: "10 reasons why Vue.js is beautifull",
            published: new Date(),
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel sunt quas eaque, sint velit in iusto consequatur harum maiores. Quisquam non sed nulla harum ipsum optio, facilis molestias repudiandae.',
            author: {
                firstName: 'Yves',
                lastName: 'Kouadio',
            }
        }
    },
    components: {Auther}
    // filters: {
    //     moment: function(value){
    //         return moment(value).format('MMM Do')
    //     }
    // }
}
</script>

<style>
    *{
        color: red
    }
</style>