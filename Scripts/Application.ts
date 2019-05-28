
import { FormController } from "./controllers/FormController"; 
import { module } from "angular";
import { SortingService } from "./services/SortingService";
/**

 *
 * @type {angular.Module}
*/

function MyServiceFactory($rootElement: any) : SortingService {
    const inj = $rootElement.injector();
    return inj.instantiate(SortingService);
}

module MyApp{

    var sortArray = module("sortArray", [])
        .controller('formController', FormController)
        .factory('sortingService', ['$rootElement', ($rootElement : any) => MyServiceFactory($rootElement)])

    /**sortArray.controller("TestCtrl", ['$scope', function($scope){
        $scope.title="hello World!!!";
        }]);**/
}


         

