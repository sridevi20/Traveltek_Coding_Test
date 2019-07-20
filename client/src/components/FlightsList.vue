<template lang="html">
  <div>
  <h1>List Of Flights</h1>
  <label for="select_flight">Select a Flight</label>
        <select v-model="flights">
          <option  v-for="flight in flights" value="select_flight">{{flight["_attributes"].depair}}</option>
        </select>
      </label>
    
 <div class="flights-list" v-if="flights.length!= 0">
   <FlightListItem v-for="flight in flights" :flight="flight"/>
 </div>
</div>

</template>

<script>
import FlightListItem from '@/components/FlightListItem';

export default {
  name: 'flights-list',
  props: ['flights'],
  components: { FlightListItem }
}
</script>

<style lang="css" scoped>
</style>
