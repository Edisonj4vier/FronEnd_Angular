export interface Videogame {
    _id?:               number;
    title:              string;
    description:        string;
    category:           string;
    effectiveDate:      Date;
    price:              number;
/*
    constructor(title: string, description: string, category: string, effectiveDate: Date, price: number ){
        this.title = title;
        this.description = description;
        this.category = category;
        this.effectiveDate = effectiveDate;
        this.price = price;
    }
    */
}