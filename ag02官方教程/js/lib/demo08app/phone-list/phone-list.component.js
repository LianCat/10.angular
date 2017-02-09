/**
 * Created by MuMu on 2017/2/4.
 */
angular
    .module("phoneList")
    .component("phoneList", {
        templateUrl:"js/lib/demo08app/phone-list/phone-list.template.html",
        /*controller:function fc($scope, $http) {
            this.orderProp = "age";//默认排序的字段

            var that = this;
            /!*异步请求获取数据*!/
            $http.get("js/lib/demo08app/phone.json").then(function(response) {
                /!*异步请求成功获取的数据，保存到控制器的phones变量中*!/
                that.phones = response.data;
            });
        }*/
        controller:["$scope", "$http", function fc($scope, $h) {
            this.orderProp = "age";//默认排序的字段

            var that = this;
            /*异步请求获取数据*/
            $h.get("js/lib/demo08app/phone.json").then(function(response) {
                /*异步请求成功获取的数据，保存到控制器的phones变量中*/
                that.phones = response.data;
            });
        }]
    });