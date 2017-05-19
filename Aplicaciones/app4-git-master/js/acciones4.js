// JavaScript Document

 $(document).ready(function (e){
	 document.addEventListener("deviceready",function(){
		 $('#disp table td').eq(3).text(device.model);
		 $('#disp table td').eq(5).text(device.cordova);
		 $('#disp table td').eq(7).text(device.platform);
		 $('#disp table td').eq(9).text(device.version);
		 $('#disp table td').eq(11).text(device.uuid);
	  document.addEventListener("pause",function(){
		  escribehistoria ('La App se Pausó');
	  },false);//pause
	  document.addEventListener("resume",function(){
		  escribehistoria ('La App se Reinicio');
	  },false);//resume
	  document.addEventListener("online",function(){
		  escribehistoria ('La App se conecto a la Red');
	  },false);//se conecto
	  document.addEventListener("offline",function(){
		  escribehistoria ('La App se desconecto a la Red');
	  },false);//se desconecto
	  
	 },false);//ready device
	 
 });//document
 
 function escribehistoria(accion){
	 $('#eHistoria').append('<li>'+accion+'</li>');
 }
