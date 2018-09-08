$(function () {
    var gallery = function () {
        
        function init() {
            $(".uploadimage").on("click", function () {

                $('#fileUploadContainer').append(
                    $('<input/>').attr('type', 'file').attr('name', 'someName')
                );

                //alert("click add image");
            });
        }

        function run() {
            init();
        }
        return {
            run: run
        };
    }();

    gallery.run();
    //gallery.init();
    //gallery.run();
});