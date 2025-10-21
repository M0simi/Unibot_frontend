export default function Profile() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold mb-4">ملفي الشخصي</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">الاسم</label>
          <input className="w-full border rounded-xl p-3" placeholder="مثال: مشاري" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">البريد</label>
          <input className="w-full border rounded-xl p-3" placeholder="you@example.com" type="email" />
        </div>
      </div>
      <button className="mt-6 px-6 py-3 rounded-xl bg-blue-700 text-white hover:bg-blue-800">
        حفظ
      </button>
    </div>
  );
}
