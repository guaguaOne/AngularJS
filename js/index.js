	//获取所有漫画
	angular.module('app',['ngRoute'])
	.config(['$routeProvider',function($route){
		$route
		.when('/',{
				templateUrl:'comic.html',
				controller:function($scope,$http){
					// $http({
					// 	method:'POST',
					// 	url:'php/comic.php',
					// 	data: {
					// 		page:1
					// 	},
					// 	headers:{'Content-Type':'application/x-www-form-urlencoded'},
					// 	transformRequest:function(obj){
					// 		var str = [];    
			  //               for (var p in obj) {    
			  //                   str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));    
			  //               }    
			  //               return str.join("&"); 
					// 	}
					// }).then(function successCallback(msg){
					// 	// console.log(msg.data.showapi_res_body.pagebean.contentlist);
					// 	$scope.names=msg.data.showapi_res_body.pagebean.contentlist;	
					// 	var page=2;
					// 	$(document).scroll(function(event) {
					// 		var windowH = $(window).height();
					// 		var scrollT = $(this).scrollTop();
					// 		var documentH = $(document).height();
					// 		if(scrollT+windowH>=documentH){
					// 			// console.log('deadline');
					// 			$.ajax({
					// 				type:'post',
					// 				url:'php/comic.php',
					// 				data:{
					// 					page:page
					// 				},
					// 				dataType:"json",
					// 				success:function(msg){
					// 					console.log(msg);
					// 					var $tag=msg.showapi_res_body.pagebean.contentlist;
					// 					var len=$tag.length;
					// 					for(var i=0;i<len;i++){
					// 						var id="'"+$tag[i].id+"'";
					// 						// console.log(id);
					// 						var title=$tag[i].title;
					// 						var face=$tag[i].thumbnailList[0];
					// 						var div=$('<div class="col-xs-6 ng-scope"  ng-repeat="x in names">'+
					// 							'<div class="box" ng-click="getDetial('+id+')">'+
					// 							'<img src="'+face+'" alt="">'+
					// 						'</div><p class="ng-binding">'+title+'</p></div>');
					// 						$("#content .row").append(div);
					// 					}
					// 					page++;
					// 				}
					// 			})
					// 		}else{
					// 			// console.log("未到deadline");
					// 			return false;
					// 		}
					// 	});
					// },function errorCallback(msg){
					// 	console.log("error"+msg);
					// })
				}
			}
		)
		.when('/music',{templateUrl:'music.html'})
		.when('/comicDetial',{templateUrl:'comic_detial.html'})
		.otherwise({redirectTo:'/'});
	}])
	.controller('comicCtrl', function($scope,$http){
		$scope.getDetial=function($id){
//			console.log("id="+$id);
			$http({
				method:'POST',
				url:'php/comic_detial.php',
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
				var len=$scope.detials.length;
				if(len>1){
					location.href="#/comicDetial";
				}
			}, function errorCallback(msg){
				console.log("error"+msg);
			})
		};
	})

	