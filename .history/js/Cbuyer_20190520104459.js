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
        uploadImg() {
            // 上传图片
        },
        addOrder() {
            // 上传采购记录
            $.post(api+'/api/purchase/creOrder',function(data) {

            },'json')
            .err(function(err) {
                TransformStream('服务器异常!');
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