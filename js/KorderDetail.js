var xm = new Vue({
    el: "#app",
    data: {
        isshade: false,
        cOrderDetail: {},
        time: "",
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
        }
    },
    created() {
        this.orderId = getUrlKey('id')
        this.getCorderDetail(getUrlKey('id'));
        this.current = getUrlKey('type')
        if (getUrlKey("type") == 2) {
            this.title = "备注"
            this.time = "入库时间"
        } else if (getUrlKey("type") == 3) {
            $('title').html('入库记录');
            this.time = "出库时间"
            this.title = "产品编号"
        }
    }
});