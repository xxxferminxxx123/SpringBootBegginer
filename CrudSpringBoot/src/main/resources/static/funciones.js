function eliminar(id){
	swal({
  title: "Estas seguro de eliminar?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((OK) => {
  if (OK) {
	  $.ajax({
		  url:"/eliminar/"+id,
		 	succes:function(res){
			  console.log(res);
	  	}
	  });
	  
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    }).then ((OK)=>{
		if(OK){
			location.href="/listar";
		}
	}); 
  } else {
    swal("Your imaginary file is safe!");
  }
});
}
