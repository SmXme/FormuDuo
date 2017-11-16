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
      		$(this).append("<input type='radio'>");
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