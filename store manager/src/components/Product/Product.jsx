import { useCartDispatch } from "../../context/CartContext";
import { useCart } from "../../context/CartContext";

export default function Product({ product }) {
    const cartItems = useCart();
    const dispatchToCart = useCartDispatch();

    const onCartToggle = () => {
        if (cartItems.some((item) => item.productName === product.productName)) {
            dispatchToCart({
                type: "removed",
                ...product,
            });
        } else {
            dispatchToCart({
                type: "added",
                ...product,
            });
        }
    };

    return (
        <div className="border border-gray-400 p-4 rounded text-center flex flex-col items-center">
            <h1 className="font-bold text-xl">{product.productName}</h1>
            <div className="w-[250px] h-[250px] overflow-hidden border border-gray-300 rounded mt-2">
                <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-cyan-700 text-lg mt-2">Price: ₹ {product.price.toFixed(2)}</p>
            <button
                onClick={onCartToggle}
                className={`mt-2 rounded p-2 transition ${
                    cartItems.some((item) => item.productName === product.productName)
                        ? "bg-red-700 hover:bg-red-600 text-white" 
                        : "bg-yellow-400 hover:bg-yellow-500 text-black"
                }`}
            >
                {cartItems.some((item) => item.productName === product.productName)
                    ? "Remove from Cart"
                    : "Add to cart"}
            </button>
        </div>
    );
}
