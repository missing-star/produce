var xm = new Vue({
    el: "#app",
    data: {
        show: false,
        procureList: [],
        cur: 0,
        title: '待采购',
        
    },
    methods: {
        addProduce(t) {
            console.log(t)
            // window.location.href = "Cbuyer.html"
        },
        produceDetail(id) {
            if (this.cur == 0) {
                window.location.href = "CorderDetail.html?id=" + id;
            } else if (this.cur == 1) {
                window.location.href = "order-detail.html?id=" + id;
            } else if (this.cur == 2) {
                window.location.href = "finish-detail.html?id=" + id;
            }

        },
        getMyList() {
            $.post(api + '/api/purchase/getOrder', { token: sessionStorage.getItem('token') }, (data) => {
                this.procureList = data.data;
            }, 'json');
        },
        tab(t) {
            this.cur = t
            if (t == 0) {
                this.title = "待采购"
            } else if (t == 1) {
                this.title = "待处理"
            } else if (t == 2) {
                this.title = "已完成"
            }
        },
    },
    created() {
        this.getMyList();
    },
});