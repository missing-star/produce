var xm = new Vue({
    el: "#app",
    data: {
    
    },
    methods: {
        getCorderDetail(id) {
            $.post(api+'/api/purchase/getOrderInfo',{
                order_id:id
            },function(data) {

            },'json')
            .error(function(err) {
                toast('服务器异常');
            });
        }
    },
    created() {
        this.getCorderDetail(getUrlKey('id'));
    },
});