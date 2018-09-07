<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-server-list></app-server-list>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import ServerList from './ServerList.vue'
    import AppHeader from './AppHeader.vue'
    import AppFooter from './AppFooter.vue'

    export default {
        components: {
            'app-server-list'    : ServerList,
            'app-header'         : AppHeader,
            'app-footer'         : AppFooter
        }
    }
</script>

<style>

</style>


