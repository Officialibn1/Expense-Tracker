
const AddTransaction = () => {
    return (
        <>
            <h3>Add New Transaction</h3>
            <form action="submit">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter Text...."   />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income) 
                    </label>
                    <input type="number" id="amount" placeholder="Enter Amount...."   />
                </div>
            </form>

        </>
    );
}

export default AddTransaction;
