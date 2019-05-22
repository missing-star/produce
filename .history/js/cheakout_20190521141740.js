new Vue({
    el:'#app',
    data:{
        // 是否为入库
        isIn:false,
        number:''
    },
    methods: {
        // 确认入库 / 出库
        confirm(){
            if(this.orderSn.trim() == '') {
                toast('请输入产品标号!');
                return;
            }
            else if(this.number) {
                
            }
            var url = api;
            if(this.isIn) {
                url += '/api/stock/inSystem';
            }
            else {
                url += '/api/stock/outSystem';
            }
            $.post(url,{
                order_id:getUrlKey('id'),
                qty:this.number,
                token:sessionStorage.getItem('token')
            },(data) => {
                toast(data.msg);
            },'json')
            .fail(err => {

            });
        }
    },
    created() {
        if(getUrlKey('type') == 'in'){
            this.isIn = true;
        }
    }
});