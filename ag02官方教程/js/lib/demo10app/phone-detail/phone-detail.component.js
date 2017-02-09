angular.
    module('phoneDetail').
    component('phoneDetail', {
        templateUrl: 'js/lib/demo10app/phone-detail/phone-detail.template.html',
        controller: ['$http', '$routeParams',
            function PhoneDetailController($http, $routeParams) {
                var self = this;

                $http.get('js/lib/demo10app/' + $routeParams.phoneId + '.json').then(function(response) {
                    self.phone = response.data;
                });
            }
        ]
    });