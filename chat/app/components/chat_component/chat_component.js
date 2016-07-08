(function () {
	'use strict'

	// variable a la que se le asigna el valor del componente
	var chat = {
		//mandar data desde la view
		
		controller:chatCtrl,
		templateUrl:"app/components/chat_component/chat_component.html"
	}

	// se inyecta la factory en la funcion
	function chatCtrl(chatData) {
		var chat = this;
		chat.messages = chatData;

		chat.addMessage = addMessage;

		function addMessage() {
			chat.messages.$add({
				user:chat.user,
				message:chat.message
			})

			chat.message = "";
			chat.user = "";
		}

	}

	angular
	//se  inyecta el modulo de las rutas ng routes
	.module('chat')
	//declaras tu componente  nombre, variable ( valor)
	.component('chat',chat)
	


})();