// import React, { useState } from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../../../Redux/Action/actionCreators';

// const Resgiter = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (values) => {
//     const newUser = { 
//       name: values.username, // Lưu username từ values
//       email: values.email,   // Lưu email từ values
//       password: pass         // Lưu password từ state
//     };
    
//     dispatch(addUser(newUser));
//     console.log(values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold text-gray-800 my-4">Đăng Ký Tài Khoản</h1>
//       <Form
//         name="basic"
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 16 }}
//         className="max-w-md mx-auto my-8"
//         initialValues={{ remember: true }}
//         onFinish={handleSubmit}
//         onFinishFailed={onFinishFailed}
//       >
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[{ required: true, message: 'Please input your username!' }]}
//         >
//           <Input
//             className="border rounded-md"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </Form.Item>

//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, message: 'Please input your email!' }]}
//         >
//           <Input
//             className="border rounded-md"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: 'Please input your password!' }]}
//         >
//           <Input.Password
//             className="border rounded-md"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             required
//           />
//         </Form.Item>

//         <Form.Item
//           name="remember"
//           valuePropName="checked"
//           wrapperCol={{ offset: 8, span: 16 }}
//         >
//           <Checkbox className="text-sm">Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//           <Button type="primary" htmlType="submit" className="bg-blue-500 hover:bg-blue-700">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Resgiter;
