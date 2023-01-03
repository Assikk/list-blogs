<template>
    <select class="px-4 h-10 border-2 border-gray outline-0"
    @onchange="$emit('change', $event.target.value)">
        <option 
        :selected="active == item.value ? true : false" 
        v-for="item in list" 
        :key="item.id" 
        :value="item.value">
            {{item.text}}
        </option>
    </select>
</template>
<script>
export default {
    name: 'DefaultSelectComponent',
    props: {
            list: Array, 
            active: String,
        }
}
</script>