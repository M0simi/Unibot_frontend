import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white font-cairo text-center px-6">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
        مرحباً بك في Unibot 🤖
      </h1>

      <p className="text-gray-700 max-w-2xl mb-8 leading-relaxed">
        <strong>عن Unibot 🎓</strong><br />
        Unibot هو مساعد ذكي مصمم خصيصًا للطلاب الجامعيين، يجمع المعلومات المهمة عن الجامعات في مكان واحد.
        من مواعيد التسجيل إلى الفعاليات الجامعية، يساعدك Unibot في الوصول لكل معلومة بسهولة،
        ويجيب على أسئلتك عبر شات بوت تفاعلي وسريع.
      </p>

      <div className="text-gray-700 max-w-2xl mb-8 leading-relaxed">
        <strong>👁️ رؤيتنا</strong><br />
        أن نجعل كل طالب أقرب إلى المعرفة، وكل جامعة أقرب إلى طلابها من خلال تكنولوجيا ذكية ومحادثة طبيعية.
      </div>

      <div className="text-gray-700 max-w-2xl mb-12 leading-relaxed">
        <strong>🎯 مهمتنا</strong><br />
        توفير تجربة تعليمية تفاعلية تجمع بين الذكاء الاصطناعي وسهولة الوصول،
        ليحصل الطالب على الإجابة الصحيحة في الوقت المناسب.
      </div>

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
