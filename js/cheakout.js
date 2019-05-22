new Vue({
    el:'#app',
    data:{
        // 是否为入库
        isIn:false,
        number:'',
        orderSn:''
    },
    methods: {
        // 确认入库 / 出库
        confirm(){
            var regNum = /^[1-9]+([0-9]*)([0-9]?)$/;
            if(this.orderSn.trim() == '') {
                toast('请输入产品标号!');
                return;
            }
            else if(!regNum.test(this.number)) {
                toast('请输入正确的数量!');
                return;
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