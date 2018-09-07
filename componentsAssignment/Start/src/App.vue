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
    import ServerList from './components/Server/ServerList.vue'
    import AppHeader from './components/Shared/AppHeader.vue'
    import AppFooter from './components/Shared/AppFooter.vue'
    import ServerDetail from './components/Server/ServerDetails.vue'

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