var draginItem;

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
      		$(this).append("<div class ='dropForm'><div id='idTest' class='divCrossForm'>"+
            "<i class='fa fa-times' aria-hidden='true'></i></div>"+
            "<input type='text' id='dropTitle' placeholder='Insérer votre question ici'><input type='radio'>"+
            "<input type='text' class='answer' placeholder='Option'><i id='iconAdd' class='fa fa-plus-square' aria-hidden='true'></i>"+
            "<i id='iconDelete' class='fa fa-minus-square' aria-hidden='true'></i>"+
            "<button id='formButton' class='btn btn-primary' type='submit'>Valider</button></div>");                           
          initClick();  
      	}
      	if (draginItem == "boxSelect"){
      		$(this).append("<select></select>");	
      	}
      	if (draginItem == "boxCheck"){
      		$(this).append("<input type='checkbox'>");	
      	}
      	if (draginItem == "boxInfo"){
      		$(this).append("<input type='text' placeholder='Nom' /><input type='text' placeholder='Prénom' />");	
      	}
      	draginItem = "";
      }
    });
});

function initClick(){
  $('.divCrossForm').click(function(){
    $(this).parent().remove();
  });
}
