import { useMemo, useState, useId } from "react";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useMediaQuery } from "react-responsive";

// dev: http://localhost:8080 / prod: https://api.yourdomain.com
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
});

const handleFocus = (e) => {
  // 키보드 올라온 뒤 레이아웃이 바뀌는 타이밍 고려해서 약간 딜레이
  setTimeout(() => {
    e.target.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 200);
};

function isValidEmail(email) {
  // 너무 엄격하지 않게 (실무에서 흔히 쓰는 수준)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ContactForm() {
  const isDesktop = useMediaQuery({ minWidth: 935 });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // { name?: string, email?: string, message?: string }

  // 접근성: label-for 연결 및 에러 설명 연결용 id
  const uid = useId();
  const ids = useMemo(
    () => ({
      name: `name-${uid}`,
      email: `email-${uid}`,
      message: `message-${uid}`,
      nameErr: `name-err-${uid}`,
      emailErr: `email-err-${uid}`,
      messageErr: `message-err-${uid}`,
      status: `form-status-${uid}`,
    }),
    [uid]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // 입력 시작하면 해당 필드 에러는 즉시 제거 (UX)
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const next = {};

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) next.name = "이름을 입력해주세요.";
    if (!email) next.email = "이메일을 입력해주세요.";
    else if (!isValidEmail(email)) next.email = "이메일 형식을 확인해주세요.";
    if (!message) next.message = "메시지를 입력해주세요.";

    return next;
  };

  const focusFirstError = (nextErrors) => {
    const order = ["name", "email", "message"];
    const first = order.find((k) => nextErrors[k]);
    if (!first) return;

    const el = document.querySelector(`[name="${first}"]`);
    el?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSent("입력 내용을 확인해주세요.");
      focusFirstError(nextErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setSent(null);

    try {
      const payload = {
        from: form.email,
        subject: form.name,
        message: form.message,
      };

      const res = await api.post("/api/contact", payload);

      if (res.status === 200) {
        setSent("메일 전송 완료");
        setForm({ name: "", email: "", message: "" }); // 성공 시 초기화
      } else {
        setSent("메일 전송 기능 구현 작업 중 입니다...");
      }
    } catch (err) {
      console.error(err);
      setSent("메일 전송 기능 구현 작업 중 입니다...");
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
      <form onSubmit={handleSubmit} noValidate aria-describedby={ids.status}>
        <div className="contact__left-box">
          {/* 상태 메시지(스크린리더 읽힘) */}
          <p
            id={ids.status}
            className="sr-only"
            aria-live="polite"
            aria-atomic="true"
          >
            {sent || ""}
          </p>

          {/* name */}
          <div className="contact__form-box">
            <label className="block contact__label" htmlFor={ids.name}>
              _name:
            </label>
            <input
              id={ids.name}
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full contact__input rounded text-white orbit-regular"
              autoComplete="name"
              inputMode="text"
              enterKeyHint="next"
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? ids.nameErr : undefined}
              disabled={loading}
              onFocus={handleFocus}
            />
            {errors.name && (
              <p
                id={ids.nameErr}
                className="text-xs text-red-400 mt-1"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* email */}
          <div className="contact__form-box">
            <label className="block contact__label" htmlFor={ids.email}>
              _email:
            </label>
            <input
              id={ids.email}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full contact__input rounded text-white"
              autoComplete="email"
              inputMode="email"
              enterKeyHint="next"
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? ids.emailErr : undefined}
              disabled={loading}
              onFocus={handleFocus}
            />
            {errors.email && (
              <p
                id={ids.emailErr}
                className="text-xs text-red-400 mt-1"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* message */}
          <div className="contact__form-box">
            <label className="block contact__label" htmlFor={ids.message}>
              _message:
            </label>
            <textarea
              id={ids.message}
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full contact__textarea rounded text-white font-family"
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? ids.messageErr : undefined}
              disabled={loading}
              onFocus={handleFocus}
            />
            {errors.message && (
              <p
                id={ids.messageErr}
                className="text-xs text-red-400 mt-1"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* submit */}
          <div className="contact__form-box">
            <button
              id="sendBtn"
              type="submit"
              disabled={loading}
              aria-disabled={loading}
              className="contact__submit-btn fira-code-regular mt-3 px-4 py-1 bg-gray-700 text-white text-sm rounded"
            >
              {loading ? "sending..." : "submit-message"}
            </button>
          </div>

          {/* 화면에도 보이는 상태 메시지 */}
          {sent && (
            <p
              className={`text-sm mt-2 ${
                Object.keys(errors).length ? "text-red-400" : "text-green-400"
              }`}
              aria-live="polite"
            >
              {sent}
            </p>
          )}
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
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
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
