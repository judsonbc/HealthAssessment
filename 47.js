
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
if (navigator.userAgent.indexOf('iPad') !== -1) {
  var splashscreen = document.createElement('link');
  splashscreen.rel = 'apple-touch-startup-image';
  splashscreen.href = 'SplashScreen.jpg';
  document.getElementsByTagName('head')[0].appendChild(splashscreen);
}

window.addEventListener('load', function() {
  Form1.style.display = 'block';
  NSB.TitleBar_init('TitleBar1','home','About');
  NSB.addProperties(TitleBar1);
  if(typeof(Select1)=='undefined') Select1={id:'Select1'};
  NSB.Select_jqm_init(Select1,'','');


  NSB.addProperties(Label1);
  NSB.addDisableProperty(Button1);
  NSB.addProperties(Button1);

  TextArea1.ontouchmove=function(e){e.stopPropagation()};
  NSB.addProperties(TextArea1);
  NSB.addProperties(Image9);
  Form1.style.display = 'none';
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);
var  Intro=createMultiDimArray('8'),whatform;
Intro[1] = "How good are you at making healthier choices?  And how much do you really know about nutrition?  Take this short test to find out.";
Intro[2] = "If you've been feeling low or down about things, take this short test to find out if you're suffering from depression.  Provides advice to getting help if you need it.";
Intro[3] = "Good mental wellbeing - Or happiness - is about more than avoiding mental Health problems.  It means feeling good And functioning well. Take this short test To see how you rate On the wellbeing scale.";
Intro[4] = "Research has shown that two thirds of Filipinos, don't follow basic home hygiene. Take this test and find out whether your home could be a health risk.";
Intro[5] = "This drinking self-assessment assesses your relationship with alcohol and helps you to understand if you're drinking too much. At the end, it gives advice on how you can cut down.";
Intro[6] = "People can have kidney disease and not be aware of it. Use this test to check whether you should have your kidney function checked.";
Intro[7] = "A lot can be done to help bladder problems. Take this test to see if you need further advice.";
Intro[8] = "Use this self-assessment to find out if you might have asthma. It will help you to understand what the symptoms are and will give advice on treatment.";
whatform = "1";


Image9.firstChild.src = "images\\healthyeating.png";


Button1.onclick = function() { savethefunction_rvar="";
  switch (True) {
    case ((whatform) == "1"):
      Form1.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form1.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form2show,1000);
	break;
    case ((whatform) == "2"):
      Form1.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form1.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form3show,1000);
	break;
    case ((whatform) == "3"):
      Form1.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form1.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form4show,1000);
	break;
    case ((whatform) == "4"):
      Form1.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form1.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form5show,1000);
	break;
    case ((whatform) == "5"):
      Form1.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form1.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form6show,1000);
	break;
    case ((whatform) == "6"):
      Form1.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form1.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form7show,1000);
	break;
    case ((whatform) == "7"):
      Form1.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form1.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form8show,1000);
	break;
    case ((whatform) == "8"):
      Form1.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form1.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form9show,1000);
    }
return savethefunction_rvar; }

Select1.onchange = function() { savethefunction_rvar="";
  switch (True) {
    case ((Select1.selectedItem()) == "Healthy Eating"):
      TextArea1.value = Intro[1];
      Image9.firstChild.src = "images\\healthyeating.png";
      whatform = "1";
	break;
    case ((Select1.selectedItem()) == "Depression"):
      TextArea1.value = Intro[2];
      Image9.firstChild.src = "images\\depression.png";
      whatform = "2";
	break;
    case ((Select1.selectedItem()) == "Wellbeing"):
      TextArea1.value = Intro[3];
      Image9.firstChild.src = "images\\wellbeing.png";
      whatform = "3";
	break;
    case ((Select1.selectedItem()) == "Home Hygiene"):
      TextArea1.value = Intro[4];
      Image9.firstChild.src = "images\\hygiene.png";
      whatform = "4";
	break;
    case ((Select1.selectedItem()) == "Drinking"):
      TextArea1.value = Intro[5];
      Image9.firstChild.src = "images\\drinking.png";
      whatform = "5";
	break;
    case ((Select1.selectedItem()) == "Kidney"):
      TextArea1.value = Intro[6];
      Image9.firstChild.src = "images\\kidney.png";
      whatform = "6";
	break;
    case ((Select1.selectedItem()) == "Bladder"):
      TextArea1.value = Intro[7];
      Image9.firstChild.src = "images\\bladder.png";
      whatform = "7";
	break;
    case ((Select1.selectedItem()) == "Asthma"):
      TextArea1.value = Intro[8];
      Image9.firstChild.src = "images\\asthma.png";
      whatform = "8";
    }
return savethefunction_rvar; }


function form2show() {
  nsbDOMAttr(Form1,'style.display',"none");
  nsbDOMAttr(Form2,'style.display',"block");
  Form2.style.webkitTransform="translateX(0px)";
}

function form3show() {
  nsbDOMAttr(Form1,'style.display',"none");
  nsbDOMAttr(Form3,'style.display',"block");
  Form3.style.webkitTransform="translateX(0px)";
}

function form4show() {
  nsbDOMAttr(Form1,'style.display',"none");
  nsbDOMAttr(Form4,'style.display',"block");
  Form4.style.webkitTransform="translateX(0px)";
}

function form5show() {
  nsbDOMAttr(Form1,'style.display',"none");
  nsbDOMAttr(Form5,'style.display',"block");
  Form5.style.webkitTransform="translateX(0px)";
}

function form6show() {
  nsbDOMAttr(Form1,'style.display',"none");
  nsbDOMAttr(Form6,'style.display',"block");
  Form6.style.webkitTransform="translateX(0px)";
}

function form7show() {
  nsbDOMAttr(Form1,'style.display',"none");
  nsbDOMAttr(Form7,'style.display',"block");
  Form7.style.webkitTransform="translateX(0px)";
}

function form8show() {
  nsbDOMAttr(Form1,'style.display',"none");
  nsbDOMAttr(Form8,'style.display',"block");
  Form8.style.webkitTransform="translateX(0px)";
}

function form9show() {
  nsbDOMAttr(Form1,'style.display',"none");
  nsbDOMAttr(Form9,'style.display',"block");
  Form9.style.webkitTransform="translateX(0px)";
}


window.addEventListener('load', function() {
  Form2.style.display = 'block';
  NSB.TitleBar_init('TitleBar2','home','');
  NSB.addProperties(TitleBar2);
  NSB.addProperties(Image1);
  NSB.addDisableProperty(Button2);
  NSB.addProperties(Button2);

  Form2.style.display = 'none';
}, false);
Form2.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form2);
TitleBar2.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form2.style.webkitTransitionDuration="1000ms";
    Form2.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form2,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}

Button2.onclick = function() { savethefunction_rvar="";
  Form2.style.webkitTransitionDuration="1000ms";
  Form2.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
 //Wait for the transition to complete half way before starting form2
  setTimeout(form21show,500);
return savethefunction_rvar; }

function form21show() {
 //hide form2 and show form1
  nsbDOMAttr(Form2,'style.display',"none");
  nsbDOMAttr(Form21,'style.display',"block");
  Form21.style.webkitTransform="translateX(0px)";
}
window.addEventListener('load', function() {
  Form21.style.display = 'block';
  NSB.TitleBar_init('TitleBar10','home','');
  NSB.addProperties(TitleBar10);


  NSB.addProperties(Label2);
  NSB.addProperties(Line1);
  NSB.ButtonBar_init(ButtonBar1,'Back,Next');
  NSB.addProperties(ButtonBar1);


  NSB.addProperties(Label3);
  NSB.RadioButton_jqm_init('RadioButton12','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton12 .ui-btn').css('height','278'/RadioButton12.getItemCount()) }
    else $('#RadioButton12 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton12 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton12 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton12, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton12 .ui-btn').css('height',h/RadioButton12.getItemCount()) }
    else $('#RadioButton12 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton12 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton12,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton13','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton13 .ui-btn').css('height','278'/RadioButton13.getItemCount()) }
    else $('#RadioButton13 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton13 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton13 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton13, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton13 .ui-btn').css('height',h/RadioButton13.getItemCount()) }
    else $('#RadioButton13 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton13 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton13,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton14','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton14 .ui-btn').css('height','278'/RadioButton14.getItemCount()) }
    else $('#RadioButton14 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton14 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton14 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton14, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton14 .ui-btn').css('height',h/RadioButton14.getItemCount()) }
    else $('#RadioButton14 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton14 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton14,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton15','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton15 .ui-btn').css('height','278'/RadioButton15.getItemCount()) }
    else $('#RadioButton15 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton15 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton15 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton15, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton15 .ui-btn').css('height',h/RadioButton15.getItemCount()) }
    else $('#RadioButton15 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton15 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton15,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton16','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton16 .ui-btn').css('height','278'/RadioButton16.getItemCount()) }
    else $('#RadioButton16 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton16 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton16 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton16, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton16 .ui-btn').css('height',h/RadioButton16.getItemCount()) }
    else $('#RadioButton16 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton16 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton16,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton17','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton17 .ui-btn').css('height','278'/RadioButton17.getItemCount()) }
    else $('#RadioButton17 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton17 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton17 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton17, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton17 .ui-btn').css('height',h/RadioButton17.getItemCount()) }
    else $('#RadioButton17 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton17 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton17,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton18','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton18 .ui-btn').css('height','278'/RadioButton18.getItemCount()) }
    else $('#RadioButton18 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton18 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton18 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton18, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton18 .ui-btn').css('height',h/RadioButton18.getItemCount()) }
    else $('#RadioButton18 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton18 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton18,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton19','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton19 .ui-btn').css('height','278'/RadioButton19.getItemCount()) }
    else $('#RadioButton19 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton19 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton19 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton19, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton19 .ui-btn').css('height',h/RadioButton19.getItemCount()) }
    else $('#RadioButton19 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton19 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton19,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton110','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton110 .ui-btn').css('height','278'/RadioButton110.getItemCount()) }
    else $('#RadioButton110 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton110 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton110 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton110, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton110 .ui-btn').css('height',h/RadioButton110.getItemCount()) }
    else $('#RadioButton110 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton110 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton110,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton111','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton111 .ui-btn').css('height','278'/RadioButton111.getItemCount()) }
    else $('#RadioButton111 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton111 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton111 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton111, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton111 .ui-btn').css('height',h/RadioButton111.getItemCount()) }
    else $('#RadioButton111 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton111 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton111,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton112','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton112 .ui-btn').css('height','278'/RadioButton112.getItemCount()) }
    else $('#RadioButton112 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton112 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton112 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton112, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton112 .ui-btn').css('height',h/RadioButton112.getItemCount()) }
    else $('#RadioButton112 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton112 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton112,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton113','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton113 .ui-btn').css('height','278'/RadioButton113.getItemCount()) }
    else $('#RadioButton113 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton113 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton113 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton113, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton113 .ui-btn').css('height',h/RadioButton113.getItemCount()) }
    else $('#RadioButton113 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton113 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton113,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton114','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton114 .ui-btn').css('height','278'/RadioButton114.getItemCount()) }
    else $('#RadioButton114 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton114 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton114 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton114, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton114 .ui-btn').css('height',h/RadioButton114.getItemCount()) }
    else $('#RadioButton114 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton114 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton114,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton11','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton11 .ui-btn').css('height','278'/RadioButton11.getItemCount()) }
    else $('#RadioButton11 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton11 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton11 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton11, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton11 .ui-btn').css('height',h/RadioButton11.getItemCount()) }
    else $('#RadioButton11 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton11 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton11,undefined,true);}catch(e){console.log('error:' + e.message)}
  Form21.style.display = 'none';
}, false);
Form21.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form21);
var  Q1=createMultiDimArray('14'),A1=createMultiDimArray('14'),QNum,MaxQ,Score1=createMultiDimArray('14,6'), Score, Ans, myCtrl=createMultiDimArray('14'),Result1=createMultiDimArray('4');

Result1[1] =  "Based on your answers today your ability to make healthier choices and your knowledge of nutrition is poor. If this is reflected in your diet, then it might be time to brush up your knowledge to reduce the chances of long-term health problems such as obesity or heart disease.";
Result1[2] =  "Based on your answers today you don’t know that much about healthy eating and there is room for improvement.";
Result1[3] =  "Based on your answers today you know quite a bit about healthy eating. However, there is room for improvement.";
Result1[4] =  "Based on your answers today you know a lot about making healthier choices and nutrition. Well done!  The key is To ensure you apply your knowledge To your diet.";


Score = 0;

Score1[1][1] = 1;
Score1[1][2] = 3;
Score1[1][3] = 1;
Score1[1][4] = 2;
Score1[1][5] = 3;
Score1[1][6] = 0;

Score1[2][1] = 3;
Score1[2][2] = 2;
Score1[2][3] = 1;
Score1[2][4] = 0;
Score1[2][5] = 4;

Score1[3][1] = 4;
Score1[3][2] = 2;
Score1[3][3] = 2;
Score1[3][4] = 1;
Score1[3][5] = 0;

Score1[4][1] = 0;
Score1[4][2] = 0;
Score1[4][3] = 0;
Score1[4][4] = 3;
Score1[4][5] = 0;
Score1[4][6] = 0;

Score1[5][1] = 0;
Score1[5][2] = 3;
Score1[5][3] = 0;
Score1[5][4] = 0;
Score1[5][5] = 0;
Score1[5][6] = 0;

Score1[6][1] = 0;
Score1[6][2] = 0;
Score1[6][3] = 3;
Score1[6][4] = 0;

Score1[7][1] = 0;
Score1[7][2] = 0;
Score1[7][3] = 0;
Score1[7][4] = 0;
Score1[7][5] = 3;

Score1[8][1] = 0;
Score1[8][2] = 0;
Score1[8][3] = 0;
Score1[8][4] = 3;

Score1[9][1] = 0;
Score1[9][2] = 3;
Score1[9][3] = 0;
Score1[9][4] = 0;

Score1[10][1] = 0;
Score1[10][2] = 3;
Score1[10][3] = 0;

Score1[11][1] = 0;
Score1[11][2] = 3;
Score1[11][3] = 1;

Score1[12][1] = 0;
Score1[12][2] = 0;
Score1[12][3] = 3;

Score1[13][1] = 0;
Score1[13][2] = 0;
Score1[13][3] = 0;
Score1[13][4] = 3;

Score1[14][1] = 3;
Score1[14][2] = 0;
Score1[14][3] = 0;

QNum = 1;
MaxQ = 14;

Q1[1] = "Which of these breakfast options is healthiest?";
Q1[2] = "The average of coffee needed of our body?"; //*
Q1[3] = "On average, which of the following is the most calorific?";
Q1[4] = "Which of the following does not count as one of your 5 A DAY? ";
Q1[5] = "On average, which of the following supermarket sandwich options is highest in calories?"; //* 
Q1[6] = "How many litres of fluids should you drink each day?";
Q1[7] = "On average, which of the following takeaway options is lowest in calories?"; //*
Q1[8] = "On average, which of the following shop-bought drinks is healthiest?"; //*
Q1[9] = "How much of our diet should be made up of starchy foods (carbohydrates) such as rice, potatoes, pasta and bread?";
Q1[10] = "How much red meat (beef, lamb, pork) should we eat each day?";
Q1[11] = "How many times a week should we eat fish (as a minimum)?";
Q1[12] = "What in particular should you eat to ensure a balanced diet?";
Q1[13] = "How many eggs can you eat in a week in order to stay within recommendations?";
Q1[14] = "As a guide, how many calories should we eat each day?";

TitleBar10.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form21.style.webkitTransitionDuration="1000ms";
    Form21.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form21,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}


ButtonBar1.onbuttonclick = function(choice1) { savethefunction_rvar="";
  if(choice1=="Next") {
    QNum = QNum + 1;
    if(QNum > MaxQ ) {
      QNum = MaxQ;
      Score = 0;
      GetScore();

      if(Score <= 10) {
        Label6.textContent = Result1[1];
      }else if (Score <=20 ) {
        Label6.textContent = Result1[2];
      }else if (Score <=35 ) {
        Label6.textContent = Result1[3];
      }else if (Score <=42 ) {
        Label6.textContent = Result1[4];
      }

      ProgressBar1.value = Score;
      Label4.textContent = "Your Score is "  +  Score;
      Label7.textContent = Score;

      Form21.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form21.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form22show,1000);

    }
    ShowQ(QNum);
  }
  if(choice1 == "Back") {
    QNum = QNum -1;
    if(QNum == 0 ) { QNum = 1; }
    ShowQ(QNum);
  }

return savethefunction_rvar; }

function ShowQ(whatq) { savethefunction_rvar="";
  Label3.textContent = Q1[whatq];
  Label2.textContent = "Q "  +  whatq  +  " of "  +  MaxQ;
  for   (x = 1; x  <= MaxQ; x ++) {
    myCtrl[x] = eval("RadioButton1"  +  x);
    if(x == whatq) {
        myCtrl[x].Visible = True;
 } else {
        myCtrl[x].Visible = False;
    }
  }
return savethefunction_rvar; }

function GetScore() { savethefunction_rvar="";
  for   (x = 1; x  <= MaxQ; x ++) {
    Ans = 0;
    for   (z = 1; z  <= myCtrl[x].getItemCount(); z ++) {
      if(myCtrl[x].getValue(z)) {
        Ans = z;
      }
    }
    if(Ans > 0 ) { Score = Score + Score1[x][Ans]; }
  }
return savethefunction_rvar; }

function form22show() {
  nsbDOMAttr(Form21,'style.display',"none");
  nsbDOMAttr(Form22,'style.display',"block");
  Form22.style.webkitTransform="translateX(0px)";
}


window.addEventListener('load', function() {
  Form22.style.display = 'block';
  NSB.TitleBar_init('TitleBar11','home','');
  NSB.addProperties(TitleBar11);


  NSB.addProperties(Label4);


  NSB.addProperties(Label5);


  NSB.addProperties(Label6);
NSB.addProperties(ProgressBar1);


  NSB.addProperties(Label7);
  Form22.style.display = 'none';
}, false);
Form22.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form22);


TitleBar11.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form22.style.webkitTransitionDuration="1000ms";
    Form22.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form22,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}



window.addEventListener('load', function() {
  Form3.style.display = 'block';
  NSB.TitleBar_init('TitleBar3','home','');
  NSB.addProperties(TitleBar3);
  NSB.addProperties(Image2);
  NSB.addDisableProperty(Button3);
  NSB.addProperties(Button3);

  Form3.style.display = 'none';
}, false);
Form3.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form3);
TitleBar3.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form3.style.webkitTransitionDuration="1000ms";
    Form3.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form3,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}

Button3.onclick = function() { savethefunction_rvar="";
  Form3.style.webkitTransitionDuration="1000ms";
  Form3.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
 //Wait for the transition to complete half way before starting form2
  setTimeout(form31show,500);
return savethefunction_rvar; }

function form31show() {
 //hide form2 and show form1
  nsbDOMAttr(Form3,'style.display',"none");
  nsbDOMAttr(Form31,'style.display',"block");
  Form31.style.webkitTransform="translateX(0px)";
}
window.addEventListener('load', function() {
  Form31.style.display = 'block';
  NSB.TitleBar_init('TitleBar12','home','Home,Right');
  NSB.addProperties(TitleBar12);


  NSB.addProperties(LabelQ2);
  NSB.addProperties(Line1Copy);
  NSB.ButtonBar_init(ButtonBar2,'Back,Next');
  NSB.addProperties(ButtonBar2);


  NSB.addProperties(LabelQuestion2);
  NSB.RadioButton_jqm_init('RadioButton22','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton22 .ui-btn').css('height','278'/RadioButton22.getItemCount()) }
    else $('#RadioButton22 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton22 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton22 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton22, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton22 .ui-btn').css('height',h/RadioButton22.getItemCount()) }
    else $('#RadioButton22 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton22 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton22,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton23','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton23 .ui-btn').css('height','278'/RadioButton23.getItemCount()) }
    else $('#RadioButton23 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton23 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton23 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton23, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton23 .ui-btn').css('height',h/RadioButton23.getItemCount()) }
    else $('#RadioButton23 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton23 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton23,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton24','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton24 .ui-btn').css('height','278'/RadioButton24.getItemCount()) }
    else $('#RadioButton24 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton24 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton24 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton24, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton24 .ui-btn').css('height',h/RadioButton24.getItemCount()) }
    else $('#RadioButton24 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton24 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton24,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton25','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton25 .ui-btn').css('height','278'/RadioButton25.getItemCount()) }
    else $('#RadioButton25 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton25 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton25 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton25, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton25 .ui-btn').css('height',h/RadioButton25.getItemCount()) }
    else $('#RadioButton25 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton25 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton25,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton26','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton26 .ui-btn').css('height','278'/RadioButton26.getItemCount()) }
    else $('#RadioButton26 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton26 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton26 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton26, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton26 .ui-btn').css('height',h/RadioButton26.getItemCount()) }
    else $('#RadioButton26 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton26 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton26,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton27','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton27 .ui-btn').css('height','278'/RadioButton27.getItemCount()) }
    else $('#RadioButton27 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton27 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton27 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton27, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton27 .ui-btn').css('height',h/RadioButton27.getItemCount()) }
    else $('#RadioButton27 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton27 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton27,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton28','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton28 .ui-btn').css('height','278'/RadioButton28.getItemCount()) }
    else $('#RadioButton28 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton28 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton28 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton28, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton28 .ui-btn').css('height',h/RadioButton28.getItemCount()) }
    else $('#RadioButton28 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton28 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton28,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton29','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton29 .ui-btn').css('height','278'/RadioButton29.getItemCount()) }
    else $('#RadioButton29 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton29 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton29 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton29, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton29 .ui-btn').css('height',h/RadioButton29.getItemCount()) }
    else $('#RadioButton29 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton29 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton29,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton21','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton21 .ui-btn').css('height','278'/RadioButton21.getItemCount()) }
    else $('#RadioButton21 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton21 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton21 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton21, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton21 .ui-btn').css('height',h/RadioButton21.getItemCount()) }
    else $('#RadioButton21 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton21 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton21,undefined,true);}catch(e){console.log('error:' + e.message)}
  Form31.style.display = 'none';
}, false);
Form31.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form31);
var  Q2=createMultiDimArray('14'),A2=createMultiDimArray('14'),QNum2,MaxQ2,Score2=createMultiDimArray('9,4'), TScore2, Ans2, myCtrl2=createMultiDimArray('14'),Result2=createMultiDimArray('2');

Result2[1] =  "Based on your responses today it's unlikely you're suffering from depression.";
Result2[2] =  "Based on your responses today it's very likely that you could be suffering from some form of depression but only an experienced health professional can tell for sure.";

TScore2 = 0;

Score2[1][1] = 0;
Score2[1][2] = 1;
Score2[1][3] = 2;
Score2[1][4] = 3;

Score2[2][1] = 0;
Score2[2][2] = 1;
Score2[2][3] = 2;
Score2[2][4] = 3;

Score2[3][1] = 0;
Score2[3][2] = 1;
Score2[3][3] = 2;
Score2[3][4] = 3;

Score2[4][1] = 0;
Score2[4][2] = 1;
Score2[4][3] = 2;
Score2[4][4] = 3;

Score2[5][1] = 0;
Score2[5][2] = 1;
Score2[5][3] = 2;
Score2[5][4] = 3;

Score2[6][1] = 0;
Score2[6][2] = 1;
Score2[6][3] = 2;
Score2[6][4] = 3;

Score2[7][1] = 0;
Score2[7][2] = 1;
Score2[7][3] = 2;
Score2[7][4] = 3;

Score2[8][1] = 0;
Score2[8][2] = 1;
Score2[8][3] = 2;
Score2[8][4] = 3;

Score2[9][1] = 0;
Score2[9][2] = 1;
Score2[9][3] = 2;
Score2[9][4] = 3;


QNum2 = 1;
MaxQ2 = 9;

Q2[1] = "Have you found little pleasure or interest in doing things?";
Q2[2] = "Have you found yourself feeling down, depressed or hopeless?";
Q2[3] = "Have you had trouble falling or staying asleep, or sleeping too much?";
Q2[4] = "Have you been feeling tired or had little energy?";
Q2[5] = "Have you had a poor appetite or been overeating?";
Q2[6] = "Have you felt that you're a failure or let yourself or your family down?";
Q2[7] = "Have you had some trouble concentrating on things like reading the paper or watching TV?";
Q2[8] = "Have you been moving or speaking slowly, or very fidgety, so that other people could notice?";
Q2[9] = "Have you thought that you'd be better off dead or hurting yourself in some way?";
ShowQ2(QNum2);

TitleBar12.onclick = function(choice21) { savethefunction_rvar="";
  if(choice21=="home") {
    Form31.style.webkitTransitionDuration="1000ms";
    Form31.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form31,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}


ButtonBar2.onbuttonclick = function(choice22) { savethefunction_rvar="";
  if(choice22=="Next") {
    QNum2 = QNum2 + 1;
    if(QNum2 > MaxQ2 ) {
      QNum2 = MaxQ2;
      TScore2 = 0;
      GetScore2();

      if(TScore2 <= 10) {
        Label6.textContent = Result2[1];
 } else {
        Label6.textContent = Result2[2];
      }


      ProgressBar1.max = 27;
      Label5.textContent = 27;
      ProgressBar1.value = TScore2;
      Label4.textContent = "Your Score is "  +  TScore2;
      Label7.textContent = TScore2;


      Form31.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form31.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form32show,1000);

    }
    ShowQ2(QNum2);
  }
  if(choice22 == "Back") {
    QNum2 = QNum2 -1;
    if(QNum2 == 0 ) { QNum2 = 1; }
    ShowQ2(QNum2);
  }

return savethefunction_rvar; }

function ShowQ2(whatq2) { savethefunction_rvar="";
  LabelQuestion2.textContent = Q2[whatq2];
  LabelQ2.textContent = "Q "  +  whatq2  +  " of "  +  MaxQ2;
  for   (x = 1; x  <= MaxQ2; x ++) {
    myCtrl2[x] = eval("RadioButton2"  +  x);
    if(x == whatq2) {
        myCtrl2[x].Visible = True;
 } else {
        myCtrl2[x].Visible = False;
    }
  }
return savethefunction_rvar; }

function GetScore2() { savethefunction_rvar="";
  for   (x = 1; x  <= MaxQ2; x ++) {
    Ans2 = 0;
    for   (z = 1; z  <= myCtrl2[x].getItemCount(); z ++) {
      if(myCtrl2[x].getValue(z)) {
        Ans2 = z;
      }
    }
    if(Ans2 > 0 ) { TScore2 = TScore2 + Score2[x][Ans2]; }
  }
return savethefunction_rvar; }

function form32show() {
  nsbDOMAttr(Form31,'style.display',"none");
  nsbDOMAttr(Form22,'style.display',"block");
  Form22.style.webkitTransform="translateX(0px)";
}

window.addEventListener('load', function() {
  Form4.style.display = 'block';
  NSB.TitleBar_init('TitleBar4','home','');
  NSB.addProperties(TitleBar4);
  NSB.addProperties(Image3);
  NSB.addDisableProperty(Button4);
  NSB.addProperties(Button4);

  Form4.style.display = 'none';
}, false);
Form4.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form4);
TitleBar4.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form4.style.webkitTransitionDuration="1000ms";
    Form4.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form4,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}

Button4.onclick = function() { savethefunction_rvar="";
  Form4.style.webkitTransitionDuration="1000ms";
  Form4.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
 //Wait for the transition to complete half way before starting form2
  setTimeout(form41show,500);
return savethefunction_rvar; }

function form41show() {
 //hide form2 and show form1
  nsbDOMAttr(Form4,'style.display',"none");
  nsbDOMAttr(Form41,'style.display',"block");
  Form41.style.webkitTransform="translateX(0px)";
}
window.addEventListener('load', function() {
  Form41.style.display = 'block';
  NSB.TitleBar_init('TitleBar13','home','Home,Right');
  NSB.addProperties(TitleBar13);


  NSB.addProperties(LabelQ3);
  NSB.addProperties(Line1CopyCopy);
  NSB.ButtonBar_init(ButtonBar3,'Back,Next');
  NSB.addProperties(ButtonBar3);


  NSB.addProperties(LabelQuestion3);
  NSB.RadioButton_jqm_init('RadioButton32','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton32 .ui-btn').css('height','278'/RadioButton32.getItemCount()) }
    else $('#RadioButton32 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton32 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton32 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton32, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton32 .ui-btn').css('height',h/RadioButton32.getItemCount()) }
    else $('#RadioButton32 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton32 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton32,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton33','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton33 .ui-btn').css('height','278'/RadioButton33.getItemCount()) }
    else $('#RadioButton33 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton33 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton33 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton33, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton33 .ui-btn').css('height',h/RadioButton33.getItemCount()) }
    else $('#RadioButton33 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton33 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton33,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton34','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton34 .ui-btn').css('height','278'/RadioButton34.getItemCount()) }
    else $('#RadioButton34 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton34 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton34 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton34, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton34 .ui-btn').css('height',h/RadioButton34.getItemCount()) }
    else $('#RadioButton34 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton34 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton34,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton35','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton35 .ui-btn').css('height','278'/RadioButton35.getItemCount()) }
    else $('#RadioButton35 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton35 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton35 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton35, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton35 .ui-btn').css('height',h/RadioButton35.getItemCount()) }
    else $('#RadioButton35 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton35 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton35,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton36','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton36 .ui-btn').css('height','278'/RadioButton36.getItemCount()) }
    else $('#RadioButton36 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton36 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton36 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton36, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton36 .ui-btn').css('height',h/RadioButton36.getItemCount()) }
    else $('#RadioButton36 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton36 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton36,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton37','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton37 .ui-btn').css('height','278'/RadioButton37.getItemCount()) }
    else $('#RadioButton37 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton37 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton37 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton37, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton37 .ui-btn').css('height',h/RadioButton37.getItemCount()) }
    else $('#RadioButton37 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton37 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton37,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton38','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton38 .ui-btn').css('height','278'/RadioButton38.getItemCount()) }
    else $('#RadioButton38 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton38 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton38 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton38, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton38 .ui-btn').css('height',h/RadioButton38.getItemCount()) }
    else $('#RadioButton38 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton38 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton38,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton39','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton39 .ui-btn').css('height','278'/RadioButton39.getItemCount()) }
    else $('#RadioButton39 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton39 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton39 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton39, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton39 .ui-btn').css('height',h/RadioButton39.getItemCount()) }
    else $('#RadioButton39 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton39 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton39,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton310','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton310 .ui-btn').css('height','278'/RadioButton310.getItemCount()) }
    else $('#RadioButton310 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton310 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton310 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton310, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton310 .ui-btn').css('height',h/RadioButton310.getItemCount()) }
    else $('#RadioButton310 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton310 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton310,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton311','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton311 .ui-btn').css('height','278'/RadioButton311.getItemCount()) }
    else $('#RadioButton311 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton311 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton311 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton311, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton311 .ui-btn').css('height',h/RadioButton311.getItemCount()) }
    else $('#RadioButton311 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton311 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton311,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton313','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton313 .ui-btn').css('height','278'/RadioButton313.getItemCount()) }
    else $('#RadioButton313 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton313 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton313 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton313, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton313 .ui-btn').css('height',h/RadioButton313.getItemCount()) }
    else $('#RadioButton313 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton313 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton313,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton312','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton312 .ui-btn').css('height','278'/RadioButton312.getItemCount()) }
    else $('#RadioButton312 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton312 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton312 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton312, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton312 .ui-btn').css('height',h/RadioButton312.getItemCount()) }
    else $('#RadioButton312 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton312 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton312,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton314','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton314 .ui-btn').css('height','278'/RadioButton314.getItemCount()) }
    else $('#RadioButton314 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton314 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton314 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton314, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton314 .ui-btn').css('height',h/RadioButton314.getItemCount()) }
    else $('#RadioButton314 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton314 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton314,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton31','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton31 .ui-btn').css('height','278'/RadioButton31.getItemCount()) }
    else $('#RadioButton31 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton31 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton31 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton31, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton31 .ui-btn').css('height',h/RadioButton31.getItemCount()) }
    else $('#RadioButton31 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton31 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton31,undefined,true);}catch(e){console.log('error:' + e.message)}
  Form41.style.display = 'none';
}, false);
Form41.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form41);
var  Q3=createMultiDimArray('14'),A3=createMultiDimArray('14'),QNum3,MaxQ3,Score3=createMultiDimArray('14,5'), TScore3, Ans3, myCtrl3=createMultiDimArray('14'),Result3=createMultiDimArray('4');

Result3[1] =  "Your wellbeing score is very low. Most people have a score between 41 And 59. You may want to begin by talking to a friend or health professional about how you can start to address this. There are five evidence-based steps we can all take to improve our mental wellbeing. They are: Get active;Connect With others; Keep learning; Be aware of yourself And the world; Give To others";
Result3[2] =  "Your wellbeing score is below average. Most people have a score between 41 and 59. Why not take action to improve your mental wellbeing? There are five evidence-based steps we can all take to improve our mental wellbeing. They are: Get active; Connect with others; Keep learning; Be aware of yourself and the world; Give to others.";
Result3[3] =  "Your wellbeing score is average. Most people have a score between 41 and 59. You can still improve your mental wellbeing by taking action. There are five evidence-based steps we can all take to improve our mental wellbeing. They are: Get active; Connect with others; Keep learning; Be aware of yourself and the world; Give to others.";
Result3[4] =  "Good news, your wellbeing score is above average.  Most people have a score between 41 and 59. Continue doing the things that are keeping you happy. There are five evidence-based steps we can all take to improve our mental wellbeing. They are: Get active; Connect with others; Keep learning; Be aware of yourself and the world; Give to others.";

TScore3 = 0;

for   (x = 1; x  <= 14; x ++) {
  for   (y = 1; y  <= 5; y ++) {
    Score3[x][y] = y;
  }
}

QNum3 = 1;
MaxQ3 = 14;

Q3[1] = "I’ve been feeling optimistic about the future";
Q3[2] = "I’ve been feeling useful";
Q3[3] = "I've been feeling relaxed";
Q3[4] = "I’ve been feeling interested in other people";
Q3[5] = "I've had energy to spare";
Q3[6] = "I’ve been dealing with problems well";
Q3[7] = "I've been thinking clearly";
Q3[8] = "I’ve been feeling good about myself";
Q3[9] = "I’ve been feeling close to other people";
Q3[10] = "I've been feeling confident";
Q3[11] = "I’ve been able to make up my own mind about things";
Q3[12] = "I’ve been feeling loved";
Q3[13] = "I’ve been interested in new things";
Q3[14] = "I've been feeling cheerful";
ShowQ3(QNum3);

TitleBar13.onclick = function(choice31) { savethefunction_rvar="";
  if(choice31=="home") {
    Form41.style.webkitTransitionDuration="1000ms";
    Form41.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form41,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}


ButtonBar3.onbuttonclick = function(choice22) { savethefunction_rvar="";
  if(choice22=="Next") {
    QNum3 = QNum3 + 1;
    if(QNum3 > MaxQ3 ) {
      QNum3 = MaxQ3;
      TScore3 = 0;
      GetScore3();

      if(TScore3 <= 32) {
        Label6.textContent = Result3[1];
      }else if (TScore3 <=40 ) {
        Label6.textContent = Result3[2];
      }else if (TScore3 <=59 ) {
        Label6.textContent = Result3[3];
      }else if (TScore3 <=70 ) {
        Label6.textContent = Result3[4];
      }

      ProgressBar1.max = 70;
      Label5.textContent = 70;
      ProgressBar1.value = TScore3;
      Label4.textContent = "Your Score is "  +  TScore3;
      Label7.textContent = TScore3;


      Form41.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form41.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form42show,1000);

    }
    ShowQ3(QNum3);
  }
  if(choice22 == "Back") {
    QNum3 = QNum3 -1;
    if(QNum3 == 0 ) { QNum3 = 1; }
    ShowQ3(QNum3);
  }

return savethefunction_rvar; }

function ShowQ3(whatq3) { savethefunction_rvar="";
  LabelQuestion3.textContent = Q3[whatq3];
  LabelQ3.textContent = "Q "  +  whatq3  +  " of "  +  MaxQ3;
  for   (x = 1; x  <= MaxQ3; x ++) {
    myCtrl3[x] = eval("RadioButton3"  +  x);
    if(x == whatq3) {
        myCtrl3[x].Visible = True;
 } else {
        myCtrl3[x].Visible = False;
    }
  }
return savethefunction_rvar; }

function GetScore3() { savethefunction_rvar="";
  for   (x = 1; x  <= MaxQ3; x ++) {
    Ans3 = 0;
    for   (z = 1; z  <= myCtrl3[x].getItemCount(); z ++) {
      if(myCtrl3[x].getValue(z)) {
        Ans3 = z;
      }
    }
    if(Ans3 > 0 ) { TScore3 = TScore3 + Score3[x][Ans3]; }
  }
return savethefunction_rvar; }

function form42show() {
  nsbDOMAttr(Form41,'style.display',"none");
  nsbDOMAttr(Form22,'style.display',"block");
  Form22.style.webkitTransform="translateX(0px)";
}

window.addEventListener('load', function() {
  Form5.style.display = 'block';
  NSB.addProperties(Image4);
  NSB.TitleBar_init('TitleBar5','home','');
  NSB.addProperties(TitleBar5);
  NSB.addDisableProperty(Button5);
  NSB.addProperties(Button5);

  Form5.style.display = 'none';
}, false);
Form5.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form5);
TitleBar5.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form5.style.webkitTransitionDuration="1000ms";
    Form5.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form5,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}

Button5.onclick = function() { savethefunction_rvar="";
  Form5.style.webkitTransitionDuration="1000ms";
  Form5.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
 //Wait for the transition to complete half way before starting form2
  setTimeout(form51show,500);
return savethefunction_rvar; }

function form51show() {
 //hide form2 and show form1
  nsbDOMAttr(Form5,'style.display',"none");
  nsbDOMAttr(Form51,'style.display',"block");
  Form51.style.webkitTransform="translateX(0px)";
}
window.addEventListener('load', function() {
  Form51.style.display = 'block';
  NSB.TitleBar_init('TitleBar14','home','Home,Right');
  NSB.addProperties(TitleBar14);


  NSB.addProperties(LabelQ4);
  NSB.addProperties(Line1CopyCopyCopy);
  NSB.ButtonBar_init(ButtonBar4,'Back,Next');
  NSB.addProperties(ButtonBar4);


  NSB.addProperties(LabelQuestion4);
  NSB.RadioButton_jqm_init('RadioButton42','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton42 .ui-btn').css('height','278'/RadioButton42.getItemCount()) }
    else $('#RadioButton42 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton42 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton42 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton42, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton42 .ui-btn').css('height',h/RadioButton42.getItemCount()) }
    else $('#RadioButton42 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton42 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton42,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton43','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton43 .ui-btn').css('height','278'/RadioButton43.getItemCount()) }
    else $('#RadioButton43 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton43 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton43 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton43, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton43 .ui-btn').css('height',h/RadioButton43.getItemCount()) }
    else $('#RadioButton43 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton43 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton43,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton44','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton44 .ui-btn').css('height','278'/RadioButton44.getItemCount()) }
    else $('#RadioButton44 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton44 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton44 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton44, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton44 .ui-btn').css('height',h/RadioButton44.getItemCount()) }
    else $('#RadioButton44 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton44 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton44,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton45','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton45 .ui-btn').css('height','278'/RadioButton45.getItemCount()) }
    else $('#RadioButton45 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton45 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton45 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton45, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton45 .ui-btn').css('height',h/RadioButton45.getItemCount()) }
    else $('#RadioButton45 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton45 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton45,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton46','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton46 .ui-btn').css('height','278'/RadioButton46.getItemCount()) }
    else $('#RadioButton46 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton46 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton46 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton46, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton46 .ui-btn').css('height',h/RadioButton46.getItemCount()) }
    else $('#RadioButton46 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton46 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton46,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton47','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton47 .ui-btn').css('height','278'/RadioButton47.getItemCount()) }
    else $('#RadioButton47 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton47 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton47 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton47, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton47 .ui-btn').css('height',h/RadioButton47.getItemCount()) }
    else $('#RadioButton47 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton47 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton47,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton48','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton48 .ui-btn').css('height','278'/RadioButton48.getItemCount()) }
    else $('#RadioButton48 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton48 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton48 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton48, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton48 .ui-btn').css('height',h/RadioButton48.getItemCount()) }
    else $('#RadioButton48 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton48 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton48,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton49','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton49 .ui-btn').css('height','278'/RadioButton49.getItemCount()) }
    else $('#RadioButton49 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton49 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton49 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton49, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton49 .ui-btn').css('height',h/RadioButton49.getItemCount()) }
    else $('#RadioButton49 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton49 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton49,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton410','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton410 .ui-btn').css('height','278'/RadioButton410.getItemCount()) }
    else $('#RadioButton410 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton410 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton410 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton410, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton410 .ui-btn').css('height',h/RadioButton410.getItemCount()) }
    else $('#RadioButton410 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton410 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton410,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton411','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton411 .ui-btn').css('height','278'/RadioButton411.getItemCount()) }
    else $('#RadioButton411 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton411 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton411 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton411, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton411 .ui-btn').css('height',h/RadioButton411.getItemCount()) }
    else $('#RadioButton411 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton411 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton411,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton41','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton41 .ui-btn').css('height','278'/RadioButton41.getItemCount()) }
    else $('#RadioButton41 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton41 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton41 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton41, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton41 .ui-btn').css('height',h/RadioButton41.getItemCount()) }
    else $('#RadioButton41 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton41 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton41,undefined,true);}catch(e){console.log('error:' + e.message)}
  Form51.style.display = 'none';
}, false);
Form51.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form51);
var  Q4=createMultiDimArray('11'),A4=createMultiDimArray('11'),QNum4,MaxQ4,Score4=createMultiDimArray('11,5'), TScore4, Ans4, myCtrl4=createMultiDimArray('11'),Result4=createMultiDimArray('4');

Result4[1] =  "Well done, you’ve got high standards of cleanliness. Not only does your home look and feel clean and tidy, it is also hygienically clean. By doing a little cleaning everyday day and focusing on theareas most at risk of harbouring germs, you're reducing your risk of picking up a nasty infection. Keep up the good work.";
Result4[2] =  "You've got the right idea but are you doing enough to keep the germs at bay? Bacteria, viruses and fungi carry disease and only targeted hygiene will protect you from infection. That means getting rid of as many germs as possible, where and when there’s a risk of them spreading and causing infection.";
Result4[3] =  "Your heart just isn’t in it. The fight against infectious diseases such as MRSA and E. coli starts at home. You need to focus on targeting germ hotspots such as kitchen cleaning cloths to //Break the //Chain of cross-contamination, so you can reduce the risk of transmitting infections.";
Result4[4] =  "Your home could be a health hazard. You and your family may be at risk of picking up a nasty infection from bacteria, viruses or fungi that have taken up residence. You need to act quickly if you want to stay healthy.";

TScore4 = 0;

Score4[1][1] = 0;
Score4[1][2] = 1;
Score4[1][3] = 2;
Score4[1][4] = 3;

Score4[2][1] = 0;
Score4[2][2] = 2;
Score4[2][3] = 2;
Score4[2][4] = 3;

Score4[3][1] = 0;
Score4[3][2] = 2;
Score4[3][3] = 2;
Score4[3][4] = 3;

Score4[4][1] = 0;
Score4[4][2] = 1;
Score4[4][3] = 2;
Score4[4][4] = 3;

Score4[5][1] = 0;
Score4[5][2] = 0;
Score4[5][3] = 2;
Score4[5][4] = 0;

Score4[6][1] = 0;
Score4[6][2] = 1;
Score4[6][3] = 2;
Score4[6][4] = 0;

Score4[7][1] = 0;
Score4[7][2] = 1;
Score4[7][3] = 2;
Score4[7][4] = 3;

Score4[8][1] = 0;
Score4[8][2] = 1;
Score4[8][3] = 2;
Score4[8][4] = 3;

Score4[9][1] = 0;
Score4[9][2] = 1;
Score4[9][3] = 2;
Score4[9][4] = 2;

Score4[10][1] = 0;
Score4[10][2] = 2;
Score4[10][3] = 3;
Score4[10][4] = 0;

Score4[11][1] = 3;
Score4[11][2] = 2;
Score4[11][3] = 0;
Score4[11][4] = 0;


QNum4 = 1;
MaxQ4 = 11;

Q4[1] = "When do you wash your hands?";
Q4[2] = "What do you do when you sneeze?";
Q4[3] = "How do you clean your toilet?";
Q4[4] = "When you have finished cleaning the bathroom and toilet, do you:";
Q4[5] = "When you wash the dishes, do you:";
Q4[6] = "When you prepare raw meat, do you:";
Q4[7] = "How often do you launder the tea towel?";
Q4[8] = "When do you disinfect the kitchen sink sponge, brush or cloth?";
Q4[9] = "When it comes to the washing machine, do you:";
Q4[10] = "How clean is your flooring? Do you:";
Q4[11] = "How would you sum up your approach to pets?";

ShowQ4(QNum4);

TitleBar14.onclick = function(choice41) { savethefunction_rvar="";
  if(choice41=="home") {
    Form51.style.webkitTransitionDuration="1000ms";
    Form51.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form51,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}


ButtonBar4.onbuttonclick = function(choice42) { savethefunction_rvar="";
  if(choice42=="Next") {
    QNum4 = QNum4 + 1;
    if(QNum4 > MaxQ4 ) {
      QNum4 = MaxQ4;
      TScore4 = 0;
      GetScore4();

      if(TScore4 <= 5) {
        Label6.textContent = Result4[1];
      }else if (TScore4 <=10 ) {
        Label6.textContent = Result4[2];
      }else if (TScore4 <=15 ) {
        Label6.textContent = Result4[3];
      }else if (TScore4 <=30 ) {
        Label6.textContent = Result4[4];
      }

      ProgressBar1.max = 30;
      Label5.textContent = 30;
      ProgressBar1.value = TScore4;
      Label4.textContent = "Your Score is "  +  TScore4;
      Label7.textContent = TScore4;


      Form51.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form51.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form52show,1000);

    }
    ShowQ4(QNum4);
  }
  if(choice42 == "Back") {
    QNum4 = QNum4 -1;
    if(QNum4 == 0 ) { QNum4 = 1; }
    ShowQ4(QNum4);
  }

return savethefunction_rvar; }

function ShowQ4(whatq4) { savethefunction_rvar="";
  LabelQuestion4.textContent = Q4[whatq4];
  LabelQ4.textContent = "Q "  +  whatq4  +  " of "  +  MaxQ4;
  for   (x = 1; x  <= MaxQ4; x ++) {
    myCtrl4[x] = eval("RadioButton4"  +  x);
    if(x == whatq4) {
        myCtrl4[x].Visible = True;
 } else {
        myCtrl4[x].Visible = False;
    }
  }
return savethefunction_rvar; }

function GetScore4() { savethefunction_rvar="";
  for   (x = 1; x  <= MaxQ4; x ++) {
    Ans4 = 0;
    for   (z = 1; z  <= myCtrl4[x].getItemCount(); z ++) {
      if(myCtrl4[x].getValue(z)) {
        Ans4 = z;
      }
    }
    if(Ans4 > 0 ) { TScore4 = TScore4 + Score4[x][Ans4]; }
  }
return savethefunction_rvar; }

function form52show() {
  nsbDOMAttr(Form51,'style.display',"none");
  nsbDOMAttr(Form22,'style.display',"block");
  Form22.style.webkitTransform="translateX(0px)";
}

window.addEventListener('load', function() {
  Form6.style.display = 'block';
  NSB.TitleBar_init('TitleBar6','home','');
  NSB.addProperties(TitleBar6);
  NSB.addProperties(Image5);
  NSB.addDisableProperty(Button6);
  NSB.addProperties(Button6);

  Form6.style.display = 'none';
}, false);
Form6.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form6);
TitleBar6.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form6.style.webkitTransitionDuration="1000ms";
    Form6.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form6,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}

Button6.onclick = function() { savethefunction_rvar="";
  Form6.style.webkitTransitionDuration="1000ms";
  Form6.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
 //Wait for the transition to complete half way before starting form2
  setTimeout(form61show,500);
return savethefunction_rvar; }

function form61show() {
 //hide form2 and show form1
  nsbDOMAttr(Form6,'style.display',"none");
  nsbDOMAttr(Form61,'style.display',"block");
  Form61.style.webkitTransform="translateX(0px)";

}
window.addEventListener('load', function() {
  Form61.style.display = 'block';
  NSB.TitleBar_init('TitleBar15','home','Home,Right');
  NSB.addProperties(TitleBar15);


  NSB.addProperties(LabelQuestion5);


  NSB.addProperties(LabelQ5);
  NSB.addProperties(Line1CopyCopyCopyCopy);
  NSB.ButtonBar_init(ButtonBar5,'Back,Next');
  NSB.addProperties(ButtonBar5);
  NSB.RadioButton_jqm_init('RadioButton51','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton51 .ui-btn').css('height','278'/RadioButton51.getItemCount()) }
    else $('#RadioButton51 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton51 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton51 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton51, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton51 .ui-btn').css('height',h/RadioButton51.getItemCount()) }
    else $('#RadioButton51 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton51 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton51,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton52','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton52 .ui-btn').css('height','278'/RadioButton52.getItemCount()) }
    else $('#RadioButton52 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton52 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton52 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton52, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton52 .ui-btn').css('height',h/RadioButton52.getItemCount()) }
    else $('#RadioButton52 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton52 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton52,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton53','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton53 .ui-btn').css('height','278'/RadioButton53.getItemCount()) }
    else $('#RadioButton53 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton53 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton53 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton53, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton53 .ui-btn').css('height',h/RadioButton53.getItemCount()) }
    else $('#RadioButton53 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton53 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton53,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton54','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton54 .ui-btn').css('height','278'/RadioButton54.getItemCount()) }
    else $('#RadioButton54 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton54 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton54 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton54, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton54 .ui-btn').css('height',h/RadioButton54.getItemCount()) }
    else $('#RadioButton54 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton54 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton54,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton55','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton55 .ui-btn').css('height','278'/RadioButton55.getItemCount()) }
    else $('#RadioButton55 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton55 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton55 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton55, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton55 .ui-btn').css('height',h/RadioButton55.getItemCount()) }
    else $('#RadioButton55 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton55 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton55,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton56','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton56 .ui-btn').css('height','278'/RadioButton56.getItemCount()) }
    else $('#RadioButton56 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton56 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton56 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton56, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton56 .ui-btn').css('height',h/RadioButton56.getItemCount()) }
    else $('#RadioButton56 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton56 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton56,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton57','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton57 .ui-btn').css('height','278'/RadioButton57.getItemCount()) }
    else $('#RadioButton57 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton57 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton57 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton57, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton57 .ui-btn').css('height',h/RadioButton57.getItemCount()) }
    else $('#RadioButton57 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton57 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton57,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton58','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton58 .ui-btn').css('height','278'/RadioButton58.getItemCount()) }
    else $('#RadioButton58 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton58 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton58 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton58, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton58 .ui-btn').css('height',h/RadioButton58.getItemCount()) }
    else $('#RadioButton58 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton58 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton58,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton59','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton59 .ui-btn').css('height','278'/RadioButton59.getItemCount()) }
    else $('#RadioButton59 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton59 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton59 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton59, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton59 .ui-btn').css('height',h/RadioButton59.getItemCount()) }
    else $('#RadioButton59 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton59 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton59,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton510','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton510 .ui-btn').css('height','278'/RadioButton510.getItemCount()) }
    else $('#RadioButton510 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton510 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton510 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton510, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton510 .ui-btn').css('height',h/RadioButton510.getItemCount()) }
    else $('#RadioButton510 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton510 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton510,undefined,true);}catch(e){console.log('error:' + e.message)}
  Form61.style.display = 'none';
}, false);
Form61.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form61);
var  Q5=createMultiDimArray('11'),A5=createMultiDimArray('11'),QNum5,MaxQ5,Score5=createMultiDimArray('11,5'), TScore5, Ans5, myCtrl5=createMultiDimArray('11'),Result5=createMultiDimArray('4');

Result5[1] =  "Based on your answers today you're drinking in a way that is sociable and is unlikely to harm your health. As long as your drinking does remain within recommended levels, you are considered a 'lower-risk' drinker as there is only a low risk that the way you drink will contribute to future health problems.";
Result5[2] =  "Based on your answers today you are drinking at harmful levels. The NHS recommends that women should not regularly drink more than 2-3 units a day and men should not regularly drink more than 3-4. If you drink every day, it’s recommended that you have at least two alcohol-free days a week. Alcohol affects all parts and systems of the body and if you are regularly drinking above the guidelines, your risk of developing a serious illness is higher than non-drinkers. This includes cancer of the mouth, neck and throat, breast cancer in women, liver cirrhosis and high blood pressure.";
Result5[3] =  "Based on your answers today you are drinking at harmful levels and your drinking is already causing you problems. You have a much higher risk of developing alcohol-related health problems. Your body has probably suffered some damage already, even if you’re not yet aware of it.";
Result5[4] =  "Your home could be a health hazard. You and your family may be at risk of picking up a nasty infection from bacteria, viruses or fungi that have taken up residence. You need to act quickly if you want to stay healthy.";

TScore5 = 0;

Score5[1][1] = 0;
Score5[1][2] = 1;
Score5[1][3] = 2;
Score5[1][4] = 3;
Score5[1][5] = 4;

Score5[2][1] = 0;
Score5[2][2] = 1;
Score5[2][3] = 2;
Score5[2][4] = 3;
Score5[2][5] = 4;

Score5[3][1] = 0;
Score5[3][2] = 1;
Score5[3][3] = 2;
Score5[3][4] = 3;
Score5[3][5] = 4;

Score5[4][1] = 0;
Score5[4][2] = 1;
Score5[4][3] = 2;
Score5[4][4] = 3;
Score5[4][5] = 4;

Score5[5][1] = 0;
Score5[5][2] = 1;
Score5[5][3] = 2;
Score5[5][4] = 3;
Score5[5][5] = 4;

Score5[6][1] = 0;
Score5[6][2] = 1;
Score5[6][3] = 2;
Score5[6][4] = 3;
Score5[6][5] = 4;

Score5[7][1] = 0;
Score5[7][2] = 1;
Score5[7][3] = 2;
Score5[7][4] = 3;
Score5[7][5] = 4;

Score5[8][1] = 0;
Score5[8][2] = 1;
Score5[8][3] = 2;
Score5[8][4] = 3;
Score5[8][5] = 4;

Score5[9][1] = 0;
Score5[9][2] = 2;
Score5[9][3] = 4;


Score5[10][1] = 0;
Score5[10][2] = 2;
Score5[10][3] = 4;





QNum5 = 1;
MaxQ5 = 10;

Q5[1] = "In a typical month, how often do you have a drink containing alcohol?";
Q5[2] = "How many units of alcohol do you have on a typical day when you are drinking?";
Q5[3] = "How often do you have six or more units on one occasion?";
Q5[4] = "How often during the last year have you failed to do what was normally expected from you because of your drinking?";
Q5[5] = "How often during the last year have you found that you were not able to stop drinking once you had started?";
Q5[6] = "How often during the last year have you needed an alcoholic drink in the morning to get yourself going after a heavy drinking session?";
Q5[7] = "How often during the last year have you had a feeling of guilt or remorse after drinking?";
Q5[8] = "How often during the last year have you been unable to remember what happened the night before because you had been drinking?";
Q5[9] = "Have you or somebody else been injured as a result of your drinking?";
Q5[10] = "Has a relative, friend, doctor or health worker been concerned about your drinking or suggested you cut down?";

function Main() {
ShowQ5(QNum5);
}

TitleBar15.onclick = function(choice51) { savethefunction_rvar="";
  if(choice51=="home") {
    Form61.style.webkitTransitionDuration="1000ms";
    Form61.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form61,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}


ButtonBar5.onbuttonclick = function(choice52) { savethefunction_rvar="";
  if(choice52=="Next") {
    QNum5 = QNum5 + 1;
    if(QNum5 > MaxQ5 ) {
      QNum5 = MaxQ5;
      TScore5 = 0;
      GetScore5();

      if(TScore5 <= 7) {
        Label6.textContent = Result5[1];
      }else if (TScore5 <=19 ) {
        Label6.textContent = Result5[2];
      }else if (TScore5 <=40 ) {
        Label6.textContent = Result5[3];
      }else if (TScore5 <=30 ) {
        Label6.textContent = Result5[4];
      }

      ProgressBar1.max = 40;
      Label5.textContent = 40;
      ProgressBar1.value = TScore5;
      Label4.textContent = "Your Score is "  +  TScore5;
      Label7.textContent = TScore5;


      Form61.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form61.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form62show,1000);

    }
    ShowQ5(QNum5);
  }
  if(choice52 == "Back") {
    QNum5 = QNum5 -1;
    if(QNum5 == 0 ) { QNum5 = 1; }
    ShowQ5(QNum5);
  }

return savethefunction_rvar; }

function ShowQ5(whatq5) { savethefunction_rvar="";
  LabelQuestion5.textContent = Q5[whatq5];
  LabelQ5.textContent = "Q "  +  whatq5  +  " of "  +  MaxQ5;
  for   (x = 1; x  <= MaxQ5; x ++) {
    myCtrl5[x] = eval("RadioButton5"  +  x);
    if(x == whatq5) {
        myCtrl5[x].Visible = True;
 } else {
        myCtrl5[x].Visible = False;
    }
  }
return savethefunction_rvar; }

function GetScore5() { savethefunction_rvar="";
  for   (x = 1; x  <= MaxQ5; x ++) {
    Ans5 = 0;
    for   (z = 1; z  <= myCtrl5[x].getItemCount(); z ++) {
      if(myCtrl5[x].getValue(z)) {
        Ans5 = z;
      }
    }
    if(Ans5 > 0 ) { TScore5 = TScore5 + Score5[x][Ans5]; }
  }
return savethefunction_rvar; }

function form62show() {
  nsbDOMAttr(Form61,'style.display',"none");
  nsbDOMAttr(Form22,'style.display',"block");
  Form22.style.webkitTransform="translateX(0px)";
}

window.addEventListener('load', function() {
  Form7.style.display = 'block';
  NSB.TitleBar_init('TitleBar7','home','');
  NSB.addProperties(TitleBar7);
  NSB.addProperties(Image6);
  NSB.addDisableProperty(Button7);
  NSB.addProperties(Button7);

  Form7.style.display = 'none';
}, false);
Form7.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form7);
TitleBar7.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form7.style.webkitTransitionDuration="1000ms";
    Form7.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form7,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}

Button7.onclick = function() { savethefunction_rvar="";
  Form7.style.webkitTransitionDuration="1000ms";
  Form7.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
 //Wait for the transition to complete half way before starting form2
  setTimeout(form71show,500);
return savethefunction_rvar; }

function form71show() {
 //hide form2 and show form1
  nsbDOMAttr(Form7,'style.display',"none");
  nsbDOMAttr(Form71,'style.display',"block");
  Form71.style.webkitTransform="translateX(0px)";

}
window.addEventListener('load', function() {
  Form71.style.display = 'block';
  NSB.TitleBar_init('TitleBar16','home','Home,Right');
  NSB.addProperties(TitleBar16);


  NSB.addProperties(LabelQuestion6);


  NSB.addProperties(LabelQ6);
  NSB.addProperties(Line1CopyCopyCopyCopyCopy);
  NSB.ButtonBar_init(ButtonBar6,'Back,Next');
  NSB.addProperties(ButtonBar6);
  NSB.RadioButton_jqm_init('RadioButton61','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton61 .ui-btn').css('height','278'/RadioButton61.getItemCount()) }
    else $('#RadioButton61 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton61 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton61 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton61, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton61 .ui-btn').css('height',h/RadioButton61.getItemCount()) }
    else $('#RadioButton61 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton61 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton61,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton62','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton62 .ui-btn').css('height','278'/RadioButton62.getItemCount()) }
    else $('#RadioButton62 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton62 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton62 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton62, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton62 .ui-btn').css('height',h/RadioButton62.getItemCount()) }
    else $('#RadioButton62 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton62 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton62,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton63','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton63 .ui-btn').css('height','278'/RadioButton63.getItemCount()) }
    else $('#RadioButton63 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton63 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton63 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton63, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton63 .ui-btn').css('height',h/RadioButton63.getItemCount()) }
    else $('#RadioButton63 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton63 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton63,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton64','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton64 .ui-btn').css('height','278'/RadioButton64.getItemCount()) }
    else $('#RadioButton64 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton64 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton64 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton64, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton64 .ui-btn').css('height',h/RadioButton64.getItemCount()) }
    else $('#RadioButton64 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton64 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton64,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton65','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton65 .ui-btn').css('height','278'/RadioButton65.getItemCount()) }
    else $('#RadioButton65 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton65 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton65 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton65, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton65 .ui-btn').css('height',h/RadioButton65.getItemCount()) }
    else $('#RadioButton65 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton65 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton65,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton66','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton66 .ui-btn').css('height','278'/RadioButton66.getItemCount()) }
    else $('#RadioButton66 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton66 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton66 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton66, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton66 .ui-btn').css('height',h/RadioButton66.getItemCount()) }
    else $('#RadioButton66 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton66 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton66,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton67','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton67 .ui-btn').css('height','278'/RadioButton67.getItemCount()) }
    else $('#RadioButton67 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton67 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton67 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton67, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton67 .ui-btn').css('height',h/RadioButton67.getItemCount()) }
    else $('#RadioButton67 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton67 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton67,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton68','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton68 .ui-btn').css('height','278'/RadioButton68.getItemCount()) }
    else $('#RadioButton68 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton68 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton68 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton68, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton68 .ui-btn').css('height',h/RadioButton68.getItemCount()) }
    else $('#RadioButton68 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton68 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton68,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton69','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton69 .ui-btn').css('height','278'/RadioButton69.getItemCount()) }
    else $('#RadioButton69 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton69 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton69 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton69, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton69 .ui-btn').css('height',h/RadioButton69.getItemCount()) }
    else $('#RadioButton69 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton69 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton69,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton610','308');
  if (278>0) {
    if (''=='') {
      $('#RadioButton610 .ui-btn').css('height','278'/RadioButton610.getItemCount()) }
    else $('#RadioButton610 .ui-btn').css('height','278') }
  //if (308>0) $('#RadioButton610 .ui-btn').css('width','308');
  if (0>0) $('#RadioButton610 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton610, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton610 .ui-btn').css('height',h/RadioButton610.getItemCount()) }
    else $('#RadioButton610 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton610 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton610,undefined,true);}catch(e){console.log('error:' + e.message)}
  Form71.style.display = 'none';
}, false);
Form71.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form71);
var  Q6=createMultiDimArray('10'),A6=createMultiDimArray('10'),QNum6,MaxQ6,Score6=createMultiDimArray('10,5'), TScore6, Ans6, myCtrl6=createMultiDimArray('10'),Result6=createMultiDimArray('4');

Result6[1] =  "Based on your responses today you are at low risk of kidney disease and don't require any further tests.";
Result6[2] =  "Based on your responses today, if you have not had your kidney function checked before, you should ask your GP about having a kidney function test next time you have an appointment.";
Result6[3] =  "Based on your responses today if you have not had your kidney function checked before, you should make an appointment with your GP for a simple blood and urine test as soon as it can be arranged.";

TScore6 = 0;

Score6[1][1] = 2;
Score6[1][2] = 0;
Score6[1][3] = 0;
Score6[1][4] = 0;
Score6[1][5] = 0;

Score6[2][1] = 2;
Score6[2][2] = 2;
Score6[2][3] = 0;
Score6[2][4] = 0;
Score6[2][5] = 0;

Score6[3][1] = 2;
Score6[3][2] = 2;
Score6[3][3] = 2;
Score6[3][4] = 2;
Score6[3][5] = 0;

Score6[4][1] = 2;
Score6[4][2] = 2;
Score6[4][3] = 2;
Score6[4][4] = 0;
Score6[4][5] = 0;

Score6[5][1] = 2;
Score6[5][2] = 2;
Score6[5][3] = 2;
Score6[5][4] = 0;
Score6[5][5] = 0;

Score6[6][1] = 2;
Score6[6][2] = 2;
Score6[6][3] = 2;
Score6[6][4] = 0;
Score6[6][5] = 0;

Score6[7][1] = 2;
Score6[7][2] = 2;
Score6[7][3] = 2;
Score6[7][4] = 2;
Score6[7][5] = 0;

Score6[8][1] = 2;
Score6[8][2] = 2;
Score6[8][3] = 2;
Score6[8][4] = 0;
Score6[8][5] = 0;

Score6[9][1] = 2;
Score6[9][2] = 0;
Score6[9][3] = 0;


Score6[10][1] = 2;
Score6[10][2] = 2;
Score6[10][3] = 2;
Score6[10][4] = 2;
Score6[10][5] = 0;





QNum6 = 1;
MaxQ6 = 10;

Q6[1] = "Do you have diabetes?";
Q6[2] = "Do you have, or have you been treated for, high blood pressure?";
Q6[3] = "Have you had any of the following circulation problems?";
Q6[5] = "Have you had any of the following? ";
Q6[7] = "Have you been diagnosed with any of the following? ";
Q6[8] = "Do you have a family history of kidney disease? ";
Q6[9] = "Have you ever had a urine test that was positive for blood or protein?";
Q6[10] = "Are you taking any of the following medications? ";
Q6[4] = "Have you had any of the following circulation problems?";
Q6[6] = "Have you had any of the following?";

function Main() {
ShowQ6(QNum6);
}

TitleBar16.onclick = function(choice61) { savethefunction_rvar="";
  if(choice61=="home") {
    Form71.style.webkitTransitionDuration="1000ms";
    Form71.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form71,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}


ButtonBar6.onbuttonclick = function(choice62) { savethefunction_rvar="";
  if(choice62=="Next") {
    QNum6 = QNum6 + 1;
    if(QNum6 > MaxQ6 ) {
      QNum6 = MaxQ6;
      TScore6 = 0;
      GetScore6();

      if(TScore6 <= 1) {
        Label6.textContent = Result6[1];
      }else if (TScore6 <=12 ) {
        Label6.textContent = Result6[2];
      }else if (TScore6 <=20 ) {
        Label6.textContent = Result6[3];
      }else if (TScore6 <=30 ) {
        Label6.textContent = Result6[4];
      }

      ProgressBar1.max = 20;
      Label5.textContent = 20;
      ProgressBar1.value = TScore6;
      Label4.textContent = "Your Score is "  +  TScore6;
      Label7.textContent = TScore6;


      Form71.style.webkitTransitionDuration="1000ms"; //take 1 second to do this.
      Form71.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
      setTimeout(form72show,1000);

    }
    ShowQ6(QNum6);
  }
  if(choice62 == "Back") {
    QNum6 = QNum6 -1;
    if(QNum6 == 0 ) { QNum6 = 1; }
    ShowQ6(QNum6);
  }

return savethefunction_rvar; }

function ShowQ6(whatq6) { savethefunction_rvar="";
  LabelQuestion6.textContent = Q6[whatq6];
  LabelQ6.textContent = "Q "  +  whatq6  +  " of "  +  MaxQ6;
  for   (x = 1; x  <= MaxQ6; x ++) {
    myCtrl6[x] = eval("RadioButton6"  +  x);
    if(x == whatq6) {
        myCtrl6[x].Visible = True;
 } else {
        myCtrl6[x].Visible = False;
    }
  }
return savethefunction_rvar; }

function GetScore6() { savethefunction_rvar="";
  for   (x = 1; x  <= MaxQ6; x ++) {
    Ans6 = 0;
    for   (z = 1; z  <= myCtrl6[x].getItemCount(); z ++) {
      if(myCtrl6[x].getValue(z)) {
        Ans6 = z;
      }
    }
    if(Ans6 > 0 ) { TScore6 = TScore6 + Score6[x][Ans6]; }
  }
return savethefunction_rvar; }

function form72show() {
  nsbDOMAttr(Form71,'style.display',"none");
  nsbDOMAttr(Form22,'style.display',"block");
  Form22.style.webkitTransform="translateX(0px)";
}

window.addEventListener('load', function() {
  Form8.style.display = 'block';
  NSB.TitleBar_init('TitleBar8','home','');
  NSB.addProperties(TitleBar8);
  NSB.addProperties(Image7);
  NSB.addDisableProperty(Button8);
  NSB.addProperties(Button8);

  Form8.style.display = 'none';
}, false);
Form8.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form8);
TitleBar8.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form8.style.webkitTransitionDuration="1000ms";
    Form8.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form8,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}
Image7.ontouchstart = function() { savethefunction_rvar="";

return savethefunction_rvar; }

window.addEventListener('load', function() {
  Form9.style.display = 'block';
  NSB.addProperties(Image8);
  NSB.TitleBar_init('TitleBar9','home','');
  NSB.addProperties(TitleBar9);
  NSB.addDisableProperty(Button9);
  NSB.addProperties(Button9);

  Form9.style.display = 'none';
}, false);
Form9.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form9);
TitleBar9.onclick = function(choice) { savethefunction_rvar="";
  if(choice=="home") {
    Form9.style.webkitTransitionDuration="1000ms";
    Form9.style.webkitTransform="translateX("  +  SysInfo(0)  +  "px)";
 //Wait for the transition to complete half way before starting form2
     setTimeout(form1show,500);
   }
return savethefunction_rvar; }


function form1show() {
 //hide form2 and show form1
  nsbDOMAttr(Form9,'style.display',"none");
  nsbDOMAttr(Form1,'style.display',"block");
  Form1.style.webkitTransform="translateX(0px)";
}

window.addEventListener('load', function() {
  Form1.style.display = 'block';
  Main();
  if (typeof(Form1.onshow)=='function') Form1.onshow();
  
}, false);

var NSBCurrentForm = Form1;


