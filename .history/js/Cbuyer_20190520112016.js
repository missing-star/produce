var xm = new Vue({
    el: "#app",
    data: {
        avter: '',
        title: '',
    },
    methods: {
        select() {
            alert(11)
            //  $(".next").find('select.Svalue').click();
            // document.getElementById('Svalue').click();
            document.getElementById("Svalue").click()
            // document.getElementById
            console.log(document.getElementById('Svalue'))
        },
        ddl_change() {
            this.title = $("#Svalue").val()
        },
        uploadEvent() {
            // 点击上传文件事件
            $('#order-img').click();
        },
        uploadImg(e) {
            // 上传图片
            $.post(api + '/api/common/upload', {
                    product_name: this.title,
                    // 商品数量
                    qty: 1,
                    product_image: '',
                    delivery_at: ''
                }, function (data) {

                }, 'json')
                .fail(function (err) {
                    toast('服务器异常');
                });
        },
        addOrder() {
            // 上传采购记录
            $.post(api + '/api/purchase/creOrder', function (data) {

                }, 'json')
                .fail(function (err) {
                    toast('服务器异常!');
                });
        }

    },

});




$(function () {
    $('select').comboSelect();

    $('.show').on('click', function (e) {
        $('select').focus();
        e.preventDefault();
    });

    $('.show').on('click', function (e) {
        $('select').trigger('comboselect:close');
        e.preventDefault();
    });
});