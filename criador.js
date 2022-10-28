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
             fotos.innerHTML= '<img src="https://lh3.googleusercontent.com/Io2zwoOCwyUwof0wAFytEMQ-yN8KtVYUvA5Y6Zj_DZ_eNrq3ZAe-G2t2Y4kaPpDG1LXe9P4HAMlS7YpoRw5bU-a4e2Awf_3gAiALlvKVT92PMbHmT0nkKwVeN1l0wclYeUbrdP1WU5NNrZQdGHxfkzs4eSP3OhvLMjasfMImdJtlbeO5LfkC_3VmrIpLTc_3YIjdmbIXDFvhwENds77N6sc8I8Z2hYdpq_NWUMAGzSf9ozvfwV-DA9O-xo2e3HBWmjfYSkDUFaQD-vGqUnGktwysMoWrpwo4jkdLzehkt7SB3kbun4othmrc2DVlVG3BEjkVGmkEVB0EA9dcKrpgQHOLJusbT-R1gvqNiEcFcHG3QcZI4_ine3fJw44h4_lrU_hF115nVcyWs2fImrqcGj-g_CxpmFps5ugY8EoORt-vNV3r0YZ9hIcFD2ob457DiSmtETjhOVnNwlcG_SLOGeNjXmqmUl65m4JIQVYDibWui385N1Vj9JyEQzffXJcQqKEonPev2koxsIeOTi3zm3sbUJ7qvpfltEGO_lWsVtFxqcJ5B2TeAxdGR0AAhNuURfU8lZgpgETE3NKajCCgLrUg7DzRw7KkyGQsHn86E1PgdyBc1jn2Llyho-Ym5yY7_tYezsGRBwW4Igc4jzynKvmiNqxTSBVp4HNX20C6X7sEXCfFahBfbS1mZ79vSJfz4XLaSpVGVhlkeD7Z1qnowzcQjIo_vudaUrURlOJ5rXHO4oUwrmxU76eYZkaA__En3sD2s7eHD1qvPwzvXlabxxQ_HoZJ97mC1TBLFbSHqljIyjtcSh-7jIJXUeMotOgDuceAyS95YNj2BPe427N2RRu04qmQdpUN7-_XVWNigc2KY1qYE4z-AEZ09hEm7Vxy24UgPADs_O9tdbjupKqqCpGQz9p3yjV3ljiLx116DYNX=w681-h545-no?authuser=0"height="330px" width="400" > '
            
             fotos.style.margin = "auto"
             console.log("voce e uma criança")
             res.innerHTML= `voce e uma criança de ${valor} anos`
             res.style.textAlign='center'
         break;
         case 'homem':
            fotos.innerHTML= '<img src="https://lh3.googleusercontent.com/xcOkTyRtfYUQfFPr_J4aj46-tjiT70cfZfoAOzOaqQD_Aznv02hPPbYJ6uU8mCelFetQpXAWbJhd8A3f-YoJaLwuCwMy2u24zcm51XAwM0C3jYoDmYiTOL1UE0xOt6zVJuG-8a6bg-6T9jPQt3yKC3QuZzqiEjzO8s3Z7VBdfrNCIMTGX6V2ZAwT8JCEWrGS0qjMbySQ8hZz5NsFkX4V2pNHr12t2eOphF5oCqGSRhczKIpZtotSYfRdtX-y8piTmYLccoURssxI98Nn8dh12UKX3s42eDTZkwkhRFEQdFVjF8lOi430Wo-O9EOIoN9HgQow9TJx3IrhX-phhhC8JfgQcgyfcm2KZOZUOP9SBqvV8A1kFhOo7s_v4hqAl2XFXNyOKScwDcj5tsVqz-3-3pJQc-fOTiw5bbFvka9v3xUtZgm69ju1tPkXkpQapaTX8_Yp5QcM-SDJLkD8OHk-vOGUqU1hB9UBxuQszHbz-jzw5NI1V0zDG7mWj0e-qZjqMFjfQIVsYU6o-yVH1jRB2g6FjssLi90XqrgPRvh8BRNtQDKhtMgmYyQtcJirOs7BWiRmensx9Yz-ZETHcXlY3M3EjxWUScWZ_gS4N5S_jdbE5P376o9oRWnIyKcCE_i9m3N_tAO-vEVL59dgRQoci_-tU7RoZK7C92tacH1FHGOOXl-eTEPvmz1KGdJnENr94RffmQaNcuH86S7KZl2tssfe3QXi9il4_Xl28lnWMcAsgj3F4HB0qIVeX47hCRtZc-7S9148UgKJb1tDFjss2-gPqqj0eo8y_-kt_APwP59KEiqVdaYYHML2HVb33Z5fLsc8vdWNqURFGTcnASehn0bll8x4lCeR9RSurrOKMyvFv2ucP4Gr1jd-8gmFJGNmHvvv490SFh5GaBTCJXcK4efs3THDLE6jsNH3uvmke6YA=w681-h545-no?authuser=0"  height="330" width="397">'
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
      fotos.innerHTML= '<img src="https://lh3.googleusercontent.com/OgiuG3xJ8By-6_AeKfkagY-o2iEA_LrPPqpxb1KotivNk_p-5DI7ojn5bxRZIC9caFGxr9_cHe4alsLVfUsLmFM6_QZJH3uPXZHunuTsLI026W4Ypc5LNjCDzDoZAlmckdWyWgas5pi5z-QFtYhi6_wgJdLNKLu5cKg4SzVZUBGs0MKSefTQSySdoWR3wuMSuRKInTggTOc1nqgap4VEur5eBTiijOqFzW59NK3QlLnf0Rwe_5yGwEsUKTDGYZsGW3Ey9pDKyRwkUTLs6lfEbb6jW0BxsQKZ6yH6vTJ2jUHaCMvtYPhP3q2Lma0mMCxqfUAQRLB_0OBdkhG3q207ih_s0yZVgeq35XR7YSPBGDHjj8lHJzxljUX9EoDasIelQ_9RAjD34n9YvAQyOskmC0Mcw4YhpcHOxHwDqimYCHrptgda6_gXyqsRFrZ2DI0l0vxs_3yrL85mGPjqvA7KE9xyzVH01xMiDG_nYORTkX22BC6JAtPtOsqWQj4KhayfXGFOLI2Yhg0gjk9_Rt8sBnbbZpq-y-JiLwpVyTlUKa66RmWEs81rgNneA2ID7ywwyJ1b7ndp0-5mQz2t97mc9qj3UkGS1xmjhPUJ40LfRUcIdhpIC6OuUFkNYW5zg9K8bmYKD3SZ9a9N2f65Rn4rP4Kwy810cdtVkXHqCPuKHhJJwjycoPaPreVxrYY3VbTVARd4EULorDkAMLp6pT7y5_rlJKsId-9UxxE9ri37-eZBX5MKxB4tIdUhtJnY1mwLyxbKMmtjObkdjw7b5ey6dA2Xb54Wj8Jjl0BmT2hTzvxHHRJdTz9svWzLdOPycRvYfMOiJgKOpWIKWa-wB1IDqCbFI_lEdE_t2aytG-aADaxVR180drCdF2PGWcD2f_lPdvBzXbMkpxMPtxQXzAlxP_Y25bPMK03KHK3Ec-98qMPu=w250-h252-no?authuser=0"  height="200" width="200">'
      fotos.style.textAlign= "center"
      console.log("voce e um jovem")
            res.innerHTML= `voce e uma jovem de ${valor} anos`
        break;
        case 'homem':fotos.innerHTML= '<img src="https://lh3.googleusercontent.com/f4_1czRwHyXaBy2BGd3IOvMhltnzSgyvcYx637VxosVp3VWgTS9nywo1xPD_05pvNtR1IFId96NhKzXyBpmwA8nKgBEGisbb--0gUdRCX6DteEfXKEAxIczUC7VqrI_0fB1geENn95HIWYw8eRT1PRibj3UsE706W6W8hzV1Mse9PKRuyUD4Z7x-FIdBD2vAI0M_Sx_7Whm-nQVjhMytXOiNsbDfpF8IoMQrecon00CMkQQ3XIPrxh4jGRDC3rnHavNgLOucy-QZrv60H8Gw1Yww4swRGpp6WMqTE-Lh1V8RIqTAkgFJnC4HXPXa3xx5bAbxebDFp6PLEel-y847Fj47U0IJPEWKJmAdx41JQJxn2-Ma9SYVmp8w-zvk4ztYqNDFcI_EV7BUy5q7VSGyxxpNsC82RE6c48Mhm2mvys2aUgD5y-tCfZlyIIF61fa5hYMfKVR-S_xs2YkZoPDW-9F_A3uHAPdPQufRrrhLxA830LWDUH7CKM5hBP7gGFVM1KGqfG3Dz4fzq5eug64CQPytHAXUp-t8e2qW5Dx_-MwN3i1JcPr_00d5sGpnReyAMiFhjvmtLj-MH7ssNIzU4f06TR4sFVnhwOiw6b-DOEJ5zKOfLm5oxmbBR9ldiBmDTCiN6faHvPtYUjYNDC1K4Md-x_G1dnmPJyN1IDTgRa3anmeJ4Ba5pGbVREKjhtQIMBZ8D5QTjHIeKRgWetcBhfcAUo3sUObQ4UxRQQ524Id2X8rQebLzxvuwmR2hDXFMVc1xVUunG-HxRNCI4gg0DIr-S5MGCsQbUt2RFwSwJzlqtnZFpZlNofi2UB31Xg728wOqSXw9Y03KxU--sbHsT790sIydgaqPQ9Z1AONNNxV6I1sfDEKkMtb_4aOzki6BGbUG_RJRgxMYqAlPnwflg6azFESlB9PWCLtMEl6mc_hC=w250-h265-no?authuser=0"  height="200" width="200">'
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
     case 'mulher':fotos.innerHTML= '<img src="https://lh3.googleusercontent.com/YeIl-4qxuXS29nuGtfTiSaN5ChoAHzXqQ2qHuXqd--Fkf_brL7_S6Ig-zg6rZIux3jAoHuspSSbE4HwtWUAuK-u6vky-FYZyUdTApeRHD-ZtwC7KRuL9lQJlEVBgv-fNTi8oGWvncHVosErYxdRDeeeVvmWPBiMkFWDT2AQSCjFYp_-50IzvuH0rldGku_UpER55Br-NvI90zqAS6NJ1GcZWXTXGRUHl3MykPEYaTdTV9kLYJVuA2wdqSvVuP_yUhTIslsbZC-whtaJtiJ8eYaqDuBDjutXnG0knX_b83aQbB62EwUBu2ag6Sp3SL4eOnYRacY9ZtINGkUe6V1prQaI2NZyTpwaip1BKNT1OEDkqZCuyIye16NvLw28zNg5HX9iQcY871a_RCkf3-ToQ87b-k_5vE36JrvBJe39gncrxVgwGvLKFlbEJQeG66WX6miBI4krilwIJqndX8-515X5xVDOfnMlfo9Al8t9x04FTgSMVudz1eA5YYEx_uFqRUzNDvKVbno1xD6j1BMybCxlQYw-YGpRTYIO74MDnrs8o5q7FL-rnJXPnv-oA-ot6cM_sbMrjyns2uJgFsgw3IPkUwDQeQXJ8_yOVhxxMhqtJ34SSElK8zBPN4bKX2SAcYtMCOMtRR-qrOXgrh9z1HlT6doofEmy99KVpat4y8yY1eoQyCaDg6F8bnn2whLnRTcfdX-SX9BbHfDahPlhH-xaSj-_B5rb8tZecziB9PvgOqwA1N4BnF8Dxi_sRFX6KfPUh5Whb5Kz4Wlfp9z1Wk_qCxgQNpOx-BAZotZWIT5CxOAi1aROHsJ0FZOToO2U-fgQR9-9BbaeluVAgCw2aSg1KSyG5PlXfwI4P4VjVR6vMvQI5KmNrtewLZeJHZUSnq4q6mBIIFuvN6AlCSHGyCPPSLkbZHVFIeFeCVg0CLZJy=w250-h234-no?authuser=0"  height="200" width="200">'
     fotos.style.textAlign= "center"
     console.log("voce e um adulto")
            res.innerHTML= `voce e uma adulta de ${valor} anos`
            res.style.textAlign='center'
            fotos.style.textAlign= "center"
        break;
        case 'homem':fotos.innerHTML= '<img src="https://lh3.googleusercontent.com/zMMg6No24ROkH2fX8L39gN-RRoVUbnPa7yum0PzR0cdlBBDs14RbHsnJldD9hcHMS5h06off0AZiaeNKmTAsd52fEUbpGnwp74B1he5-IqWrGTcMPv2W5eQpbQROkHuty2Kmp6hlnXzwaKeq6eWilb-0PJC8gVM-E0PKvFTy-Zz3GpYOxC2oP0aLcykQxbUX04FeECNTdTb3QH7Lp0CV_dxUQJciuXsmUbvFFUs8Q7jU0L6o6zKxtJMFcRYkCSH5EVuF-1Q4CgQmmEdiSm7eQy6mP2kdDQlAYMjmmpbDt8XvJGx6_t2tSHEW0vaBUrqEm2dSiZQttoDPoGXvyUGzWnCUjOMd_E_-JPfVDKZuWCQEOvu1wQ8ALlIYS7zlEQhScPtEzSUHAge0UBnizpgexaKZl-SG5GHq-VZnpes9l1YCE-UBQ2PODgzqsyTXcXkgLzz7G5fL56nrrIk_PJ5fSmRFa0xXJjTNZjls0dKxJoJoylmRhxL-XXlqT5vbi0D2I5G4Ci22xBZUHWNi43pmMTBU80QjaFhbwlvHw8JE8nECl5US6lxlku717lkuYMfEiwJ1GIvF5kFvBYK1dfl799qvOo_IVtONErui7XfImBKOkARMf8nQDKTzC31ck_qX_RWvSvyS6B-571MD6-_8YyT24XLZMSOVEbiVegTTyPXW-GR-xYfy-ikZvbyfTIm4Y6O6MP2DL8hS6frhhDDpSYhL17-fzPU-GpcgYq7Yb2DUDARKXemHMgwkp_TWdcvv-t9a7VYq6SF3RXdjavnYY4cyHoD_WSg6ICE3zlhwRgYtGEVf22pXq_jJwwspj8KMGLK7WnzxWfnd9A26LtcV_PP_MVP4QlZtAF4sibfqQjq5cxELlbE3q3y9LvXajRGpT0Ekcv1ALaDz8OPeabS_9yZ7ihf4h_zH91dBl4FjZkIA=w243-h225-no?authuser=0"  height="200" width="200">'
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
     case 'mulher':fotos.innerHTML= '<img src="https://lh3.googleusercontent.com/VU9vndQZEJbKzDRLbfrS6lrjbngNJJMxgrat1zbl34NvLppPJY2KNWp9BGMW5JopJVFKLpAUjYITbtWHMFgFvBnjDoaGURmbyScDQffVBah0zIPNfayIJxSIs97UlU_4Nl4xi3GPakv4SY9q1i77Mf6Z0ZSYfttJtE8oDaLSQS34R6tJbS7DRBIMTlscrgLzYFo5ulvlRDQ4hwvSTlW20VglGEYnOWfrdUeZyDAUO8X8d-LlfJD11A5_L3WHjUC1E4jdXMpLhGe_dQey1hGUMpxV7cyunlcN0qVHWsNe4Etzvd_eFIP6JN9hDK0q3oPlHCp1wBHaVIb0C6JM5du4ndIzv2EDXpR_M9HYvaRnrVVAvBFQbm5yVV-8cwJQ6xKHIh83Fuw5Q1Okl8QaaZYxYqfz7TYEKwSEzogxoioB8RMB4fRd774k-KP51vJYJJW7OOR5z0HA2WEWBSTDJ6ZbyvrqaqokXWbd0b1-_nPNHlTjzTVpcb-xDVKFGEb7NSu_You5P9n2tKcZ56dNSX7csy_Rq4Ck9RZ8Hp7x4MBUuuHpijT2FMb2h9xCoCjIDwoS8WzLFnMQws_Ka79csfswKYlswFl66Iv9U1TKMHajMkI8n8fXDzmXUvHDRL74lFaHr6g90iZFlC_lZtL4ig1JN8L3v77a482OZyskDCXHXxaUfddd22ksUS4vc6-R1d5WNr4aykciBcAqE-74huqdUDdQp8BX6_dWvhq9mmdDk5k_Q88MeKG84Fs9wtqm-IWvTthkAiS8-v7N-4QWWQGR3wdU1oWgj2Cg2mrPZp7H0RnlDygzJFEXkH8XfzHPDUoEpL-DC0ATLK6gGNL7nBA4n5uC--iGrw7uSKUqAhxatyv_0AijvvOiRGSelwXlaQL7DLk3Gbu0dmVmIwkpUv_lYhcOeVr111EINY86VlXAYGZy=w250-h234-no?authuser=0" height="200" width="200" >'
            res.innerHTML= `voce e um idosa de ${valor} anos`
            fotos.style.textAlign= "center"
        break;
        case 'homem':fotos.innerHTML= '<img src="https://lh3.googleusercontent.com/PYszQrtcwjyoKSoPgE5Rb0MJDg-PAiv6LnD37ybyVClCscNuN-casxuG1zeUn1l9XJmoJKtpv0ric6r0iZkvGCXMkLv2-V3VV1jJJOJlRM8tAhAgclN6Sl_MO_UXkj12tBoyWjSobzARdBRhCpH8KLv5dZKybpWTQ1jKA3G0Ui-DbriNrS2kxtQDDigGI0z9xq6Q3loiTq-vTJ8OnMRy_Zo4ulfOysKX9hrZO6OUMklVI1d9pnCJVjwds_djzUGKdtO770tE1C2lACavrD8BitvzKqjuqAmxo7GwCRB0JQ_sqSZPlLdfYIUFMc1IZhCtiHLBgikcoY7Dpzmf-Jb-NCbe7SkIBRIxFXeeerlVwe3W35pUIx30AcoeaVN8a7YvSWSxo1H6ZxYCx9IyftekhVrfyT7jeHvyAdjnH4uJllR_hV20y30TPM00g6uejtI8MDaEZsAU8uOeu4umFxqntMQ6U5TvnCdTzXbWlHn8J1P0_W3-0ZUqkAu-gxFn6R4RAFNKgiB-mISaAOrUF11P0BIB7BprrqDqZy2APJfBhjvaEjO8mmzpKp1IYvbzDvpWuYkRu_kp_GSjhdTkZLiZYABQ1c806SNzc24JCbb5NIGM-2n9uIn83stIMgtUOc4kGU879dh5xdzKWZsAE2MMft5jTkZtr3aiSo2wuD-OsdM_v2Pc4tuHO7Z89RWkaf6sU3gOjti_bFKw4t31DRpySZL89AwnjPmgNOR_KJJvs1Sp6bZEPvsF2C43-tKA-Ve98MYB9o0rqMuH_2lEWBAxrZ6fLjwzinPQVoVRZwg2o6ErvPpdPEpMCASHF9--wESamuDegHEy-02pN14B_zaauJP70Zk0blAnadX1P7enGVb44kR4-3INZJdJ3L3mr2E5I-7F3f07rw5tSq4vRZJLDTHQ3L2gb3JtNHsBx6uP3rqX=w250-h238-no?authuser=0"  height="200" width="200">'
           console.log("meus idoso")
           res.innerHTML= `voce e um idoso de ${valor} anos`
           res.style.textAlign='center'
           fotos.style.textAlign= "center"
           break;
      
     default:
        break;
       }
       //vai aparecer no site para 
       
    }}}
