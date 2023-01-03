<template>
<div class="flex items-center gap-4">
    <p>
        Показывать по
    </p>
    <Select :list="list"
    :active="active"
    @change="$emit('pagination', $event.target.value)"/>
</div>
</template>
<script>
import Select from '@/components/ui/select.vue'
export default {
    name: 'PaginationComponent',
    components: {
        Select
    },
    props: {
        list: {
            type: Array
        },
        active: {
            type: String
        }
    },
}
</script>