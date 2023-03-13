import {ref} from 'vue';     

const useCounter = ( valueDefault = 7) =>{
    const counter = ref(valueDefault) 
        

        return {
            counter,

            decrease : () => counter.value--, // funcion que toma el valor del counter y lo modifica, para no crearlo en el setup
            increase : () => counter.value++,
                   
         }
}


export default useCounter;