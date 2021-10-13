import { MSG_DELETE_PRODUCT_CART_SUCCESS } from '../constants/Message';

const CartItem = ({ item,  onDeleteProductInCart, onChangeMessage, onUpdateProductCart }) => {

    const onDelete = product => {
        onDeleteProductInCart(product)
        onChangeMessage(MSG_DELETE_PRODUCT_CART_SUCCESS)
    }

    const onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            onUpdateProductCart(product, quantity)
        }
    }

    return (
        <tr>
            <th scope="row">
                <img src={item.product.image }
                    alt={item.product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{item.quantity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label 
                        className="btn btn-sm btn-primary
                                    btn-rounded waves-effect waves-light"
                        onClick={() => { onUpdateQuantity(item.product, item.quantity - 1) }}
                    >
                        <a href>—</a>
                    </label>
                    <label 
                        className="btn btn-sm btn-primary
                                    btn-rounded waves-effect waves-light"
                        onClick={() => { onUpdateQuantity(item.product, item.quantity + 1) }}
                        >
                        <a href>+</a>
                    </label>
                </div>
            </td>
            <td>{ item.product.price * item.quantity }$</td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    title="" 
                    data-original-title="Remove item"
                    onClick={() => { onDelete(item.product) }}
                >
                    X
                </button>
            </td>
        </tr>
    );
};

export default CartItem;