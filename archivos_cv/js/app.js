function copy(){
    // alert("Wow");
    document.querySelector(".msg").classList.remove("ocultar");
    let email = document.querySelector("#email");
    navigator.clipboard.writeText(email.textContent);
    setTimeout(() => {
        document.querySelector(".msg").classList.add("ocultar");
    }, 1500);
}
function showCV(){
    let formato = document.querySelector("#svgReq").innerHTML;
    Swal.fire({
        width: "90%",
        html: `
          ${formato}
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: true,
        confirmButtonText: "DESCARGAR"
      }).then((result) => {
        if (result.isConfirmed) {
            descargarPDF();
        }
      });
      document.querySelector("#swal2-html-container").setAttribute("style","overflow:hidden");
}
function descargarPDF(){
    let forPrint = document.querySelector("#forPDF").innerHTML;
    imprimirHere(forPrint);
}
function imprimirHere(html){
    var mywindow = window.open('', 'PRINT', 'height=800,width=1200');

    mywindow.document.write(`
      <html>
        <head>
          <style>
      body{
        margin-left: 0cm;
        margin-right: 0cm;
        margin-top: 0.0cm;//antes 0.21cm
        background-color: #ffffff;
        margin-bottom: 0.0cm;//antes 0.21cm
      }
      .contenedorLabels{
        text-align: center;
        height: 100%;
        width: 100%;
      }
      @page :first {
        margin-top: 0cm    /* Margen superior de la primer página de 10cm  http://www.sidar.org/recur/desdi/traduc/es/css/page.html#q9 */
      }
      @page{
        margin-left: 0cm;
        margin-right: 0cm;
        margin-top: 0.0cm;
        margin-bottom: 0.0cm;
        size: 4.0in 6.0in;
      }
    </style>
      <title>` + "CV de Gustavo Chairez"  + `</title>
      </head>
      <body >
        ` + html  + `
      </body>
      </html>
    `);
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();
    
}