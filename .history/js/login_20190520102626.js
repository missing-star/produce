var xm = new Vue({
    el: "#app",
    data: {
        avter: '',
    },
    methods: {
        enter() {
            toast(666);
        },
        register() {
            window.location.href = "register.html"
        },
        forget() {
            window.location.href = "forget.html"
        }
    },

});