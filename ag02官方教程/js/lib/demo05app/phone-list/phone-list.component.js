/**
 * Created by MuMu on 2017/2/4.
 */
angular
    .module("phoneList")/*使用模块*/
    .component("phoneList", {/*创建组件*/
        templateUrl: "js/lib/demo05app/phone-list/phone-list.template.html",
        controller: function() {
            this.phones = [
                {
                    name: 'Nexus S',
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