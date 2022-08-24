import React from "react";

function Version() {
  return (
    <div>
      <div>버전 정보</div>
      <div>업데이트 내역을 작성할 공간입니다.</div>
      <div>
        <h1
          style={{
            fontSize: "36px",
          }}
        >
          1.0.0
        </h1>
        <div>
          1. 버전 추가
          <br /> 2. 화면별 탭 추가 <br />
          3. 제외된 금액 & 제외 품목 확인 기능 추가
        </div>
      </div>
      <div>
        <h1
          style={{
            fontSize: "36px",
          }}
        >
          1.0.1
        </h1>
        <div>
          1. 엑셀에서 A5까지 지우지 않고 다운받은 파일 그대로 사용할 수 있게
          변경.
          <br />
          2. 테이블에 상품코드 항목 추가
          <br />
          3. 테이블 색상 변경 & 선택된 row 색상 변경
        </div>
      </div>
      <div>
        <h1
          style={{
            fontSize: "36px",
          }}
        >
          1.0.2 (2022.08.24)
        </h1>
        <div>
          1. 제외항목 화면 추가(진행중)
          <br />
        </div>
      </div>
    </div>
  );
}

export default Version;
