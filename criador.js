//parte que vai mudar a cor do site 

var res=document.getElementById('resu')
var box= document.getElementById('fundo')
var dia= document.getElementById('dia')
var sombra= document.getElementById('sombra')
var cria = document.getElementById('docriador')
var fotos = document.getElementById('fotos')
var tempo = new Date()
let hdia = tempo.getHours()



//parte que vai olhar que hora do dia é e mudar a cor
if (hdia<=12 ){
  box.style.boxShadow= "41px 14px 15px rgb(17 17 124 / 61%)"
  dia.style.backgroundImage="linear-gradient(130deg, white,#eee66d, #00e1ff 20%"
  sombra.style.textShadow="41px 14px 10px rgb(17 17 124 / 61%)"

} 
else if (hdia>12 && hdia <18) {
   
  box.style.boxShadow= " 0px 22px 10px rgba(17, 17, 90, 0.61)"
  dia.style.backgroundImage="linear-gradient(180deg,#f4b755, #4433e4 8%"
  sombra.style.textShadow="0px 14px  7px #0000009c"
  
}
else{

   box.style.boxShadow= " -21px -33px 117px white"
   sombra.style.textShadow="6px -20px 6px rgb(0 0 0 / 61%)"
   cria.style.color='white'
  
}


//parte do click
function verificando(){


   var data= new Date()
    var ano= data.getFullYear()
    var fano = document.getElementById('date')
   
   if(fano.value.length == 0 || fano.value> ano )
   
   {
        window.alert('olha se os dados estao corretos')
    }
    else{
         let fode = document.getElementsByName('bis')
       
         let valor = ano - Number(fano.value)  
        
         let rece=''
        // se for homem vai cair em homem se nao vai cair em mulher
       if (fode[0].checked) {
        rece = 'homem'
       } else if(fode[1].checked) {
        rece= 'mulher'
       }
    
    // escolha das fotos
    //criança 
       if (valor<=10){
       switch (rece) {
      case 'mulher':
             fotos.innerHTML= '<img src="imagem/joy.png"height="330px" width="400" > '
            
             fotos.style.margin = "auto"
             console.log("voce e uma criança")
             res.innerHTML= `voce e uma criança de ${valor} anos`
             res.style.textAlign='center'
         break;
         case 'homem':
            fotos.innerHTML= '<img src="imagem/mizael.png"  height="330" width="397">'
            console.log("meus criança")
            res.innerHTML= `voce e uma criança de ${valor} anos`
            res.style.textAlign='center'
            break;
       
      default:
         break;
    }}//joven

   else if (valor>=11 && valor < 25){
      switch (rece) {
     case 'mulher':
      fotos.innerHTML= '<img src="imagem/foto-jovem-f.png"  height="200" width="200">'
      fotos.style.textAlign= "center"
      console.log("voce e um jovem")
            res.innerHTML= `voce e uma jovem de ${valor} anos`
        break;
        case 'homem':fotos.innerHTML= '<img src="imagem/foto-jovem-m.png"  height="200" width="200">'
           console.log("meus jovem")
           res.innerHTML= `voce e um jovem de ${valor} anos`
           res.style.textAlign='center'
           fotos.style.textAlign= "center"
           break;
      
     default:
        break;
   }}

   //adulto
   else if (valor>=26 && valor<60){
      switch (rece) {
     case 'mulher':fotos.innerHTML= '<img src="imagem/foto-adulto-f.png"  height="200" width="200">'
     fotos.style.textAlign= "center"
     console.log("voce e um adulto")
            res.innerHTML= `voce e uma adulta de ${valor} anos`
            res.style.textAlign='center'
            fotos.style.textAlign= "center"
        break;
        case 'homem':fotos.innerHTML= '<img src="imagem/foto-adulto-m.png"  height="200" width="200">'
           console.log("meus adulto")
           res.innerHTML= `voce e um adulto de ${valor} anos`
           res.style.textAlign='center'
           fotos.style.textAlign= "center"
           break;
      
     default:
        break;
   }} 
   //idoso
   else if (valor>=60){
      switch (rece) {
     case 'mulher':fotos.innerHTML= '<img src="imagem/foto-idoso-f.png" height="200" width="200" >'
            res.innerHTML= `voce e um idosa de ${valor} anos`
            fotos.style.textAlign= "center"
        break;
        case 'homem':fotos.innerHTML= '<img src="imagem/foto-idoso-m.png"  height="200" width="200">'
           console.log("meus idoso")
           res.innerHTML= `voce e um idoso de ${valor} anos`
           res.style.textAlign='center'
           fotos.style.textAlign= "center"
           break;
      
     default:
        break;
       }
      
       
    }}}
