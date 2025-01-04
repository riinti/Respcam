import { Link, useLocation } from "react-router-dom";
import React from "react";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function MyPage() {
  const location = useLocation();
  const navItems = [
    {
      path: "/mypage",
      icon: "mypage_img.png",
      selectedIcon: "mypage_w.png",
    },
    {
      path: "/alarm",
      icon: "alarm_img.png",
      selectedIcon: "alarm_w.png",
    },
    { path: "/", icon: "home_img.png", selectedIcon: "home_w.png" },
    {
      path: "/survey",
      icon: "survey_img.png",
      selectedIcon: "survey_w.png",
    },
    {
      path: "/setting",
      icon: "set_img.png",
      selectedIcon: "set_w.png",
    },
  ];

  const ventilationData = [
    {
      name: "Day A",
      pv: 6,
    },
    {
      name: "Day B",
      pv: 7,
    },
    {
      name: "Day C",
      pv: 6,
    },
    {
      name: "Day D",
      pv: 7,
    },
    {
      name: "Day E",
      pv: 8,
    },
    {
      name: "Day F",
      pv: 6,
    },
    {
      name: "Day G",
      pv: 7,
    },
  ];
  const AnimalData = [
    {
      name: "Day A",
      pv: 6,
    },
    {
      name: "Day B",
      pv: 6,
    },
    {
      name: "Day C",
      pv: 5,
    },
    {
      name: "Day D",
      pv: 6,
    },
    {
      name: "Day E",
      pv: 7,
    },
    {
      name: "Day F",
      pv: 7,
    },
    {
      name: "Day G",
      pv: 8,
    },
  ];
  const outData = [
    {
      name: "Day A",
      pv: 7,
    },
    {
      name: "Day B",
      pv: 6,
    },
    {
      name: "Day C",
      pv: 8,
    },
    {
      name: "Day D",
      pv: 7,
    },
    {
      name: "Day E",
      pv: 6,
    },
    {
      name: "Day F",
      pv: 7,
    },
    {
      name: "Day G",
      pv: 6,
    },
  ];
  const kitchendata1 = [
    { name: "fill1", value: 30 },
    { name: "empty1", value: 70 },
    { name: "empty2", value: 30 },
    { name: "fill12", value: 70 },
  ];
  const kitchendata2 = [
    { name: "fill1", value: 50 },
    { name: "empty1", value: 50 },
    { name: "empty2", value: 70 },
    { name: "fill12", value: 30 },
  ];
  const COLORS1 = ["#478F96", "#E9EDF0", "#E9EDF0", "#9084C6"];
  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <Link to="/">
          <button style={styles.logobutton}>
            <img src="../../img/main_logo.png" alt="Logo" style={styles.logo} />
          </button>
        </Link>
        <div style={styles.navContainer}>
          {navItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <button
                style={{
                  ...styles.button,
                  ...(location.pathname === item.path
                    ? styles.selectediconButton
                    : {}),
                }}
              >
                <img
                  src={
                    location.pathname === item.path
                      ? `../../img/button_icon/${item.selectedIcon}`
                      : `../../img/button_icon/${item.icon}`
                  }
                  alt={`Icon ${index + 1}`}
                  style={styles.icon}
                />
              </button>
            </Link>
          ))}
        </div>
        {/* Logout Button */}
        <button style={styles.button}>
          <img
            src="../../img/button_icon/logout_img.png"
            alt="Log Out"
            style={styles.icon}
          />
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>RespCam</h1>
          <p style={styles.date}>August 24, 2024</p>
        </div>

        {/* Cards Section */}
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <img
                src="../../img/icon/ventilation.png"
                alt="Icon"
                style={styles.cardIcon}
              />
              <p style={styles.cardTitle}>Number of ventilation frequencies</p>
            </div>
            <h2 style={styles.cardValue}>
              3 <span style={styles.cardUnit}>times</span>
            </h2>
            <p style={styles.cardStatusNormal}>Normal</p>
            {/* <img
              src="../../img/icon/nomal.png"
              alt="Graph"
              style={styles.cardGraph}
            /> */}
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={280}
                height={60}
                data={ventilationData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#F3A53F"
                  fill="#F8DEBD"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <img
                src="../../img/icon/animal.png"
                alt="Icon"
                style={styles.cardIcon}
              />
              <p style={styles.cardTitle}>Animal Movement Time</p>
            </div>
            <h2 style={styles.cardValue}>
              8 <span style={styles.cardUnit}>hours</span>
            </h2>
            <p style={styles.cardStatusHigh}>High</p>
            {/* <img
              src="../../img/icon/high.png"
              alt="Graph"
              style={styles.cardGraph}
            /> */}
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={280}
                height={60}
                data={AnimalData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#CA6B6E"
                  fill="#E0B9BA"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <img
                src="../../img/icon/out.png"
                alt="Icon"
                style={styles.cardIcon}
              />
              <p style={styles.cardTitle}>Number of times to go out</p>
            </div>
            <h2 style={styles.cardValue}>
              4 <span style={styles.cardUnit}>times</span>
            </h2>
            <p style={styles.cardStatusNormal}>Normal</p>
            {/* <img
              src="../../img/icon/bhigh.png"
              alt="Graph"
              style={styles.cardGraph}
            /> */}
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={280}
                height={60}
                data={outData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#478F96"
                  fill="#D0FBFF"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Profiles Section */}
        <div style={styles.userContainer}>
          <div>
            <div style={styles.userCard}>
              <img
                src="../../img/icon/john.png"
                alt="John"
                style={styles.userImage}
              />
              <p style={styles.userName}>John</p>
              <div style={styles.dotGroup}>
                <div style={styles.dotPurple} />
              </div>
            </div>
            <br />
            <div style={styles.graphCard}>
              <p style={styles.graphTitle}>Stay time in the kitchen</p>
              <ResponsiveContainer width="100%" height={165}>
                <PieChart>
                  <Pie
                    data={kitchendata1}
                    startAngle={538}
                    endAngle={182}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {kitchendata1.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS1[index % COLORS1.length]}
                      />
                    ))}
                  </Pie>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="16"
                    fontWeight="bold"
                    fill="#333"
                  >
                    <tspan x="50%" dy="-20">
                      3 hours
                    </tspan>
                    <tspan x="50%" dy="20">
                      /
                    </tspan>
                    <tspan x="50%" dy="20">
                      7 times
                    </tspan>
                  </text>
                </PieChart>
              </ResponsiveContainer>
              <p style={styles.graphTitle}>the number of coughs</p>
              <p style={styles.graphDetail}>Asthma, Allergic to dust at home</p>
            </div>
          </div>

          <div>
            <div style={styles.userCard}>
              <img
                src="../../img/icon/jessica.png"
                alt="Jessica"
                style={styles.userImage}
              />
              <p style={styles.userName}>Jessica</p>
              <div style={styles.dotGroup}>
                <div style={styles.dotPink} />
                <div style={styles.dotGreen} />
              </div>
            </div>
            <br />
            <div style={styles.graphCard}>
              <p style={styles.graphTitle}>Stay time in the kitchen</p>
              <ResponsiveContainer width="100%" height={165}>
                <PieChart>
                  <Pie
                    data={kitchendata2}
                    startAngle={538}
                    endAngle={182}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {kitchendata1.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS1[index % COLORS1.length]}
                      />
                    ))}
                  </Pie>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="16"
                    fontWeight="bold"
                    fill="#333"
                  >
                    <tspan x="50%" dy="-20">
                      5 hours
                    </tspan>
                    <tspan x="50%" dy="20">
                      /
                    </tspan>
                    <tspan x="50%" dy="20">
                      3 times
                    </tspan>
                  </text>
                </PieChart>
              </ResponsiveContainer>
              <p style={styles.graphTitle}>the number of coughs</p>
              <p style={styles.graphDetail}>An allergy to dog hair</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Styles */
const styles = {
  layout: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#FFFCF8",
  },
  sidebar: {
    width: "70px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 0",
    borderRight: "1px solid #d9d9d9",
  },
  logobutton: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "10px",
  },
  selectediconButton: {
    backgroundColor: "#313131",
    borderRadius: "8px",
    padding: "10px",
  },
  logo: {
    width: "40px",
    marginBottom: "20px",
  },
  navContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "55px",
  },
  icon: {
    width: "25px",
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fff9f3",
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  header: {
    marginBottom: "15px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  date: {
    fontSize: "12px",
    color: "#888",
    margin: 0,
  },

  cardContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "0px",
    padding: "0 100px",
    overflow: "hidden",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center" as const,
    flex: 1,
    maxWidth: "280px", // 그래프 카드 최대 너비 증가
    maxHeight: "280px",
  },
  cardHeader: {
    marginBottom: "8px",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: "18px",
    margin: "4px 0",
  },
  cardValue: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "6px 0",
  },
  userContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2px",
    padding: "0 100px",
    overflow: "hidden",
  },
  userCard: {
    textAlign: "center" as const,
    flex: 1,
    width: "280px",
  },
  userName: {
    margin: "4px auto 8px",
    fontWeight: "bold",
    fontSize: "15px",
  },
  dotPurple: {
    backgroundColor: "#9c27b0",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
  },
  cardUnit: {
    fontSize: "15px",
    color: "#888",
    marginLeft: "2px",
  },
  cardStatusNormal: {
    color: "#42a5f5",
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "3px",
  },
  cardStatusHigh: {
    color: "#f44336",
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "3px",
  },
  dotGroup: {
    display: "flex",
    gap: "4px",
    justifyContent: "center",
    marginTop: "0px",
  },
  dotPink: {
    backgroundColor: "#e91e63",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
  },
  dotGreen: {
    backgroundColor: "#4caf50",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
  },
  dotOrange: {
    backgroundColor: "#ffa726",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
  },
  userImage: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover" as const,
    border: "2px solid #ddd",
    margin: "0 auto",
  },
  cardGraph: {
    width: "100%",
    marginTop: "1px",
    objectFit: "contain" as const,
    height: "60px",
  },
  cardIcon: {
    width: "35px",
    height: "35px",
    objectFit: "contain" as const,
    marginBottom: "6px",
  },
  graphContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2px",
    padding: "0 100px",
  },
  graphCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center" as const,
    flex: 1,
    maxWidth: "280px",
  },
  graphTitle: {
    fontWeight: "bold",
    fontSize: "15px",
    marginBottom: "6px",
  },
  graphValue: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "3px 0",
  },
  graphUnit: {
    fontSize: "15px",
    color: "#888",
  },
  graphDetail: {
    marginTop: "8px",
    fontSize: "13px",
    color: "#888",
  },
};
