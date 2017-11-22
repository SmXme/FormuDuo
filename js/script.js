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
      	if (draginItem == "boxRadio"){
      		$(this).append("<div class ='dropForm'><div id='idTest"+nextDivId+"' class='divCrossForm'>"+
            "<i class='fa fa-times' aria-hidden='true'></i></div>"+
            "<input type='text' id='dropTitle"+nextDivId+"' class='dropTitle' placeholder='Insérer votre question ici'>"+
            "<div class='option' id='divOptions"+nextDivId+"'><input type='text' class='answer' placeholder='Option'><i id='iconAdd' class='fa fa-plus-square' aria-hidden='true'></i>"+
            "<i id='iconDelete' class='fa fa-minus-square' aria-hidden='true'></i> </div>"+
            "<button id='formButton' class='btn btn-primary' onclick='gererRadio();' type='submit'>Valider</button></div>");
            nextDivId++;                           
          initClick();  
      	}
      	if (draginItem == "boxSelect"){
      		$(this).append("<select></select>");	
      	}
      	if (draginItem == "boxCheck"){
      		$(this).append("<div id='divDropForm"+nextDivId+"' class ='dropForm'><div id='idTest"+nextDivId+"' class='divCrossForm'>"+
            "<i class='fa fa-times' aria-hidden='true'></i></div>"+
            "<input type='text' class='dropTitle' placeholder='Insérer votre question ici'>"+
            "<div class='option' id='divOptions"+nextDivId+"'><input type='text' class='answer' placeholder='Option'><i id='iconAdd' class='fa fa-plus-square' aria-hidden='true'></i>"+
            "<i id='iconDelete' class='fa fa-minus-square' aria-hidden='true'></i></div> "+
            "<button id='formButton' class='btn btn-primary' type='submit'>Valider</button></div>");
            nextDivId++;	
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
  });
  $('#iconAdd').click(addOption);
}

function addOption(){
  $(this).parent().append("<br><input type='text' class='answer' placeholder='Option'><i id='iconAdd' class='fa fa-plus-square' aria-hidden='true'></i>"+
            "<i id='iconDelete' class='fa fa-minus-square' aria-hidden='true'></i>");
}