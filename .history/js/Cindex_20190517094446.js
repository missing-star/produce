var xm = new Vue({
    el: "#app",
    data: {
        show: false,
        procureList: [{}, {}, {}, {}, {}, {}, {}, {}],
    },
    methods: {
        addProduce() {
            window.location.href = "Cbuyer.html"
        },
        produceDetail() {
            window.location.href = "CorderDetail.html"
        }
    },

});