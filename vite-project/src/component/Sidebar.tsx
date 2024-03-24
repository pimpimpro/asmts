const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top-sidebar">
                <h2>Sắp xếp</h2>
            </div>
            <ul>
                <li>
                    <input type="radio" name="groupName" />
                    <label>Mặc định</label>
                </li>
                <li>
                    <input type="radio" name="groupName" />
                    <label>Giờ đi sớm nhất</label>

                </li>
                <li>
                    <input type="radio" name="groupName" />
                    <label>Giờ đi muộn nhất</label>
                </li>
                <li>
                    <input type="radio" name="groupName" />
                    <label>Đánh giá cao nhất </label>
                </li>
                <li>
                    <input type="radio" name="groupName" />
                    <label>Giá tăng dần</label>
                </li>
                <li>
                    <input type="radio" name="groupName" />
                    <label>Giá giảm dần</label>
                </li>
            </ul>
        </div>


    )
}
export default Sidebar;