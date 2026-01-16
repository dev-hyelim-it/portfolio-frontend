import { faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";

import springBootLogo from "../assets/images/spring_boot_logo.svg";
import springLegacyLogo from "../assets/images/spring_logo.svg";
import kotlinLogo from "../assets/images/kotlin_logo.svg";
import javaLogo from "../assets/images/java_logo.svg";

const BASE = import.meta.env.BASE_URL;
const img = (file) => `${BASE}images/${file}`;

const projects = [
  {
    id: 1,
    title: "Project 1",
    tech: ["React", "SCSS"],
    thumbnail: img("project1.png"),
    desc: "React 기반 포트폴리오 소개 사이트",
    url: "https://github.com/example/project1",
    theme: "react",
    icon: { type: "fa", value: faReact },
  },
  {
    id: 2,
    title: "Project 2",
    tech: ["Vue"],
    thumbnail: img("project3.jpg"),
    desc: "Vue를 활용한 기본 리스트 게시판",
    url: "https://github.com/example/project2",
    theme: "vue",
    icon: { type: "fa", value: faVuejs },
  },
  {
    id: 3,
    title: "Project 3",
    tech: ["Kotlin", "Spring Boot", "CSS"],
    thumbnail: img("project2.png"),
    desc: "Kotlin 기반 댓글 기능 추가 된 게시판",
    url: "https://github.com/example/project3",
    theme: "kotlin",
    icon: { type: "img", value: kotlinLogo, size: "22px" },
  },
  {
    id: 4,
    title: "Project 4",
    tech: ["Java", "Spring Boot", "CSS"],
    thumbnail: img("project4.jpg"),
    desc: "양자택일 투표 사이트 - 관리자 페이지",
    url: "https://github.com/example/project4",
    theme: "java",
    icon: { type: "img", value: javaLogo, size: "80%" },
  },
  {
    id: 5,
    title: "Project 5",
    tech: ["Java", "Spring Boot", "CSS"],
    thumbnail: img("project5.gif"),
    desc: "API 활용 개인 여행 스케줄 작성 프로젝트",
    url: "https://github.com/example/project5",
    theme: "spring-boot",
    icon: { type: "img", value: springBootLogo, size: "87%" },
  },
  {
    id: 6,
    title: "Project 6",
    tech: ["Spring Legacy", "Java", "CSS"],
    thumbnail: img("project2.jpg"),
    desc: "Spring-Legacy 기반 은행 프로그램",
    url: "https://github.com/example/project6",
    theme: "spring-legacy",
    icon: { type: "img", value: springLegacyLogo, size: "83%" },
  },
];

export default projects;
