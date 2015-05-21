/**
 * Created by WeiSW on 2015/5/21.
 * 一些辅助功能的js函数
 */
$.extend({
    /**
     * 文本框只能输入数字，并屏蔽输入法和粘贴
     * @param element DOM节点
     */
    numeral : function(element) {
        $(element).css("ime-mode", "disabled");
        element.bind("keypress",function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);  //兼容火狐 IE
            return code >= 48 && code<= 57;
        });
        element.bind("blur", function() {
            if (element.value.lastIndexOf(".") == (element.value.length - 1)) {
                element.value = element.value.substr(0, element.value.length - 1);
            } else if (isNaN(element.value)) {
                element.value = "";
            }
        });
        element.bind("paste", function() {
            var s = clipboardData.getData('text');
            if (!/\D/.test(s));
            value = s.replace(/^0*/, '');
            return false;
        });
        element.bind("dragenter", function() {
            return false;
        });
        element.bind("keyup", function() {
            if (/(^0+)/.test(element.value)) {
                element.value = element.value.replace(/^0*/, '');
            }
        });
    }

});