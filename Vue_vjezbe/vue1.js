const app = new Vue ({
    el: '#app',
    data: {
        message: "Pozdrav iz Vue.js-a",
        conuter: 0
    },
    methods: {
        incrementCounter() {
            this.counter++;
        }
    }
})