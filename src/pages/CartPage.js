import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { AiFillDelete } from "react-icons/ai";
const CartPage = () => {
  const columns = [
    { name: "Tên sản phẩm", uid: "name" },
    { name: "Số lượng", uid: "amount" },
    { name: "Tạm tính", uid: "temp_price" },
    { name: "Hành động", uid: "actions" },
  ];
  const products = [
    {
      id: 1,
      name: "Tony Reichert",
      amount: "2",
      temp_price: "30000000",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      id: 2,
      name: "Tony Reichert",
      amount: "2",
      temp_price: "30000000",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
  ];
  const renderCell = (product, columnKey) => {
    const cellValue = product[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={product.avatar} name={cellValue} css={{ p: 0 }}/>
        );
      case "amout":
        return (
          <Col>
              <Text b size={14} css={{ tt: "capitalize",alignItems:"center" }}>
                {cellValue}
              </Text>
          </Col>
        );
      case "temp_price":
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
      <Table.Body items={products}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    
  );
}

export default CartPage