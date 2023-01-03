<template>
    <router-view class="main__container p-4"/>
</template>
<script>
export default {
    name: 'DefaultLayout'
}
</script>
<style>
.main__container {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
}
</style>