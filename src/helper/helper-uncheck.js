/**
 * 계산 제외 항목을 계산할때 사용하는 함수들 모음입니다.
 */

import { getUncheckListStorage } from "./helper-storage";

/** 사용제외 항목 배열에서 코드만 반환하는 함수 */
export function getCodeFromUnCheckList(arr) {
  return arr.map((data) => data.code);
}

export function isReduplication(code) {
  const list = getUncheckListStorage();
  return list.some((data) => data.code === code);
}
