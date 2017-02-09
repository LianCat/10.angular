/**
 * Created by LJY on 2017/1/5.
 */
angular
    .module("demo06")
    .component("demo06",{
        templateUrl:"js/lib/demo06/demo06/demo.template.html",
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
    })