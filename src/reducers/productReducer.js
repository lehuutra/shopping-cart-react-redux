import { v4 as id } from 'uuid'

const initState = [
    {
        id: id(),
        name: 'Iphone 10',
        image: 'https://phuckhangmobile.com/file/iphone-x-xam-900-19448f.jpg',
        description: 'Abcxyz',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: id(),
        name: 'Iphone 11',
        image: 'https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-xanhla-600x600.jpg',
        description: 'Abcxyz',
        price: 500,
        inventory: 15,
        rating: 5
    },
    {
        id: id(),
        name: 'Iphone 12',
        image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-2-600x600.jpg',
        description: 'Abcxyz',
        price: 500,
        inventory: 20,
        rating: 3
    }
]

const productReducer = (state = initState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default productReducer