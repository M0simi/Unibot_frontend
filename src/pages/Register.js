import { useState } from "react";
import { Link } from "react-router-dom";

const SA_UNIVERSITIES = [
  "جامعة الملك سعود",
  "جامعة الإمام محمد بن سعود الإسلامية",
  "جامعة الملك عبدالعزيز",
  "جامعة الأميرة نورة بنت عبدالرحمن",
  "جامعة الملك فهد للبترول والمعادن",
  "جامعة الملك خالد",
  "جامعة الأمير سطّام بن عبدالعزيز",
  "جامعة القصيم",
  "جامعة الطائف",
  "جامعة الملك فيصل",
  "جامعة جدة",
  "جامعة حائل",
  "جامعة تبوك",
  "جامعة جازان",
  "جامعة نجران",
  "جامعة بيشة",
];

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    university: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: استبدل هذا بالنداء الحقيقي للباك-إند
    console.log("signup payload:", form);
  };

  return (
    <section
      dir="rtl"
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      {/* شريط علوي بسيط */}
      <header className="border-b bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <nav className="flex items-center gap-6 text-sm text-gray-700">
            <Link to="/" className="hover:text-blue-700">الرئيسية</Link>
            <Link to="/events" className="hover:text-blue-700">الاحداث</Link>
            <Link to="/chat" className="hover:text-blue-700">المحادثة</Link>
            <Link to="/profile" className="hover:text-blue-700">ملفي</Link>
          </nav>
          <Link
            to="/login"
            className="px-3 py-1.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800 text-sm"
          >
            دخول
          </Link>
        </div>
      </header>

      {/* كرت إنشاء حساب */}
      <main className="flex-1 flex items-start justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-2xl shadow-sm border mt-16 p-6"
        >
          <h1 className="text-2xl font-extrabold text-gray-900 mb-6">
            إنشاء حساب جديد
          </h1>

          {/* اسم المستخدم */}
          <input
            type="text"
            name="username"
            placeholder="اسم المستخدم"
            value={form.username}
            onChange={handleChange}
            className="w-full mb-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            required
          />

          {/* البريد */}
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            required
          />

          {/* كلمة المرور */}
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            required
          />

          {/* الجامعة: قائمة منسدلة */}
          <label className="block text-sm text-gray-700 mb-1">
            الجامعة أو الكلية
          </label>
          <select
            name="university"
            value={form.university}
            onChange={handleChange}
            className="w-full mb-5 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            required
          >
            <option value="" disabled>
              اختر الجامعة
            </option>
            {SA_UNIVERSITIES.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-700 text-white py-3 font-semibold hover:bg-blue-800"
          >
            إنشاء الحساب
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center">
            عندك حساب؟{" "}
            <Link to="/login" className="text-blue-700 hover:underline">
              اضغط هنا لتسجيل الدخول
            </Link>
          </p>
        </form>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        <span className="inline-flex items-center gap-1">
          ❤️ واجهة مبنية بحب — Unibot 2025 ©
        </span>
      </footer>
    </section>
  );
}
