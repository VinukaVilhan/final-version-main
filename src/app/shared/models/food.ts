export class Food{
    id!:string;
    name!:string;
    description!:string;
    favorite!:boolean;
    stars!:number;
    imagePath!: string;
    ingredients!:string[];
    methods!:string[];
    tags?:string[];
    calorieAmount!:string;
    cookTime!:string;
}