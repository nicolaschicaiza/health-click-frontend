import { ReactNode } from 'react';
import NavBar from '../components/NavBar';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

interface TemplateProps {
  children: ReactNode
}

export function Template({ children }: TemplateProps) {
  return (
    <Layout className="layout">
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
        <div className="site-layout-content" style={{ backgroundColor: "#001529", width: "100%", maxWidth: "1920px" }}>
          {children} {/* Rederizar los componentes secundarios, el contenido */}
        </div>
      </Content>
      <NavBar />
    </Layout >
  )
}

