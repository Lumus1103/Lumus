var buscador = $("#table").DataTable();

$("#buscador").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($("#buscador").val() == ""){
        $(".contentsearch").fadeOut(300);
    }else{
        $(".contentsearch").fadeIn(300);
    }
})