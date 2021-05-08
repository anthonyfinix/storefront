const Item = ({ item, incQty, decQty }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p>
                {item.product.name}
            </p>
            <div style={{display:"flex"}}>
                <button onClick={(e) => incQty(item.product._id)}>+</button>
                <p style={{ margin: "0px 5px" }}>{item.qty}</p>
                <button onClick={(e) => decQty(item.product._id)}>-</button>
            </div>
        </div>
    )
}

export default Item;