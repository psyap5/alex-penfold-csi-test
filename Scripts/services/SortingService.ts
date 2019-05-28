import { mergeSort } from '../functions/MergeSort';

export class SortingService
{
    private filteredArray: number[]

    public static $inject = [
    ];

    constructor() {
        this.filteredArray = [];
    } 

    public getSortedArray(unsortedArray: string): number[]{
        this.filteredArray = unsortedArray.split(/[\n,\s,]+/)
            .filter(Number).map(Number);

        return mergeSort(this.filteredArray);
    }
}