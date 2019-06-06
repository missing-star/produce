var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        isbox: false,
        cOrderDetail: {},
        time: "",
        title: '',
        current: '',
        orderId: '',
    },
    methods: {
        goback() {
            history.go(-1);
        },
        getCorderDetail(id) {
            $.post(api + '/api/purchase/getOrderInfo', {
                order_id: id,
                token: sessionStorage.getItem('token')
            }, (data) => {
                this.cOrderDetail = data.data;
            }, 'json')
                .fail((err) => {
                    toast('服务器异常');
                });
        },
        open() {
            this.isshade = true
        },
        close() {
            this.isshade = false
        },
        // 入库
        goOut() {
            window.location.href = "out-order.html"
        },
        // 打印标签
        tagChange() {
            this.isshade = true;
            this.isbox = true;
        },
        confireChange() {

        },
        // 反馈
        gofeedback() {
            window.location.href = "feedback.html"
        }
    },
    created() {
        this.orderId = getUrlKey('id')
        this.getCorderDetail(getUrlKey('id'));
        this.current = getUrlKey('type')
    }
});