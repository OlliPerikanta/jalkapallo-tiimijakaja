 function pyorauta() {

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen").innerHTML = pelaaJat[randomisti];

 };

 function pyorauta2() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen2").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta4() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen4").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta6() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen6").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta8() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen8").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta10() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen10").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta12() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen12").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta1() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen1").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta3() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen3").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta5() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen5").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta7() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen7").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta9() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen9").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta11() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen11").innerHTML = pelaaJat[randomisti];
 };

 function pyorauta13() {
     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen13").innerHTML = pelaaJat[randomisti];
 };

 function painatasta() {

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen1").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen2").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen3").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen4").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen5").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen6").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen7").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen8").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen9").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen10").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen11").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen12").innerHTML = pelaaJat[randomisti];

     var randomisti = Math.floor(Math.random() * pelaaJat.length);
     document.getElementById("ykkonen13").innerHTML = pelaaJat[randomisti];

 };

 // Pelaajavalikko Array

 var pelaaJat = ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Olli", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jenna", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Anssi", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Miika", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mari", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pyry", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hanna", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jenny", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Petri", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toni", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Emmi", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terhi", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nita", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Katja", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mikko"];




 function piilota() {

     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";


     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";

     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";



     // Piiloon jäävät elementit

     var hide = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     hide.style.display = "none";
     piilo5.style.display = "none";

     var hide2 = document.getElementById("ykkonen6");
     var piilo6 = document.getElementById("pallo6");
     hide2.style.display = "none";
     piilo6.style.display = "none";

     var hide3 = document.getElementById("ykkonen8");
     var piilo7 = document.getElementById("pallo8");
     hide3.style.display = "none";
     piilo7.style.display = "none";

     var hide4 = document.getElementById("ykkonen10");
     var piilo8 = document.getElementById("pallo10");
     hide4.style.display = "none";
     piilo8.style.display = "none";

     var hide5 = document.getElementById("ykkonen12");
     var piilo9 = document.getElementById("pallo12");
     hide5.style.display = "none";
     piilo9.style.display = "none";

     var hide6 = document.getElementById("ykkonen5");
     var piilo10 = document.getElementById("pallo5");
     hide6.style.display = "none";
     piilo10.style.display = "none";


     var hide7 = document.getElementById("ykkonen7");
     var piilo11 = document.getElementById("pallo7");
     hide7.style.display = "none";
     piilo11.style.display = "none";

     var hide8 = document.getElementById("ykkonen9");
     var piilo12 = document.getElementById("pallo9");
     hide8.style.display = "none";
     piilo12.style.display = "none";

     var hide9 = document.getElementById("ykkonen11");
     var piilo13 = document.getElementById("pallo11");
     hide9.style.display = "none";
     piilo13.style.display = "none";

     var hide10 = document.getElementById("ykkonen13");
     var piilo14 = document.getElementById("pallo13");
     hide10.style.display = "none";
     piilo14.style.display = "none";



 };


 function piilota1() {


     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";


     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";

     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";

     var viisi = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     viisi.style.display = "block";
     piilo5.style.display = "block";


     // Piiloon jäävät elementit

     var hide2 = document.getElementById("ykkonen6");
     var piilo6 = document.getElementById("pallo6");
     hide2.style.display = "none";
     piilo6.style.display = "none";

     var hide3 = document.getElementById("ykkonen8");
     var piilo7 = document.getElementById("pallo8");
     hide3.style.display = "none";
     piilo7.style.display = "none";

     var hide4 = document.getElementById("ykkonen10");
     var piilo8 = document.getElementById("pallo10");
     hide4.style.display = "none";
     piilo8.style.display = "none";

     var hide5 = document.getElementById("ykkonen12");
     var piilo9 = document.getElementById("pallo12");
     hide5.style.display = "none";
     piilo9.style.display = "none";

     var hide6 = document.getElementById("ykkonen5");
     var piilo10 = document.getElementById("pallo5");
     hide6.style.display = "none";
     piilo10.style.display = "none";

     var hide7 = document.getElementById("ykkonen7");
     var piilo11 = document.getElementById("pallo7");
     hide7.style.display = "none";
     piilo11.style.display = "none";

     var hide8 = document.getElementById("ykkonen9");
     var piilo12 = document.getElementById("pallo9");
     hide8.style.display = "none";
     piilo12.style.display = "none";

     var hide9 = document.getElementById("ykkonen11");
     var piilo13 = document.getElementById("pallo11");
     hide9.style.display = "none";
     piilo13.style.display = "none";

     var hide10 = document.getElementById("ykkonen13");
     var piilo14 = document.getElementById("pallo13");
     hide10.style.display = "none";
     piilo14.style.display = "none";




 };

 function piilota2() {


     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";

     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";


     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";

     var viisi = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     viisi.style.display = "block";
     piilo5.style.display = "block";

     var kutonen = document.getElementById("ykkonen7");
     var piilo6 = document.getElementById("pallo7");
     kutonen.style.display = "block";
     piilo6.style.display = "block";


     // Piiloon jäävät elementit



     var hide2 = document.getElementById("ykkonen6");
     var piilo7 = document.getElementById("pallo6");
     hide2.style.display = "none";
     piilo7.style.display = "none";

     var hide3 = document.getElementById("ykkonen8");
     var piilo8 = document.getElementById("pallo8");
     hide3.style.display = "none";
     piilo8.style.display = "none";

     var hide4 = document.getElementById("ykkonen10");
     var piilo9 = document.getElementById("pallo10");
     hide4.style.display = "none";
     piilo9.style.display = "none";

     var hide5 = document.getElementById("ykkonen12");
     var piilo10 = document.getElementById("pallo12");
     hide5.style.display = "none";
     piilo10.style.display = "none";

     var hide6 = document.getElementById("ykkonen5");
     var piilo11 = document.getElementById("pallo5");
     hide6.style.display = "none";
     piilo11.style.display = "none";

     var hide8 = document.getElementById("ykkonen9");
     var piilo12 = document.getElementById("pallo9");
     hide8.style.display = "none";
     piilo12.style.display = "none";

     var hide9 = document.getElementById("ykkonen11");
     var piilo13 = document.getElementById("pallo11");
     hide9.style.display = "none";
     piilo13.style.display = "none";

     var hide10 = document.getElementById("ykkonen13");
     var piilo14 = document.getElementById("pallo13");
     hide10.style.display = "none";
     piilo14.style.display = "none";


 };

 function piilota3() {

     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";

     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";


     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";

     var viisi = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     viisi.style.display = "block";
     piilo5.style.display = "block";

     var kutonen = document.getElementById("ykkonen7");
     var piilo6 = document.getElementById("pallo7");
     kutonen.style.display = "block";
     piilo6.style.display = "block";

     var seiska = document.getElementById("ykkonen8");
     var piilo7 = document.getElementById("pallo8");
     seiska.style.display = "block";
     piilo7.style.display = "block";



     // Piiloon jäävät elementit

     var hide3 = document.getElementById("ykkonen6");
     var piilo8 = document.getElementById("pallo6");
     hide3.style.display = "none";
     piilo8.style.display = "none";

     var hide4 = document.getElementById("ykkonen10");
     var piilo9 = document.getElementById("pallo10");
     hide4.style.display = "none";
     piilo9.style.display = "none";

     var hide5 = document.getElementById("ykkonen12");
     var piilo10 = document.getElementById("pallo12");
     hide5.style.display = "none";
     piilo10.style.display = "none";

     var hide6 = document.getElementById("ykkonen5");
     var piilo11 = document.getElementById("pallo5");
     hide6.style.display = "none";
     piilo11.style.display = "none";

     var hide8 = document.getElementById("ykkonen9");
     var piilo12 = document.getElementById("pallo9");
     hide8.style.display = "none";
     piilo12.style.display = "none";

     var hide9 = document.getElementById("ykkonen11");
     var piilo13 = document.getElementById("pallo11");
     hide9.style.display = "none";
     piilo13.style.display = "none";

     var hide10 = document.getElementById("ykkonen13");
     var piilo14 = document.getElementById("pallo13");
     hide10.style.display = "none";
     piilo14.style.display = "none";



 };

 function piilota4() {

     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";

     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";


     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";

     var viisi = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     viisi.style.display = "block";
     piilo5.style.display = "block";

     var kutonen = document.getElementById("ykkonen7");
     var piilo6 = document.getElementById("pallo7");
     kutonen.style.display = "block";
     piilo6.style.display = "block";

     var seiska = document.getElementById("ykkonen8");
     var piilo7 = document.getElementById("pallo8");
     seiska.style.display = "block";
     piilo7.style.display = "block";

     var kahdeksas = document.getElementById("ykkonen9");
     var piilo8 = document.getElementById("pallo9");
     kahdeksas.style.display = "block";
     piilo8.style.display = "block";

     // Piiloon jäävät elementit

     var hide3 = document.getElementById("ykkonen6");
     var piilo9 = document.getElementById("pallo6");
     hide3.style.display = "none";
     piilo9.style.display = "none";

     var hide4 = document.getElementById("ykkonen10");
     var piilo10 = document.getElementById("pallo10");
     hide4.style.display = "none";
     piilo10.style.display = "none";

     var hide5 = document.getElementById("ykkonen12");
     var piilo11 = document.getElementById("pallo12");
     hide5.style.display = "none";
     piilo11.style.display = "none";

     var hide6 = document.getElementById("ykkonen5");
     var piilo12 = document.getElementById("pallo5");
     hide6.style.display = "none";
     piilo12.style.display = "none";

     var hide9 = document.getElementById("ykkonen11");
     var piilo13 = document.getElementById("pallo11");
     hide9.style.display = "none";
     piilo13.style.display = "none";

     var hide10 = document.getElementById("ykkonen13");
     var piilo14 = document.getElementById("pallo13");
     hide10.style.display = "none";
     piilo14.style.display = "none";



 };

 function piilota5() {

     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";

     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";


     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";

     var viisi = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     viisi.style.display = "block";
     piilo5.style.display = "block";

     var kutonen = document.getElementById("ykkonen7");
     var piilo6 = document.getElementById("pallo7");
     kutonen.style.display = "block";
     piilo6.style.display = "block";

     var seiska = document.getElementById("ykkonen8");
     var piilo7 = document.getElementById("pallo8");
     seiska.style.display = "block";
     piilo7.style.display = "block";

     var kahdeksas = document.getElementById("ykkonen9");
     var piilo8 = document.getElementById("pallo9");
     kahdeksas.style.display = "block";
     piilo8.style.display = "block";

     var yhdeksas = document.getElementById("ykkonen6");
     var piilo9 = document.getElementById("pallo6");
     yhdeksas.style.display = "block";
     piilo9.style.display = "block";



     // Piiloon jäävät elementit


     var hide4 = document.getElementById("ykkonen10");
     var piilo10 = document.getElementById("pallo10");
     hide4.style.display = "none";
     piilo10.style.display = "none";

     var hide5 = document.getElementById("ykkonen12");
     var piilo11 = document.getElementById("pallo12");
     hide5.style.display = "none";
     piilo11.style.display = "none";

     var hide6 = document.getElementById("ykkonen5");
     var piilo12 = document.getElementById("pallo5");
     hide6.style.display = "none";
     piilo12.style.display = "none";

     var hide9 = document.getElementById("ykkonen11");
     var piilo13 = document.getElementById("pallo11");
     hide9.style.display = "none";
     piilo13.style.display = "none";

     var hide10 = document.getElementById("ykkonen13");
     var piilo14 = document.getElementById("pallo13");
     hide10.style.display = "none";
     piilo14.style.display = "none";


 };

 function piilota6() {

     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";

     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";


     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";

     var viisi = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     viisi.style.display = "block";
     piilo5.style.display = "block";

     var kutonen = document.getElementById("ykkonen7");
     var piilo6 = document.getElementById("pallo7");
     kutonen.style.display = "block";
     piilo6.style.display = "block";

     var seiska = document.getElementById("ykkonen8");
     var piilo7 = document.getElementById("pallo8");
     seiska.style.display = "block";
     piilo7.style.display = "block";

     var kahdeksas = document.getElementById("ykkonen9");
     var piilo8 = document.getElementById("pallo9");
     kahdeksas.style.display = "block";
     piilo8.style.display = "block";

     var yhdeksas = document.getElementById("ykkonen6");
     var piilo9 = document.getElementById("pallo6");
     yhdeksas.style.display = "block";
     piilo9.style.display = "block";


     var kymppi = document.getElementById("ykkonen11");
     var piilo10 = document.getElementById("pallo11");
     kymppi.style.display = "block";
     piilo10.style.display = "block";


     // Piiloon jäävät elementit


     var hide4 = document.getElementById("ykkonen10");
     var piilo10 = document.getElementById("pallo10");
     hide4.style.display = "none";
     piilo10.style.display = "none";

     var hide5 = document.getElementById("ykkonen12");
     var piilo11 = document.getElementById("pallo12");
     hide5.style.display = "none";
     piilo11.style.display = "none";

     var hide6 = document.getElementById("ykkonen5");
     var piilo12 = document.getElementById("pallo5");
     hide6.style.display = "none";
     piilo12.style.display = "none";

     var hide10 = document.getElementById("ykkonen13");
     var piilo14 = document.getElementById("pallo13");
     hide10.style.display = "none";
     piilo14.style.display = "none";


 };

 function piilota7() {

     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";

     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";


     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";

     var viisi = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     viisi.style.display = "block";
     piilo5.style.display = "block";

     var kutonen = document.getElementById("ykkonen7");
     var piilo6 = document.getElementById("pallo7");
     kutonen.style.display = "block";
     piilo6.style.display = "block";

     var seiska = document.getElementById("ykkonen8");
     var piilo7 = document.getElementById("pallo8");
     seiska.style.display = "block";
     piilo7.style.display = "block";

     var kahdeksas = document.getElementById("ykkonen9");
     var piilo8 = document.getElementById("pallo9");
     kahdeksas.style.display = "block";
     piilo8.style.display = "block";

     var yhdeksas = document.getElementById("ykkonen6");
     var piilo9 = document.getElementById("pallo6");
     yhdeksas.style.display = "block";
     piilo9.style.display = "block";


     var kymppi = document.getElementById("ykkonen11");
     var piilo10 = document.getElementById("pallo11");
     kymppi.style.display = "block";
     piilo10.style.display = "block";

     var ykstoista = document.getElementById("ykkonen10");
     var piilo11 = document.getElementById("pallo10");
     ykstoista.style.display = "block";
     piilo11.style.display = "block";

     // Piiloon jäävät elementit




     var hide5 = document.getElementById("ykkonen12");
     var piilo11 = document.getElementById("pallo12");
     hide5.style.display = "none";
     piilo11.style.display = "none";

     var hide6 = document.getElementById("ykkonen5");
     var piilo12 = document.getElementById("pallo5");
     hide6.style.display = "none";
     piilo12.style.display = "none";

     var hide10 = document.getElementById("ykkonen13");
     var piilo14 = document.getElementById("pallo13");
     hide10.style.display = "none";
     piilo14.style.display = "none";


 };

 function piilota8() {

     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";

     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";


     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";

     var viisi = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     viisi.style.display = "block";
     piilo5.style.display = "block";

     var kutonen = document.getElementById("ykkonen7");
     var piilo6 = document.getElementById("pallo7");
     kutonen.style.display = "block";
     piilo6.style.display = "block";

     var seiska = document.getElementById("ykkonen8");
     var piilo7 = document.getElementById("pallo8");
     seiska.style.display = "block";
     piilo7.style.display = "block";

     var kahdeksas = document.getElementById("ykkonen9");
     var piilo8 = document.getElementById("pallo9");
     kahdeksas.style.display = "block";
     piilo8.style.display = "block";

     var yhdeksas = document.getElementById("ykkonen6");
     var piilo9 = document.getElementById("pallo6");
     yhdeksas.style.display = "block";
     piilo9.style.display = "block";


     var kymppi = document.getElementById("ykkonen11");
     var piilo10 = document.getElementById("pallo11");
     kymppi.style.display = "block";
     piilo10.style.display = "block";

     var ykstoista = document.getElementById("ykkonen10");
     var piilo11 = document.getElementById("pallo10");
     ykstoista.style.display = "block";
     piilo11.style.display = "block";

     var kakstoista = document.getElementById("ykkonen13");
     var piilo12 = document.getElementById("pallo13");
     kakstoista.style.display = "block";
     piilo12.style.display = "block";

     // Piiloon jäävät elementit



     var hide5 = document.getElementById("ykkonen12");
     var piilo13 = document.getElementById("pallo12");
     hide5.style.display = "none";
     piilo13.style.display = "none";

     var hide6 = document.getElementById("ykkonen5");
     var piilo14 = document.getElementById("pallo5");
     hide6.style.display = "none";
     piilo14.style.display = "none";

 };

 function piilota9() {

     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";

     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";


     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";

     var viisi = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     viisi.style.display = "block";
     piilo5.style.display = "block";

     var kutonen = document.getElementById("ykkonen7");
     var piilo6 = document.getElementById("pallo7");
     kutonen.style.display = "block";
     piilo6.style.display = "block";

     var seiska = document.getElementById("ykkonen8");
     var piilo7 = document.getElementById("pallo8");
     seiska.style.display = "block";
     piilo7.style.display = "block";

     var kahdeksas = document.getElementById("ykkonen9");
     var piilo8 = document.getElementById("pallo9");
     kahdeksas.style.display = "block";
     piilo8.style.display = "block";

     var yhdeksas = document.getElementById("ykkonen6");
     var piilo9 = document.getElementById("pallo6");
     yhdeksas.style.display = "block";
     piilo9.style.display = "block";


     var kymppi = document.getElementById("ykkonen11");
     var piilo10 = document.getElementById("pallo11");
     kymppi.style.display = "block";
     piilo10.style.display = "block";

     var ykstoista = document.getElementById("ykkonen10");
     var piilo11 = document.getElementById("pallo10");
     ykstoista.style.display = "block";
     piilo11.style.display = "block";

     var kakstoista = document.getElementById("ykkonen13");
     var piilo12 = document.getElementById("pallo13");
     kakstoista.style.display = "block";
     piilo12.style.display = "block";

     var kolmetoista = document.getElementById("ykkonen12");
     var piilo13 = document.getElementById("pallo12");
     kolmetoista.style.display = "block";
     piilo13.style.display = "block";

     // Piiloon jäävät elementit





     var hide6 = document.getElementById("ykkonen5");
     var piilo14 = document.getElementById("pallo5");
     hide6.style.display = "none";
     piilo14.style.display = "none";

 };

 function piilota10() {

     // Esille tulevat elementit
     var yksi = document.getElementById("ykkonen");
     var piilo = document.getElementById("pallo");
     yksi.style.display = "block";
     piilo.style.display = "block";

     var kaksi = document.getElementById("ykkonen2");
     var piilo2 = document.getElementById("pallo2");
     kaksi.style.display = "block";
     piilo2.style.display = "block";


     var kolme = document.getElementById("ykkonen1");
     var piilo3 = document.getElementById("pallo1");
     kolme.style.display = "block";
     piilo3.style.display = "block";

     var nelja = document.getElementById("ykkonen3");
     var piilo4 = document.getElementById("pallo3");
     nelja.style.display = "block";
     piilo4.style.display = "block";

     var viisi = document.getElementById("ykkonen4");
     var piilo5 = document.getElementById("pallo4");
     viisi.style.display = "block";
     piilo5.style.display = "block";

     var kutonen = document.getElementById("ykkonen7");
     var piilo6 = document.getElementById("pallo7");
     kutonen.style.display = "block";
     piilo6.style.display = "block";

     var seiska = document.getElementById("ykkonen8");
     var piilo7 = document.getElementById("pallo8");
     seiska.style.display = "block";
     piilo7.style.display = "block";

     var kahdeksas = document.getElementById("ykkonen9");
     var piilo8 = document.getElementById("pallo9");
     kahdeksas.style.display = "block";
     piilo8.style.display = "block";

     var yhdeksas = document.getElementById("ykkonen6");
     var piilo9 = document.getElementById("pallo6");
     yhdeksas.style.display = "block";
     piilo9.style.display = "block";


     var kymppi = document.getElementById("ykkonen11");
     var piilo10 = document.getElementById("pallo11");
     kymppi.style.display = "block";
     piilo10.style.display = "block";

     var ykstoista = document.getElementById("ykkonen10");
     var piilo11 = document.getElementById("pallo10");
     ykstoista.style.display = "block";
     piilo11.style.display = "block";

     var kakstoista = document.getElementById("ykkonen13");
     var piilo12 = document.getElementById("pallo13");
     kakstoista.style.display = "block";
     piilo12.style.display = "block";

     var kolmetoista = document.getElementById("ykkonen12");
     var piilo13 = document.getElementById("pallo12");
     kolmetoista.style.display = "block";
     piilo13.style.display = "block";

     var neljatoista = document.getElementById("ykkonen5");
     var piilo14 = document.getElementById("pallo5");
     neljatoista.style.display = "block";
     piilo14.style.display = "block";


     // Piiloon jäävät elementit

 };
