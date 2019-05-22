var xm = new Vue({
    el: "#app",
    data: {
        show: false,
        procureList: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
        text: "",
        btn: '',
    },
    methods: {
        detail() {
            if (getUrlKey("id") == 1) {
               alert(11)
            } else if (getUrlKey("id") == 2) {
                alert(22)
            } else if (getUrlKey("id") == 3) {
                window.location.href = "checkout.html"
            }
        },
        lookPetail(index){
            window.location.href="KorderDetail.html"
        },
        // 获取所有订单列表
        getAllList() {
            $.post(api+'/api/stock/getOrder',(data) => {

            },'json')
            .fail((err) => {
                toast('服务器异常');
            });
        }
    },
    created() {
        var id = getUrlKey("id")
        console.log(id)
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