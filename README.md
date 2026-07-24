# 개발자 김도훈 (Dohun Kim) | Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-9.x-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Last Updated](https://img.shields.io/badge/Last_Updated-2026--07--24-blue?style=for-the-badge&logo=github)

<br />

**다국어 지원 및 대화형 인터랙션을 갖춘 개발자 김도훈(Dohun Kim)의 포트폴리오 & 이력서 웹사이트**  
*(Developer Dohun Kim's Interactive Portfolio & Resume)*

### 🌐 [https://naldonstudy.github.io](https://naldonstudy.github.io)

📅 **최근 업데이트 날짜**: 2026년 7월 24일

</div>

---

## 📌 소개 (Overview)

**[김도훈 포트폴리오 웹사이트](https://naldonstudy.github.io)**는 Next.js 16 (App Router) 기반으로 제작된 개인 포트폴리오 & 이력서 웹사이트입니다.  
방문자의 브라우저 언어 감지를 통한 **다국어(한국어/영어) 지원**, IDE 컨셉의 로딩 스크린, 이력을 직관적으로 확인할 수 있는 **칸반 보드(Kanban Board)** 형태의 타임라인 등 세련되고 인터랙티브한 웹 경험을 제공합니다.

---

## ✨ 핵심 기능 (Key Features)

- 🌐 **자동 언어 감지 & i18n 지원**: 방문자 브라우저 언어(ko/en)에 따라 자동 리다이렉트 및 언어 변경 기능 제공
- 💻 **IDE 컨셉 로딩 스크린**: 개발자 정체성을 살린 독창적인 커스텀 로딩 애니메이션
- 📋 **이력 칸반 보드 (History Kanban)**: 주요 경력 및 학습 히스토리를 칸반 카드 형태로 감상
- 🛠️ **기술 스택 & 프로젝트 갤러리**: 다양한 프로젝트와 핵심 역량을 인터랙티브하게 소개
- 🎨 **반응형 & 모던 UI**: Framer Motion 기반의 미려한 애니메이션 및 Tailwind CSS v4 활용
- ⚡ **Static Export**: GitHub Pages 환경에 최적화된 정적 배포 파이프라인

---

## 🛠️ 기술 스택 (Tech Stack)

### Frontend & Core
- **Framework**: Next.js 16 (App Router, Static Export)
- **Library**: React 19
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS v4, Radix UI, Class Variance Authority (CVA), Lucide Icons
- **Animation**: Framer Motion
- **Package Manager**: pnpm

---

## 📁 프로젝트 구조 (Project Structure)

```text
NaldonStudy.github.io/
├── app/
│   ├── (home)/               # 루트 진입점 (언어 자동 감지 및 리다이렉트)
│   └── (main)/[lang]/        # 메인 페이지 (ko/en 다국어 라우트)
├── components/
│   ├── atoms/                # 원자 단위 최소 UI 컴포넌트
│   ├── molecules/            # 복합 UI 컴포넌트
│   ├── organisms/            # 독립적 기능 단위 섹션 (Hero, About, Kanban, Skills, Projects 등)
│   └── ui/                   # Radix / Shadcn 기반 공통 UI
├── config/                   # 다국어(i18n) 텍스트 데이터 및 설정
├── hooks/                    # 커스텀 React Hooks
├── lib/                      # 유틸리티 함수
├── public/                   # 정적 자원 (이미지, 파비콘 등)
└── styles/                   # 전역 CSS 스타일
```

---

## 🚀 시작하기 (Getting Started)

### 1. 저장소 클론 및 패키지 설치

```bash
git clone https://github.com/NaldonStudy/NaldonStudy.github.io.git
cd NaldonStudy.github.io
pnpm install
```

### 2. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 `http://localhost:3000` 로 접속하여 개발 버전을 확인합니다.

### 3. 정적 빌드 (Export)

```bash
pnpm build
```

빌드가 완료되면 `/out` 디렉토리에 정적 배포용 웹자원이 생성됩니다.

---

## 📝 라이선스 & 문의 (License & Contact)

- **Owner / Developer**: 김도훈 (Dohun Kim)
- **Live Site**: [https://naldonstudy.github.io](https://naldonstudy.github.io)
- **GitHub Repository**: [NaldonStudy/NaldonStudy.github.io](https://github.com/NaldonStudy/NaldonStudy.github.io)
- **GitHub Profile**: [@NaldonStudy](https://github.com/NaldonStudy)


