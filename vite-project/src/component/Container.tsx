import Search from "./Search";
import Sidebar from "./Sidebar";
import Trip from "./Trip";
const Container = () => {
    return (
        <div className="ww">
            <div className="container-w">
                <Search />
                <div className="container-2">
                    <Sidebar />
                    <div className="all-trip">
                        <Trip img="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg" car="Hải phòng đất cảng" price  = "120.000"/>
                        <Trip img="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep-20.jpg" car="Nguyễn gia Limouse" price  = "320.000"/>
                        <Trip img="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg" car="Hải phòng đất cảng" price  = "120.000"/>          
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Container;