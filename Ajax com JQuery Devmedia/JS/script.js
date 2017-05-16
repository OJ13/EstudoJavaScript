$(document).ready(function(){
            $("#enviar").on('click', cliqueBotao)
        });

        function cliqueBotao(event){
                event.preventDefault();
                var id = $("#id_nota").val();

                jQuery.ajax({
                    type: "GET",
                    dataType: "json",
                    url: "http://devmedianotesapi.azurewebsites.net/api/notes/"+id,
                    success: exibeNota,
                    beforeSend: aguardaNota,
                    error: exibeErrorNota
                });
        }

        function exibeNota(data){
            if ($.isArray(data)){
                $("#retorno").empty();
                $.each(data, function(index, value){
                    $("#retorno").append("ID: " + value.Id + "<br>Título: " + value.Title + "<br>Conteúdo: " + value.Body + "<br><br>");
                });
            }else{
                    $("#retorno").html("ID: " + data.Id + "<br>Título: " + data.Title + "<br>Conteúdo: " + data.Body + "<br><br>");
            }
            $("#loading").empty();
        }
        function aguardaNota(){
            $("#loading").html("<img style='width: 15px; margin-left: 10px;' src='http://www.devmedia.com.br/cursos/img/loading.gif' alt='loading'>");
        }
        function exibeErrorNota(){
            $("#retorno").html("Ops...algo de errado aconteceu");
            $("#loading").empty();
        }