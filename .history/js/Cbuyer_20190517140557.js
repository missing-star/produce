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