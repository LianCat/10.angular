/**
 * Created by MuMu on 2017/2/4.
 */
angular
    .module("phoneList")
    .component("phoneList", {
        templateUrl: "js/lib/demo07app/phone-list/phone-list.template.html",
        controller: function fc($scope) {
            this.phones = [
                {
                    name: '苹果 6S',
                    snippet: 'Fast just got faster with Nexus S.',
                    year:2015
                },
                {
                    name: 'OPPO R9',
                    snippet: 'The Next, Next Generation tablet.',
                    year:2016
                },
                {
                    name: 'VIVO X9',
                    snippet: 'The Next, Next Generation tablet.',
                    year: 2014
                }
            ];

            this.orderProp = "year";
        }
    });
