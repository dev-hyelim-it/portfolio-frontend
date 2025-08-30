import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretLeft,
  faCaretDown,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

import projects from "../data/projects";

function Home() {
  const sliderRef = useRef(null);
  useEffect(() => {
    const handleKey = (e) => {
      // 입력 중엔 방해하지 않기
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable)
        return;

      if (e.key === "ArrowRight") sliderRef.current?.slickNext();
      if (e.key === "ArrowLeft") sliderRef.current?.slickPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const sliderSettings = {
    infinite: true, // 무한 반복
    speed: 500,
    slidesToShow: 1, // 한 번에 하나씩
    slidesToScroll: 1,
    arrows: true, // 좌우 화살표
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    className: "w-full",
    accessibility: true,
  };
  return (
    <article className="home flex min-h-[80vh] items-center justify-center gap-16 px-8">
      {/* 왼쪽 인트로 */}
      <section className="flex flex-col gap-4 home__left">
        <div className="hom__top-box">
          <p className="text-gray-400 text-lg home__text-start">
            // Hi all, I am
          </p>
          <h1 className="font-mono font-bold text-6xl text-white drop-shadow-[0_2px_16px_rgba(0,255,255,0.5)] home__name">
            Hye Lim, Jang
          </h1>
          <div className="home__developer-box flex">
            &gt;&nbsp;
            <h2 className="font-mono text-3xl text-cyan-400 mt-2 home__developer">
              Backend Developer
            </h2>
          </div>
        </div>
        <div className="p-6 rounded-lg mt-8 shadow-lg home__bottom-text-box">
          <p className="text-green-400 fira-code-light home__page">
            // find my profile on Github:
          </p>
          <pre className="text-sm font-mono mt-1">
            <span className="fira-code-medium home__const">const </span>
            <span className="fira-code-medium home__github">githubLink </span>
            <span className="text-white fira-code-medium home__equals">= </span>
            <a
              href="https://github.com/dev-hyelim-it"
              className="underline fira-code-medium home__github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              "https://github.com/dev-hyelim-it"
            </a>
          </pre>
        </div>
      </section>
      {/* 오른쪽 - 슬라이드 */}
      <section className="home__right p-6 bg-gradient-to-br from-[#12323e] to-[#234f6e]">
        <div className="home__right-box min-w-[320px] max-w-[350px]">
          <Slider ref={sliderRef} {...sliderSettings}>
            {projects.map((p, idx) => (
              <div key={p.id ?? idx} className="px-1">
                <div className="project__card-box">
                  <div className="project__card-top-box flex">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="project__card-img w-full object-cover"
                    />
                  </div>
                  <div className="project__card-bottom-box">
                    <p className="project__card-text orbit-regular">{p.desc}</p>
                    <a
                      href={p.url || p.jsx || "#"}
                      rel="noreferrer"
                      className="project__card-link"
                    >
                      go_project-page
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="home__game-box flex justify-center">
            <div id="instructions" class="font-fira_retina text-sm text-white">
              <div className="home__key-box grid grid-cols-3 place-items-center">
                <div className="col-start-2 home__game-key home__key-disable">
                  <FontAwesomeIcon icon={faCaretUp} />
                </div>
              </div>
              <div class="home__key-box grid grid-cols-3 gap-1 place-items-center">
                <div className="home__game-key">
                  <FontAwesomeIcon icon={faCaretLeft} />
                </div>
                <div className="home__game-key home__key-disable">
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className="home__game-key">
                  <FontAwesomeIcon icon={faCaretRight} />
                </div>
              </div>
            </div>
            <a href="/about" class="flex" className="skip-btn">
              skip
            </a>
          </div>
        </div>
      </section>
      <div class="home__blurry-gradient-blue"></div>
      <div class="home__blurry-gradient-green"></div>
    </article>
  );
}

export default Home;
