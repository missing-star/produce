var xm = new Vue({
    el: "#app",
    data: {
        show: false,
        procureList: [],
        text: "",
        btn: '',
        currentType: ''
    },
    methods: {
        detail(id, number, name) {
            if (getUrlKey("id") == 1) {
                // 所有订单，可进行入库操作
                $.post(api + '/api/stock/inSystem', {
                    order_id: id,
                    qty: number,
                    token: sessionStorage.getItem('token')
                }, (data) => {
                    toast(data.msg);
                    setTimeout(() => {
                        this.getAllList(getUrlKey('id'));
                    }, 500);
                }, 'json')
                    .fail(err => {
                        toast('服务器异常');
                    });
            } else if (getUrlKey("id") == 4) {
                // 库存
                window.location.href = "checkout.html";
                sessionStorage.setItem('name', name)
            }
        },
        lookPetail(index) {
            window.location.href = "KorderDetail.html"
        },
        // 获取所有订单列表
        getAllList(type) {
            var url = api;
            if (type == 1) {
                // 所有
                url += '/api/stock/getOrder';
            }
            else if (type == 2) {
                // 入库
                url += '/api/stock/inSystemRecords';
            }
            else if (type == 4) {
                url += '/api/stock/stockNum';
            }
            else {
                // 出库
                url += '/api/stock/outSystemRecords';
            }
            $.post(url, { token: sessionStorage.getItem('token') }, (data) => {
                this.procureList = data.data;
            }, 'json')
                .fail((err) => {
                    toast('服务器异常');
                });
        }
    },
    created() {
        var id = getUrlKey("id");
        this.currentType = id;
        this.getAllList(id);
        if (getUrlKey("id") == 1) {
            $('title').html('采购订单');
            this.btn = "入库"
        } else if (getUrlKey("id") == 2) {
            $('title').html('入库记录');
        } else if (getUrlKey("id") == 3) {
            $('title').html('出库记录');
        } else if (getUrlKey("id") == 4) {
            $('title').html('库存');
            this.btn = "出库"
        }
    },

});