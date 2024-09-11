# ✨ MBTI TEST 사이트

- **작업 기간** : 24.09.07 ~ 24.09.10

- **페이지 구성**

  - 메인페이지
  - 회원가입
  - 로그인
  - 마이페이지 (닉네임 수정)
  - 테스트 페이지
  - 테스트 결과 페이지

    <br>

- 💻 **기술 스택** <br />

  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
    
    <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>

    <img src="https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white"/>

    <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>

    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>

    <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>

<br>

- <details>
    <summary> 💻 <b>폴더 구조</b></summary>
      <div markdown="1">
        📦src<br>
        ┣ 📂api<br>
        ┃ ┣ 📜auth.js<br>
        ┃ ┗ 📜testResults.js<br>
        ┣ 📂components<br>
        ┃ ┣ 📜AuthForm.jsx<br>
        ┃ ┣ 📜Layout.jsx<br>
        ┃ ┣ 📜ProtectedRoute.jsx<br>
        ┃ ┣ 📜TestForm.jsx<br>
        ┃ ┣ 📜TestResult.jsx<br>
        ┃ ┣ 📜TestResultItem.jsx<br>
        ┃ ┗ 📜TestResultList.jsx<br>
        ┣ 📂context<br>
        ┃ ┗ 📜AuthContext.jsx<br>
        ┣ 📂data<br>
        ┃ ┗ 📜questions.js<br>
        ┣ 📂pages<br>
        ┃ ┣ 📜Home.jsx<br>
        ┃ ┣ 📜Login.jsx<br>
        ┃ ┣ 📜Profile.jsx<br>
        ┃ ┣ 📜Signup.jsx<br>
        ┃ ┣ 📜TestPage.jsx<br>
        ┃ ┗ 📜TestResultPage.jsx<br>
        ┣ 📂shared<br>
        ┃ ┗ 📜Router.jsx<br>
        ┣ 📂utils<br>
        ┃ ┗ 📜mbtiCalculator.jsx<br>
        ┣ 📜App.css<br>
        ┣ 📜App.jsx<br>
        ┣ 📜index.css<br>
        ┗ 📜main.jsx<br>
      </div>
      </details>

<br>
<br>

## 🥳 최종 화면

![움짤](https://github.com/user-attachments/assets/c5d1ca76-01b7-48f3-acc5-154178cf1420)

### 메인페이지

<img width="1440" alt="메인페이지" src="https://github.com/user-attachments/assets/73ae86db-be98-4481-80ac-e1f1ae92bcfb">

<br>

### 회원가입 페이지

<img width="1440" alt="회원가입" src="https://github.com/user-attachments/assets/46e7bc8e-6b6e-4db8-8d49-d9d001f0d0cf">

<br>

### 로그인 페이지

<img width="1440" alt="로그인" src="https://github.com/user-attachments/assets/d4bbd800-c9e2-461a-bdf1-16bcf9982d5b">

<br>

### 마이페이지

<img width="1440" alt="프로필 변경" src="https://github.com/user-attachments/assets/8b6613d5-fc83-4997-86cb-d9f1d32ab02d">

<br>

### 테스트 결과

<img width="1440" alt="테스트 결과 확인" src="https://github.com/user-attachments/assets/56ad5e4b-852e-4ddd-b521-9d1e549be34f">

<br>

### 결과 삭제 확인

<img width="1440" alt="결과 삭제 확인" src="https://github.com/user-attachments/assets/ed3e095e-e85d-403d-92d7-5f90400ddd99">

<br>
<br>

## 🔥 트러블슈팅

[1. 로그인 트러블 슈팅](https://velog.io/@duddlfkd02/MBTI-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B0%9C%EC%9D%B8%EA%B3%BC%EC%A0%9C-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-%EB%A1%9C%EA%B7%B8%EC%9D%B8)

[2. 회원가입 트러블 슈팅](https://velog.io/@duddlfkd02/MBTI-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B0%9C%EC%9D%B8%EA%B3%BC%EC%A0%9C-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85)

<br>
<br>

## 🫨 회고

1. `moneyful` 서버와 통신하는 과정을 이해하고 정확히 필요한 값을 `response` `data`에서 불러오는 방법이 너무 어려웠습니다.
   401, 404 에러를 수없이 만나면서 속상하고 복잡했지만 이번 과제를 통해 데이터를 주고 받는 과정을 이해하고 배울 수 있었습니다.

2. `tailwind css`의 빠르고 편리한 부분을 잘 활용하지 못한 것 같습니다. 시간을 단축해서 사용할 수 있도록 정리된 문서가 있는지, 효율적으로 활용할 수 있는 방법은 없는지 찾아볼 필요를 느꼈습니다.

3. 시간이 부족해서 UX적인 측면을 고려한 기능을 넣지 못해 아쉽습니다. `alert` 등으로 가입 여부 등을 알려주는 부분을 리팩토링 하고, 작업 시 시간 배분과 속도 조절 필요를 다시 한 번 느꼈습니다.
