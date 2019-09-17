 refresh();
var controle = 0;
function myFunction() {
    
    if(controle ==0){
       refreshsetasaidalampada();
     }
    else
    {
   refreshclearsaidalampada();
        }
        refreshlesaidalampada();
        
}
var controle1 = 0;
function receber(){ 
  if(controle1 ==0)
    {
         refreshsetasaidachuveiro();
     }else{
       refreshclearsaidachuveiro();
     }
      refreshlesaidachuveiro();
}

  setInterval(refreshbotoes, 1300);
   setInterval(refresh, 10000);
    function refresh()
    {
      refreshTemperatureC();
      refreshTemperatureF();
    }
    function refreshbotoes()
    {
       refreshlesaidachuveiro();
      refreshlesaidalampada();
    }
    
function refreshTemperatureC()
{
 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("temperaturec").innerHTML = this.responseText;
     document.getElementById("temp_01").innerHTML = this.responseText;
     document.getElementById("temp_02").innerHTML = this.responseText;
     document.getElementById("temp_03").innerHTML = this.responseText;
     document.getElementById("temp_04").innerHTML = this.responseText;
     document.getElementById("temp_05").innerHTML = this.responseText;
     document.getElementById("temp_06").innerHTML = this.responseText;
     document.getElementById("temp_07").innerHTML = this.responseText;
     document.getElementById("temp_08").innerHTML = this.responseText;
     document.getElementById("temp_09").innerHTML = this.responseText;
     document.getElementById("temp_10").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/temperaturec", true);
  xhttp.send();
  
}


function refreshTemperatureF()
{
   var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("temperaturef").innerHTML = this.responseText;
      document.getElementById("temperaturef0").innerHTML = this.responseText;
     document.getElementById("gas_ppm01").innerHTML = this.responseText;
     document.getElementById("gas_ppm02").innerHTML = this.responseText;
     document.getElementById("gas_ppm03").innerHTML = this.responseText;
     document.getElementById("gas_ppm04").innerHTML = this.responseText;
     document.getElementById("gas_ppm05").innerHTML = this.responseText;
     document.getElementById("gas_ppm06").innerHTML = this.responseText;
     document.getElementById("gas_ppm07").innerHTML = this.responseText;
     document.getElementById("gas_ppm08").innerHTML = this.responseText;
     document.getElementById("gas_ppm09").innerHTML = this.responseText;
     document.getElementById("gas_ppm10").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/temperaturef", true);
  xhttp.send();
  
}

function refreshlesaidachuveiro()
    {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada2").innerHTML = "Lê Chuveiro  " + xmlhttp.responseText;
          var estado = xmlhttp.responseText;
          if(estado == "Ligado")
          {
           document.getElementById("evento_botao1").style.color= "red";
            document.getElementById("evento_botao1").style.background = "#FFFF00";
            document.getElementById("evento_botao1").text= "ON";
            document.getElementById("estado_lampada1").text= "Lâmpada: Ligado";
            document.getElementById("img02").src = 'https://img.filipeflop.com/files/download/automacao/lampada_ligada.png';
            controle1=1;
          }else
          {
         document.getElementById("evento_botao1").style.background = "blue";    
         document.getElementById("evento_botao1").style.color="white";
        document.getElementById("evento_botao1").text= "OFF";
         document.getElementById("estado_lampada1").text= "Lâmpada: Desligado";
         document.getElementById("img02").src = 'https://img.filipeflop.com/files/download/automacao/lampada_desligada.png';
         controle1=0;
          }
        }
      };
      xmlhttp.open("GET", "http://192.168.15.11/lesaidachuveiro", true);
      xmlhttp.send();
    }

function refreshsetasaidachuveiro()
    {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada2").innerHTML = "Chuveiro:   "   +xmlhttp.responseText ;
        }
      };
      xmlhttp.open("GET", "http://192.168.15.11/setasaidachuveiro", true);
      xmlhttp.send();  
       controle1=1;
    }
   function refreshclearsaidachuveiro()
    {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada2").innerHTML = "Chuveiro:   "+xmlhttp.responseText ;
        }
      };
      xmlhttp.open("GET", "http://192.168.15.11/clearsaidachuveiro", true);
      xmlhttp.send();
        controle1=0; 
    }
 
function refreshlesaidalampada()
    {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada3").innerHTML = "Lê Lampada  " + xmlhttp.responseText;
          var estado = xmlhttp.responseText;
          if(estado == "Ligado")
          {
             document.getElementById("evento_botao").style.color= "red";
           document.getElementById("evento_botao").style.background = "#FFFF00";
              document.getElementById("evento_botao").text= "ON";
            document.getElementById("estado_lampada").text= "Lâmpada: Ligado";
            document.getElementById("img01").src = 'https://img.filipeflop.com/files/download/automacao/lampada_ligada.png';
           controle=1;
          }else
          {
       document.getElementById("evento_botao").style.background = "blue";   
         document.getElementById("evento_botao").style.color="white";
        document.getElementById("evento_botao").text= "OFF";
         document.getElementById("estado_lampada").text= "Lâmpada: Desligado";
         document.getElementById("img01").src = 'https://img.filipeflop.com/files/download/automacao/lampada_desligada.png';
        controle=0;
          }
        }
      };
      xmlhttp.open("GET", "http://192.168.15.11/lesaidalampada", true);
      xmlhttp.send();
    }
    

function refreshsetasaidalampada()
    {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada3").innerHTML = "Lâmpada:   "   +xmlhttp.responseText ;
        }
      };
      xmlhttp.open("GET", "http://192.168.15.11/setasaidalampada", true);
      xmlhttp.send();  
     controles=1;
    }
   function refreshclearsaidalampada()
    {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada3").innerHTML = "Lâmpada: "+xmlhttp.responseText ;
        }
      };
      xmlhttp.open("GET", "http://192.168.15.11/clearsaidalampada", true);
      xmlhttp.send();
      controle=0;
    }
    refreshlesaidachuveiro();
   refreshlesaidalampada();
     


