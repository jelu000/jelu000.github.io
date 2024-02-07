//glöm inte ändra format på filerna i geany till UTF-8 annars blir de konstiga tecken!
//skattesatser-2019_2.csv
//KommunalaSkattesatser
//var data = new Array();
//KommunSkatt
let komSkattArray = new Array(); //2D array med all data kummunalskatt
let kommun_array = new Array();//array med bara kommuner kommunalskatt
let global_kommun = "";

//Lönesaktt - Sallary Taxes
let salaryTaxArray = new Array();
let salaryTaxArrayTabellNr = [];


function tMain() {
  //console.log("prtovtest"); Skattesatser_kommuner_2024 v3.csv
  getDatan(makeKomTaxArray, "Skattesatser_kommuner_2024_v3.csv");
  //getDatan(makeKomTaxArray, "skattesatser-2019_2.csv");
  getDatan(makeSalaryTaxArray, "SkattLon2024.csv");
  //getDatan(makeSalaryTaxArray, "skattetabellermanad2019.csv");
  showSallaryButton(false);//hide button and textfield on salary page
  //makeKomTaxArray(data);

}
//js-tutorials.com_sample_file.csv
//http://salongnobless.se/bokforing/KommunalaSkattesatser.csv
//var data = [];



//ISO-8859-1 - iso-8859-1
function getDatan(tfunc, t_url) {

  let data = new Array();
  //console.log("getDatan");
  $.ajax({
    type: "GET",
    contentType: 'Content-type: text/plain; charset=UTF-8',
    url: t_url,
    dataType: "text",
    // This is the imporant part!!!
    //beforeSend: function(jqXHR) {
    //jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
    //}
    success: function (response) {
      data = $.csv.toArrays(response);
      //console.log(data[10]);
      //generateHtmlTable(data);
      //makeKomTaxArray(data);
      tfunc(data);

    }
  });
  //return data;
  //makeKomTaxArray(data);

}

//skriver ut htmltable med selected kommun dataset
function createHtmlTable(t_array_table, t_divTableName) {

  let myTableDiv = document.getElementById(t_divTableName);
  let t_tableheadings = new Array();
  t_tableheadings = t_array_table[0];


  try {

    let table = document.createElement('TABLE')
    let tableJhaed = document.createElement('THEAD')
    let tableBody = document.createElement('TBODY')

    //TABLE COLUMNS
    table.border = '1';
    table.align = 'center';


    table.appendChild(tableJhaed);
    var tr = document.createElement('TR');
    tableJhaed.appendChild(tr);

    for (i = 0; i < t_tableheadings.length; i++) {
      let th = document.createElement('TH')

      th.appendChild(document.createTextNode(t_tableheadings[i]));
      tr.appendChild(th);
    }

    table.appendChild(tableBody);
    //TABLE ROWS

    for (i = 1; i < t_array_table.length; i++) {
      let tr = document.createElement('TR');
      tableBody.appendChild(tr);

      //console.log(i +": ");
      for (j = 0; j < t_array_table[i].length; j++) {

        let td = document.createElement('TD')

        if (j == 1)
          td.align = 'left';

        td.appendChild(document.createTextNode(t_array_table[i][j]));
        tr.appendChild(td);
      }
      //table.appendChild(tr);
    }

    myTableDiv.appendChild(table)
  }//end try
  catch (err) {
    alert("Fel: " + err);
  }

}//end of function createHtmlKommunTable()

//--------------------------------------------------------------------------------------------------------------------------
//KommunalSkatt
//--------------------------------------------------------------------------------------------------------------------------
function makeKomTaxArray(tdata) {
  //console.log("längd: " + tdata.length)
  for (let i = 0; i < tdata.length; i++) {//tdata.length 1346
    //console.log(tdata[5]);

    //castar raden till String
    let trow = String(tdata[i]);
    //splitar Stringen till array[År;Församlings-kod;Kommun;Församling;Summa, inkl. kyrkoavgift;Summa, exkl. kyrkoavgift;Kommunal-skatt;Landstings-skatt;Begravnings-av]
    let telement = trow.split(";");
    //console.log(telement[2]);
    //skapar en array med bara Kommun
    if (global_kommun != telement[2]) {
      kommun_array.push(telement[2]);//lägger till kommun
      //console.log(telement[2]);

    }
    komSkattArray.push(telement);//lägger till rad med [kommunalskatt data]
    global_kommun = telement[2];
    //console.log(komSkattArray[i][3]);


  }//end of forloop
  kommun_array.sort();//sorterar kommuner
  fillOptionkomuner();//fyller select optionkomuner
}//end of makeKomTaxArray()

function fillOptionkomuner() {
  tselect = document.getElementById("optionkommuner");

  option = document.createElement("option");
  option.value = "Välj kommun";
  option.innerHTML = "Välj Kommun";
  option.selected = "true";
  option.disabled = "disabled";
  tselect.appendChild(option);

  for (let i = 0; i < kommun_array.length; i++) {
    option = document.createElement("option");
    let tkomun = kommun_array[i];
    option.value = tkomun;
    option.innerHTML = decodeURIComponent(unescape(tkomun));//unescape(encodeURIComponent(tkomun)); decodeURIComponent(escape(tkomun));
    tselect.appendChild(option);
  }
}//end of fillOptionkomuner


//skriverut skattestsen för vald kommun i selected elementet
function selectedKommun() {
  //div id i html-kod
  let div_html_id = "KomSkattutmatning";
  //Tömmer Div ellement från gammal visning
  document.getElementById(div_html_id).innerHTML = "";

  let t_valdkommun_array = new Array();//rader med data för vald kommun
  let tselectedkommun = document.getElementById("optionkommuner");//.selectedValue;

  //lägger till headings till html table
  let t_heading = new Array();
  t_heading[0] = "År";
  t_heading[1] = "Församlings-\nKod";
  t_heading[2] = "Kommun\n";
  t_heading[3] = "Församling\n";
  t_heading[4] = "Summa inkl.\nkyrkoavgift";
  t_heading[5] = "Summa exkl. \nkyrkoavgift";
  t_heading[6] = "Kommunal-\nskatt";
  t_heading[7] = "Landstings-\nskatt";
  t_heading[8] = "Begravnings-\navgift";
  t_heading[9] = "Kyrko-\navgift";

  t_valdkommun_array.push(t_heading);

  //if (tselectedkommun.selectedIndex == -1)
  //    return null;

  let tkommun_value = tselectedkommun.options[tselectedkommun.selectedIndex].value;

  for (let i = 0; i < komSkattArray.length; i++) {
    let t_row = komSkattArray[i];

    if (tkommun_value == t_row[2]) {
      //console.log(t_row[2]);
      t_valdkommun_array.push(t_row);
    }

  }//end of forllop

  createHtmlTable(t_valdkommun_array, div_html_id);

}//end selectedkommun()

function clearKomuntabell() {
  //console.log("Clear skatteTabell! ")
  let div_komuntabellutmatning = document.getElementById("KomSkattutmatning");
  div_komuntabellutmatning.innerHTML = "";
}//end  of clearKommutabell()-------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------
//MånadsLön
//------------------------------------------------------------------------------------------------------------------------------------------
function makeSalaryTaxArray(tdata) {

  let t_tablenr = "";

  //Fill select option sid 3 Bokföring ++++++++++++++++++++++++++++++++
  let tselectaccounting = document.getElementById("optionaccounting"); //fyller select på sidan 3 bokföra

  //Fill select option sid 2 Löneskattetabell ++++++++++++++++++++++++++++++++
  let tselect = document.getElementById("optionsalarytax");
  let option = document.createElement("option");
  //option.value = "Välj skattetabell";
  option.innerHTML = "Välj skattetabell";
  option.selected = "true";
  option.disabled = "disabled";
  tselect.appendChild(option);
  //tselectaccounting.appendChild(option);
  //console.log(tdata);

  for (let i = 1; i < tdata.length; i++) {//tdata.length 1346

    //castar raden till String
    let trow = String(tdata[i]);
    //splitar Stringen till array[År;Församlings-kod;Kommun;Församling;Summa, inkl. kyrkoavgift;Summa, exkl. kyrkoavgift;Kommunal-skatt;Landstings-skatt;Begravnings-av]
    //var telement = trow.split(",");
    let telement = trow.split(";");

    //console.log(telement[2]);
    //skapar en array med bara tabell nummer
    if (t_tablenr != telement[2] && telement[2] != "3") {
      salaryTaxArrayTabellNr.push(telement[2]);//lägger till tabell nummer
      //console.log(telement[2]);
      //Fill select option sid 2 Löneskattetabell 
      option = document.createElement("option");
      option.value = telement[2];
      option.innerHTML = telement[2];
      tselect.appendChild(option);
      //++++++++++++++++++++++++++++++++++++
      //Fill select option sid 3 Bokföring ++++++++++++++++++++++++++++++++
      let option2 = document.createElement("option");
      option2.value = telement[2];
      option2.innerHTML = telement[2];
      tselectaccounting.appendChild(option2);//fyller select på sidan 3 bokföra

    }
    salaryTaxArray.push(telement);//lägger till rad med [kommunalskatt data]
    t_tablenr = telement[2];
    //console.log(komSkattArray[i][3]);


  }//end of forloop
  //kommun_array.sort();//sorterar kommuner
  //fillOptionSalaryTax();//fyller select optionkomuner

}//end of makeSalaryTaxArray(tdata)----------------------------------------------------------------------------------------------------------------

//selectSalaryTaxNr() körs när man clickar på opton för LöneTabell
//skriverut skatten för lön för vald kommun i selected elementet
function selectSalaryTaxNr(t_findrow) {
  //div id i html-kod
  let div_html_id = "salaryTaxutmatning";
  //Tömmer Div ellement från gammal visning
  document.getElementById(div_html_id).innerHTML = "";

  let t_valdsalarynr_array = new Array();//rader med data för vald kommun
  let tselectedSalNr = document.getElementById("optionsalarytax");//.selectedValue;

  //lägger till headings till html table
  let t_heading = new Array();

  t_heading[0] = "År\n";//0
  t_heading[1] = "Antal\nDagar";//1
  t_heading[2] = "Tabell\nNr";
  t_heading[3] = "Inkomst\n fr.o.m.";//2
  t_heading[4] = "Inkomst\n t.o.m.";//3
  t_heading[5] = "Kolumn\n1";
  t_heading[6] = "Kolumn\n2";
  t_heading[7] = "kolumn\n3";
  t_heading[8] = "Kolumn\n4";
  t_heading[9] = "Kolumn\n5";
  t_heading[10] = "Kolumn\n6";

  t_valdsalarynr_array.push(t_heading);
  //------------------------
  let t_tabnr_value = tselectedSalNr.options[tselectedSalNr.selectedIndex].value;
  //console.log(`FEL: ${t_tabnr_value}`)
  for (let i = 0; i < salaryTaxArray.length; i++) {
    let t_row = salaryTaxArray[i];
    let t_newrowarray = new Array();


    if (t_tabnr_value == t_row[2] && t_findrow == false) {// om flera rader för vald tabellnr ska visas
      //console.log(t_row);

      t_newrowarray[0] = t_row[0];//år
      t_newrowarray[1] = t_row[1];//AntDgr
      t_newrowarray[2] = t_row[2];// TabNr
      t_newrowarray[3] = t_row[3];// inkomst från och med
      t_newrowarray[4] = t_row[4];// inkomst till och med
      t_newrowarray[5] = t_row[5];//under 66 kolumn 1
      t_newrowarray[6] = t_row[6];// fyllt och är över 66år Kolumn2
      t_newrowarray[7] = t_row[7];//fyllt och är över 66år + skatteAvdrag Kolumn3
      t_newrowarray[8] = t_row[8];// sjuk- och aktivitetsersättning, årets ingång inte fyllt 66 år Kolumn4
      t_newrowarray[9] = t_row[9];//pensionsgrundande ersättningar än löner med mera, exempelvis ersättning från arbetslöshetskassa  Kolumn5
      t_newrowarray[10] = t_row[10];// Avser pensioner och andra ersättningar till den som vid årets ingång inte fyllt 66  Kolumn6


      t_valdsalarynr_array.push(t_newrowarray);
      showSallaryButton(true);
    }

    else if (t_tabnr_value == t_row[2] && t_findrow == true) {// om endast en rad för löneintervall ska skrivas ut

      let t_inputsalary = parseInt(document.getElementById("thesalary").value);
      //console.log(t_inputsalary);

      let t_salfrom = parseInt(t_row[3]);// inkomst från och med

      let t_salto = parseInt(t_row[4]);// inkomst från och med


      if (t_inputsalary <= t_salto) {
        let t_rowBefore = salaryTaxArray[i]

        t_newrowarray[0] = t_rowBefore[0];//år
        t_newrowarray[1] = t_rowBefore[1];//AntDgr
        t_newrowarray[2] = t_rowBefore[2];// TabNr
        t_newrowarray[3] = t_rowBefore[3];// inkomst från och med
        t_newrowarray[4] = t_rowBefore[4];// inkomst till och med
        t_newrowarray[5] = t_rowBefore[5];//under 66 kolumn 1
        t_newrowarray[6] = t_rowBefore[6];// fyllt och är över 66år Kolumn2
        t_newrowarray[7] = t_rowBefore[7];//fyllt och är över 66år + skatteAvdrag Kolumn3
        t_newrowarray[8] = t_rowBefore[8];// sjuk- och aktivitetsersättning, årets ingång inte fyllt 66 år Kolumn4
        t_newrowarray[9] = t_rowBefore[9];//pensionsgrundande ersättningar än löner med mera, exempelvis ersättning från arbetslöshetskassa  Kolumn5
        t_newrowarray[10] = t_rowBefore[10];// Avser pensioner och andra ersättningar till den som vid årets ingång inte fyllt 66  Kolumn6

        t_valdsalarynr_array.push(t_newrowarray);
        //G_valdSallaryTaxRow = t_newrowarray;//
        break;
      }
    }

  }//end of forllop

  createHtmlTable(t_valdsalarynr_array, "salaryTaxutmatning");


}//end selectSalaryTaxNr()-----------------------------------------------------------------------------------------------------------------

function showSallaryButton(t_status) {
  //console.log("t_status: " + t_status);
  let t_tfield = document.getElementById("thesalary");

  if (t_status == false) {

    divSallaryButton.style.visibility = 'hidden';
  }
  else {
    t_tfield.value = "";
    divSallaryButton.style.visibility = 'visible';
  }
}// end of showSallaryButton()-------------------------------------------------------------------------------------------------

function clearSkattetabell() {
  //console.log("Clear skatteTabell! ")
  let div_salaryTaxutmatning = document.getElementById("salaryTaxutmatning");
  div_salaryTaxutmatning.innerHTML = "";
}//end  of clearSkattetabell()-------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------
//BokföraLön
//-----------------------------------------------------------------------------------------------------------------
function salAccounting() {

  let select_kolumn_val = document.getElementById("lonekolumn")

  let t_salary = Number(document.getElementById("income").value);
    
  let select_socavg =  document.getElementById("socialaavg")
  let t_socavg = Number(select_socavg.value);
  
  /*select_socavg.addEventListener('click', (event) => {
    console.log(`You like ${event.target.value}`);
  } )*/

  //let t_socavg = Number(document.getElementById("socialaavg").value);
  let t_tabellNr = document.getElementById("optionaccounting");

  
  let t_tabelNr_value = t_tabellNr.options[t_tabellNr.selectedIndex].value;
  //let t_boolSixtieFive = document.getElementById("sixtieFive").checked;

  let t_skatterad = new Array();
  t_skatterad = getTaxRow(t_salary, t_tabelNr_value);

  //console.log(`rad= ${t_skatterad} och selected kolumn ${select_kolumn_val.value}`)

  let t_skatteunderlaget = parseInt(t_skatterad[Number(select_kolumn_val.value)])

  printKalkyl(t_salary, t_socavg, t_skatteunderlaget);

}//end of salAccounting---------------------------------------

function getTaxRow(t_salary, t_table_nr) {

  let t_row = new Array();

  for (let i = 0; i < salaryTaxArray.length; i++) {

    t_row = salaryTaxArray[i]; //hämtar rad i lönetabell
    let t_salto = parseInt(t_row[4]);// inkomst från och med
    //Om imkomst från och med är mindre än inmatat lön och Kolumn nr är lika som vald kolumn 
    if (t_salary <= t_salto && t_row[2] == t_table_nr) {
      break;
    }//end if

  }// end forloop

  //console.log(t_row);
  return t_row;
}// end of getTaxRow()

function createVerifikationArray(t_salary, t_arbetgivaravift, t_salaryskatt, t_nettolon, bool_konto7510) {
  let t_ver_array = new Array();
  //console.log(`Social avgift= ${t_arbetgivaravift}`)
  let t_ver_row = ["Konto", "Kontonamn - Benämning", "Debet", "Kredit"];
  t_ver_array.push(t_ver_row);
  t_ver_row = ["1930", "Företagskonto", "0", t_nettolon];
  t_ver_array.push(t_ver_row);
  t_ver_row = ["2710", "Personalskatt", "0", t_salaryskatt];
  t_ver_array.push(t_ver_row);
  t_ver_row = ["2730", "Lagstadga social avg", "0", t_arbetgivaravift];
  t_ver_array.push(t_ver_row);
  t_ver_row = ["7010", "Lön kollektivanställda", t_salary, "0"];
  t_ver_array.push(t_ver_row);
  if (bool_konto7510)
    t_ver_row = ["7510", "Arbetsgivaravgift 31.42%", t_arbetgivaravift, "0"];    
  else
    t_ver_row = ["7511", "Arbetsgivaravgift lön-ersättning", t_arbetgivaravift, "0"];
    
  t_ver_array.push(t_ver_row);

  return t_ver_array;

}//end of createVerifikationArray

//printVerifikation()//skriver html tabell som verifikation
function printVerifikationOld(t_verifikation_array) {

  let t_div_ver = document.getElementById("bokforutmatning");
  t_div_ver.innerHTML = "";

  let t_heading = t_verifikation_array[0];

  let table = document.createElement('TABLE')
  let tableJhaed = document.createElement('THEAD')
  let tableBody = document.createElement('TBODY')

  //TABLE COLUMNS
  table.border = '1';
  table.align = 'center';

  table.appendChild(tableJhaed);
  var tr = document.createElement('TR');
  tableJhaed.appendChild(tr);
  for (i = 0; i < t_heading.length; i++) {
    var th = document.createElement('TH')

    if (i == 1)
      th.width = '220';


    else
      th.width = '75';

    th.appendChild(document.createTextNode(t_heading[i]));
    tr.appendChild(th);

  }

  table.appendChild(tableBody);
  //TABLE ROWS

  for (i = 1; i < t_verifikation_array.length; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    //console.log(i +": ");
    for (j = 0; j < t_verifikation_array[i].length; j++) {
      //console.log(t_verifikation_array[i][j]);
      var td = document.createElement('TD')

      if (j == 1)
        td.align = 'left';

      td.appendChild(document.createTextNode(t_verifikation_array[i][j]));
      tr.appendChild(td);
    }
    //table.appendChild(tr);
  }

  t_div_ver.appendChild(table);

}//end of printVerifikation


function printVerifikation(t_verifikation_array) {

  let t_div_ver = document.getElementById("bokforutmatning");
  t_div_ver.innerHTML = "";

  let t_heading = t_verifikation_array[0];

  let table = document.createElement('TABLE')
  let tableJhaed = document.createElement('THEAD')
  let tableBody = document.createElement('TBODY')

  table.id = "verifikation_table"
  table.appendChild(tableJhaed);
  let tr_head = document.createElement('TR');
  tableJhaed.appendChild(tr_head);

  for (i = 0; i < t_heading.length; i++) {

    let th = document.createElement('TH')
    th.id = `ver_tableheader_id_${i}`
    th.appendChild(document.createTextNode(t_heading[i]));
    tr_head.appendChild(th);
  }


  table.appendChild(tableBody);
  //TABLE ROWS

  for (i = 1; i < t_verifikation_array.length; i++) {
    let tr_body = document.createElement('TR');
    tableBody.appendChild(tr_body);

    //console.log(i +": ");
    for (j = 0; j < t_verifikation_array[i].length; j++) {
      //console.log(t_verifikation_array[i][j]);
      let td_body = document.createElement('TD')
      td_body.id = `table_body_td_name${j}`



      td_body.appendChild(document.createTextNode(t_verifikation_array[i][j]));
      tr_body.appendChild(td_body);
    }//end of inner forloop
    //table.appendChild(tr);
  }//end of outer forloop

  t_div_ver.appendChild(table);



  //console.log(`t_heading: ${t_heading}`)



}

function printKalkyl(t_salary, t_arbetgivaravift, t_salaryskatt) {

  
  //console.log(`t_arbetaravgift=${t_arbetgivaravift == 31.41}`)
  let bool_konto7510 = t_arbetgivaravift == 31.42;

  t_arbetgivaravift = t_arbetgivaravift / 100;//procent
  
  let t_div_kalkyl = document.getElementById("skattutrakning");
  let t_arbetgivaravift_kr = t_salary * t_arbetgivaravift;
  t_arbetgivaravift_kr = t_arbetgivaravift_kr.toFixed(0);
  let t_totlonkostnad = parseInt(t_arbetgivaravift_kr) + parseInt(t_salary);
  let t_nettolon = parseInt(t_salary) - parseInt(t_salaryskatt);

  //console.log(`t_arbetaravgift=${t_arbetgivaravift}`)

  t_div_kalkyl.innerHTML = "";//tömmer div element
  let t_text1 = "Lön: " + t_salary + "kr <br>Arbetsgivaravgift:  " + t_arbetgivaravift_kr + "kr <br><b>Summa total lönekostnad: " + t_totlonkostnad + "kr</b>";
  let t_text2 = "<br><br>Preliminär skatt: " + t_salaryskatt + "kr<br><b>Nettolön: " + t_nettolon + "kr</b>";


  t_div_kalkyl.innerHTML = t_text1 + t_text2;

  //Skriver ut Verifikation
  //printVerifikation(createVerifikationArray(t_salary, t_arbetgivaravift_kr, t_salaryskatt, t_nettolon));

  printVerifikation(createVerifikationArray(t_salary, t_arbetgivaravift_kr, t_salaryskatt, t_nettolon, bool_konto7510));
  clearSkattetabell()

}//end of printKalkyl
