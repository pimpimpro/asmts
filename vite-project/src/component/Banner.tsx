// import Button from "./Button";
import Search from "./Search";
const Banner = () => {
    return (
        <div className="divhomepage-bannerwrapper-bs">
            <img
                className="banner-main-vijpg-icon"
                alt=""
                src="https://229a2c9fe669f7b.cmccloud.com.vn/images/banner-main-vi.jpg"
            />
            <section className="header-link-container">
                <div className="homepage-transportation-widget">
                    <div className="transportation-tab-new-label">
                        <div className="link-heading" id="linkHeading">
                            Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
                        </div>
                    </div>
                    <Search />
                </div>
            </section>
            <div className="banner-bottom">
                <ul>
                    <li>Chắc chắn có chỗ</li>
                    <li>Hỗ trợ 24/7</li>
                    <li>Nhiều ưu đãi</li>
                    <li>Thanh toán đa dụng </li>
                </ul>
            </div>
        </div>


    )
}
export default Banner;