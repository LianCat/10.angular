/**
 * Created by LJY on 2017/1/5.
 */
angular
    .module("phone1")/*使用模块*/
    .component("phone2",{
        templateUrl:"js/lib/demo05App/phone-list/phone-list.template.html",
        controller:function(){
            this.phones =[
                {
                    name:'lian',
                    xb:'15'
                },
                {
                    name:'www',
                    xb:'16'
                },
                {
                    name:'eee',
                    xb:'17'
                }
            ]
        }
    })
