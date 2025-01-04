import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function Alarm() {
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
          <h1 style={styles.title}>Notification</h1>
          <p style={styles.date}>August 12, 2021</p>
        </div>
        {/* 알림 리스트 */}
        <div style={styles.notificationItem}>
          <div style={styles.notificationHeader}>
            <span style={styles.applicationName}>RespCam</span>
            <span style={styles.notificationTime}>now</span>
          </div>
          <div style={styles.notificationBody}>
            <strong>Jessica, get out of the kitchen and ventilate</strong>
            <p style={styles.notificationDescription}>
              You've been in the kitchen for too long and haven't been
              ventilated for too long.
            </p>
          </div>
        </div>

        <div style={styles.notificationItem}>
          <div style={styles.notificationHeader}>
            <span style={styles.applicationName}>RespCam</span>
            <span style={styles.notificationTime}>12 minute ago</span>
          </div>
          <div style={styles.notificationBody}>
            <strong>The air purifier is running</strong>
          </div>
        </div>

        <div style={styles.notificationItem}>
          <div style={styles.notificationHeader}>
            <span style={styles.applicationName}>RespCam</span>
            <span style={styles.notificationTime}>an hour ago</span>
          </div>
          <div style={styles.notificationBody}>
            <strong>Allergic reaction</strong>
            <p style={styles.notificationDescription}>
              Looking at the home environment, it can cause allergic reactions.
            </p>
          </div>
        </div>

        <div style={styles.notificationItem}>
          <div style={styles.notificationHeader}>
            <span style={styles.applicationName}>RespCam</span>
            <span style={styles.notificationTime}>an day ago</span>
          </div>
          <div style={styles.notificationBody}>
            <strong>Allergic reaction</strong>
            <p style={styles.notificationDescription}>
              Looking at the home environment, it can cause allergic reactions.
            </p>
          </div>
        </div>

        <div style={styles.notificationItem}>
          <div style={styles.notificationHeader}>
            <span style={styles.applicationName}>RespCam</span>
            <span style={styles.notificationTime}>2 days ago</span>
          </div>
          <div style={styles.notificationBody}>
            <strong>The air purifier is running</strong>
          </div>
        </div>

        <div style={styles.notificationItem}>
          <div style={styles.notificationHeader}>
            <span style={styles.applicationName}>RespCam</span>
            <span style={styles.notificationTime}>2 days ago</span>
          </div>
          <div style={styles.notificationBody}>
            <strong>House ventilation required</strong>
            <p style={styles.notificationDescription}>
              Co2 is over 1000ppm and pm10 is over 50 μg/m³. We need ventilation
            </p>
          </div>
        </div>

        <div style={styles.notificationItem}>
          <div style={styles.notificationHeader}>
            <span style={styles.applicationName}>RespCam</span>
            <span style={styles.notificationTime}>a week ago</span>
          </div>
          <div style={styles.notificationBody}>
            <strong>...</strong>
            <p style={styles.notificationDescription}>...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  header: {
    marginBottom: "10px",
  },
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
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  date: {
    fontSize: "14px",
    color: "#888",
    margin: 0,
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
  cardTitle: {
    marginBottom: "10px",
    fontWeight: "bold",
  },
  notificationItem: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  notificationHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
    fontSize: "14px",
  },
  applicationName: {
    fontWeight: "bold",
    color: "#f8a042",
  },
  notificationTime: {
    color: "#888",
  },
  notificationBody: {
    marginTop: "5px",
  },
  notificationDescription: {
    margin: "5px 0 0",
    fontSize: "13px",
    color: "#666",
  },
  scanButton: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#d1f5ec",
    borderRadius: "10px",
    border: "none",
    color: "#555",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "center" as const,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
};
