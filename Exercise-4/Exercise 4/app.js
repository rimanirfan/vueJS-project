new Vue({
  el: '#exercise',
  data: {
    color: 'red',
    attachHighlight: false,
    blueClass: 'blue',
    greenClass: 'green',
    redClass: 'red',
    yellowClass: 'yellow',
    colorClass: 'green',
    bigClass: 'red',
    isYellow: false,
    styleBackground: 'gray'
  },
  computed: {
    startProgress: function() {
      return {
        backgroundColor: this.color
      }
    }
  },
  methods: {
    startEffect: function() {
      setInterval(() => {
        this.attachHighlight = !this.attachHighlight
      }, 2000)
    },
  }
});
