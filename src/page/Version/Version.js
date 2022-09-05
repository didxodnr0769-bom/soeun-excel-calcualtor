import React from "react";
import version from "./version.json";

/** 데이터를 받아 한 버전을 표시해줄 컴포넌트 */
const VersionComponent = (props) => {
  const { version, date, content } = props.data;
  return (
    <div
      style={{
        margin: "30px 0px",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          margin: 0,
        }}
      >
        {version} - {date}
      </h1>
      <div>
        {content.map((desc, idx) => {
          return (
            <p
              key={idx + desc}
              style={{
                fontSize: "16px",
                margin: "5px 0px",
              }}
            >
              {idx + 1}. {desc}
            </p>
          );
        })}
      </div>
    </div>
  );
};

/**
 * 버전을 확인할 수 있는 레이아웃 컴포넌트입니다.
 */
function Version() {
  const data = JSON.parse(JSON.stringify(version));
  return (
    <div>
      <div>버전 정보</div>
      <div>업데이트 내역을 작성할 공간입니다.</div>
      {data.reverse().map((ver) => (
        <VersionComponent key={ver.version} data={ver} />
      ))}
    </div>
  );
}

export default Version;
