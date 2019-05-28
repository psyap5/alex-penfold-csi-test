import { IFormScope } from "./IFormScope";
import { SortingService } from "../services/SortingService";

export class FormController{
    public title: string;
    public result: string;
    public checked: boolean;
    public uncheck: any;

    public static $inject = [
        '$scope',
        'sortingService'
    ];

    constructor(
        private $scope: IFormScope,
        private SortingService : SortingService
        ) {      
        this.title = $scope.title;
        this.result = $scope.result;
        this.checked = $scope.checked;
        this.uncheck = function (event: any) {
        if ($scope.checked == event.target.value) {
           $scope.checked = false;
        }
    }
    } 
   

    sort() {
        this.uncheck === "Descending" ? 
            this.result = this.SortingService.getSortedArray(this.title).reverse().join(" ") :
            this.result = this.SortingService.getSortedArray(this.title).join(" ");

        alert(this.checked)
    }
   
}