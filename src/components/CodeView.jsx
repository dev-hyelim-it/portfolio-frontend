import TabView from "../components/TabView";

function CodeView({ content, activeSection }) {
  const lines = content.split("\n");
  return (
    <section className="about__contents-left w-full h-full flex flex-col border-right">
      <TabView section={activeSection} />
      <div className="about__left-box flex w-full border-right">
        <div className="about__left-text-box flex w-full overflow-scroll">
          {/* 첫 줄: /** */}
          <div className="flex m-display--none">
            <span className="flex w-8 text-left pr-2 text-blue-200 select-none about__num-line">
              1
            </span>
            <span className="about__asterisk-first flex pl-2 text-white">
              {"/**"}
            </span>
          </div>
          {/* 중간 줄: * 내용 */}
          {lines.map((line, idx) => (
            <div key={idx} className="flex">
              <span className="m-display--none w-8 text-left pr-2 text-blue-200 select-none about__num-line">
                {idx + 2}
              </span>
              <span className="m-display--none about__asterisk w-5 text-center select-none">
                *
              </span>
              <span className="pl-2 font-family about__info-text">{line}</span>
            </div>
          ))}
          {/* 마지막 줄: */}
          <div className="flex m-display--none">
            <span className="w-8 text-left pr-2 text-blue-200 select-none about__num-line">
              {lines.length + 2}
            </span>
            <span className="about__asterisk pl-2 text-white">{"*/"}</span>
          </div>
        </div>
        <div className="scroll-box h-full flex justify-center py-1">
          <div className="scroll"></div>
        </div>
      </div>
    </section>
  );
}

export default CodeView;
