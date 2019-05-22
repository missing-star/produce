var xm = new Vue({
    el: "#app",
    data: {
        avter: '',
        title: '',
        number: '',
        deliveryTime: ''
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
            var regNum = /^[1-9]+([0-9]?)$/;
            if (this.title.trim() == '') {
                toast('请输入名称!');
                return;
            } else if (!regNum.test(this.number)) {
                toast('请输入正确的数量!');
                return;
            } else if (this.deliveryTime == '') {
                toast('请选择日期!');
                return;
            }
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
            $("#date-picker").datetimePicker({
                onChange: (res) => {
                    this.deliveryTime = res.value[0] + '-' + res.value[1] +
                        ' ' + res.value[2] + ':' + res.value[3] + ':' + res.value[4];
                }
            });
            // 下拉列表组件
            $("#title-select").picker({
                title: "产品名称",
                cols: [{
                    textAlign: 'center',
                    values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
                }],
                onChange: (res) => {
                    if (res.value) {
                        this.title = res.value[0];
                    }
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