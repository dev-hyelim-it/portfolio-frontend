import { faReact, faVuejs, faCss3 } from "@fortawesome/free-brands-svg-icons";

import springBootLogo from "../assets/images/spring_boot_logo.svg";
import springLegacyLogo from "../assets/images/spring_logo.svg";
import kotlinLogo from "../assets/images/kotlin_logo.svg";
import javaLogo from "../assets/images/java_logo.svg";

const projects = [
  {
    id: 1,
    title: "Project 1",
    tech: ["React", "Scss"],
    img: "/images/project1.png",
    desc: "React 기반 포트폴리오 소개 사이트",
    url: "https://github.com/example/project1",
    className: "react",
    icon: faReact,
    iconType: "FontAwesome",
  },
  {
    id: 2,
    title: "Project 2",
    tech: ["Vue"],
    img: "/images/project3.jpg",
    desc: "Vue를 활용한 기본 리스트 게시판",
    url: "https://github.com/example/project2",
    className: "vue",
    icon: faVuejs,
    iconType: "FontAwesome",
  },
  {
    id: 3,
    title: "Project 3",
    tech: ["Kotlin", "Spring-Boot", "CSS"],
    img: "/images/project2.png",
    desc: "Kotlin 기반 댓글 기능 추가 된 게시판",
    url: "https://github.com/example/project3",
    className: "kotlin",
    icon: kotlinLogo,
    iconType: "img",
  },
  {
    id: 4,
    title: "Project 4",
    tech: ["Java", "Spring-Boot", "CSS"],
    img: "/images/project4.jpg",
    desc: "양자택일 투표 사이트 - 관리자 페이지",
    url: "https://github.com/example/project4",
    className: "java",
    icon: javaLogo,
    iconType: "img",
  },
  {
    id: 5,
    title: "Project 5",
    tech: ["Java", "Spring-Boot", "CSS"],
    img: "/images/project5.gif",
    desc: "API 활용 개인 여행 스케줄 작성 프로젝트",
    url: "https://github.com/example/project1",
    className: "spring-boot",
    icon: springBootLogo,
    iconType: "img",
  },
  {
    id: 6,
    title: "Project 6",
    tech: ["Spring-legacy", "Java", "CSS"],
    img: "/images/project2.jpg",
    desc: "Spring-Legacy 기반 은행 프로그램",
    url: "https://github.com/example/project2",
    className: "spring-legacy",
    icon: springLegacyLogo,
    iconType: "img",
  },
];

export default projects;
