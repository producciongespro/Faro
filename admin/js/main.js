$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    realizaProceso();
    $("#btn_guardar").click(function (e) { 
        e.preventDefault();
        guardarTodo()
    });
});

function guardarTodo() {  
    var revisados=[];
    var ids=[];
    $('input[type=checkbox]').each(function() {
        if (this.checked) {
            revisados.push(1)
        }  
        else{
            revisados.push(0)
        }
        ids.push($(this).attr("id"));
    });
        console.log(ids);
        // const tempRevisados = revisados.toString();
        const tempIdentificadores = ids.toInt();
        // const tempRevisados = JSON.stringify(revisados);
        // const tempIdentificadores = JSON.stringify(ids);
        console.log(revisados);
        // console.log(tempIdentificadores);
        // var datos = new FormData();
        const datos = {
            "atendidos": revisados,
            "ids" : tempIdentificadores
        }
        
        fetch("../webservices/registrar_cambios.php", {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          }).then(res=>res.json())
            .then(res => console.log(res));  

}

function realizaProceso(){
var url= '../webservices/obtener_reportes.php';
 fetch( url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) { 
        dibujarTabla (myJson, '#visor');       
    })
  }  

  function dibujarTabla (array, visor) {
    console.log(array);
       $(visor).empty();
       var atendida="";
       var limite = array.length, row,
       htmlTable = $(
         "<table  id='tblReportes' class='table table-striped'>" +
         "<thead>" +
         "<tr>" +
           "<th scope='col'>#</th>" +
           "<th class='text-center' scope='col'>Correo</th>" +
           "<th class='text-center' scope='col'>Nombre</th>" +
           "<th scope='text-center' >Detalle</th>" +
           "<th scope='text-center'>Atendida</th>" +
           "<th scope='text-center'>Fecha</th>" +
         "</tr>" +
         "</thead>" +
         "<tfoot>" +
        " <tr>" +
        "<th class='buscador'>#</th>" +
        "<th>correo</th>" +
        "<th>nombre</th>" +
        "<th class=''>detalle</th>" +
        "<th class=''>atendida</th>" +
        "<th class='buscador'>fecha</th>" +       
        " </tr>"+
        " </tfoot>"+
         "</table>"
       ), tBody = $("<tbody></tbody>");
        
               for (let index = 0; index < limite; index++) {
                 let fowNumb = index + 1;
                if (array[index].atendida==="0") {
                    atendida =  "<input class='revisados' type='checkbox' id='"+array[index].id+"' >";
                } else {
                    atendida =  "<input class='revisados' type='checkbox' id='"+array[index].id+"' checked>";
                }
                 
                 row = $(
                   "<tr>" +
                   "<td class='text-center'>"+(index + 1)+"</td>" +
                   "<td class='text-center'>" +
                      array[index].nombre +
                   "</td>" +
                     "<td class='text-center'>" +
                       array[index].correo +
                     "</td>" +
                     "<td >" +
                       array[index].detalle +
                     "</td>" +
                     "<td>" +
                       atendida +
                     "</td>" +
                     "<td class=''>" +
                        array[index].fecha +
                   "</td>" +
                   "</tr>"
               );
                 $(tBody).append(row);
             }
       $(htmlTable).append(tBody);
        $(visor).append(htmlTable);
        cambiarClases();
      loadDataTable();
     }

    function loadDataTable() {
        var table = $('#tblReportes').DataTable({
          dom: 'Blfrtip',
          buttons: [
              {extend: 'copy',text: '<i class="far fa-copy"></i> Copiar'},
              {extend: 'excel',text: '<i class="far fa-file-excel"></i> Exportar a Excel'},
              {extend: 'pdf',text: '<i class="far fa-file-pdf"></i> Exportar como PDF'},
              {extend: 'print',text: '<i class="fas fa-print"></i> Imprimir'}
          ],
          "language": {
            "emptyTable":			"No hay datos disponibles en la tabla.",
            "info":		   			"Del _START_ al _END_ de _TOTAL_ ",
            "infoEmpty":			"Mostrando 0 registros de un total de 0.",
            "infoFiltered":			"(filtrados de un total de _MAX_ registros)",
            "infoPostFix":			"(actualizados)",
            "lengthMenu":			"Mostrar _MENU_ registros",
            "loadingRecords":		"Cargando...",
            "processing":			"Procesando...",
            "search":				"Buscar:",
            "searchPlaceholder":	"Dato para buscar",
            "zeroRecords":			"No se han encontrado coincidencias.",
            "paginate": {
                "first":			"Primera",
                "last":				"Última",
                "next":				"Siguiente",
                "previous":			"Anterior"
            },
            "aria": {
                "sortAscending":	"Ordenación ascendente",
                "sortDescending":	"Ordenación descendente"
            }
        },
        "lengthMenu":				[[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, "Todos"]],
            "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "Todas"] ]
     
        });
       
        $('#tblReportes tfoot th').each( function () {
          var title = $(this).text();
          $(this).html( '<input type="text" placeholder="Buscar '+title+'" />' );
      } );

        // Apply the search
        table.columns().every( function () {
            var that = this;
     
            $( 'input', this.footer() ).on( 'keyup change', function () {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();
                }
                
            } );
        } );
     
    }
    
        
       function cambiarClases(){
        if (sessionStorage.getItem("tipo")==6){
            $( ".lnk-ico" ).removeClass( "btn-edit btn-del" ).addClass( "btn-inactivo" );
            console.log("Usuario asesor");
        }
       }
    