/**
 * Created by MuMu on 2017/2/7.
 */
angular.module("baidu")
    .component("baiduSearch", {
        templateUrl:"js/app/baidu/baidu.template.html",
        controller:["$scope","search", function($scope, search) {
            this.keyword="关键词";

            this.search = function(kw) {
                this.keyword = kw;
                // 调用服务
                search.getData(this.keyword, this.callback);
            }

            this.callback = function(data) {
                $scope.reslist = data.s;
                console.log($scope.reslist);
            }
        }]
    });