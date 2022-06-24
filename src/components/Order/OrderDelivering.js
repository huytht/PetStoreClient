import React from 'react'
import { User, Text } from "@nextui-org/react";
const OrderDelivering= () => {
    
  return (
    <div className="table-order">
        <table
        aria-label="Example table with custom cells"
        style={{
        height: "auto",
        maxWidth: "90%",
        marginTop: "40px",
        marginBottom: "20px",
        marginLeft: "70px",
        width: "100%",
        textAlign: "center",
        lineHeight: "3"
  }}
  selectionMode="none"
>
  <thead>
    <th>Hình ảnh</th>
    <th>Tên sản phẩm</th>
    <th>Số lượng</th>
    <th>Tạm tính</th>
    <th>Trạng thái</th>
  </thead>

  <tbody>
      <tr>
        <td>chưa có</td>
        <td>Chó 3</td>
        <td>
          <div className="box-amount-order f_flex">
            <input className='input-order' type="text" value={2} style={{border:"none"}} readOnly />
          </div>
        </td>
        <td>
          <Text b size={14} css={{ tt: "capitalize" }}>
           20000000
          </Text>
        </td>
        <td>
            Chưa xác nhận
        </td>
      </tr>

  </tbody>
        </table>
    </div>
    
  )
}

export default OrderDelivering