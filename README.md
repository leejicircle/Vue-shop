# Vue Shop

- vue 와 tailwind css
- carousel = vue3-carousel 사용
- daisyui v5 와 v2.51.6 과 색상 차이로 2.51.6 사용

##

문제 : daisyui v5사용 시

- tailwind.config 파일에서 daisyui declare module 이 작성된 .d.ts파일을 추가하라는 문구가 뜸
  .d.ts파일을 추가 해도 해결되지 않았고 방법을 찾지 못함 색상 문제로 v2.51.6을 사용하니 문구가 사라짐

문제 : API 다중 호출

- itemList.vue 컴포넌트를 index.vue에서 여러 번 렌더링할 때마다
  itemList.vue 내부에서 onMounted()로 productStore.fetchAll()이 호출되어
  같은 API를 여러 번 중복 호출하는 문제 발생
  해결 : itemList.vue 내부가 아닌 App.vue 에서 mounted시 호출 이미loaded된 상태라면 호출하지 않도록 구성

문제: 상세 페이지에서 다른 카테고리 페이지 로 이동할 때 데이터가 제대로 업데이트되지 않고 화면이 바뀌지 않는 현상 발생

- 라우트 경로 설정 으로 인해 경로 인식 문제 발생
  해결 : `router-link:to="menu.key" => router-link :to="/${menu.key}`" 변경하여 해결 됨

## React Shop = https://react-shop-seven-blush.vercel.app/
