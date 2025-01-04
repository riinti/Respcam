import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "70px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px 0",
        borderRight: "1px solid #d9d9d9",
      }}
    >
      {/* 로고 */}
      <Link to="/">
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src="../../img/main_logo.png"
            alt="Logo"
            style={{
              width: "40px",
              marginBottom: "20px",
            }}
          />
        </button>
      </Link>

      {/* 네비게이션 버튼 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "55px",
        }}
      >
        {[
          { path: "/mypage", icon: "mypage_img.png" },
          { path: "/alarm", icon: "alarm_img.png" },
          { path: "/", icon: "home_img.png" },
          { path: "/survey", icon: "survey_img.png" },
          { path: "/setting", icon: "set_img.png" },
        ].map((item, index) => (
          <Link key={index} to={item.path}>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={`../../img/button_icon/${item.icon}`}
                alt={`Icon ${index + 1}`}
                style={{
                  width: "25px",
                }}
              />
            </button>
          </Link>
        ))}
      </div>

      {/* 로그아웃 버튼 */}
      <Link to="/logout">
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src="../../img/button_icon/logout_img.png"
            alt="Log Out"
            style={{
              width: "25px",
            }}
          />
        </button>
      </Link>
    </div>
  );
}
