import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Dropdown, Menu, Row } from "antd";
import { useNavigate } from "react-router";

type perfilButtonProps = {
  name: string
}

interface IOptionMenu {
  key: string;
  danger: boolean;
  label: React.ReactNode;
  path: string;
}


const items: IOptionMenu[] = [
  {
    key: '1',
    danger: false,
    label: (
      <div>
        <UserOutlined /> Perfil
      </div>
    ),
    path: '/perfil'
  },
  {
    key: '2',
    danger: true,
    label: (
      <div>
        < LogoutOutlined /> Logout
      </div >
    ),
    path: '/login'
  },

];

export default function PerfilButton({ name }: perfilButtonProps) {
  const navigate = useNavigate();

  const onMenuClick = ({ key }: { key: string }) => {
    const selectedOption = items?.find(option => option?.key === key);
    if (selectedOption && selectedOption.key === '2') {
      console.log("Cerrar sesión");
    }
    navigate(selectedOption?.path ?? "", undefined);
  }

  const menu = (
    <Menu onClick={onMenuClick}>
      {items && items.map(option => (
        <Menu.Item key={option?.key} danger={option.danger}>{option?.label}</Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Row justify={'start'}>
      <Col span={24}>
        <Row justify={'end'} align={'middle'}>
          <Dropdown overlay={menu}>
            <Button type={'link'} ghost>
              <Row justify={'space-between'} align={'middle'} gutter={6}>
                <Col style={{ color: 'white' }}>
                  {name}
                </Col>
                <Col >
                  <Avatar size={'small'} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} icon={<UserOutlined />} />
                </Col>
              </Row>
            </Button>
          </Dropdown>
        </Row>
      </Col >
    </Row >
  )
}
