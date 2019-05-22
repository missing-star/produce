var api = "http://police.pzhkj.cn"




function getUrlKey(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

// 信息提示框
function toast(msg) {
    var toastWrapper = '<div class="toast-tips">'+msg+'</div>';
    $('body').append(toastWrapper);
    $('.toast-tips').fadeOut(200);
}