export default function Item({ product }) {
    return (
        <>
            <div key={product.id} className="productItem">
                <figure className="productImage">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                </figure>
                <h2 className="productName">{product.name}</h2>
                <p className="productPrice">{product.price}</p>
                
            </div>
        </>
    );
}