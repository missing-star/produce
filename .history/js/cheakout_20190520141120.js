new Vue({
    el:'#app',
    data:{
        // 是否为入库
        isIn:false
    },
    methods: {
        // 确认入库 / 出库
        confirm(){

        }
    },
    created() {
        if(getUrlKey('type') == 'in'){
            this.isIn = true;
        }
    }
});