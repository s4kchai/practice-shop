import React, { useState, useRef, useMemo } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";
const { Content } = Layout;
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const renderCount = useRef(0);
  const [ignored, setIgnored] = useState(0);

  const incrementRef = () => {
    renderCount.current += 1;
    console.log("กดเพิ่ม ref:", renderCount.current);
  };

  const forceRender = () => {
    setIgnored(ignored + 1);
    console.log("บังคับ render, ref:", renderCount.current);
  };
  const [count, setCount] = useState(0);
  const isEven = useMemo(() => {
    console.log("คำนวณ isEven");
    return count % 2 === 0;
  }, [count]);

  return (
    <Layout>
      <Layout>
        <Navbar collapsed={collapsed} />
        <Header collapsed={collapsed} toggleCollapsed={() => setCollapsed(!collapsed)} />
        {/* <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            minWidth: 600,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content> */}
        <div>
          <button onClick={incrementRef}>เพิ่ม ref (ไม่ render)</button>
          <button onClick={forceRender}>บังคับ render</button>
          <p>Ref เก็บค่า: {renderCount.current}</p>
        </div>

        <div>
          <p>
            {count} → {isEven ? "คู่" : "คี่"}
          </p>
          <button onClick={() => setCount(count + 1)}>เพิ่ม 1</button>
        </div>
      </Layout>
    </Layout>
  );
};
export default App;
