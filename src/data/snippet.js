const userImage = [
  {
    id: 1,
    img: "images/user.jfif", // public 기준 (컴포넌트에서 BASE_URL 처리)
    desc: "user image",
    userName: "@hyelim",
    createDate: "2 days",
    code: `const toggle = (tech) => {
  setSelected((prev) =>
    prev.includes(tech)
      ? prev.filter((item) => item !== tech)
      : [...prev, tech]
  );
};`,
    details: `1. 프로젝트 필터 토글 로직
- 프로젝트를 기술 스택 기준으로 빠르게 탐색할 수 있도록 필터 기능을 구현했습니다.
- 선택/해제 상태를 하나의 배열로 관리해 UX 흐름이 단순하고 직관적입니다.
- React의 상태 업데이트 패턴을 고려해 재사용 가능한 형태로 구성했습니다.`,
  },
  {
    id: 2,
    img: "images/user.jfif",
    desc: "user image",
    userName: "@hyelim",
    createDate: "1 day",
    code: `function ProjectIcon({ icon, title }) {
  if (icon.type === "fa") {
    return <FontAwesomeIcon icon={icon.value} aria-label={title} />;
  }

  return (
    <img
      src={icon.value}
      style={{ width: icon.size || "80%" }}
      alt={\`\${title} logo\`}
    />
  );
}`,
    details: `2. 데이터 기반 아이콘 렌더링
- 프로젝트마다 아이콘 종류와 크기가 달라서 처음에는 CSS로 분기해서 처리했습니다.
- 관리가 복잡해질 것 같아, 아이콘 정보(타입, 크기)를 데이터로 옮겨서 처리하도록 구조를 바꿨습니다.
- 덕분에 컴포넌트 코드는 단순해지고, 나중에 프로젝트가 추가돼도 수정이 쉬워졌습니다.`,
  },
];

export default userImage;
