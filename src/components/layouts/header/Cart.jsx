import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Cart() {
    return (
        <a role="button" tabIndex={0} className="cartIcon">
            <ShoppingCartIcon 
                className="cart-icon" 
                width={32}
                height={32}
                strokeWidth={1.5}
            />
            <span className="cart-count">0</span>
        </a>
    );
}