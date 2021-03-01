export const initialState = {
    basket: [
        {
            id:1, 
            title:"boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)",
            price:"379",
            rating:4,
            image:"https://m.media-amazon.com/images/I/31IdiM9ZM8L.jpg",
        },
        {
            id:2, 
            title:"boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)",
            price:"379",
            rating:4,
            image:"https://m.media-amazon.com/images/I/31IdiM9ZM8L.jpg",
        },
        {
            id:3, 
            title:"boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)",
            price:"379",
            rating:4,
            image:"https://m.media-amazon.com/images/I/31IdiM9ZM8L.jpg",
        },
    ],
    user:null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) { 
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            return {state}
        default:
            return state;    
    }
}

export default reducer;