<template>
    <div>
        <h3>Share {{ articles.title }} with your friend</h3>
        <button class="btn btn-primary" @click="share('facebook')">Partager sur facebook</button>
        <button class="btn btn-primary" @click="share('Twitter')">Partager sur Twitter</button>
    </div>
</template>

<script>
import {eventBus} from '../main'
export default {
    props:{
        articles:{
            type: Object,
            required: true
        }
    },
    methods: {
        share(media){
            eventBus.$emit('articlesWasShared',{
                articles : this.articles,
                media: media
            })
            this.$emit('articlesWasShared',{
                media: media
            })
        }
    }
}
</script>

<style>
    .btn-primary{
        margin-right: 5px;
    }
</style>