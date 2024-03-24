import Button from "./Button";
const Trip = (props:{img:string,car:string,price:string}) => {
    return (
        
            <div className="trip">
                <div className="trip-img">
                    <img src={props.img} alt="" />
                </div>
                <div className="trip-infor">
                    <h4>{props.car}</h4><br />
                    <div className="time-1">19:00 - Hà Nội</div><br />
                    <div className="time-1">21:00 - Hải Phòng</div>

                </div>
                <div className="trip-infor2">
                    <div className="trip-price">{props.price}đ</div> <br />
                    <p className="red">-10%</p>
                    <p>Còn 11 chỗ trống</p>
                    <Button title="Chọn chuyến" />
                    <h5>Không cần thành toán trước</h5>

                </div>
            </div>
        
    )
}
export default Trip;