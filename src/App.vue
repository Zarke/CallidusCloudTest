<template>
  <div id="app" class="container">
    <div class="d-flex flex-column text-center">
      <h1 class="text-info">List of all upcomming meetups in Belgrade</h1>
      <app-event v-for="eventBG in events" :eventInfoProp="eventBG">
      </app-event>
    </div>
    <div class="text-center ">
      <img v-if="!loadedData" src="./assets/Rolling-2.5s-200px.gif" alt="">
    </div>
  </div>
</template>

<script>
import EventComp from './components/Event.vue';

export default {
  name: 'app',
  data () {
    return {
      resource: {},
      events: Array,
      loadedData:false
    }
  },
  created() {
    //custom action for retrieving all meetups in Belgrade
    const customActions = {
      eventBG: {method: 'GET', url:'find/upcoming_events?photo-host=public&page=20&sig_id=249650594&radius=30&lon=20.4489&lat=44.7866&sig=d2e2f73ae58796e31188889e91f0e8535079e0ab'}
    };
    this.resource = this.$resource('', {}, customActions);
    this.resource.eventBG()
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        this.events = data.events; 
        this.loadedData = true;           
      })
  },
  components: {
    appEvent: EventComp
  }
}
</script>

<style lang="scss">
@import './styles.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
