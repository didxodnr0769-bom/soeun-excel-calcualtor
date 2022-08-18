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
    </div>
  );
}

export default Version;
