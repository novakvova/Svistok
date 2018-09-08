$(function () {
    var gallery = function () {
        //мінімальний розмір зображення для кропера
        var minImageSize = 300; 
        
        function init() {
            initUploadImage();
            initButtonsDialog();
            

            function initUploadImage() {
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

            function initButtonsDialog() {
                $("#rotateleft").click(function () {
                    $("#canvas").cropper("rotate", -30);
                });

                $("#rotateright").click(function () {
                    $("#canvas").cropper("rotate", 30);
                });
            }

            
        }
        //Завантажити зображення в кропер
        function loadImageDialog(fileImage) {

            var $canvas = $("#canvas");
            context = $canvas.get(0).getContext('2d');

            var reader = new FileReader();
            reader.onload = function (e) {
                var img = new Image();
                var bool = true;
                img.onload = function () {


                    if (img.width < minImageSize) {
                        bool = false;
                        bootbox.alert("Не підхходить розшиерння < 300");
                    }
                    else {
                        $('#exampleModalCenter').modal('show');
                        $("#exampleModalCenter").on('shown.bs.modal', function () {

                            context.canvas.width = img.width;
                            context.canvas.height = img.height;
                            context.drawImage(img, 0, 0);
                            //Раніше написане не відноситься до кропера
                            var cropper = $canvas.cropper('destroy').cropper({
                                dragMode: 'move',
                                aspectRatio: 1 / 1,
                                viewMode: 1,
                                preview: '.preview',
                                crop: function (e) {
                                    var data = e.detail;
                                    var h = Math.round(data.height);
                                    var w = Math.round(data.width);
                                    if (w <= minImageSize) {
                                        this.cropper.setData({ width: minImageSize });
                                    }
                                }
                                //rotatable: true
                            });


                        });
                    }

                };

                img.src = e.target.result;
            };
            reader.readAsDataURL(fileImage);
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