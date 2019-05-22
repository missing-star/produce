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
        // 限制长度
        limtPhone(key,length) {
            return this[key].substring(0,length);
        },
        register() {
            window.location.href = "register.html"
        },
        forget() {
            window.location.href = "forget.html"
        }
    },

});