<template>
<Transition>
  <Modal v-if="isShowModal"/>
</Transition>
  <component :is="layout">
      <router-view/>
    </component>
</template>
<script>
import DefaultLayout from '@/layouts/default.vue'
import Modal from '@/components/ui/modal.vue'
import {mapState} from 'vuex'
export default {
  components: {
    DefaultLayout, Modal
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'login') + '-layout'
    },
    ...mapState({
      isShowModal: state => state.isShowModal
    })
  }
}
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>