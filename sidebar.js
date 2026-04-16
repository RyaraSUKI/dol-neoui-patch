$(document).on(':passagerender', function() {
    // 点击空白区域关闭侧边栏
    $(document).off('click.uiBarAutoHide');
    $(document).on('click.uiBarAutoHide', function(ev) {
        if (!$('#ui-bar').hasClass('stowed')) {
            if (!$(ev.target).closest('#ui-bar').length) {
                UIBar.stow();
            }
        }
    });
})