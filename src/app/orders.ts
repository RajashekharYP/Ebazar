import { product } from "./products";

export class order{
    //date: string;
    //cartobj: Map<product, number>;

    constructor(private date:Date,private cartobj:Map<product,number>) {}
}