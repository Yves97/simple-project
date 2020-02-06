<template>
    <div class="alert alert-info">
        <p v-if="announcement">{{announcement}} </p>
        <p v-else>No comment yet</p>
    </div>

</template>

<script>
import {eventBus} from '../main'
export default {
    data(){
        return{
            announcement: null
        }
    },
    created() {
        eventBus.$on('articlesWasShared',(data)=>{
            this.announcement = data.articles.title + ' Was shared on ' + data.media + ' !'
        })
    },
}
</script>