<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-server-list></app-server-list> 
            <app-server-detail></app-server-detail>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import ServerList from './ServerList.vue'
    import AppHeader from './AppHeader.vue'
    import AppFooter from './AppFooter.vue'
    import ServerDetail from './ServerDetails.vue'

    export default {
        components: {
            'app-server-list'    : ServerList,
            'app-header'         : AppHeader,
            'app-footer'         : AppFooter,
            'app-server-detail'  : ServerDetail
        }
    }
</script>

<style>

</style>