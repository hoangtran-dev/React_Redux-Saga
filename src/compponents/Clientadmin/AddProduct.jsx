import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import instance from '../../axios';

const AddProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate(); 
  const [form] = Form.useForm();

  const mutation = useMutation({
    mutationFn: async (product) => {
      await instance.post('/products', product);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
      message.success('Thêm sản phẩm thành công!');
      form.resetFields();
      navigate('/admin/product'); 
    },
    onError: (error) => {
      message.error(`Thêm sản phẩm thất bại: ${error.message}`);
    },
  });

  const handleFinish = (values) => {
    mutation.mutate(values);
  };

  return (
    <div>
      <h2>Thêm Sản Phẩm</h2>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Tên Sản Phẩm"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ảnh Sản Phẩm"
          name="image"
          rules={[{ required: true, message: 'Vui lòng nhập URL ảnh sản phẩm!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Giá Sản Phẩm"
          name="price"
          rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Mô Tả"
          name="desc"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={mutation.isLoading}>
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
