// ife
(function () {
	'use strict'
	
	angular
	.module('chat')
	.factory('chatData', chatData);

	// cargar el recurso externo
	function chatData($firebaseArray) {
		
		var link = new Firebase('https://chat-ef139.firebaseio.com/message');
		return $firebaseArray(link);

	}

})();