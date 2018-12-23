var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdrown-menu').toggle();
    });
};

$(document).ready(main);

$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})