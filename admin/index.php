<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=gb18030">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Reportes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>   
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script> 
    <script src=" https://cdn.datatables.net/buttons/1.5.6/js/dataTables.buttons.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.flash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.print.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    
    <script src="js/main.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.5.6/css/buttons.dataTables.min.css"> 


    <style>
        tfoot input {
        width: 100%;
        padding: 3px;
        box-sizing: border-box;
    }
    .buscador{
        visibility:hidden;
    }
    </style>


</head>
<body>  
<div class="row" id="">
      <div class="col-sm-8">
        <div class="">
          <div class="d-flex flex-row">
            <div class="p-2 border-logo"><img class ="logo" src="img/titulo.png" alt="logo tecnoaprender"></div><br>
            <div class="p-2 align-self-center"><h3 class="tit-header-opt">Reportes técnicos ingresados</h3></div>
            <div id="divInfo" class="p-2 ml-auto logout"></div>
            <!-- <div class="p-2 ml-auto logout"><a id="btnInicio" href="index.php"><i class= "fas fa-home"></i> Inicio</a></div> -->
          </div>
          <div class="d-flex justify-content-end">
            <div id="divUsuario" class="p-2 logout"></div>
            <div id="divSalir" class="p-2 logout"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
          <span id="btn_guardar">Guardar todo</span>
      </div>
</div> 
    <div class="container container-custom">
    <br>
            <div id="visor">

            </div>

    </div>
</body>
</html>