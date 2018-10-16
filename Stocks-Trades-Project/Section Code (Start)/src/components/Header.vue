<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Stock Trader</router-link>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav mr-auto">
                    <router-link to="/portfolio"  activeClass="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a> </router-link>
                </ul>
                <strong class="navbar-text navbar-right">Your funds: {{ funds | currency}}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="" @click.prevent="endDay">End day</a></li>
                    <li class="dropdown">
                        <a 
                            href="" 
                            class="dropdown-toggle"
                            data-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="">Save Data</a></li>
                            <li><a href="">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div> <!-- Navbar collapse -->
        </div> <!-- container-fluid -->
    </nav>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }, 
        methods: {
            ...mapActions([
               'randomizeStocks' 
            ]),
            endDay() {
                this.randomizeStocks()
            }
        }
    }
</script>
