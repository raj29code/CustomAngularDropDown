import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { MultiheaderDropDownModel, MultiheaderDropDownLookup } from './models/multi-header-dropdown.model';

@Component({
    selector: 'multiHeader-dropdown',
    templateUrl: './multiHeader-dropdown.component.html',
    styleUrls: ['./multiHeader-dropdown.component.scss']
})
export class MultiHeaderDropdownComponent {
    @Input() source: MultiheaderDropDownModel[] = [];
    @Output() selectedValueChanged: EventEmitter<MultiheaderDropDownLookup> = new EventEmitter<MultiheaderDropDownLookup>();
    @Input() placeHolder = '';
    @Input() height: string;
    public dropDownToggle: boolean = false;


    constructor() { }

    /**
       * Function to pss selected data to parent 
       * @param value  
       */
    public selectItem(value: MultiheaderDropDownLookup) {
        this.dropDownToggle = !this.dropDownToggle;
        this.selectedValueChanged.emit(value);
    }



    /**
     * Function used for trackBy pipe in ngFor
     * @param index 
     */
    public trackByFn(index) {
        return index;
    }
}
