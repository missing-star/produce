var xm = new Vue({
    el: "#app",
    data: {
        avter: '',
        phone:'',
        password:''
    },
    methods: {
        enter() {
            var phoneReg = /^[1-9]{10}[0-9]$/;
            if(!phoneReg.test(this.phone)) {
                toast('请输入11位手机号');
                return;
            }
            else if(this.password.trim() == '') {
                toast('请输入密码!');
                return;
            }
            this.post(api+'',{

            },(data) => {

            },'json')
            .fail((err) => {

            });
        },
        // 限制长度
        limitLength(key,length) {
            this[key] = this[key].substring(0,length);
        },
        register() {
            window.location.href = "register.html"
        },
        forget() {
            window.location.href = "forget.html"
        }
    },

});