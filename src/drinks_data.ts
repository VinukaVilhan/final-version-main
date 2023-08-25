import { Drinks } from "./app/shared/models/drinks"
import { Tag } from "./app/shared/models/tag"

export const sample_drinks:Drinks[]=[
    {id:'7',name:'Coconut Milk Porridge',imagePath:'https://i0.wp.com/sarahjayhealing.com/wp-content/uploads/2020/10/Kola-Kanda-herbal-porridge.jpg?resize=2048%2C1356&ssl=1',description:'Coconut milk porridge is a creamy and comforting dish made by simmering rice or grains in luscious coconut milk, offering a delightful blend of smooth texture and subtle sweetness—a nourishing and soothing treat enjoyed across various cultures. ',favorite:false,stars:3,ingredients:['Raw Rice-100g', 'Water-6 Cups', 'Coconut(thick) milk -1/2 cups', 'Garlic-10g', 'ginger-10g', 'Salt'],methods:['Pick, clean and wash rice well', 'Then boil the rice in water adding salt', 'When the rice is softened, add garlic and ginger', 'Keep boiling until done', 'Transfer rice to a nebiliya adding thick coconut milk', 'Smash the rice grains with a spoon', 'Again boil the rice for about 30 seconds', 'Remove the pieces of ginger before blending'],tags: ['Dengue','Obesity','Diabetics'],calorieAmount:'850 calories'},

{id:'8',name:'Finger Millet Flour Porridge',imagePath:'https://thumbs.dreamstime.com/b/ragi-porridge-sweet-ragi-malt-india-ragi-porridge-sweet-ragi-malt-java-healthy-nutritional-drink-made-organic-finger-millet-190005946.jpg?w=768',description:'Finger millet flour porridge is a wholesome and nutritious dish created by cooking finely ground finger millet in water or milk, resulting in a hearty and energy-boosting meal with a nutty flavor profile—a popular choice for its health benefits and satisfying taste. ',favorite:false,stars:3,ingredients:['Finger millet flour-100g', 'Sago-50g', 'Scrapped coconut-50g', 'Water -6 Cups', 'Salt'],methods:['Put finger millet flour into a pot and rub to for small crumbs', 'Squeeze out scrapped coconut to take ½ cups of thick milk', 'Add water to left over coconut and squeeze out 5 cups of thin milk', 'Boil the thin milk and when boiling, add salt, bread crumbs and sago, stirring the mixture slowly', 'When well boiled.add thickmilk and continue stirring for  a few more seconds', 'Remove from the fire, serve warm or chilled'],tags: ['Dengue','Obesity'],calorieAmount:'700 calories'},

{id:'9',name:'Bael Fruit Drink',imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfpWUeraIeN-dvT6F2wJvh2RhlO0b8uE6xg&usqp=CAU',description:'Bael fruit drink, derived from the ripe fruit of the bael tree, is a refreshing and natural beverage with a unique sweet-tangy flavor, known for its cooling properties and potential health benefits',favorite:false,stars:3,ingredients:['Dry beli flowers-50g', 'Water-4 Cups'],methods:['Wash the dry flowers well', 'Place a pot with water on fire and when boiled washed flowers', 'After 15 minutes , strain and serve with jaggery'],tags: ['Diabetics','Gastritis','High blood pressure'],calorieAmount:'800 calories'},

{id:'10',name:'Ginger with Corriander',imagePath:'https://www.dailylife.lk/kitchen/coriander-ginger-drink/images/coriander-ginger-hori.jpg',description:'This is categorized as a medicinal drink and taken at the early stages of sickness like cold,cough and fever.This popular drink eases discomfort occurring during headaches etc.',favorite:true,stars:3,ingredients:['Coriander - 50 g','Water - 4 cups/1000 ml','Ginger - 10 g'],methods:['Wash and drain coriander and roast a little.','Then pour water,add ginger and boil well.','Strain and serve(with or without sugar)hot.'],tags: ['Diabetics','Gastritis','Dengue'],calorieAmount:'700 calories'},
       
{id:'11',name:'Wild Mango Fruit Drink(embarella beema)',imagePath:'https://rasakama.files.wordpress.com/2016/12/img_1599.jpg?w=723',description:'This is a popular drink which helps to improve our health.It is specially recommended for diabetic and high blood pressure patients.',favorite:false,stars:3,ingredients:['Wild mango fruits(ripe) - 12 nos','Salt - 1/2 tsp','Water(boil cool) - 6 cups'],methods:['Wash embarella,put it in boiling water and keep for about 1 minute.','Remove and de-skin and cut to pieces.','Add water and blend the cut pieces and put through a sieve.','Add sugar and salt.'],tags: ['Diabetics','Gastritis','High blood pressure'],calorieAmount:'600 calories'},
       
{id:'12',name:'Nelli Drink(nelli beema)',imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tw-HOFz_FOWjrv_cZQnI6Tw-FAV_z7Hb6SI8aetLNUc51oGDf0LPX0VvHBVf-DdhW-s&usqp=CAU',description:'This drink is one of the drinks with higher medicinal value.It helps to maintain a healthy life.',favorite:true,stars:3,ingredients:['Green coloured nelli - 500 g','Sugar - 100 g','Water(boil cool) - 4 cups','Salt - 1/2 tsp'],methods:['Wash nelli and put into a vessel.','Add lukewarm water and drain out.','Then de-seed,blend and add water and blend again and sieve through.','Add sugar and a little salt to sieve mix and then chill.'],tags: ['Diabetics','Gastritis','High blood pressure','Dengue'],calorieAmount:'850 calories'},
]

export const sample_tags:Tag[]=[
    {name:'Diabetics',count:1},
    {name:'Gastritis',count:0},
    {name:'High blood pressure',count:0},
    {name:'Cholesterol',count:1},
    {name:'Dengue',count:2},
    {name:'Obesity',count:2},
    {name:'Pregnancy',count:5}
]