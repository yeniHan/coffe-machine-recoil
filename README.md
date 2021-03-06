# Recoil을 사용하여 커피 주문 앱 만들기
recoil 실습을 위해 만든 미니 앱입니다.
## 실행 방법
* ./server/app.js를 실행
* npm run start
## 구현 전략
### 결제 정보를 recoil을 통해 전역적으로 공유
* 최종 결제 과정까지 공유가 필요하므로 전역적 상태관리 tool인 recoil을 사용.
* 가능한 메뉴, 쿠폰, 결제 수단의 리스트를 모두 저장
* recoil의 selector를 통해, 메뉴, 쿠폰, 결제수단 각 요소가 선택될 때마다, 결제 정보에 자동 계산되어 반영.

### 주문이 정상적으로 이루어지도록 각 절차별 진행 조건 적용.
* 각 절차에서 다음 절차로 넘어가기 위한 조건을 충족하지 못한 경우, 다음 절차(페이지)로 넘어가지 못함.


## 구현 내용
실제 까페 키오스크와 유사하게 페이지 구성을 짰으며, 각 페이지에서 순차적으로 절차를 실행하도록 구현 하였습니다.
스타일은 신경쓰지 않고, 기능 구현에 집중했습니다.

### 메뉴 선택 페이지
* 메뉴 선택
* 메뉴 수량 조절 기능
* 메뉴 삭제 기능
* 총 금액 계산 확인

### 쿠폰 선택 페이지
* takeout 메뉴는 쿠폰 적용 안됨.
* 한 개만 적용 가능

### 결제 수단 선택 페이지
* 현금 결제시 추가 5%할인 적용
* 결제 수단 미선택시 다음 단계로 진행 불가


### 결제 페이지(메뉴 대기 페이지)
* 최종 결제 정보(선택된 메뉴, 적용 쿠폰, 합계 금액)을 전달
* 카드/현금 삽입을 통해 결제가 진행되는 화면을 setTimeout으로 진행중 UI 재연
* 결제 진행중에 '뒤로'버튼 클릭시, 결제가 취소되나, 주문내용은 유지됨.
* 결제 완료시, 메뉴 대기중 안내 제시하고, 다시 3초후, 시작 페이지(메뉴 선택 페이지)로 돌아감.
* 시작 페이지에서 recoil 전 데이터는 reset됨.
