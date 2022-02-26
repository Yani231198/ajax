//GUARDAMOS LA INSCRIPCION
$("#enviar").off("click");
$("#enviar").on("click", function(e) {
    $('enviar').attr("disabled", true);
    var nombre = $("#nombre").val();
    var costo = $("#costo").val();
    var precio = $("#precio").val();
    var stock = $("#stock").val();
    var minimo = $("#minimo").val();
   
    parametros = {
        'nombre': nombre,
        'costo': costo,
        'precio': precio,
        'stock': stock,
        'minimo': minimo
    };
    $.ajax({
        type: "POST",
        url: "recibe_productos.php",
        data: parametros,
        beforeSend: function(objeto) {
            $("#Msg").html('Cargando...');
        },
        success: function(datos) {
            $("#Msg").html(datos);
            $('#enviar').attr("disabled", false);
            $('#nombre').val(''),
            $('#costo').val(''),
            $('#precio').val(''),
            $('#stock').val(''),
            $('#minimo').val('')
        }
    });
    event.preventDefault();
});
