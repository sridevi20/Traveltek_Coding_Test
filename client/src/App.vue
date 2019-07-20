<template>
  <div id="app">


    <div id="flightSame">List Of Flight  For Same Day
   <button class="flightSame" v-on:click="findListOfFlightsForSameDay()"></button>
   <p>{{this.ListOfFlightsForSameDay.length}}</p>
    <div id="flightDeparture">List Of Departure Flights From Manchestar
    <button class="flightDeparture" v-on:click="findAllDeparturesFromManAirport ()"></button>
    <p>{{this.flightForManDeparture.length}}</p>
      <div id="flightBussiness">List Of Flights For Bussiness Class
   <button class="flightForBussinessClass" v-on:click="findFlightsForBussinessClass()"></button>
   <p> {{this.flightForBussinessClass.length}}</p>
    <div id="flightfindAllDeparturesFromAirport">List Of All Departures From Airport</div>
   <button class="flightAllDeparturesFromAirport" v-on:click="findListOfAllDepartureAirports()"></button>
    <p> {{this.ListOfAllDeparturesAirports.length}}</p>
    <div id="flightMaxStops">Maximum Number Of Stops For Flights
   <button class="flightMaxStops" v-on:click="findFlightsForMaxNumOfStops()"></button>
   <p>{{this.ListOfFlightsForMaxRecurringStops.length}}</p>
   <div id="flightNumber">Different Flight Numbers On Each Day
   <button class="flightNumber" v-on:click="findflightNumbersOnEachDay()"></button>
   <p>{{this.flightNumbersOnEachDay.length}}</p>

    <flights-list :flights="flights" />
</div>
</div>
</div>
</div>
</div>

   </div>
</template>

<script>
import FlightsList from '@/components/FlightsList';
import {eventBus} from './main';




export default {
  name: 'app',

  data() {
    return {
      flights: [],
      ListOfFlightsForMaxRecurringStops: [],
      ListOfFlightsForSameDay: [],
      flightForManDeparture: [],
      ListOfAllDeparturesAirports: [],
      flightForBussinessClass: [],
      flightNumbersOnEachDay:[]




    }
  },

  components: {
    'flights-list': FlightsList

  },
  mounted(){
    this.fetchData()
         eventBus.$on('refresh-data', this.fetchData);
         //call functions

         // this.flightForMaxStops = findFlightsForMaxNumOfStops();
         // this.flightForSameDay = findListOfFlightsForSameDay();
         // this.flightForAllDeparture = flightfindAllDeparturesFromAirport();
         // this.flightForBussinessClass =  findFlightsForBussinessClass();
  },

  methods: {
    fetchData(){
      return fetch("http://localhost:3000")
      .then(res => res.json())
      .then(data => this.flights = data);

    },
    findListOfAllDepartureAirports(){
      // console.log(this.flights);
      const flightDepart = [];
      const AllDeparturesAirports =  this.flights.map((flight)=>{
      flightDepart.push[flight["_attributes"].depair]
         console.log(flightDepart);
             return flightDepart;
      });
       this.ListOfAllDeparturesAirports = flightDepart;


    },

   findListOfFlightsForSameDay(){
      const flightsSameDay = this.flights.filter((flight) => {
       return flight["_attributes"] .indepartdate === "2018-01-20";
         });
             this.ListOfFlightsForSameDay = flightsSameDay;
             console.log(this.ListOfFlightsForSameDay);



   },

    findAllDeparturesFromManAirport (){
      const flightDeparture = this.flights.filter((flight) => {
        return flight["_attributes"].depair === "MAN";
      });
        this.flightForManDeparture = flightDeparture;
         console.log(this.flightForManDeparture);


    },

    findFlightsForBussinessClass (){
      const flightForBussinessClass = this.flights.filter((flight) => {
         return flight["_attributes"].inflightclass === "Business";
      });
            this.flightForBussinessClass = flightForBussinessClass;

            console.log(this.flightsForBussinessClass);


    },
    findFlightsForMaxNumOfStops(){

       const map = new Map();
       const max = 1;
       const maxRecurringStops = "";
          for(flight of this.flights) {

             if(map.get(flight) === undefined) {
                map.set(flight, 1);
             } else {
                const count = map.get(flight);
                count = count+1;
                map.set(flight, count);
                    if(max < count) {
                       max = count;
                       maxRecurringStops = flight;
                    }
              }
              return maxRecurringStops;
       }
           this.ListOfFlightsForMaxRecurringStops = maxRecurringStops;
       },

       findflightNumbersOnEachDay(){

            function flightNumbersOnEachDay(flight) {
                const result = [];
                for (const flight in flights) {
                    const value = flight["_attributes"].inflightno;
                    if (typeof value === "inarrivaldate") {
                        result.push(flightNumbersOnEachDay(value));
                    }
                    else {
                        result.push(value);
                    }
                }
                return result;
            }
            this.flightNumbersOnEachDay = result;

       }




  }
}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
