var xm = new Vue({
    el: "#app",
    data: {
        cOrderDetail: {},
        avter:''
    },
    methods: {
        goback() {
            history.go(-1);
        },
        getCorderDetail(id) {
            $.post(api + '/api/purchase/getPengdingActionOrderInfo', {
                order_id: id,
                token: sessionStorage.getItem('token')
            }, (data) => {
                this.cOrderDetail = data.data;
                this.avter = `${api}/${data.data.product_image}`
            }, 'json')
                .fail((err) => {
                    toast('服务器异常');
                });
        },
        gopush() {
            var id = getUrlKey('id')
            $.post(api + ' /api/purchase/editPendingActionOrderResult', {
                order_id: id,
            }, (data) => {
                console.log(data)
            }, 'json')
                .fail((err) => {
                    toast('服务器异常');
                });
        }
    },
    created() {
        this.getCorderDetail(getUrlKey('id'));
    },
});



$(".swiper-container").swiper({
    loop: false,
    autoplay: 0
});

