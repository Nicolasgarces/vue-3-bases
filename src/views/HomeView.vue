<template>
  <div class="home">
   <h1>Reactive vs Ref</h1>
   <h2>{{ ironman }}</h2>
   <h2>{{ hulk }}</h2>

   <button @click="changeIronman">Change</button>
   <button @click="changeHulk">Change</button>

   <h3> Ironman: {{ironmanIsAlive}}</h3>
   <h3> Hulk: {{hulkIsAlive}}</h3>
   <button @click="statusChange">Change status</button>

  </div>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  name: 'HomeView',

    setup() {

    const ironman = ref({ name: 'Tony', age: 50 })
    const hulk= reactive({ name: 'Bruce', age: 50})

    const ironmanIsAlive = reactive(false) //solo funciona con objetos
    const hulkIsAlive = ref(true)

    const statusChange = () => {
      ironmanIsAlive = !ironmanIsAlive
      hulkIsAlive.value = !hulkIsAlive.value
    }

    return{
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,
      statusChange,
      

      changeIronman: ( ) =>{
        ironman.value.name = 'Tony Stark'
        ironman.value.age= 55 
      },

      changeHulk:( ) =>{
        hulk.name = 'Bruce Banner'
        hulk.age = 45
      },
    }  
  
  }
   
}



</script>
