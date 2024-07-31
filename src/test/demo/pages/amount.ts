export class Amount {

    constructor(public readonly total: number,
        public readonly numberItems: number,
        public readonly discount: number,
        public readonly unit: string) {
    }

    perform() {
        let amount = this.total
        if (this.unit === '%') {
            amount = this.total - this.numberItems * ((this.total * this.discount) / 100)
        } else {
            amount = this.total - this.numberItems * this.discount
        }
        return amount
    }
}