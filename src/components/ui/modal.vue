<template>
    <section class="application w-screen h-screen fixed z-[9999] bg-black/40">
        <div class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[90%] sm:w-auto">
            <div class="bg-white rounded p-1 w-auto sm:w-[500px]">
                <div class="border-b border-[#e5e5e5] px-[6.4px] py-1 flex items-center justify-between">
                    <p class="text-xl">
                        Подробное описание
                    </p>
                    <span class="font-bold text-2xl opacity-75 hover:opacity-100 cursor-pointer"
                    @click="change_modal(false)">
                        ×
                    </span>
                </div>
                <div class="p-4 flex gap-4">
                    <a :href="modal.url" class="min-w-[150px] min-h-[150px]" target="_blank">
                        <img :src="modal.thumbnailUrl" :alt="modal.title" class="w-full h-full">
                    </a>
                    <p>
                        {{modal.title}}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'ModalComponent',
    computed: {
        ...mapState({
            modal: state => state.modal
        })
    },
    methods: {
        ...mapMutations({
            change_modal: 'CHANGE_MODAL'
        })
    }
}
</script>