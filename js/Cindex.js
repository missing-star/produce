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
        getMyList(id) {
            $.post(api + '/api/purchase/getOrderByType', {
                token: sessionStorage.getItem('token'),
                type: id,
            },
                (data) => {
                    this.procureList = data.data;
                }, 'json');
        },
        tab(t) {
            this.cur = t

            if (t == 0) {
                this.title = "待采购"
                this.getMyList(t + 1)
            } else if (t == 1) {
                this.title = "待处理"
                this.getMyList(t + 1)
            } else if (t == 2) {
                this.title = "已完成"
                this.getMyList(t + 1)
            }
        },
    },
    created() {
        this.getMyList(1);
    },
});