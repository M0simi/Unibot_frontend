export default function Profile() {
  return (
    <section className="font-cairo">
      <div className="rounded-2xl bg-white shadow p-6 border">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-blue-100 grid place-items-center text-blue-700 text-2xl">
            👤
          </div>
          <div>
            <h2 className="text-2xl font-bold">ملفي الشخصي</h2>
            <p className="text-gray-600 text-sm">حدّث بياناتك واحفظها</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">الاسم</label>
            <input className="w-full border rounded-xl p-3" placeholder="مثال: مشاري" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">البريد</label>
            <input className="w-full border rounded-xl p-3" placeholder="you@example.com" type="email" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">القسم</label>
            <input className="w-full border rounded-xl p-3" placeholder="علوم الحاسب" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">المستوى</label>
            <select className="w-full border rounded-xl p-3">
              <option>الأول</option><option>الثاني</option><option>الثالث</option><option>الرابع</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="px-6 py-3 rounded-xl bg-blue-700 text-white hover:bg-blue-800">حفظ</button>
          <button className="px-6 py-3 rounded-xl border hover:bg-black/5">إلغاء</button>
        </div>
      </div>
    </section>
  );
}
