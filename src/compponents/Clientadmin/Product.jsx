import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import instance from '../../axios';
import { Table, Popconfirm, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
const Product = (productId) => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => instance.get('/products'),
  });

  const mutation = useMutation({
    mutationFn: async (id) => {
      await instance.delete(`/products/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
      notification.success({
        message: 'Thành công',
        description: 'Sản phẩm đã được xóa thành công.',
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Lỗi',
        description: `Xóa sản phẩm thất bại: ${error.message}`,
      });
    },
  });

  const handleDelete = (id) => mutation.mutate(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const columns = [
    {
      title: 'Ảnh Sản Phẩm',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <div>
          <img src={image} style={{ width: 200, height: 200, objectFit: 'cover' }} alt="Product" />
        </div>
      ),
    },
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá Sản Phẩm',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, product) => (
        <Popconfirm
          title="Bạn có chắc chắn muốn xóa không?"
          onConfirm={() => handleDelete(product.id)}
          okText="Có"
          cancelText="Không"
        >
          <Button danger>Xóa</Button>
          <Link to={`/admin/editproduct/${product.id}`}>
            <Button type="primary">Sửa</Button>
          </Link>
        </Popconfirm>

      ),

    },
  ];

  const dataSource = data?.data.map((product) => ({
    key: product.id,
    ...product,
  }));

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Product;
