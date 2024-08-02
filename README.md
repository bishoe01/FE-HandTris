# Hand Motion Tetris

# FE-HandTris
핸드 모션 캡쳐를 통한 테트리스 배틀 게임 - HANDTRIS 프론트엔드 저장소

## 사용 기술

- [Next.js](https://nextjs.org/)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [ReactQuery](https://tanstack.com/query/latest/docs/framework/react/overview)
- [FramerMotion](https://www.framer.com/motion/)
- [Formik](https://formik.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/docs)
  
----

## 메인 로비
<img width="400" alt="스크린샷 2024-08-01 오후 10 47 34" src="https://github.com/user-attachments/assets/2f5500bc-fde7-492f-8c6c-22a47031af20">

----

## 기여
- **UI/UX 설계 및 디자인:** Figma를 활용한 UI/UX 설계 및 디자인 전담
- 
- **Howl.js 활용**
    - Context API를 사용하여 화면 전환 시 배경음이 끊기지 않도록 구현.
    - 훅을 만들어 각 상황에 맞는 효과음을 쉽게 적용할 수 있게 함.
    - Howl의 fade 기능을 사용해 효과음이 재생될 때 배경음의 볼륨을 줄여, 효과음이 더 잘 들리도록 UX 개선.
    - Footer에 사용자가 직접 볼륨을 조절할 수 있는 기능 추가.
    - <img width="274" alt="볼륨조절" src="https://github.com/user-attachments/assets/157d2538-0c6b-4a1e-9a29-a25dffe1a4ae">
    
- **React Query 활용:**
    - 게임 종료 시와 대기방을 나올 때 데이터를 자동으로 refetch하여, 유저가 별도로 새로고침할 필요 없이 최신 상태 유지.
    - 로비에서도 필요한 부분만 새로고침할 수 있게 하여 리소스 사용 최적화.
- **STOMP.js를 통한 실시간 통신:**
    - 실시간 소켓 통신을 통해 유저 간의 원활한 게임 플레이 지원.
    - 상대방의 테트리스 게임판을 2차원 배열 형태로 받아와 Canvas에 실시간으로 그려줌.
    - FLIP, DONUT, LINE 추가와 같은 공격 요소는 2차원 배열과 함께 공격 타입에 대한 플래그를 전송하여 구현.
- **Framer Motion 활용:**
    - 화면 전환 시 fade나 slide와 같은 애니메이션 효과를 적용하여 시각적 효과를 향상시키고, 사용자 경험을 부드럽게 개선.
- **UX 개선:**
    - 사용자의 손이 인식되지 않을 때, 사용자에게 HANDS NOT DETECTED 피드백을 CANVAS위에 렌더링해주어 사용성 개선
    - <img width="274" alt="스크린샷 2024-08-01 오후 10 49 10" src="https://github.com/user-attachments/assets/baf5d3cd-2335-477a-bde0-329e5552cb0e">
    - 블록이 일정 높이까지 올라왔을 때 'DANGER'를 나타내며 게임 몰입도 개선
    - <img width="300" alt="스크린샷 2024-08-01 오후 10 47 51" src="https://github.com/user-attachments/assets/a268109b-4caa-49fe-a656-ade3b132d601">
    - 테트리스 하드 드롭 시, translateY 값을 0.2초 동안 변경하여 Canvas가 흔들리는 효과를 줌으로써 유저에게 행동에 대한 피드백 제공.
    - 사용자 간 공격을 쉽게 알아볼 수 있도록 게이지바를 구현하고, 단계별로 아이콘과 색상을 추가하여 인디케이터 개선.
    - 상대방이 공격을 받을 때 우측 하단에 공격 현황판을 추가하여 사용자가 자신이 준 공격임을 인지 가능하도록 개선.
