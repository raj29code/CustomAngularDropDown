export class MultiheaderDropDownModel {
    constructor(
        public label: string = null,
        public items: MultiheaderDropDownLookup[] = null

    ) {

    }
}

export class MultiheaderDropDownLookup {
    constructor(
        public label: string = null,
        public items: string = null

    ) {

    }
}