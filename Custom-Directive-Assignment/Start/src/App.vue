<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-my-on:click="clicked">Click me</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'my-on': {
                bind(el, binding, vnode) {
                    // el.onclick = function() {
                    //     binding.value()
                    // }
                    const type = binding.arg
                    const fn = binding.value
                    el.addEventListener(type, fn)
                    // if (binding.arg == 'click') {
                    //     el.addEventListener('click', () => {
                    //         alert('button clicked')
                    //     })
                    // }
                }
            }
        },
        methods: {
            clicked() {
                alert('I was clicked')
            }
        }
    }
</script>

<style>
</style>
