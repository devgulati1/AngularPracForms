let myApp=angular.module("myApp",[]);




myApp.controller("formController",function($scope){
    $scope.info={
name:"",
email:"",
age:"",
    }
    $scope.handleClick=function(){
        $scope.submitAge=$scope.inputAge;
        $scope.submitName=$scope.inputName;
        $scope.submitEmail=$scope.inputEmail;
        console.log($scope.submitName);
        console.log($scope.submitEmail);
        console.log("clicked")
        localStorage.setItem("name",$scope.submitName);
        localStorage.setItem("email",$scope.submitEmail);
        localStorage.setItem("age",$scope.submitAge);
    }
   
    

})
myApp.controller("getDataController",function($scope){
    $scope.getData=function(){
        $scope.prevData={
      name:localStorage.getItem("name"),
      email:localStorage.getItem("email"),
      age:localStorage.getItem("age"),
        }
    }
 
  
})