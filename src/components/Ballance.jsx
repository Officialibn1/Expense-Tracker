import { useContext } from "react";
import { GolbalContext } from "../context/GlobalState";

const Ballance = () => {
    const {transactions} = useContext(GolbalContext);

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((a, b) => (a += b), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    );
}

export default Ballance;