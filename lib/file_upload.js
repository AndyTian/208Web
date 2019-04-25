function GetFileList(PathName) {
    jQuery.ajax({
        url: "/GetFileList/?Path=PathName",
        cache: false,
        type: "POST",
        success: function (text) {
            //显示服务器返回的成功信息：text
            alert(text, "重设用户密码执行成功：");
            //后面可以处理text
            var file = text.split(",");
            for (var i = 0; i < file.length; i++) {
                alert(file[i]);
            }
        },
        error: function (text) {
            //显示服务器返回的失败信息：text
            alert(text, "重设用户密码发生错误：");
        }
    });
}