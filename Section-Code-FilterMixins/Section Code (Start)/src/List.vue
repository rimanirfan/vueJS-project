<template>
    <div>
        <h1>Filters & Mixins</h1>
        <hr>
        <input type="" v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitsMixin'

    export default {
        mixins: [fruitMixin],
        created() {
            console.log('inside list created')
        }
    }
</script>

<style>

</style>
