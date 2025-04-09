import PropTypes from 'prop-types';

export default function ProductItem({ product }) {
    return (
        <div className="productItem">
            <div className="productImage">
                <img src={product.image} alt={product.name} />
            </div>
            <h3 className="productName">{product.name}</h3>
            <div className="productPrice">{product.price}</div>
        </div>
    );
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
};
