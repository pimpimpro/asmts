import Button from "./Button.tsx";
const Header = () => {
    return (
        <>
            <div className="header">
                <img
                    className="logo"
                    loading="lazy"
                    alt=""
                    src="https://storage.googleapis.com/fe-production/svgIcon/icon_vxr_full_2.svg"
                />
                <div className="menu">
                    <div>Quản lý đơn hàng</div>
                    <div>Mở bán vé trên Vexere</div>
                    <div>Trở thành đối tác</div>
                    <Button title="Hotline 24/7" />
                    <Button title="Đăng nhập" />
                </div>
            </div>
        </>
    )

}
export default Header;