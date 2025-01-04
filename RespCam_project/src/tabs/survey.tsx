import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Survey() {
  localStorage.removeItem("formData");

  const navigate = useNavigate();
  const location = useLocation();

  // const [selectedGender, setSelectedGender] = useState<string | null>(null);
  // const [selectedPet, setSelectedPet] = useState<string | null>(null);
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
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<string | null>(null);
  const [disease, setDisease] = useState("");
  const [allergy, setAllergy] = useState("");
  const [pet, setPet] = useState<string | null>(null);

  // 페이지 로드 시 localStorage에서 값 불러오기
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData") || "{}");
    if (savedData) {
      setName(savedData.name || "");
      setAge(savedData.age || "");
      setGender(savedData.gender || null);
      setDisease(savedData.disease || "");
      setAllergy(savedData.allergy || "");
      setPet(savedData.pet || null);
    }
  }, []);

  // 폼 데이터 저장
  const handleFinishClick = () => {
    const formData = {
      name,
      age,
      gender,
      disease,
      allergy,
      pet,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    alert("It's been added!");
    navigate("/");
  };

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
          <h1 style={styles.title}>Survey</h1>
          <p style={styles.date}>August 12, 2021</p>
        </div>

        {/* Banner */}
        <div style={styles.banner}>
          <p>Thank you for taking part 🥰</p>
          <p>Please do a survey for better service.</p>
        </div>

        {/* Form */}
        <form style={styles.form}>
          <div style={styles.leftColumn}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>1. Enter Name.</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>2. Enter your age.</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>3. Gender Selection</label>
              <div style={styles.genderSelection}>
                {["M", "F"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    style={{
                      ...styles.genderButton,
                      ...(gender === g ? styles.selectedButton : {}),
                    }}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.rightColumn}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>4. Enter underlying disease.</label>
              <input
                type="text"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>5. Enter Allergy.</label>
              <input
                type="text"
                value={allergy}
                onChange={(e) => setAllergy(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>6. Do you have any pets.</label>
              <div style={styles.petSelection}>
                {["Dog", "Cat", "Others", "Nobody"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPet(p)}
                    style={{
                      ...styles.petButton,
                      ...(pet === p ? styles.selectedButton : {}),
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.finishContainer}>
            <button
              style={styles.finishButton}
              type="button"
              onClick={handleFinishClick}
            >
              Finish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
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
  banner: {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    textAlign: "center" as const,
    borderRadius: "4px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "5px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    padding: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  genderSelection: {
    display: "flex",
    gap: "10px",
  },
  genderButton: {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    cursor: "pointer",
    backgroundColor: "#fff",
    fontSize: "14px",
  },
  petSelection: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  petButton: {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    cursor: "pointer",
    backgroundColor: "#fff",
    fontSize: "14px",
  },
  selectedButton: {
    backgroundColor: "#313131",
    color: "white",
  },
  finishButton: {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#d1f5ec",
    cursor: "pointer",
    fontSize: "14px",
  },
  finishContainer: {
    marginTop: "20px",
  },
  leftColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },
  rightColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },
};
