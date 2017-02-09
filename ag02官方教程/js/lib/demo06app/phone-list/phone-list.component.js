/**
 * Created by MuMu on 2017/2/4.
 */
angular
    .module("phoneList")
    .component("phoneList", {
        templateUrl:"js/lib/demo06app/phone-list/phone-list.template.html",
        controller:function ct() {
            this.phones = [
                {
                    name: '苹果 S',
                    snippet: 'Fast just got faster with Nexus S.'
                }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ];
        }
    });