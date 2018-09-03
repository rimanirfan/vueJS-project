new Vue ({
    el: '#exercise',
    data: {
        name: 'Riman',
        age: '21',
        link:'https://www.bmw.co.id/content/dam/bmw/common/all-models/7-series/sedan/2015/model-card/BMW-7-Series-Sedan_ModelCard.png'
    },
    methods: {
        randomNumber: function() {
            return Math.floor(Math.random(0,1) * 100)
        }
    }
})