import { useEffect, useState } from "react";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { AiFillDelete } from "react-icons/ai";
import {useDispatch,useSelector} from "react-redux"
import {addToCart, decreaseQuantity, increaseQuantity} from './../components/redux/Actions/CartActions'
import { useNavigate } from 'react-router-dom'
const CartPage = () => {
  const columns = [
    { name: "Tên sản phẩm", uid: "name" },
    { name: "Số lượng", uid: "qty" },
    { name: "Tạm tính", uid: "price" },
    { name: "Hành động", uid: "actions" },
  ];
  const renderCell = (product, index, columnKey) => {
    const cellValue = product[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared  src={`${process.env.REACT_APP_API_ENDPOINT}${product.imagePath} `} name={cellValue} css={{ p: 0 }}/>
        );
      case "qty":
        return (
          <Col>
            <div className="box-amount-cart f_flex">
                <button className='de-cart' onClick={() => handleDecreaseQuantity(cellValue, index)}>-</button>
                  <input className='input-cart'type="text" value={cellValue} readOnly />
                <button className='in-cart' onClick={() => handleIncreaseQuantity(cellValue, index)} disabled={active[index] === false ? true : false}>+</button>
            </div>          
          </Col>
        );
      case "price":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
        </Col>
        );

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete product"
                color="error"
                onClick={() => console.log("Delete user", product.id)}
              >
              <AiFillDelete/>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = new URL(document.location).searchParams;
  const qty = params.get('qty')
  const id = params.get('id')
  const [cartItems, setCartItems] = useState([])
  const [active, setActive] = useState([])

  useEffect(()=>{
    if(id){
      dispatch(addToCart(id,qty))
     }
  },[dispatch,id,qty])


  useEffect(() => {
    setTimeout(() => {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
      if (id && qty)
        navigate('/cart')
    }, 50)     
  }, [cartItems])
  
  // useEffect(() => {
  //   if (check)
  //     setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  //   setCheck(false);
  // }, [check]);

  const handleIncreaseQuantity = (qty, index) => {
    if(cartItems[index].amount - qty > 0){
      dispatch(increaseQuantity(index))  
    }
     else{
       let newArr = [...active];
       newArr[index] = false;
       setActive(newArr);
      }
  }

  const handleDecreaseQuantity = (quantity, index) =>{

    if(quantity > 0){
      let newArr = [...active];
      newArr[index] = true;
      setActive(newArr);
      dispatch(decreaseQuantity(index))
      // setCheck(true);
      // console.log(cartItems.qty)
    }
    // else{
    //   let newArr = [...active];
    //   newArr[index] = false;
    //   setActive(newArr);
    // }
  }

  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        maxWidth: "90%",
        marginTop:"40px",
        marginBottom:"40px",
        border:"1px solid red",
        marginLeft:"70px"
        
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>

      <Table.Body items={cartItems}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, cartItems.indexOf(item), columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    
  );
}

export default CartPage