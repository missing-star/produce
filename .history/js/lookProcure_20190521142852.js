var xm = new Vue({
    el: "#app",
    data: {
        show: false,
        procureList: [],
        text: "",
        btn: '',
        currentType:''
    },
    methods: {
        detail(id,number) {
            if (getUrlKey("id") == 1) {
                // 所有订单，可进行入库操作
                $.post(api+'/api/stock/inSystem',{
                    order_id:id,
                    qty:number,
                    token:sessionStorage.getItem('token')
                },(data) => {
                    toast(data.msg);
                    setTimeout(() => {
                    this.getAllList(getUrlKey('id'));                        
                    }, 500);
                },'json')
                .fail(err => {
                    toast('服务器异常');
                });
            } else if (getUrlKey("id") == 2) {
                // 入库记录
                window.location.href = "checkout.html?type=out&id="+id;
            } else if (getUrlKey("id") == 3) {
                // 出库记录
                window.location.href = "checkout.html?type=out&id="+id;
            }
        },
        lookPetail(index){
            window.location.href="KorderDetail.html"
        },
        // 获取所有订单列表
        getAllList(type) {
            $.toast("消息");
            var url = api;
            if(type == 1) {
                // 所有
                url += '/api/stock/getOrder';
            }
            else if(type == 2) {
                // 入库
                url += '/api/stock/inSystemRecords';
            }
            else {
                // 出库
                url += '/api/stock/outSystemRecords';
            }
            $.post(url,{token:sessionStorage.getItem('token')},(data) => {
                this.procureList = data.data;
            },'json')
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
            this.text = "查看订单"
            this.btn = "入库"
        } else if (getUrlKey("id") == 2) {
            this.text = "入库记录"
            this.btn = "出库"
        } else if (getUrlKey("id") == 3) {
            this.text = "出库记录"
            this.btn = "出库"
        }
    },

});