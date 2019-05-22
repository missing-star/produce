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
        formatDate(e) {
            // 格式化日期
            var newDate = new Date(e.target.value);
            console.log(newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate(), newDate.getHours(), newDate.getMinutes());
        },
        uploadImg(e) {
            var formData = new FormData();
            formData.append('file', e.target.files[0]);
            // 上传图片
            $.ajax({
                url: api + '/api/common/upload',
                type: 'post',
                async: false,
                contentType: false,
                processData: false,
                data: formData,
                success: function (data) {

                },
                error: function () {
                    toast('服务器异常');
                }
            });
        },
        addOrder() {
            // 上传采购记录
            $.post(api + '/api/purchase/creOrder', {
                    product_name: this.title,
                    // 商品数量
                    qty: 1,
                    product_image: '',
                    delivery_at: ''
                }, function (data) {

                }, 'json')
                .fail(function (err) {
                    toast('服务器异常!');
                });
        }

    },
    created() {
        this.$nextTick(() => {
            // 日期组件
            $("#date-picker").datetimePicker();
            // 下拉列表组件
            $("#title-select").select({
                title: "选择职业",
                items: [{
                    title: "画画",
                    value: 1
                  },
                  {
                    title: "打球",
                    value: 2
                  },
                  {
                    title: "唱歌",
                    value: 3
                  },
                  {
                    title: "游泳",
                    value: 4
                  }],
                onClose:(res) => {
                    console.log(res);
                }
            });
        });
    }

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