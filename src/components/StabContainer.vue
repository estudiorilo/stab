<template>
    <div class="stab-container">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'StabContainer'
    }
</script>

<style lang="scss" scoped>
    .stab-container {
        margin: 0 auto;
        max-width: 1200px;
    }
</style>