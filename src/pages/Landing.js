import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white font-cairo text-center px-6">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
        مرحباً بك في Unibot 🤖
      </h1>

      <p className="text-gray-700 max-w-2xl mb-8 leading-relaxed">
        <strong>عن Unibot 🎓</strong><br />
        Unibot هو مساعد ذكي للطلاب الحامعيين. يساعدك في طرح الاسئلة العامة
        بسرعة وسهولة, قصتنا قصتنا بدأت في جعل الاجوبة اكثر قربا من كل طالب
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/chat"
          className="px-6 py-3 rounded-xl bg-blue-700 text-white hover:bg-blue-800"
        >
          💬 ابدأ المحادثة
        </Link>
        <Link
          to="/profile"
          className="px-6 py-3 rounded-xl border border-blue-700 text-blue-700 hover:bg-blue-50"
        >
          👤 ملفي الشخصي
        </Link>
        <Link
          to="/events"
          className="px-6 py-3 rounded-xl border hover:bg-gray-100"
        >
          📅 الاحداث
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 rounded-xl border hover:bg-gray-100"
        >
          🔑 تسجيل الدخول
        </Link>
      </div>

      <footer className="mt-16 text-sm text-gray-500">
        صنع بحب ❤️ لتجربة جامعية أذكى
      </footer>
    </section>
  );
}
