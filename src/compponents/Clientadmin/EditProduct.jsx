import React, { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Form, Input, Button, message } from 'antd';
import instance from '../../axios';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const { productId } = useParams(); // Lấy tham số productId từ URL
    const queryClient = useQueryClient();
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (productId) { 
                    const { data } = await instance.get(`/products/${productId}`);
                    form.setFieldsValue(data);
                } else {
                    message.error('ID sản phẩm không hợp lệ.');
                }
            } catch (error) {
                message.error(`Lỗi tải sản phẩm: ${error.response?.data?.message || error.message}`);
            }
        };

        fetchProduct();
    }, [productId, form]);

    const mutation = useMutation({
        mutationFn: async (product) => {
            try {
                if (productId) { 
                    await instance.put(`/products/${productId}`, product);
                } else {
                    throw new Error('ID sản phẩm không hợp lệ.');
                }
            } catch (error) {
                throw error; // Đảm bảo lỗi được xử lý trong onError
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
            message.success('Cập nhật sản phẩm thành công!');
        },
        onError: (error) => {
            message.error(`Cập nhật sản phẩm thất bại: ${error.response?.data?.message || error.message}`);
        },
    });

    const handleFinish = (values) => {
        mutation.mutate(values);
    };

    return (
        <div>
            <h2>Cập Nhật Sản Phẩm</h2>
            <Form form={form} layout="vertical" onFinish={handleFinish}>
                <Form.Item
                    label="Tên Sản Phẩm"
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ảnh Sản Phẩm"
                    name="image"
                    rules={[{ required: true, message: 'Vui lòng nhập URL ảnh sản phẩm!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Giá Sản Phẩm"
                    name="price"
                    rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}>
                    <Input type="number" />
                </Form.Item>
                <Form.Item
                    label="Mô Tả"
                    name="desc">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={mutation.isLoading}>
                        Cập Nhật
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditProduct;
