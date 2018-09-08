$(function () {
    var gallery = function () {
        
        function init() {
            $(".uploadimage").on("click", function () {
                var inputFile = $('<input/>')
                    .attr('type', 'file')
                    .attr('name', 'chosenImage')
                    .attr('style', 'display: none;');

                $('#fileUploadContainer').append(
                    inputFile
                );

                inputFile.click();

                inputFile.change(function () {
                    if (this.files && this.files[0]) {
                        if (this.files[0].type.match(/^image\//)) {
                            loadImageDialog(this.files[0]);
                        }
                        else {
                            bootbox.alert("Невірний формат файла");
                        }
                    }
                    else {
                        bootbox.alert("Оберіть файл");
                    }
                });

                //alert("click add image");
            });
        }
        //Завантажити зображення в кропер
        function loadImageDialog(fileImage) {

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