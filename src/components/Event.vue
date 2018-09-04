<template>
    <div class="btn-outline-info border rounded mb-3 " @click="moreInfo = !moreInfo" >
        <template v-if="moreInfo">
            <div >
                <a class="h1" :href="eventInfo.link">{{ eventInfo.name }}</a>
                <h5>{{ eventInfo.venue.address_1}}</h5>
                <h5>{{ eventInfo.venue.city}}</h5>
            </div>
            <div class="p-3" v-html="eventInfo.description"></div>
        </template>
        <template v-else>
            <div>
                <div class="d-inline">{{ eventInfo.name }}</div> 
                <div class="d-inline"><font-awesome-icon class="float-right mr-2 mt-1" icon="plus" /></div>
            </div>
            
        </template>
    </div>
</template>
<script>
export default {
    props:{
        eventInfoProp: Object
    },
    data:function(){
        return{
            eventInfo: this.eventInfoProp,
            moreInfo: false
        }
    },
    watch:{
        eventInfoProp: function(){
            this.eventInfo = this.eventInfoProp;
        }
    }
}
</script>

