
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
if (navigator.userAgent.indexOf('iPad') !== -1) {
  var splashscreen = document.createElement('link');
  splashscreen.rel = 'apple-touch-startup-image';
  splashscreen.href = 'Assessment/SplashScreen.jpg';
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
  if (false) {
    PictureBox1_ref = new iScroll('PictureBox1_scroller',{bounce:false, zoom:true});
    PictureBox1.refresh=function(){setTimeout(PictureBox1_ref.refresh(),100)};
    NSB.addProperties(PictureBox1,PictureBox1_scroller)}
  else NSB.addProperties(PictureBox1);
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
pb = PictureBox1.getContext("2d");
myImage=new Image();

function Main() {
  myImage.src="C:\\Android\\Assessment\\images\\healthyeating.png";
}


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
      myImage.src="C:\\Android\\Assessment\\images\\healthyeating.png";
      pb.drawImage(myImage,0,0);
      whatform = "1";
	break;
    case ((Select1.selectedItem()) == "Depression"):
      TextArea1.value = Intro[2];
      myImage.src="C:\\Android\\Assessment\\images\\depression.png";
      pb.drawImage(myImage,0,0);
      whatform = "2";
	break;
    case ((Select1.selectedItem()) == "Wellbeing"):
      TextArea1.value = Intro[3];
      myImage.src="C:\\Android\\Assessment\\images\\wellbeing.png";
      pb.drawImage(myImage,0,0);
      whatform = "3";
	break;
    case ((Select1.selectedItem()) == "Home Hygiene"):
      TextArea1.value = Intro[4];
      myImage.src="C:\\Android\\Assessment\\images\\hygiene.png";
      pb.drawImage(myImage,0,0);
      whatform = "4";
	break;
    case ((Select1.selectedItem()) == "Drinking"):
      TextArea1.value = Intro[5];
      myImage.src="C:\\Android\\Assessment\\images\\drinking.png";
      pb.drawImage(myImage,0,0);
      whatform = "5";
	break;
    case ((Select1.selectedItem()) == "Kidney"):
      TextArea1.value = Intro[6];
      myImage.src="C:\\Android\\Assessment\\images\\kidney.png";
      pb.drawImage(myImage,0,0);
      whatform = "6";
	break;
    case ((Select1.selectedItem()) == "Bladder"):
      TextArea1.value = Intro[7];
      myImage.src="C:\\Android\\Assessment\\images\\bladder.png";
      pb.drawImage(myImage,0,0);
      whatform = "7";
	break;
    case ((Select1.selectedItem()) == "Asthma"):
      TextArea1.value = Intro[8];
      myImage.src="C:\\Android\\Assessment\\images\\asthma.png";
      pb.drawImage(myImage,0,0);
      whatform = "8";
    }
return savethefunction_rvar; }

myImage.onload = function() { savethefunction_rvar="";
  pb.drawImage(myImage,0,0);
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
Score1[1][2] = 1;
Score1[1][3] = 1;
Score1[1][4] = 1;
Score1[1][5] = 1;
Score1[1][6] = 3;

Score1[2][1] = 0;
Score1[2][2] = 0;
Score1[2][3] = 0;
Score1[2][4] = 3;

Score1[3][1] = 0;
Score1[3][2] = 0;
Score1[3][3] = 0;
Score1[3][4] = 0;
Score1[3][5] = 3;

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
Q1[2] = "On average, which of the following coffee shop drinks contains the most calories?";
Q1[3] = "On average, which of the following is the most calorific?";
Q1[4] = "Which of the following does not count as one of your 5 A DAY? ";
Q1[5] = "On average, which of the following supermarket sandwich options is highest in calories?";
Q1[6] = "How many litres of fluids should you drink each day?";
Q1[7] = "On average, which of the following takeaway options is lowest in calories?";
Q1[8] = "On average, which of the following shop-bought drinks is healthiest?";
Q1[9] = "How much of our diet should be made up of starchy foods (carbohydrates) such as rice, potatoes, pasta and bread?";
Q1[10] = "How much red meat (beef, lamb, pork) should a non-vegetarian eat each day?";
Q1[11] = "How many times a week should a non-vegetarian eat fish (as a minimum)?";
Q1[12] = "If you have a vegetarian diet, what in particular should you eat to ensure a balanced diet?";
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


