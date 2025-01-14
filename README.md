<a href="https://github.com/riinti/Respcam" target="_blank">
  <img src="https://github.com/riinti/Respcam/blob/main/readme_img/RespCamCover.png" alt="배너" width="100%"/>
</a>

<br/>
<br/>

# Respcam (A팀)
- 2024 제3회 SM@ COSSTHON

<div align="left">
  <img src="https://github.com/riinti/Respcam/blob/main/readme_img/manual.jpg" width="300px"/>
</div>

<br/>
<br/>

# 1. Project Overview
- 프로젝트 이름: Respcam
- 프로젝트 설명: 호흡기 질환 예방 및 관리를 위한 카메라 기반 홈케어 서비스

<br/>
<br/>

# 2. Team Members
| 김민수 | 김민진 | 김정찬 | 이연송 |
|:------:|:------:|:------:|:------:|

<br/>
<br/>

# 3. Key Features
- **집, 개인 상태관리**:
  - 환기 횟수, 애완동물의 움직임 정도, 외출 횟수를 표시합니다.
  - 개개인마다 주방에 머무르는 시간, 기침의 횟수를 표시합니다.

- **새로운 구성원 추가**:
  - 설문조사 페이지를 통해 새로운 구성원 추가가 가능합니다.

- **위험 상황 경고**:
  - 알림 페이지를 통해 공기청정기, 집진기 등의 기기 작동여부를 확인할 수 있습니다.
  - 개개인의 위험여부와 대처방안을 제시합니다.

<br/>
<br/>


<!--
# 4. Tasks & Responsibilities
|  |  |
|-----------------|-----------------|
| 김민수    | <ul><li>프론트 웹 개발</li></ul>     |
| 김민진   | <ul><li>ppt 제작</li><li>시장분석</li></ul> |
| 김정찬   |  <ul><li>PM</li><li>수익계산</li></ul>  |
| 이연송    |  <ul><li>웹 디자</li><li>마케팅 전략 수립</li></ul>    | 

<br/>
<br/>
-->

# 4. Technology
### 4.1 YOLO (you only look once)
- **사람 및 동물, 사물 감지**:
  - 환기 횟수, 애완동물의 움직임 정도, 외출 횟수 수집
  - 개개인마다 주방에 머무르는 시간 수집

### 4.2 MediaPipe, OpenCV
- **실시간 얼굴 메쉬 감지(Face Mesh Detection)**:
  - 기침 횟수 수집
  
<br/>
<br/>

# 5. Project Structure
```plaintext
project/
├── public/
│   ├── img/
│   │   ├── button_icon/     # 사이드바 아이콘 이미지
│   │   ├── icon/            # 아이콘 이미지
│   │   └── main_logo.png    # 매인 로고 아이콘
│   ├── favicon.ico          # 로고 아이콘
│   ├── index.html
│   └── manifest.json          
├── src/
│   ├── components/          # 재사용 가능한 UI 컴포넌트
│   │   └── Sidebar.tsx
│   ├── tabs/                # 각 페이지별 컴포넌트
│   │   ├── alarm.tsx
│   │   ├── main.tsx
│   │   ├── mypage.tsx
│   │   ├── set.tsx
│   │   └── survey.tsx
│   ├── App.css
│   ├── App.js
│   ├── App.test.js 
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

<br/>
<br/>

# 6. Demo Video
![Demo GIF](https://github.com/riinti/Respcam/blob/main/readme_img/RespCamDemoVideo.gif)
