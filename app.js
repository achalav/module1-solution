(function(){
 'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope)
    {
        $scope.dishes="";
        $scope.message = "";

        $scope.check = function(dishes){
           if(dishes == "" || dishes == null){
               $scope.message = "Please Enter a data";
           }
           else if(splitString(dishes) <=3 ){
                $scope.message = "Enjoy";

           }else{
               $scope.message = "Too much";
           }

            
      //$scope.message = messageForDishes($scope.dishes); 
        
    }
    }



function splitString(dishes) {
  var arrayOfStrings = dishes.split(",");
  var items = 0;
  
  for(var i= 0; i< arrayOfStrings.length; i++){
      if(arrayOfStrings[i].trim() !=""){
          items ++;
         
      }
      
      
  }
  return items;
}
   
})();