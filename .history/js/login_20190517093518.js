var xm = new Vue({
    el: "#app",
    data: {
        avter: '',
    },
    methods: {
        enter() {
            alert(1111)
        },
        register() {
            window.location.href = "register.html"
        },
        forget() {
            window.location.href = "forget.html"
        }
    },

});