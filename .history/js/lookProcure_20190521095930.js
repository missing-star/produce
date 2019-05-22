var xm = new Vue({
    el: "#app",
    data: {
        show: false,
        procureList: [],
        text: "",
        btn: '',
    },
    methods: {
        detail(id) {
            if (getUrlKey("id") == 1) {
                // 所有订单
                window.location.href = "checkout.html?type=in&id="+id;
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
            $.post(api+'/api/stock/getOrder',(data) => {
                this.procureList = data.data;
            },'json')
            .fail((err) => {
                toast('服务器异常');
            });
        }
    },
    created() {
        this.getAllList();
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