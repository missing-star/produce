var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        cOrderDetail: {},
        title: '',
        current: '',
        orderId: '',
    },
    methods: {
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
        goOut(){
            window.location.href="out-order.html"
        }
    },
    created() {
        this.orderId = getUrlKey('id')
        this.getCorderDetail(getUrlKey('id'));
        this.current = getUrlKey('type')
        if (getUrlKey("type") == 2) {
            $("#Torder").attr("disabled","disabled")
            this.title="入库时间"

        } else if (getUrlKey("type") == 3) {
            $("#Torder").attr("disabled","disabled")
            this.title="出库时间"
        }
    }
});