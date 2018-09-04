<template>
    <div @click="moreInfo = !moreInfo">
        <template v-if="moreInfo">
            <div>
                {{ eventInfo.name }}
                {{ eventInfo.venue.address_1}}
                {{ eventInfo.link }}
                {{ eventInfo.description }}
            </div>
        </template>
        <template v-else>
            {{ eventInfo.name }}
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

