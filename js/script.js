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
            "<button id='formButton' class='btn btn-primary' type='submit'>Valider</button></div>");
            nextDivId++;                           
            initClick();  
      	}
      	if (draginItem == "boxSelect"){
      		$(this).append("<div id='divDropForm"+nextDivId+"' class ='dropForm'><div id='idTest"+nextDivId+"' class='divCrossForm'>"+
            "<i class='fa fa-times' aria-hidden='true'></i></div>"+
            "<input type='text' class='dropTitle' placeholder='Insérer votre question ici'>"+
            "<div class='option' id='divOptions"+nextDivId+"'><input type='text' class='answer' placeholder='Option'>"+
            "<button id='buttonAdd"+nextDivId+"' class='buttonAdd btn btn-success' type='submit'>Add option</button></div> "+
            "<button id='formButton' class='btn btn-primary' type='submit'>Valider</button></div>");
            nextDivId++;
            initClick();	
      	}
      	if (draginItem == "boxCheck"){
      		$(this).append("<div id='divDropForm"+nextDivId+"' class ='dropForm'><div id='idTest"+nextDivId+"' class='divCrossForm'>"+
            "<i class='fa fa-times' aria-hidden='true'></i></div>"+
            "<input type='text' class='dropTitle' placeholder='Insérer votre question ici'>"+
            "<div class='option' id='divOptions"+nextDivId+"'><input type='text' class='answer' placeholder='Option'>"+
            "<button id='buttonAdd"+nextDivId+"' class='buttonAdd btn btn-success' type='submit'>Add option</button></div> "+
            "<button id='formButton' class='btn btn-primary' type='submit'>Valider</button></div>");
            nextDivId++;
            initClick();	
      	}
      	if (draginItem == "boxInfo"){
      		$(this).append("<div id='divInfo'><h2>Informations personnelles</h2><div id='idTest"+nextDivId+"' class='divCrossForm'>"+
            "<i class='fa fa-times' aria-hidden='true'></i></div>"+
            "<input type='text' placeholder='Nom'>"+
            "<input type='text' placeholder='Prénom'>"+
            "<input type='email' placeholder='Email'>"+
            "<button id='formButton' class='btn btn-primary' type='submit'>Valider</button></div>");
            nextDivId++;
            initClick();	
      	}
      	draginItem = "";
      }
    });
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
  $('#formButton').off().click(validateThisQuestion);
}

var html=[];
var q=0;
function validateThisQuestion(){
  var maQuestion=[];
  $(this).parent().find("input").each(function( index ) {
    maQuestion.push($( this ).val());
    q++;
  });  
  monHtml = "<h2>"+maQuestion[0]+"</h2>";
  for (i = 1 ; i < q ; i++){
    monHtml += "<label><input type ='radio' name='"+maQuestion[0]+"' value='"+maQuestion[i]+"'>"+maQuestion[i]+"</label><br>";
  }
  console.log(monHtml);
  $(this).parent().append(monHtml);
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
