const BoxCard = () => {
    return (
        <div className="container">
            <h2>Tuyến đường phổ biến</h2>
            <div className="div">
                <div className="item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4gmfINeJ1fGLu9HC-IOs7MyxJ7zH47eiTUdSEF-SUg&s"
                        alt="Image 1"
                    />
                    <div className="text">
                        <h3>Sài gòn - Nha trang</h3>
                        <p>
                            Từ 250.000d <del>800.000đ</del>
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img
                        src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045-2.jpg"
                        alt="Image 2"
                    />
                    <div className="text">
                        <h3>Hà nội - hải phòng</h3>
                        <p>
                            Từ 250.000d <del>800.000đ</del>
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbj8BI7UVt-23suoVu8cCtkkfZ6pXUQYGYZGvYmpUgA&s"
                        alt="Image 3"
                    />
                    <div className="text">
                        <h3>Sài Gòn - Đà Lạt </h3>
                        <p>
                            Từ 250.000d <del>800.000đ</del>
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBS9bJEXw5AYRgmLY_9Nyr79oQFPYEtJjmhA&usqp=CAU"
                        alt="Image 4"
                    />
                    <div className="text">
                        <h3>Sài Gòn - Phan thiết</h3>
                        <p>
                            Từ 250.000d <del>800.000đ</del>
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default BoxCard;