<template lang="html">
  <div class="flight-list-item">
   <p> Carrier: {{flight["_attributes"].carrier}}</p>
   <p>Departure: {{flight["_attributes"].depair}}<p/>
     <p>Destination: {{flight["_attributes"].destair}}</p>
     <p>ArrialDate: {{flight["_attributes"].inarriavaldate}}</p>
     <p>ArrivalTime: {{flight["_attributes"].inarrivaltime}}</p>
     <p>ArrivalCode: {{flight["_attributes"].inarrivalcode}}</p>
     <p>CarrierCode: {{flight["_attributes"].incarriercode}}</p>
     <p>Departure Code: {{flight["_attributes"].indepartcode}}</p>
     <p>DepartureDate: {{flight["_attributes"].indepartdate}}</p>
     <p>DepartureTime: {{flight["_attributes"].indeparttime}}</p>
     <p>FlightClass: {{flight["_attributes"].inflightclass}}</p>
  </div>
</template>

<script>

export default {
  props: ['flight']
}
</script>

<style lang="css" scoped>


p {
  color: green;
}
