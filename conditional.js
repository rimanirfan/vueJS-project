// Vue.component('hello', {
//     template: '<h1>Hello!</h1>'
// })

new Vue({
    el: '#app',
    data: {
        // show: true
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
            {name: 'Max', age:27, color:'red'},
            {name: 'Anna', age:'unknown', color:'blue'}
        ]
    }
})