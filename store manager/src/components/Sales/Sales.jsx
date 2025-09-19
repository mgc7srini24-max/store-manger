import { useSales } from "../../context/SalesContext";
import SaleRecord from "./SaleRecord";

const Sales = () => {
    const sales = useSales();

    return (
        <div className="m-4">
            <h1 className="text-3xl text-green-600 font-bold mb-4">Sales Record</h1>
            {sales.length > 0 ? (
                <div className="grid gap-4">
                    {sales.map((sale, index) => (
                        <SaleRecord key={index} sale={sale} saleId={index} />
                    ))}
                </div>
            ) : (
                <p className="text-black-600 font-bold">No sales recorded yet.</p>
            )}
        </div>
    );
};

export default Sales;
