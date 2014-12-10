"use strict";

bookDetail.controller('ProfileController', function($scope) {
  	$scope.profile = {
					  name  : "",
					  age   : "",
					  phone : "",
					  email : "",
					  address : "",
					  photoPreview:""
					};
					
	$scope.error = false;

	$scope.$watch('profile.name',function() {$scope.validate();});
	$scope.$watch('profile.age',function() {$scope.validate();});
	$scope.$watch('profile.phone', function() {$scope.validate();});
	$scope.$watch('profile.email', function() {$scope.validate();});

	$scope.validate = function() {

		if ($scope.profile.name.length > 50 || ($scope.profile.age <= 0 || $scope.profile.age > 100)) {
			$scope.error = true;
		} else {
			$scope.error = false;
		}
		
	};
	
	$scope.saveProfile = function() {
		alert('Profile info saved Successfully');
	};
	
	$scope.addPhoto = function(obj) {
		try {
			var fileReader  = new FileReader();
			fileReader.onloadend = function () {
				document.getElementById("profileImage").src = fileReader.result;
			}
			if (obj.files[0]) {
				fileReader.readAsDataURL(obj.files[0]);
			} else {
				preview.src = "";
			}
		} catch(error) {
			alert(error.message);
		}
	};
	
});
/*
function profileFieldChanged() {
	
	var name = document.myForm.name.value;
	var age = document.myForm.age.value;
	var phone = document.myForm.phone.value;
	var email = document.myForm.email.value;

	if (name != "" && age !="" && phone !="" && email !="") {
		 document.getElementById("saveProfileButton").disabled = false;
	} else {
		 document.getElementById("saveProfileButton").disabled = true;
	}
}

function saveProfile() {
	var name = document.myForm.name.value;
	var age = document.myForm.age.value;
	var phone = document.myForm.phone.value;
	var email = document.myForm.email.value;

	if(name.length > 50) {
		alert("Invalid Name, Max 50 chars allowed");
	}  else if(isNaN(age) || (age <= 0 || age > 100)) {
		alert("Invalid Age, Max age is 100");
	} else if(isNaN(phone)) {
		alert("Invalid Phone Number, Numbers only allowed");
	} else if(!validateEmail(email)) {
		alert("Invalid Email");
	} else {
		alert("Profile save successfully.");
	}
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 


*/