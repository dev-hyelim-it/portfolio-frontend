const userImage = [
  {
    id: 1,
    img: "/images/user.jfif",
    desc: "user image",
    userName: "@username",
    createDate: "30 minutes",
    code: `const toggle = (tech) => {
    setSelected((prev) =>
      prev.includes(tech)
        ? prev.filter((item) => item !== tech)
        : [...prev, tech]
    );
  };
}`,
    details: `1. _project 필터링 관련 소스
      - 작업한 프로젝트에 어떤 기술들을 사용했는지 대략적인 구성을 보여주기 위해 필터 기능을 넣었음.
      리액트의 대표 기능인 useState를 사용하여 값을 선택해서 추가하고 이미 선택되어 있는 값은 배열에서 삭제하는 기능 구현. 깔-끔`,
  },
  {
    id: 2,
    img: "/images/user.jfif",
    desc: "user image",
    userName: "@username",
    createDate: "30 months",
    code: `public ResponseEntity<?> send(@RequestBody EmailForm form, HttpServletRequest request)
{
  String ip = getClientIp(request);
  if (ipRateLimiter.isLimitExceeded(ip)) {
    return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
      .body("하루 3번까지만 전송할 수 있습니다.");
  }
}`,
    details: `2. _contact-me 메일 소스
- 사이트에서 바로 연락할 수 있는 기능이 있으면 좋을 것 같아서 작업.
무분별한 발송을 막기위해 하루 발송 횟수는 3회로 제한. 보내는 사람의 ip 확인 후, 3회 초과 확인.`,
  },
];

export default userImage;
