angular
    .module('app')
    .controller('IndexController', IndexController);

function IndexController($http, $httpParamSerializerJQLike) {
    var vm = this;
    vm.chosenSkill = "javascript";

    vm.contactForm = {
    };

    vm.submitContact = function(contactForm) {
        console.log(contactForm);

        vm.messageSent = false;
        vm.errorSending = false;

        $http({
            url: 'https://contact.mycahpleasant.com',
            method: 'POST',
            data: $httpParamSerializerJQLike(contactForm),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response) {
                vm.messageSent = true;
                vm.contactForm = {};
            }, function(error) {
                console.log(error);
                vm.errorSending = true;
                vm.sendingError = error.data.error;
            });
    }
}
