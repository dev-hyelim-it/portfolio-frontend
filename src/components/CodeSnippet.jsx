import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";

const BASE = import.meta.env.BASE_URL;

function CodeSnippet({ snippet }) {
  const [openCommentIdx, setOpenCommentIdx] = useState(null);

  // 토글 함수
  const handleToggleComment = (idx) => {
    setOpenCommentIdx(openCommentIdx === idx ? null : idx);
  };

  return (
    <section className="about__contents-right max-w-full flex flex-col">
      <div className="about__right-box h-full">
        <div className="about__right-text-box h-full">
          <h3 className="about__right-title text-xs text-gray-400 mb-2">
            // Code snippet showcase:
          </h3>
          {snippet.map((snippet, idx) => (
            <section className="about__coding-box" key={idx}>
              <div className="about__coding-box-top">
                <div className="about__user-box">
                  <div className="about__profile-img">
                    <img
                      src={`${BASE}${snippet.img}`}
                      alt={snippet.userName}
                      className="about__profile-avatar"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `${BASE}images/default-avatar.png`;
                      }}
                    />
                  </div>
                  <div className="about__profile-text">
                    <p className="about__id fira-code-bold">
                      {snippet.userName}
                    </p>
                    <p className="about__create-date">
                      Created {snippet.createDate} ago
                    </p>
                  </div>
                </div>
                <div className="about__detail-box">
                  {/* details 버튼에 onClick 추가 */}
                  <div className="about__details">
                    <p
                      className="about__detail-box-text is-hover cursor-pointer"
                      onClick={() => handleToggleComment(idx)}
                    >
                      <FontAwesomeIcon
                        icon={faCommentDots}
                        className="about__detail-box-icon"
                      />
                      details
                    </p>
                  </div>
                  <div className="about__stars m-display--none">
                    <p className="about__detail-box-text is-hover">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="about__detail-box-icon"
                      />
                      stars
                    </p>
                  </div>
                </div>
              </div>
              <div className="about__coding-box-bottom">
                <SyntaxHighlighter
                  language="typescript"
                  style={synthwave84}
                  showLineNumbers
                  customStyle={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-all",
                  }}
                  className="about__code w-full"
                >
                  {snippet.code}
                </SyntaxHighlighter>
              </div>
              {/* 댓글 창 토글 */}
              {openCommentIdx === idx && (
                <div className="about__comment-box mt-2 p-4">
                  <p className="text-xs text-gray-400 mb-2 font-family about__comment whitespace-pre-line">
                    {snippet.details}
                  </p>
                  <button onClick={() => setOpenCommentIdx(null)}>
                    <FontAwesomeIcon icon={faXmark} className="icon-close" />
                  </button>
                </div>
              )}
            </section>
          ))}
        </div>
        <div className="scroll-box h-full flex justify-center py-1">
          <div className="scroll"></div>
        </div>
      </div>
    </section>
  );
}

export default CodeSnippet;
