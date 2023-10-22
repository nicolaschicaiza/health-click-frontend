import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useNavigate } from "react-router";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function SignInRegistrationPage() {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    navigate('/home');
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
      <Row justify="center" align="middle" gutter={32}>
        <Col style={{ textAlign: "end" }}>
          <h1 style={{ margin: '-10px', fontSize: '42px' }}>HealthClick</h1>
          <p style={{ fontSize: '18px' }}>Helper Our Patiente</p>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: 'gray' }}>By The4</p>
          </div>
        </Col>
        <Col span="12">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
