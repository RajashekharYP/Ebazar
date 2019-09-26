export class product {
    id: String;
    name: string;
    imagePath: string;
    rating: number;
    price: number;
    category: String;

    constructor(id: String, name: string, imagePath: string, rating: number, price: number, category: String) {
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.rating = rating;
        this.price = price;
        this.category = category;
    }
}
