<template>
  <v-app>   
    <v-main class="grey lighten-3 ">
      <v-container class="main-grid">
        <div>           
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >              
                  <v-data-table 
                    height="600"             
                    :headers="headers"
                    :items="meals"
                    item-key="strMeal"                   
                    class="elevation-1 table"
                    :search="search"
                    :custom-filter="filterOnlyCapsText"
                    :loading="meals.length<=0"
                    loading-text="Loading... Please wait"
                  >
                  <template v-slot:item.strMealThumb="{ item }">
                    <div class="p-2">
                      <v-img :src="item.strMealThumb" :alt="item.strMealThumb" width="200px" height="200px"></v-img>
                    </div>
                  </template>
                    <template v-slot:top>
                      <v-text-field
                        v-model="search"          
                        class="mx-4"
                        label="Search Meal"
                      ></v-text-field>
                    </template>
                    <template v-slot:body.append>       
                    </template>
                  </v-data-table>
            </v-sheet>              
        </div>        
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
//import axios from 'axios';
import MenuService from './services/menu';
  export default {
    data () {
      return {      
      search: '',
      meal: '', 
      meals: []      
    }
  },

  mounted(){
    MenuService.allMeals().then(response =>{
     this.meals = response.data;     
    });    
  },
   computed: {
      headers () {
        return [
          { text: 'Meal', value: 'strMeal', },
          { text: 'Category', value: 'strCategory' },
          { text: 'Area', value: 'strArea' },
          { text: '', sortable: false, value: 'strMealThumb' },
          { text: 'Cooking  Instructions',  sortable: false, value: 'strInstructions' },          
        ]
      },
    },
  methods: {
    filterOnlyCapsText (value, search) {      
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search.toLocaleUpperCase()) !== -1          
      },
  }
  }
</script>

</script>

<style>

.main-grid {  
  margin-bottom: 5%; 
}

.table{
  margin-top: 5%;
}

</style>