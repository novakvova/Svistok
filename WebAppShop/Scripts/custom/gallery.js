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
                            var dialog;
                        }
                        else {
                            alert("Invalid file type");
                        }
                    }
                    else {
                        alert("Оберіть файл");
                    }
                });

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