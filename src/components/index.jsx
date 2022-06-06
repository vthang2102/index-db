import React, { useState } from "react";
import { Button, Form, Modal, Space, Table, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";

const data = [
  {
    key: "1",
    fullName: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    fullName: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    fullName: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "3",
    fullName: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

const IndexDbApp = () => {
  const [visible, setVisible] = useState(false);
  const [addItem, setAddItem] = useState("");

  const handleEditItem = () => {
    setVisible(true);
  };

  const handleDeleteItem = () => {
    console.log("delete");
  };

  const handleOk = () => {
    console.log("oke");
  };

  const handleAddItem = () => {
    console.log("add");
    setAddItem();
  };

  return (
    <div className="table-container">
      <Table
        dataSource={data}
        size="default"
        pagination={false}
        columns={[
          {
            title: "Name",
            dataIndex: "fullName",
            width: "14%",
          },
          {
            title: "Age",
            dataIndex: "age",
            width: "14%",
          },
          {
            title: "Address",
            dataIndex: "address",
            width: "14%",
          },
          {
            title: "Action",
            key: "action",
            width: "5%",
            render: (row) => {
              return (
                <Space size="middle">
                  <Button
                    type="text"
                    className="btn-edit"
                    icon={<EditOutlined />}
                    onClick={() => handleEditItem()}
                  >
                    Edit
                  </Button>
                  <Button
                    type="text"
                    className="btn-delete"
                    icon={<EditOutlined />}
                    onClick={() => handleDeleteItem()}
                  >
                    Delete
                  </Button>
                </Space>
              );
            },
          },
        ]}
      />
      <Modal
        footer={null}
        onCancel={() => {
          setVisible(false);
        }}
        title="View Detail"
        visible={visible}
        onOk={handleOk}
        style={{ width: "520px", display: "grid" }}
      ></Modal>

      <div className="add-container" style={{ display: "flex", gap: "20px" }}>
        <Form style={{ display: "flex", gap: "20px" }}>
          <Form.Item placeholder="Enter Name" name="fullName">
            <Input placeholder="Enter Name" value={addItem} />
          </Form.Item>
          <Form.Item name="age">
            <Input placeholder="Enter your age" value={addItem} />
          </Form.Item>
          <Form.Item placeholder="Enter your address" name="address">
            <Input placeholder="Enter your address" value={addItem} />
          </Form.Item>
        </Form>
        <Button onClick={handleAddItem}>add</Button>
      </div>
    </div>
  );
};

export default IndexDbApp;
