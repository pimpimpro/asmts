const Checkout = () => {
    return (
        <div className="container">
            <h1>Checkout</h1>
            <div className="shopping-cart">
                <div className="product">
                    <div className="product-image">
                        <img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg" />
                    </div>
                    <div className="product-details">
                        <div className="product-title">Hải Phòng Đất Cảng</div>
                        <p className="product-description">
                            Thời gian khởi hành từ 19:00 - 20:30
                        </p>
                    </div>
                    <div className="product-price">150.000đ</div>
                    <div className="product-quantity">
                        <input type="number" defaultValue={2} min={1} />
                    </div>
                    <div className="product-removal">
                        <button className="remove-product">Remove</button>
                    </div>
                    <div className="product-line-price">150.000đ</div>
                </div>
                {/* Other products go here */}
                <div className="totals">
                    <div className="totals-item">
                        <label>Số lượng ghế</label>
                        <div className="totals-value" id="cart-subtotal">
                            2
                        </div>
                    </div>
                    <div className="totals-item">
                        <label>Giá</label>
                        <div className="totals-value" id="cart-shipping">
                            150.000đ
                        </div>
                    </div>
                    <div className="totals-item totals-item-total">
                        <label>Tổng tiền</label>
                        <div className="totals-value" id="cart-total">
                            300.000đ
                        </div>
                    </div>
                </div>
                <button className="checkout">Checkout</button>
            </div>
        </div>

    )
}
export default Checkout;