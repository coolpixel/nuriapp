'use strict';

angular.module('nuriappApp')
  .controller('KeymapCtrl', function ($scope, $http, $timeout, uiGridConstants) {
    $scope.keymap_key="";
    $scope.keymap_oldkey="";
    $scope.keymap_nama="";
    $scope.alerttext = "";


    $scope.simpanKeymap = function() {

    	$http.post('/api/keymaps', {keymap: $scope.keymap_key, oldkey: $scope.keymap_oldkey, nama: $scope.keymap_nama})
    		.success(function(data) {
		    	$scope.alerttext = "Keymap Berhasil disimpan.";

			 	$timeout(function (){
					$scope.alerttext="";
				}, 3000);
    		})
    		.error(function(data) {
		    	$scope.alerttext = data;

			 	$timeout(function (){
					$scope.alerttext="";
				}, 10000);    			
    		});


    };

    // grid
	$scope.gridOptions = { 
	    enableFiltering: true,
    	enablePaginationControls: true,
    	paginationPageSize: 25,
	};

  	$scope.gridOptions.columnDefs = [
	    {name:'#', field: '_id'},
	    {	name:'Keymap', 
	    	field: 'keymap',         
	    	filter: {
          		condition: uiGridConstants.filter.STARTS_WITH,
          		placeholder: 'start with'
        	}
    	},
	    {name: 'Oldkey', field:'oldkey'}, // showing backwards compatibility with 2.x.  you can use field in place of name
	    {name: 'Nama', field:'nama'}, // showing backwards compatibility with 2.x.  you can use field in place of name
  	];
 
	$http.get('/api/keymaps/')
		.success(function(data) {
	    	$scope.gridOptions.data = data;
		}
	);    
  });
