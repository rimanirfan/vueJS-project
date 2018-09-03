new Vue ({
    el: '#myApp',
    data: {
        title: 'Hello World!',
        link: 'https://google.com',
        finishedLink: '<a href="https://google.com">Google</a>',
        counter: 0,
        x: 0,
        y:0,
        attachRed: false,
        color: 'green'
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    },
    methods: {
        sayHello: function() {
            this.title = 'Hello!'
            return this.title
        },

        increase: function() {
            this.counter++
        },

        increaseByStep: function(step, event) {
            this.counter += step
        },

        updateCoordinates: function(event) {
            this.x = event.clientX
            this.y = event.clientY
        },

        alertMe: function() {
            alert('Alert')
        }
    }
})