<template>
    <div class="relative w-full border-[1px] border-[#e5e5e5] rounded p-2">
        <input type="text" class="outline-0 w-full"
        placeholder="Поиск..."
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @keyup.enter="$emit('search', $event.target.value)">
        <span v-if="modelValue.length > 0" class="absolute top-1/2 transform -translate-y-1/2 right-4 font-bold text-2xl opacity-75 hover:opacity-100 cursor-pointer"
        @click="$emit('clearInput')">
            ×
        </span>
    </div>
</template>
<script>
export default {
    name: 'SearchComponent',
    props: ['modelValue']
}
</script>