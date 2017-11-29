$(document).ready(function(){
    $('#respond').show();
    $('#commentbox').hide();

    $('#submit').click(function(){
			$("#commentbox").append(document.getElementById('comment').value +"&nbsp;"+
   													  document.getElementById('name').value +"&nbsp;"+ 
   													  document.getElementById('email').value); +"&nbsp;"+
   			$('#commentbox').show();
     });
});

    
