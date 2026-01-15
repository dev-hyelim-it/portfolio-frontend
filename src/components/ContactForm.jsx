import { useState } from "react";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useMediaQuery } from "react-responsive";

// 환경변수로 API 베이스 URL 제어 (Vite)
// dev: http://localhost:8080 / prod: https://api.yourdomain.com
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
});
function ContactForm() {
  const isDesktop = useMediaQuery({ minWidth: 935 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 2) onSubmit에서 기본 동작 차단 + 로딩/에러 처리
  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ 폼 기본 제출(리로드) 방지
    if (loading) return;
    setLoading(true);
    setSent(null);
    try {
      // 백엔드 계약에 맞게 payload 사용
      // from/subject/message
      const payload = {
        from: form.email,
        subject: form.name,
        message: form.message,
      };

      const res = await api.post("/api/contact", payload);
      setSent(res.status === 200 ? "메일 전송 완료" : "메일 전송 실패");
    } catch (err) {
      console.error(err);
      setSent("메일 전송 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`contact__content-box grid gap-4 ${
        isDesktop ? "grid-cols-2 h-full" : "grid-cols-1"
      }`}
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="contact__left-box">
          <div className="contact__form-box">
            <label className="block contact__label">_name:</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full contact__input rounded text-white orbit-regular"
            />
          </div>
          <div className="contact__form-box">
            <label className="block contact__label">_email:</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full contact__input rounded text-white"
            />
          </div>
          <div className="contact__form-box">
            <label className="block contact__label">_message:</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full contact__textarea rounded text-white font-family"
            />
          </div>
          <div className="contact__form-box">
            <button
              id="sendBtn"
              type="submit"
              disabled={loading}
              className="contact__submit-btn fira-code-regular mt-3 px-4 py-1 bg-gray-700 text-white text-sm rounded"
            >
              {loading ? "sending..." : "submit-message"}
            </button>
          </div>

          {sent && <p className="text-sm mt-2 text-green-400">{sent}</p>}
        </div>
      </form>
      <div className="contact__right-box whitespace-pre">
        <SyntaxHighlighter
          language="javascript"
          style={synthwave84}
          showLineNumbers
          customStyle={{
            fontSize: "15px",
            padding: "18px 24px",
          }}
        >{`    const button = document.querySelector('#sendBtn');

        const message = {
          name: "${form.name}",
          email: "${form.email}",
          message: "${form.message}",
          date: "${new Date().toDateString()}"
        }

        button.addEventListener('click', () => {
          form.send(message);
        });`}</SyntaxHighlighter>
      </div>
    </section>
  );
}

export default ContactForm;
