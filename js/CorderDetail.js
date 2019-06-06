var xm = new Vue({
    el: "#app",
    data: {
        cOrderDetail: {},
        num: '',
        content: '',
        time: '',
        avter:''
    },
    methods: {
        goback() {
            history.go(-1);
        },
        getCorderDetail(id) {
            $.post(api + '/api/purchase/getOrderInfoById', {
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
            if (this.content == '') {
                this.content == null
            }
            if (this.num == '') {
                alert("请填写采购数量")
                return
            }
            if (this.time == '') {
                alert("请选择实际送货时间")
                return
            }
            var id = getUrlKey('id')
            $.post(api + '/api/purchase/editOrderInfo', {
                order_id: id,
                qty: this.num,
                remarks: this.content,
                delivery_at: this.time,
            }, (data) => {
                console.log(data)
            }, 'json')
                .fail((err) => {
                    toast('服务器异常');
                });
        }
    },
    created() {
        console.log(this.time)
        this.getCorderDetail(getUrlKey('id'));
    },
});



$(".swiper-container").swiper({
    loop: false,
    autoplay: 0
});

$("#time").datetimePicker({
    title: '时间',
    min: "1990-12-12",
    max: "2022-12-12",
    onChange: function (picker, values, displayValues) {
        console.log(values);
        var a = values[0]
        var b = values[1]
        var c = values[2]
        var d = values[3]
        var e = values[4]
        xm.time = a + "-" + b + "-" + c + " " + d + ":" + e
    }
});
