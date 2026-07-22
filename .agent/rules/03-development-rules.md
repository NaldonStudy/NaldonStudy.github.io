# 코드 및 개발 규칙

## 정적 배포 제약 준수
* Github Pages를 이용한 **정적 배포**가 최종 목적이므로, 프론트엔드 기능만 구현하십시오.
* 정적 배포(`output: 'export'`)를 목표로 하므로, Server Actions, Route Handlers (API), 동적 SSR 렌더링 등 서버 측 기능은 절대 사용하지 마십시오.

## 엄격한 타입 안전성
* TypeScript 코드 작성 시 `any` 타입 사용을 절대 금지하며, 항상 적절한 Interface나 Type을 정의하십시오.

## 의존성 및 UI 컴포넌트
* 프로젝트에 이미 설치된 shadcn/ui 컴포넌트(`components/ui` 폴더)를 최대한 활용하여 UI를 구성하십시오.

## 에셋 사용 우선순위
* 아이콘이나 이미지 등이 필요한 경우, 프로젝트에 직접 추가된 커스텀 로컬 에셋(`public/` 또는 `assets/` 등)의 존재 여부를 먼저 확인하고 최우선으로 사용하십시오.
* 해당 에셋이 없을 경우에만 `lucide-react` 등 외부 라이브러리를 사용하십시오.

## 컴포넌트 폴더 구조 (Atomic Design)
* 커스텀 컴포넌트를 생성할 때는 Atomic Design 패턴(atoms, molecules, organisms, templates)을 준수하여 `components/` 폴더 하위에 구성하십시오.
* 단, `shadcn/ui`가 설치되는 `components/ui/` 디렉토리는 `atoms` 계층으로 취급하며, `pages` 계층은 Next.js의 `app/` 디렉토리 라우팅으로 대체합니다.
