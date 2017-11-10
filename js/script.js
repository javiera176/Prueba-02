		$(document).ready(function(){
			$("#myForm").on('submit', function(event){
				var text = $('#myText').val(); 
				event.preventDefault();
				$("#lista").prepend(

					'<tr><td>'
					+ text
					+ '</td><td>'  
					 +' <a href="#" title="Me Gusta" class="me-gusta"><span class="glyphicon glyphicon-heart like-it"> 0 </span></a> '
					+ '</td>'
					+ ' <td><button type="button" class="close eliminar" aria-label="Close" title="Eliminar Tweet"><span aria-hidden="true">&times;</span></button></td>'
					+'</tr>' 
				)


				$('#myText').val('');
				$('#myText').focus();	 

			});

		});


	$('.colderecha').on('click', '.like-it', function(){
		$(this).addClass('likeable');
		$(this).css('color', 'red'); 
	});

 	$('.colderecha').on('click', '.like-it', function(){
		var count = parseInt($(this).text())+1;
        $(this).html('<span>'+' '+count+'</span>');  

	});	


 	$('#lista').on('click','.eliminar', function(event){
    event.stopPropagation();
    $(this).parent().parent().fadeOut(800);
  	});


