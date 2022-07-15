import React from "react";
import "./style.css";
import { FaShoppingCart, FaPaypal, FaMoneyBillWave } from "react-icons/fa";
import { Input, Row, Col, Container, Radio, Checkbox } from "@nextui-org/react";
const CheckoutForm = () => {
  const [checked, setChecked] = React.useState(false);

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
                      <Radio.Group css={{ lineHeight: 3 }} defaultValue="COD">
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
                type="submit"
                value="Continue to checkout"
              />
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container-checkout">
            <h4>
              Cart{" "}
              <span class="header-price">
                <FaShoppingCart /> <b>4</b>
              </span>
            </h4>
            <br />
            <p>
              <a href="#">Product 1</a> <span class="price">$1</span>
            </p>
            <p>
              <a href="#">Product 2</a> <span class="price">$5</span>
            </p>
            <p>
              <a href="#">Product 3</a> <span class="price">$8</span>
            </p>
            <p>
              <a href="#">Product 4</a> <span class="price">$2</span>
            </p>
            <br />
            <hr />
            <p>
              Total{" "}
              <span className="price">
                <b>$30</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
