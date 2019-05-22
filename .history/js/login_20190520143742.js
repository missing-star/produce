var xm = new Vue({
    el: "#app",
    data: {
        avter: '',
        phone:''
    },
    methods: {
        enter() {
            var phoneReg = /^[1-9]{10}[0-9]$/;
            if(!phoneReg.test(this.phone)) {
                toast('请输入11位手机号');
            }
        },
        register() {
            window.location.href = "register.html"
        },
        forget() {
            window.location.href = "forget.html"
        }
    },

});