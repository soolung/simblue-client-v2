const Categories: {
  [key: string]: { text: string; description: string; uri: string };
} = {
  deadline: {
    text: "마감 임박",
    description: "마감이 임박한 신청",
    uri: "deadline",
  },
  latest: {
    text: "최신",
    description: "가장 최근 등록된 신청",
    uri: "latest",
  },
  always: {
    text: "상시",
    description: "언제나 받는 신청",
    uri: "always",
  },
};

export default Categories;
