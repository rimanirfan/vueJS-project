let cmp = {
    data: function() {
        return {
            status: 'Critical'
        }
        // show: true
        // ingredients: ['meat', 'fruit', 'cookies'],
        // persons: [
        //     {name: 'Max', age:27, color:'red'},
        //     {name: 'Anna', age:'unknown', color:'blue'}
        // ]
    },
    template: '<p>Server status: {{ status }} </p>'
}

new Vue({
    el: '#app',
    components: {
        'my-cmp': cmp
    }
})

new Vue({
    el: '#app2'
})