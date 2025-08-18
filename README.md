# pdf 파일을 합칠 수 있는 pdf combiner
Figma는 PDF 병합 기능을 지원하지 않기 때문에, Figma에서 만든 PDF 파일을 간편하게 합칠 수 있도록 개발하였습니다.

## 🚀 주요 기능
1. Drag & Drop 지원
   - PDF 파일을 박스 영역에 드래그하면 자동으로 추가됩니다.
2.	파일명 지정
    - 합쳐진 PDF의 저장 파일명을 직접 입력할 수 있으며, 입력된 파일명은 pdf combiner에 저장됩니다. \
      파일명을 입력하지 않을 경우, 첫번째 파일의 파일명으로 통합됩니다.
3.	자동 정렬 옵션
    - 파일명을 기준으로 정렬 여부를 선택할 수 있습니다.
4. 병합한 파일 삭제
   - PDF를 합친 후, 합치기 전 파일을 삭제할 수 있습니다.

## Starting Development

`dev` 환경에서 실행하기 위해서는 터미널에서 다음과 같이 입력합니다.

```bash
npm start
```

## Packaging for Production

설치 파일을 생성하기 위해서는 터미널에서 다음과 같이 입력합니다.

```bash
npm run package
```
![pdf](https://github.com/user-attachments/assets/e44ebf90-dd86-4eb8-8f8a-0b8f1bc364bf)
---


본 프로젝트는 [electron-react-boilerplate](https://electron-react-boilerplate.js.org/)를 기반으로 만들었습니다.
