import food1 from '../../assets/foods/bruchetta.jpg';
import food2 from '../../assets/foods/greeksalad.jpg';
import food3 from '../../assets/foods/lemondessert.jpg';
import blank from '../../assets/foods/blank.png';

const cardData = [
    {
        img: food1,
        title: "Bruschetta",
        content: "A classic Italian appetizer featuring toasted bread topped with a vibrant mix of fresh tomatoes, basil, garlic, and olive oil.",
        price: '8.99',
        ingredients: [
            { name: '🍅Tomatoes', color: '#D9534F' }, 
            { name: '🧄Garlic', color: '#D1C7B7' },   
            { name: '🍞Craft bread', color: '#8B6E4F' }
        ],
    },
    {
        img: food2,
        title: "Greek Salad",
        content: "A refreshing Mediterranean salad with cucumbers, tomatoes, olives, and feta cheese, tossed in olive oil dressing.",
        price: '4.99',
        ingredients: [
            { name: '🥒Cucumbers', color: '#5CB85C' }, 
            { name: '🍅Tomatoes', color: '#D9534F' }, 
            { name: '🧀Feta', color: '#F0F0F0' } 
        ],
    },
    {
        img: food3,
        title: "Lemon Desert",
        content: "A zesty lemon dessert with a bright, tangy flavor balanced by sweetness, perfect for a refreshing treat.",
        price: '5.99',
        ingredients: [
            { name: '🍋Lemon', color: '#D4B95A' },     
            { name: '🍯Honey', color: '#E6A157' },     
            { name: '🍚Sugar', color: '#F5F5F5' }    
        ],
    },
    {
        img: blank,
        title: "Item",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        price: '9.99',
        ingredients: [
            { name: 'Ingredient 1', color: '#A9A9A9' }, 
            { name: 'Ingredient 2', color: '#808080' }, 
            { name: 'Ingredient 3', color: '#696969' } 
        ],
    },
    {
        img: blank,
        title: "Item",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        price: '9.99',
        ingredients: [
            { name: 'Ingredient 1', color: '#A9A9A9' },
            { name: 'Ingredient 2', color: '#808080' }, 
            { name: 'Ingredient 3', color: '#696969' } 
        ],
    },
    {
        img: blank,
        title: "Item",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        price: '9.99',
        ingredients: [
            { name: 'Ingredient 1', color: '#A9A9A9' }, 
            { name: 'Ingredient 2', color: '#808080' }, 
            { name: 'Ingredient 3', color: '#696969' }
        ],
    },
];

export default cardData;