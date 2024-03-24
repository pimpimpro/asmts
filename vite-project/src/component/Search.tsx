import Button from "./Button"
const Search = () => {
    return (
        <div className="divtransportationwidgettab-s">
            <div className="divant-tabs">
                <div className="tablist">
                    <div className="divant-tabs-nav-container">
                        <button className="tab">
                            <img
                                className="svg-icon"
                                alt=""
                                src="data:image/png;base64,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"
                            />
                            <div className="xe-khch">Xe khách</div>
                        </button>
                        <div className="tab1">
                            <img
                                className="svg-icon1"
                                loading="lazy"
                                alt=""
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmS4w9qtaRpIFnQ3mw0f1BrZFRwm7ledpO6g&usqp=CAU"
                            />
                            <div className="tab-button-label-parent">
                                <div className="tab-button-label">
                                    <div className="spantransportationwidgettab-">
                                        <div className="k">-20K</div>
                                    </div>
                                </div>
                                <div className="tabs">
                                    <div className="my-bay">Máy bay</div>
                                </div>
                            </div>
                        </div>
                        <div className="tab2">
                            <img
                                className="svg-icon2"
                                loading="lazy"
                                alt=""
                                src="https://png.pngtree.com/png-vector/20190515/ourlarge/pngtree-train-icon-png-image_1043136.jpg"
                            />
                            <div className="frame-parent">
                                <div className="tu-ha-wrapper">
                                    <div className="tu-ha">Tàu hỏa</div>
                                </div>
                            </div>
                        </div>
                        <div className="tab3">
                            <img
                                className="svg-icon3"
                                loading="lazy"
                                alt=""
                                src="data:image/png;base64,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"
                            />
                            <div className="frame-group">
                                <div className="spantransportationwidgettab-container">
                                    {/* <div className="spantransportationwidgettab-2">
                                    <div className="mi1">Mới</div>
                                </div> */}
                                </div>
                                <div className="thu-xe-wrapper">
                                    <div className="thu-xe">Thuê xe</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="divdesktopsearchwidgetinterfa">
                <div className="divant-col">
                    <div className="divider">
                        <div className="event-v-ex-blue">
                            <div className="date-picker">
                                <img
                                    className="pickup-vex-blue-24dpsvg-icon"
                                    loading="lazy"
                                    alt=""
                                    src="data:image/jpeg;base64,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"
                                />
                            </div>
                            <div className="add-date-to-voyage">
                                <div className="label-ni">Nơi xuất phát:</div>
                                {/* <div class="h-ni">Hà Nội</div> */}
                                <select name="" id="">
                                    <option value="">Hà Nội</option>
                                    <option value="">Sài Gòn</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="divider1">
                        <div className="divdesktopsearchwidgetinterfa1" />
                    </div>
                    <div className="divider2">
                        <div className="frame-container">
                            <div className="label-ni-n-parent">
                                <div className="label-ni1">Nơi đến</div>
                                {/* <div class="bc-yn-">Bắc Yên - Sơn La</div> */}
                                <select name="" id="">
                                    <option value="">Hà Nội</option>
                                    <option value="">Sài Gòn</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="divider3">

                        <div>
                            <div className="thumbnail-s-v-g-parent">
                                <div className="thumbnail-s-v-g">
                                    <img
                                        className="event-vex-blue-24dpsvg-icon"
                                        loading="lazy"
                                        alt=""
                                        src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-calendar-icon-png-image_4422582.jpg"
                                    />
                                </div>
                                <div className="label-xto">
                                    <div className="ngy-i">Ngày đi</div>
                                    <select name="" id="">
                                        <option value="">Hà Nội</option>
                                        <option value="">Sài Gòn</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider4">
                        <div className="divdesktopsearchwidgetinterfa3" />
                    </div>
                    <div className="add-date-button-label">
                        <div className="thm-ngy-v">
                            <Button title="Thêm ngày về" />
                        </div>
                    </div>
                </div>
                <button className="button1">
                    <div className="tm-kim">Tìm kiếm</div>
                </button>
            </section>
        </div>

    )
}
export default Search