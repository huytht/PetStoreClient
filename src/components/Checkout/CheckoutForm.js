import { useEffect , useState } from "react";
import "./style.css";
import { FaShoppingCart, FaPaypal, FaMoneyBillWave } from "react-icons/fa";
import { Input, Row, Col, Container, Radio, Checkbox } from "@nextui-org/react";
import { useDispatch,useSelector } from 'react-redux';
import { createPayment } from './../redux/Actions/PaymentAction';
import { listProvince, getProvince, getDistrict } from "../redux/Actions/AddressAction";
import AutoComplete from "react-autocomplete";

const CheckoutForm = () => {
  const [checked, setChecked] = useState(false);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")));
  const [paymentMethod, setPaymentMethod] = useState("");
  const [provinceShippingName,setProvinceShippingName] = useState("")
  const [districtShippingName,setDistrictShippingName] = useState("")
  const [wardShippingName,setWardShippingName] = useState("")
  const [provinceBillingName,setProvinceBillingName] = useState("")
  const [districtBillingName,setDistrictBillingName] = useState("")
  const [wardBillingName,setWardBillingName] = useState("")
  const provinces = useSelector((state)=>state.provinces)
  const province = useSelector((state)=>state.province)
  const district = useSelector((state)=>state.district)
  let total = 0;
  const dispatch = useDispatch();

  const placeOrder = () => {
    dispatch(createPayment(total, paymentMethod));
  }

  useEffect(()=>{
    dispatch(listProvince())
  },[dispatch])

  return (
    <>
      <h1 className="title-checkout mtop">Thanh toán</h1>
      <div className="box-checkout-form">
        <div class="box-main-checkout">
          <div class="container-checkout">
            <form>
              <div className="box-checkout-form">
                <h2 className="title">
                  <i class="fa-solid fa-address-card"></i> Thông tin liên hệ
                </h2>
                <Container>
                  <Row gap={1} className="checkout-element-row">
                    <Col className="box-checkout-element">
                      <label for="lastName">
                        <i class="fa fa-user"></i> Họ và tên đệm
                      </label>
                      <Input
                        // clearable
                        // value={lastName}
                        // onChange={(e) => setLastName(e.target.value)}
                        helperColor="error"
                        // helperText={lastNameToched && helperLastName.text}
                        // onFocus={() => setLastNameToched(true)}
                        type="text"
                        bordered
                        fullWidth
                        color="primary"
                        size="md"
                      />
                    </Col>
                    <Col className="box-checkout-element">
                      <label for="firstName">
                        <i class="fa fa-user"></i> Tên
                      </label>
                      <Input
                        // clearable
                        // value={lastName}
                        // onChange={(e) => setLastName(e.target.value)}
                        helperColor="error"
                        // helperText={lastNameToched && helperLastName.text}
                        // onFocus={() => setLastNameToched(true)}
                        type="text"
                        bordered
                        fullWidth
                        color="primary"
                        size="md"
                      />
                    </Col>
                  </Row>
                  <Row gap={1}>
                    <Col className="box-checkout-element">
                      <label for="email">
                        <i class="fa fa-envelope"></i> Email
                      </label>
                      <Input
                        // clearable
                        // value={lastName}
                        // onChange={(e) => setLastName(e.target.value)}
                        helperColor="error"
                        // helperText={lastNameToched && helperLastName.text}
                        // onFocus={() => setLastNameToched(true)}
                        type="text"
                        bordered
                        fullWidth
                        color="primary"
                        size="md"
                      />
                    </Col>
                    <Col className="box-checkout-element">
                      <label for="email">
                        <i class="fa fa-phone"></i> Số điện thoại
                      </label>
                      <Input
                        // clearable
                        // value={lastName}
                        // onChange={(e) => setLastName(e.target.value)}
                        helperColor="error"
                        // helperText={lastNameToched && helperLastName.text}
                        // onFocus={() => setLastNameToched(true)}
                        type="text"
                        bordered
                        fullWidth
                        color="primary"
                        size="md"
                      />
                    </Col>
                  </Row>
                </Container>

                <h2 className="title">
                  <i class="fa-solid fa-truck"></i> Thông tin giao hàng
                </h2>
                <Container>
                  <Row gap={1} className="checkout-element-row">
                    <Col className="box-checkout-element">
                      <label for="lastName">
                        <i class="fa-solid fa-city"></i> Tỉnh/Thành phố
                      </label>
                      <AutoComplete
                        getItemValue={(item) => item.name}
                        items={provinces.data.filter((province) => province.name.includes(provinceShippingName))}
                        renderItem={(item, isHighlighted) => ( 
                          <div
                            style={{
                              verticalAlign: "middle",
                              background: isHighlighted ? "lightgray" : "white",
                              color:"red"
                              
                            }}
                          >
                            
                            <div style={{ display: "inline-block", minWidth: 200 }}>
                              {item.name}
                            </div>
                          </div>
                        )}
                        value={provinceShippingName || ""}
                        onChange={(e) => setProvinceShippingName(e.target.value)}
                        onSelect={(provinceShippingName, item) =>  { setProvinceShippingName(provinceShippingName); dispatch(getProvince(item.code))}}
                      />
                    </Col>
                    <Col className="box-checkout-element">
                      <label for="firstName">
                        <i class="fa-solid fa-city"></i> Quận/Huyện
                      </label>
                      <AutoComplete
                        getItemValue={(item) => item.name}
                        items={province.data.districts?.length > 0 && province.data.districts.filter((district) => district.name.includes(districtShippingName))}
                        renderItem={(item, isHighlighted) => ( 
                          <div
                            style={{
                              verticalAlign: "middle",
                              background: isHighlighted ? "lightgray" : "white",
                              color:"red"
                              
                            }}
                          >
                            
                            <div style={{ display: "inline-block", minWidth: 200 }}>
                              {item.name}
                            </div>
                          </div>
                        )}
                        value={districtShippingName || ""}
                        onChange={(e) => setDistrictShippingName(e.target.value)}
                        onSelect={(districtShippingName, item) => { setDistrictShippingName(districtShippingName); dispatch(getDistrict(item.code)) }}
                      />
                    </Col>
                  </Row>
                  <Row gap={1}>
                    <Col className="box-checkout-element">
                      <label for="email">
                        <i class="fa-solid fa-city"></i> Phường/Xã
                      </label>
                      <AutoComplete
                        getItemValue={(item) => item.name}
                        items={district.data.wards?.length > 0 && district.data.wards.filter((ward) => ward.name.includes(wardShippingName))}
                        renderItem={(item, isHighlighted) => ( 
                          <div
                            style={{
                              verticalAlign: "middle",
                              background: isHighlighted ? "lightgray" : "white",
                              color:"red"
                              
                            }}
                          >
                            
                            <div style={{ display: "inline-block", minWidth: 200 }}>
                              {item.name}
                            </div>
                          </div>
                        )}
                        value={wardShippingName || ""}
                        onChange={(e) => setWardShippingName(e.target.value)}
                        onSelect={(wardShippingName) => setWardShippingName(wardShippingName)}
                      />
                    </Col>
                    <Col className="box-checkout-element">
                      <label for="email">
                        <i class="fa-solid fa-location-dot"></i> Địa chỉ chi
                        tiết
                      </label>
                      <Input
                        // clearable
                        // value={lastName}
                        // onChange={(e) => setLastName(e.target.value)}
                        helperColor="error"
                        // helperText={lastNameToched && helperLastName.text}
                        // onFocus={() => setLastNameToched(true)}
                        type="text"
                        bordered
                        fullWidth
                        color="primary"
                        size="md"
                      />
                    </Col>
                  </Row>
                </Container>
                <h2 className="title">
                  <i class="fa-solid fa-truck-fast"></i> Phương thức giao hàng
                </h2>
                <Container >
                  <Row gap={1} css={{ boxShadow: '0 0 0 1px', borderRadius: '0.375em', padding: '1.125rem' }} className="checkout-element-row">
                    <Col className="box-checkout-element">
                      <Radio.Group defaultValue="A">
                        <Radio value="A">Giao hàng nhanh (1-3 ngày)</Radio>
                      </Radio.Group>
                    </Col>
                    <Col
                      css={{ textAlign: "right", fontWeight: "bold", fontSize: 18 }}
                      className="box-checkout-element"
                    >
                      Miễn phí
                    </Col>
                  </Row>
                </Container>
                <h2 className="title">
                  <i class="fa-solid fa-money-bill-1"></i> Thông tin thanh toán
                </h2>
                <br />
                <Checkbox
                  disableAnimation={true}
                  className="checkout-checkbox"
                  value={checked}
                  onChange={() => setChecked(!checked)}
                  defaultSelected={true}
                >
                  Thông tin thanh toán giống thông tin giao hàng
                </Checkbox>
                {checked && (
                  <Container>
                    <Row gap={1} className="checkout-element-row">
                      <Col className="box-checkout-element">
                        <label for="lastName">
                          <i class="fa-solid fa-city"></i> Tỉnh/Thành phố
                        </label>
                        <Input
                          // clearable
                          // value={lastName}
                          // onChange={(e) => setLastName(e.target.value)}
                          helperColor="error"
                          // helperText={lastNameToched && helperLastName.text}
                          // onFocus={() => setLastNameToched(true)}
                          type="text"
                          bordered
                          fullWidth
                          color="primary"
                          size="md"
                        />
                      </Col>
                      <Col className="box-checkout-element">
                        <label for="firstName">
                          <i class="fa-solid fa-city"></i> Quận/Huyện
                        </label>
                        <Input
                          // clearable
                          // value={lastName}
                          // onChange={(e) => setLastName(e.target.value)}
                          helperColor="error"
                          // helperText={lastNameToched && helperLastName.text}
                          // onFocus={() => setLastNameToched(true)}
                          type="text"
                          bordered
                          fullWidth
                          color="primary"
                          size="md"
                        />
                      </Col>
                    </Row>
                    <Row gap={1}>
                      <Col className="box-checkout-element">
                        <label for="email">
                          <i class="fa-solid fa-city"></i> Phường/Xã
                        </label>
                        <Input
                          // clearable
                          // value={lastName}
                          // onChange={(e) => setLastName(e.target.value)}
                          helperColor="error"
                          // helperText={lastNameToched && helperLastName.text}
                          // onFocus={() => setLastNameToched(true)}
                          type="text"
                          bordered
                          fullWidth
                          color="primary"
                          size="md"
                        />
                      </Col>
                      <Col className="box-checkout-element">
                        <label for="email">
                          <i class="fa-solid fa-location-dot"></i> Địa chỉ chi
                          tiết
                        </label>
                        <Input
                          // clearable
                          // value={lastName}
                          // onChange={(e) => setLastName(e.target.value)}
                          helperColor="error"
                          // helperText={lastNameToched && helperLastName.text}
                          // onFocus={() => setLastNameToched(true)}
                          type="text"
                          bordered
                          fullWidth
                          color="primary"
                          size="md"
                        />
                      </Col>
                    </Row>
                  </Container>
                )}
                <h2 className="title">
                <FaMoneyBillWave /> Hình thức thanh toán
                </h2>
                <Container>
                  <Row gap={1} className="checkout-element-row">
                    <Col className="box-checkout-element">
                      <Radio.Group css={{ lineHeight: 3 }} onChange={(value) => setPaymentMethod(value)} defaultValue="COD">
                        <Radio className="checkbox-item" value="COD"><img class="method-icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg" width="32" height="32" alt="icon" />
                          &nbsp; Thanh toán bằng tiền mặt
                        </Radio>
                        <Radio className="checkbox-item" value="Paypal"><FaPaypal style={{ color: "#00457C" }}/>&nbsp;&nbsp; Thanh toán bằng Paypal</Radio>
                        <Radio value="Momo">
                          <img class="method-icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg" width="32" height="32" alt="icon" /> 
                          &nbsp;Thanh toán bằng ví MoMo
                        </Radio>
                        </Radio.Group>
                      </Col>
                  </Row>
                </Container>
              </div>
              <input
                className="btn-checkout-form"
                type="button"
                value="Continue to checkout"
                onClick={placeOrder}
              />
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container-checkout">
            <h4>
              Cart{" "}
              <span class="header-price">
                <FaShoppingCart /> <b>{ cartItems.length }</b>
              </span>
            </h4>
            <br />
            {cartItems.map((item) => (
              total += Number(item.price * item.qty),
              <p>
                <a href="#">{item.name} x{item.qty}</a> <span class="price">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(item.price * item.qty))}</span>
              </p>
            ))}
{/*         <p>
              <a href="#">Product 2</a> <span class="price">$5</span>
            </p>
            <p>
              <a href="#">Product 3</a> <span class="price">$8</span>
            </p>
            <p>
              <a href="#">Product 4</a> <span class="price">$2</span>
            </p> */}
            <br />
            <hr />
            <p>
              Total{" "}
              <span className="price">
                <b>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(total))}</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
