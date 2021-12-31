function myColor() {
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundColor = color;
    document.getElementById('box').value = color;
}
document.getElementById('red').addEventListener('input', myColor);
document.getElementById('green').addEventListener('input', myColor);
document.getElementById('blue').addEventListener('input', myColor);

//border radius
jQuery(document).ready(function () {
    $('#slider1, #slider2, #slider3, #slider4').on('input', function () {
        var slider1 = $('#slider1').val();
        var slider2 = $('#slider2').val();
        var slider3 = $('#slider3').val();
        var slider4 = $('#slider4').val();

        $('#output').css('border-top-right-radius', slider1 + '%');
        $('#output').css('border-top-left-radius', slider2 + '%');
        $('#output').css('border-bottom-right-radius', slider3 + '%');
        $('#output').css('border-bottom-left-radius', slider4 + '%');

        $('#box1').val('border-radius:' + slider1 + '% ' + slider2 + '% ' + slider3 + '% ' + slider4 + '%;');
    });
});