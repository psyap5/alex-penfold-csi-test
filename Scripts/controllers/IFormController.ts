module sortArray {
    export interface IFormController extends ng.IComponentController{
        form: IFormViewModel;
        sort(): void;
    }
}