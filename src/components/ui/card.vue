<template>
    <div class="border-[1px] border-[#e5e5e5] p-4 rounded shadow-lg flex gap-6">
        <a :href="card.url" class="min-w-[150px] min-h-[150px]" target="_blank">
            <img :src="card.thumbnailUrl" :alt="card.title" class="w-full h-full">
        </a>
        <div @click="$emit('change')" class="w-full h-full">
            <Text>
                {{card.title}}
            </Text>
        </div>
    </div>
</template>
<script>
import Text from '@/components/ui/text.vue'
export default {
    name: 'CardComponent',
    components: {
        Text
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>