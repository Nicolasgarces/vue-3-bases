<template>
  <h1>Counter View</h1>
  <h2>{{ counter }}</h2>
  <button @click="increase ">+ 1</button>
  <button @click="decrease ">- 1</button>
</template>

<script>
import useCounter from '@/composables/useCounter'


export default {
    name: 'Counter',
    props:{},
    emit:[],

    setup (){
    console.log('el setup se llamó');

       const {counter, decrease, increase} = useCounter(2) // llamo la funcion useCounter y la desestructuro

       return{
        counter, decrease, increase //retorno lo que desestructuré para usarl en los buttons
       }
    }
}
</script>

<style>

</style>