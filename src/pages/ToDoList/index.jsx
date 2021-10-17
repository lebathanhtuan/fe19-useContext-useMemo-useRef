import React from "react";
import { Form, Button, Input } from "antd";

const ToDoListPage = () => {
  const handleSubmit = (values) => {
  console.log('🚀 ~ file: index.jsx ~ line 6 ~ handleSubmit ~ values', values);

  }
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ username: 'Tuấn' }}
        onFinish={(values) => handleSubmit(values)}
      >
        <Form.Item
          label="Name"
          name="name"
          validateFirst
          rules={[
            { required: true, whitespace: true, message: "Bạn chưa nhập tên!" },
            { min: 6, max: 32, message: 'Mật khẩu của bạn phải nằm trong khoảng 6-32 kí tự' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Bạn chưa nhập mật khẩu" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Re-Password"
          name="rePassword"
          rules={[
            { required: true, message: "Please input your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Xác nhận mật khẩu của bạn không khớp'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ToDoListPage;
