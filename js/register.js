angular.module('app',[])
.controller('regiCtrl', function($scope,$http){
	$scope.user={"name":"nian","account":"1272153207@qq.com","password":"msds3243543","face":"img/face.png"};
	$scope.register=function(){
		console.log($scope.user);
		// $http({
		// 	method:'POST',
		// 	url:'php/register.php',
		// 	data: {
		// 		name:$scope.user.name,
		// 		account:$scope.user.account,
		// 		password:$scope.user.password
		// 	},
		// 	headers:{'Content-Type':'application/x-www-form-urlencoded'},
		// 	transformRequest:function(obj){
		// 		var str = [];    
  //               for (var p in obj) {    
  //                   str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));    
  //               }    
  //               return str.join("&"); 
		// 	}
		// }).then(function doneCallbacks(msg){
		// 	console.log('成功'+msg.data);
		// }, function failCallbacks(msg){
		// 	console.log('失败'+msg.data);
		// });
	};
	$scope.uploadFace=function(file){
		
	}
})