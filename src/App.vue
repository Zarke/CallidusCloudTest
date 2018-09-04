<template>
  <div id="app">
    <ul>
      <app-event v-for="eventBG in events" :eventInfoProp="eventBG">

      </app-event>
    </ul>
  </div>
</template>

<script>
import EventComp from './components/Event.vue';

export default {
  name: 'app',
  data () {
    return {
      resource: {},
      events: Array
    }
  },
  created() {
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
      })
  },
  components: {
    appEvent: EventComp
  }
}
</script>

<style lang="scss">

</style>
