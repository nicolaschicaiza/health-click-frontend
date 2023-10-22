import { AudioOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

interface IOptionMenu {
  key: string;
  label: string;
  path: string;
}

const options: IOptionMenu[] = [
  { key: "summary", label: "Clinical Summary", path: "/summary" },
  { key: "consultation", label: "Immediate Consultation", path: "/consultation" },
  { key: "download", label: "Download Clinical History", path: "/download" },
]


export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOption, setFilteredOptions] = useState(options);
  const navigate = useNavigate();


  const onSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = options.filter(option =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered)
  }

  const onMenuClick = ({ key }: { key: string }) => {
    const selectedOption = options.find(option => option.key === key);
    if (selectedOption) {
      console.log(`Opción seleccionada: ${selectedOption.label}`);
      setSearchTerm(selectedOption.label);
      navigate(selectedOption.path);
    }
  }

  const menu = (
    <Menu onClick={onMenuClick}>
      {filteredOption.map(option => (
        <Menu.Item key={option.key}>{option.label}</Menu.Item>
      ))}
    </Menu>
  )

  const suffix = (
    <Button
      type="link"
      icon={<AudioOutlined style={{ fontSize: 16 }} />}
      onClick={() => navigate('/radisys')}
    />
  );

  return (
    <Dropdown overlay={menu}>
      <Input placeholder="View options" allowClear value={searchTerm} suffix={suffix} size={'large'} onChange={(e) => onSearch(e.target.value)}>
      </Input>
    </Dropdown>
  )
}
