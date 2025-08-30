import ExplorerSidebar from "../components/ExplorerSidebar";
import CodeView from "../components/CodeView";
import CodeSnippet from "../components/CodeSnippet";
import { useState } from "react";
import snippet from "../data/snippet";
import { useMediaQuery } from "react-responsive";

const content = {
  "professional-info": `저는 신입 개발자로 새로운 시작을 준비하는
  5년 차 퍼블리셔입니다.
  백엔드 개발자로 역량을 넓히고 싶어 열심히 공부하고 있습니다.
  
  부트캠프로 배운 기술은 다음과 같습니다.
  
  - Java
  - Spring Boot
  - Spring Legacy
  - MySQL
  - PostgreSQL
  - Vue
  
  이후에는 혼자서 Kotlin과 React를 공부했습니다.
  현재 이 홈페이지는 React와 Java 기반으로 만들었습니다.
  Kotlin은 기본 CRUD 기능이 들어간 게시판을 간단하게 구현해 보았습니다.
  
  또한, 다음과 같은 도구도 사용할 수 있습니다.

  - GitHub / GitLab
  - Figma / Zeplin
  - SCSS
  - Notion
  
  '_projects'에 가시면 제가 작업한 프로젝트들을 확인하실 수 있습니다!
  :)
  `,

  "personal-info": ` 안녕하세요. 저는 장혜림이라고 합니다.
  이곳은 저를 소개하는 용도로 만든 홈페이지입니다 :)

  개발자가 되기 위해 열심히 노력하고 있습니다.
  퍼블리셔로 일한 지 5년이 넘었고, 2년 전부터는 프리랜서로 활동하고 있습니다.
  가장 최근에 했던 프로젝트는 롯데온 프로젝트였는데,
  그곳에서 처음으로 리액트로 작업을 했습니다.

  롯데온 프로젝트 이후 이 사이트를 만들면서,
  리액트로 화면 단을 구성하면 좋겠다는 생각이 들어
  리액트와 scss로 퍼블리싱과 프론트엔드를 구현했습니다.

  새로운 기술을 배우고 공부하는 게 힘들긴 하지만
  그 속에서 재미와 흥미를 느끼는 편입니다.
  오류가 나거나 잘 안 풀릴 때는 스트레스도 받기도 하지만,
  그 문제를 끝까지 붙잡고 파고들어 해결했을 때의 희열을 알기 때문에
  개발자라는 직업이 정말 매력적으로 느껴졌던 것 같습니다.

  '신입 개발자'로 새로운 필드에서 출발하기에 이른 나이는 아니라고
  주변에서 걱정스러운 시선을 보내기도 하지만,
  더 늦기 전에 제가 가장 꿈꿔왔던 일을 해보고 싶습니다.

  힘들게 주어진 기회를 놓치지 않기 위해 늘 노력하고 공부하고 있습니다.
  저의 열정과 끈질긴 노력을 알아봐 주셨다면, 언제든지 연락 주세요!
  '_contact-me'로 가시면 제게 메일을 보내실 수 있습니다 :)
  (메일은 매일 확인하고 있어요. ㅎㅎ)
  전화번호로 연락 주셔도 됩니다.

  감사합니다!`,

  "hobbies-info": `저는 몇 가지 취미를 가지고 있습니다.
  여행, 영화 감상, 소설 읽기, 그리고 레고 만들기를 좋아합니다.

  친구들과 함께 떠나는 여행도 좋고, 혼자서 훌쩍 떠나는 여행도 즐기는 편입니다.
  역사적인 장소와 문화재를 좋아해서 주로 그런 장소로 여행을 가는 편입니다.
  (경주/교토/상해)
  테마파크도 좋아해요!
  (디즈니랜드 / 유니버셜 스튜디오)
  
  영화나 책은 미스터리, 스릴러, 추리물을 즐겨 보는 편입니다. (+호러!!)
  로맨스 장르나 멜로는 선호하지 않아요 :(

  레고는 이동수단 만드는 걸 가장 좋아해요 XD
  자동차뿐만 아니라 배, 기차, 비행기 등등..
  뭔가 움직이는 것들을 만드는 데서 뿌듯함을 느낍니다.
    
  하루 종일 새로운 곳을 돌아다니며 구경하는 것도 재밌지만,
  반대로 하루 종일 가만히 앉아서 레고 조립에 몰두하는 시간도 정말 좋아합니다.
  책을 읽으며 머릿속으로 상상하고 공상하는 것도,
  몸으로 직접 부딪히고 경험하는 것도 둘 다 저에게는 소중하고 재미있는 시간입니다.
  
  이상, 누가봐도 TMI인 글을 읽어주셔서 감사합니다! ㅎㅎ
  :)`,
};

function About() {
  const [activeSection, setActiveSection] = useState("professional-info");
  const isDesktop = useMediaQuery({ minWidth: 768 });

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
