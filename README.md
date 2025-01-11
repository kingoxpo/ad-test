```markdown
# Adrop Test Advertisement API Project

광고 테스트를 위한 NestJS 기반 API 프로젝트입니다.

## 설치 및 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run start:dev

# 테스트 실행
npm run test

# 테스트 커버리지 확인
npm run test:cov

# 테스트 감시 모드 실행
npm run test:watch
```

## API 엔드포인트

테스트 광고 요청:
```bash
# 로컬 환경
GET http://localhost:3000/ad?unit=PUBLIC_TEST_UNIT_ID_375_80&uid=test-user&pf=android&lcl=ko-KR

# API 형식
GET /ad?unit=PUBLIC_TEST_UNIT_ID_375_80&uid=test-user&pf=android&lcl=ko-KR
```

### 파라미터
- unit: 광고 유닛 ID (예: PUBLIC_TEST_UNIT_ID_375_80)
- uid: 사용자 식별자
- pf: 플랫폼 정보
- lcl: 로케일 정보

## 프로젝트 구조

```
src/
├── ad/
│   ├── ad.controller.ts     # API 엔드포인트 정의
│   ├── ad.service.ts        # 비즈니스 로직 처리
│   ├── ad.module.ts         # 모듈 설정
│   └── tests/              
│       ├── ad.controller.spec.ts  # 컨트롤러 테스트
│       └── ad.service.spec.ts     # 서비스 테스트
```

## 테스트

Jest 기반의 단위 테스트가 구현되어 있습니다:
- 서비스 레이어 테스트: API 호출 성공/실패 케이스 검증
- 컨트롤러 레이어 테스트: 파라미터 처리 검증
