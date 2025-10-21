import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setErr("");
    try {
      // عدّل المسار إذا مختلف في الباك-إند (مثلاً "users/register/")
      const { data } = await axios.post("register/", form);
      // لو يرجّع token + is_admin:
      if (data?.token) {
        localStorage.setItem("token", data.token);
        if (typeof data.is_admin !== "undefined") {
          localStorage.setItem("is_admin", String(!!data.is_admin));
        }
        window.location.href = "/home";
      } else {
        // لو يتطلب تفعيل بريد مثلاً
        window.location.href = "/login";
      }
    } catch (e) {
      console.error(e);
      setErr("تعذر إنشاء الحساب. تأكد من البيانات.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 font-cairo">
      <h1 className="text-2xl font-bold mb-4">إنشاء حساب جديد</h1>
      {err && <div className="mb-3 text-red-600">{err}</div>}
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input name="username" placeholder="اسم المستخدم" className="border rounded-xl p-3" onChange={handleChange} required />
        <input name="email" type="email" placeholder="البريد الإلكتروني" className="border rounded-xl p-3" onChange={handleChange} required />
        <input name="password" type="password" placeholder="كلمة المرور" className="border rounded-xl p-3" onChange={handleChange} required />
        <button disabled={loading} className="mt-2 px-6 py-3 rounded-xl bg-blue-700 text-white hover:bg-blue-800">
          {loading ? "جاري الإنشاء..." : "إنشاء الحساب"}
        </button>
      </form>
    </section>
  );
}
