import ExplorerSidebar from "../components/ExplorerSidebar";
import CodeView from "../components/CodeView";
import CodeSnippet from "../components/CodeSnippet";
import { useState } from "react";
import snippet from "../data/snippet";
import { useMediaQuery } from "react-responsive";

const content = {
  "professional-info": `저는 퍼블리싱 경력 5년 이상의 웹 퍼블리셔입니다.

SI 회사와 솔루션 기업에서 근무하며
대기업 관리자 시스템 및 서비스 구축 프로젝트에 다수 참여했습니다.
(이마트 관리자 시스템, 이마트24, 롯데온 ‘트위즈’ 앱 등)

HTML, CSS(SCSS), JavaScript 기반의 퍼블리싱을 중심으로
최근에는 React 환경에서 컴포넌트 단위 UI 퍼블리싱을 진행했으며,
Storybook을 활용한 UI 컴포넌트 설계 및 관리 경험도 보유하고 있습니다.

대부분의 프로젝트에서 퍼블리싱을 단독으로 담당하며
디자이너·기획자·개발자 간 커뮤니케이션과
작업 일정 조율까지 주도적으로 진행해 왔습니다.

웹표준과 웹접근성을 고려한 마크업 경험이 있으며,
운영 업무를 통해 유지보수성과 확장성을 함께 고민해 왔습니다.

사용 기술 및 협업 도구:
- HTML / CSS / SCSS
- JavaScript / jQuery
- React (퍼블리싱 & UI 컴포넌트 중심)
- Storybook
- Git / GitLab / GitHub
- Figma / Zeplin
- Jira / Slack / Notion

하단의 ‘Projects’ 탭에서
실제 작업한 퍼블리싱 결과물을 확인하실 수 있습니다.
  `,

  "personal-info": ` 안녕하세요. 웹 퍼블리셔 장혜림입니다.

이 사이트는
제가 퍼블리셔로서 작업해 온 경험과
퍼블리싱 스타일을 직접 보여드리기 위해 만든 포트폴리오입니다.

퍼블리셔로 일하며 가장 중요하게 생각하는 것은
‘디자인 의도를 정확히 구현하는 것’과
‘개발 단계에서 불필요한 비용이 발생하지 않도록 구조를 설계하는 것’입니다.

혼자 퍼블리싱을 담당하는 경우가 많았기 때문에
작업 범위를 스스로 정리하고,
디자이너·기획자·개발자와의 커뮤니케이션을 통해
문제를 해결하는데 익숙합니다.

또한 단순히 화면을 구현하는데 그치지 않고,
운영과 유지보수 단계까지 고려한
클래스 구조, 컴포넌트 분리, 재사용성을 중요하게 생각합니다.

최근에는 React 기반 프로젝트를 통해
컴포넌트 단위 퍼블리싱과 UI 구조 설계 경험을 쌓고 있으며,
퍼블리셔로서의 강점을 잃지 않으면서
프론트엔드와 자연스럽게 협업할 수 있는 방향을 고민하고 있습니다.

저의 작업 방식과 결과물이 궁금하시다면
프로젝트 탭을 통해 확인해 주세요.

`,

  "hobbies-info": `일할 때는 꼼꼼한 편이지만,
일상에서는 비교적 다양한 취미를 즐기고 있습니다.

여행을 좋아하고,
특히 역사적인 장소나 문화적인 공간을 선호합니다.
(경주, 교토, 상해 등)
테마파크도 좋아해서
디즈니랜드나 유니버설 스튜디오 같은 공간도 즐겨 찾습니다.

영화나 책은
미스터리, 스릴러, 추리 장르를 좋아하며
호러도 꽤 즐기는 편입니다.
로맨스나 멜로 장르는 잘 보지 않는 편이에요.

레고 조립도 오래된 취미 중 하나입니다.
자동차, 기차, 배, 비행기처럼
‘움직임이 상상되는 구조물’을 만드는 걸 특히 좋아합니다.

하루 종일 밖을 돌아다니는 여행도,
조용히 앉아 레고를 조립하거나 책을 읽는 시간도
저에게는 모두 소중한 휴식입니다.

읽어주셔서 감사합니다 :)

`,
};

function About() {
  const [activeSection, setActiveSection] = useState("professional-info");
  const isDesktop = useMediaQuery({ minWidth: 935 });

  return (
    <article className="about flex text-gray-300">
      <h1 className="page__title">_about</h1>
      <ExplorerSidebar active={activeSection} onSelect={setActiveSection} />
      <section
        className={`about__contents-box grid w-full ${
          isDesktop ? "grid-cols-2 h-full" : "grid-cols-1"
        }`}
      >
        <CodeView
          content={content[activeSection]}
          activeSection={activeSection}
        />
        <CodeSnippet snippet={snippet} />
      </section>
    </article>
  );
}

export default About;
