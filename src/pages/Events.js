import { useEffect, useState } from "react";
import { getEvents, createEvent, deleteEvent } from "../services/events";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // مبدئيًا بنقرأ دور المستخدم من localStorage (بعد اللوجن الحقيقي فضّل تجيبه من /users/me/)
  const isAdmin = localStorage.getItem("is_admin") === "true";

  const [form, setForm] = useState({ title: "", date: "", time: "", place: "", desc: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getEvents();
        setEvents(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createEvent(form);
      setEvents((prev) => [data, ...prev]);
      setForm({ title: "", date: "", time: "", place: "", desc: "" });
    } catch (err) {
      console.error(err);
      alert("تعذر إضافة الايفنت");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل انت متاكد؟")) return;
    try {
      await deleteEvent(id);
      setEvents((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error(err);
      alert("تعذر الحذف");
    }
  };

  if (loading) {
    return <div className="p-6 font-cairo">جاري التحميل...</div>;
  }

  return (
    <section className="font-cairo">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold text-blue-800">الايفنتس الجامعية</h1>
        <p className="text-gray-600 mt-2">هنا تلاقي أحدث الفعاليات وورش العمل</p>
      </div>

      {isAdmin && (
        <form onSubmit={handleCreate} className="rounded-2xl bg-white border shadow p-5 mb-6 grid md:grid-cols-5 gap-3">
          <input name="title" value={form.title} onChange={handleChange} className="border rounded-xl p-3" placeholder="العنوان" required />
          <input name="date"  value={form.date}  onChange={handleChange} className="border rounded-xl p-3" type="date" required />
          <input name="time"  value={form.time}  onChange={handleChange} className="border rounded-xl p-3" type="time" required />
          <input name="place" value={form.place} onChange={handleChange} className="border rounded-xl p-3" placeholder="المكان" required />
          <input name="desc"  value={form.desc}  onChange={handleChange} className="border rounded-xl p-3 md:col-span-5" placeholder="الوصف" />
          <div className="md:col-span-5">
            <button className="px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800">إضافة</button>
          </div>
        </form>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {events.map((e) => (
          <div key={e.id} className="rounded-2xl bg-white shadow p-5 border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">{e.title}</h3>
              <span className="text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700 border">{e.date}</span>
            </div>
            <p className="text-gray-600 mb-3">{e.desc}</p>
            <div className="text-sm text-gray-500 flex flex-wrap gap-3">
              <span>🕒 {e.time}</span>
              <span>📍 {e.place}</span>
            </div>
            {isAdmin && (
              <button onClick={() => handleDelete(e.id)} className="mt-4 px-4 py-2 rounded-xl border hover:bg-black/5">
                حذف
              </button>
            )}
          </div>
        ))}
        {events.length === 0 && <div className="text-gray-500">لا توجد فعاليات حالياً.</div>}
      </div>
    </section>
  );
}
