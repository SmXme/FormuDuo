var draginItem;
var nextDivId = 1;

$( function() {
    $( ".draggable" ).draggable({
     	helper: "clone",
 	 	containment: "window",
 	 	drag: function(){
 	 		draginItem = this.id;
 	 	},
 	 	classes: {
    		"ui-draggable-dragging": "styleClone"
  		}
	});

	$( ".draggable" ).draggable({
     	helper: "clone",
 	 	containment: "window",
 	 	classes: {
    		"ui-draggable-dragging": "styleClone"
  		}
	});
    $( "#formu" ).droppable({
      drop: function( event, ui ) {
        $('#dragHere').hide();
      	if (draginItem == "boxRadio"){
      		$(this).append("<div class ='dropForm'><div id='idTest"+nextDivId+"' class='divCrossForm'>"+
            "<i class='fa fa-times' aria-hidden='true'></i></div>"+
            "<input type='text' id='dropTitle"+nextDivId+"' class='dropTitle' placeholder='Insérer votre question ici'>"+
            "<div class='option' id='divOptions"+nextDivId+"'><input type='text' class='answer' placeholder='Option'>"+
            "<button id='buttonAdd"+nextDivId+"' class='buttonAdd btn btn-success' type='submit'>Add option</button></div>"+
            "<button id='formButtonRadio' class='formButton btn btn-primary' type='submit'>Valider</button></div>");
            nextDivId++;                           
            initClick();  
      	}
      	if (draginItem == "boxSelect"){
      		$(this).append("<div class ='dropForm'><div id='idTest"+nextDivId+"' class='divCrossForm'>"+
            "<i class='fa fa-times' aria-hidden='true'></i></div>"+
            "<input type='text' id='dropTitle"+nextDivId+"' class='dropTitle' placeholder='Insérer votre question ici'>"+
            "<div class='option' id='divOptions"+nextDivId+"'><input type='text' class='answer' placeholder='Option'>"+
            "<button id='buttonAdd"+nextDivId+"' class='buttonAdd btn btn-success' type='submit'>Add option</button></div>"+
            "<button id='formButtonSelect' class='formButton btn btn-primary' type='submit'>Valider</button></div>");
            nextDivId++;
            initClick();	
      	}
      	if (draginItem == "boxCheck"){
      		$(this).append("<div class ='dropForm'><div id='idTest"+nextDivId+"' class='divCrossForm'>"+
            "<i class='fa fa-times' aria-hidden='true'></i></div>"+
            "<input type='text' id='dropTitle"+nextDivId+"' class='dropTitle' placeholder='Insérer votre question ici'>"+
            "<div class='option' id='divOptions"+nextDivId+"'><input type='text' class='answer' placeholder='Option'>"+
            "<button id='buttonAdd"+nextDivId+"' class='buttonAdd btn btn-success' type='submit'>Add option</button></div>"+
            "<button id='formButtonCheckbox' class='formButton btn btn-primary' type='submit'>Valider</button></div>");
            nextDivId++;
            initClick();	
      	}
      	if (draginItem == "boxInfo"){
      		$(this).append("<div id='divInfo'><h2>Informations personnelles</h2><div id='idTest"+nextDivId+"' class='divCrossForm'>"+
            "<i class='fa fa-times' aria-hidden='true'></i></div>"+
            "<input type='text' placeholder='Nom'>"+
            "<input type='text' placeholder='Prénom'>"+
            "<input type='email' placeholder='Email'>"+
            "<button id='formButtonInfo' class='formButton btn btn-primary' type='submit'>Valider</button></div>");
            nextDivId++;
            initClick();	
      	}
      	draginItem = "";
      }
    });

    $("#debugcookieHTML").off().click(generateTheCookie);
});

function initClick(){
  $('.divCrossForm').click(function(){
    $(this).parent().remove(); 
      if ($('#formu > .dropForm').length == 0){
        $('#dragHere').show();
      }
  });

  $('.buttonAdd').off().click(addOption); 
  $('.iconDelete').click(removeOption);
  $('#formButtonRadio').off().click(validateRadioQuestion);
  $('#formButtonSelect').off().click(validateSelectQuestion);
  $('#formButtonCheckbox').off().click(validateCheckboxQuestion);
  
}

var allHtml=[];

function generateTheCookie(){
  var monCookie="";
  monCookie += "<h1 class='text-center'>"+$('#titleFormu').val()+"</h1>";
  monCookie += allHtml;
  document.cookie=monCookie;
}

function validateRadioQuestion(){
  var q=0;
  var maQuestion=[];
  $(this).parent().find("input").each(function( index ) {
    maQuestion.push($( this ).val());
    q++;
  });  
  monHtml = "<div class='radioResult'><h2>"+maQuestion[0]+"</h2>";
  for (i = 1 ; i < q ; i++){
    monHtml += "<label class='radioLabel'><input class='inputRadio' type ='radio' name='"+maQuestion[0]+"' value='"+maQuestion[i]+"'>"+maQuestion[i]+"</label>";
  }
  monHtml += "</div>";
  allHtml.push(monHtml);
}

function validateSelectQuestion(){
  var q=0;
  var maQuestion=[];
  $(this).parent().find("input").each(function( index ) {
    maQuestion.push($( this ).val());
    q++;
  });  
  monHtml = "<div class='selectResult'><h2>"+maQuestion[0]+"</h2>";
  monHtml += "<select class='selectOptions'>";
  for (i = 1 ; i < q ; i++){
    if (i==1) monHtml += "<option class='selectOption' value='"+maQuestion[i]+"' selected>"+maQuestion[i]+"</option>"; // Attention à la classe que j'ai mis, ne pas confondre avec la class du select
    else monHtml += "<option class='selectOption' value='"+maQuestion[i]+"'>"+maQuestion[i]+"</option>";
  }
  monHtml += "</select></div>";
  allHtml.push(monHtml);
}

function validateCheckboxQuestion(){
  var q=0;
  var maQuestion=[];
  $(this).parent().find("input").each(function( index ) {
    maQuestion.push($( this ).val());
    q++;
  });  
  monHtml = "<div class='checkboxResult'><h2>"+maQuestion[0]+"</h2>";
  for (i = 1 ; i < q ; i++){
    monHtml += "<label class='checkboxLabel'><input class='inputCheckbox' type ='checkbox' name='"+maQuestion[0]+"' value='"+maQuestion[i]+"'>"+maQuestion[i]+"</label><br>";
  }
  monHtml += "</div>"
  allHtml.push(monHtml);
}

function addOption(){
  $(this).parent().append("<div class='divOption'><input type='text' class='answer' placeholder='Option'>"+
            "<i class='fa fa-minus-square iconDelete' aria-hidden='true'></i></div>");
  initClick();
}
function removeOption(){
  $(this).parent().remove();
  initClick();
}
  
