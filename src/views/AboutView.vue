<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Cambiar Título</button>
  </div>
</template>

<script>

import { 
ref,
onBeforeMount,
onMounted,
onBeforeUpdate,
onUpdated,
onBeforeUnmount,
onUnmounted,
onRenderTracked,
onRenderTriggered,
onActivated,
onDeactivated 
} from "vue";

export default {
  setup() {

    const title = ref('about');

    console.log('el setup se llamó');

    onBeforeMount(()=> {
      console.log('onBeforeMount')
    })
    onMounted(()=> {
      console.log('onMounted')
    })
    onBeforeUpdate(()=> {
      console.log('onBeforeUpdate')
    })
    onUpdated(()=> {
      console.log('onUpdated')
    })
    onBeforeUnmount (()=> {
      console.log('onBeforeUnmount')
    })
    onUnmounted(()=> {
      console.log('onUnmounted')
    })
    onRenderTracked(()=> {
      console.log('onRenderTracked')
    })
    onRenderTriggered(()=> {
      console.log('onRenderTriggered')
    })
    onActivated(()=> {
      console.log('onActivated')
    })
    onDeactivated(()=> {
      console.log('onDeactivated')
    })

    return {
      title,
      changeTitle: () => title.value = 'New About'
    }
  },
}
</script>
