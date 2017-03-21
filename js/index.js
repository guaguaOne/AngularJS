//document.addEventListener('plusready', function(){
//	console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
	//获取所有漫画
	angular.module('app',['ngRoute'])
	.config(['$routeProvider',function($route){
		$route
		.when('/',{
				templateUrl:'comic.html',
				controller:function($scope,$http){
					$http({
						method:'POST',
						url:'http://192.168.1.122/anjular.js/Demo7/php/comic.php'
					}).then(function successCallback(msg){
						// console.log(msg.data.showapi_res_body.pagebean.contentlist);
						$scope.names=msg.data.showapi_res_body.pagebean.contentlist;	
					},function errorCallback(msg){
						console.log("error"+msg);
					})
				}
			}
		)
		.when('/music',{templateUrl:'music.html'})
		.when('/comicDetial',{templateUrl:'comic_detial.html'})
		.otherwise({redirectTo:'/comic'});
	}])
	.controller('comicCtrl', function($scope,$http){
		$scope.getDetial=function($id){
//			console.log("id="+$id);
			$http({
				method:'POST',
				url:'http://192.168.1.122/anjular.js/Demo7/php/comic_detial.php',
				data: {
					id:$id
				},
				headers:{'Content-Type':'application/x-www-form-urlencoded'},
				transformRequest:function(obj){
					var str = [];    
	                for (var p in obj) {    
	                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));    
	                }    
	                return str.join("&"); 
				}
			}).then(function successCallback(msg){
//				console.log(msg.data.showapi_res_body.item.imgList);
				$scope.detials=msg.data.showapi_res_body.item.imgList;
			}, function errorCallback(msg){
				console.log("error"+msg);
			})
			location.href="http://192.168.1.122/anjular.js/Demo7/#/comicDetial";
		}
	});
	
//});