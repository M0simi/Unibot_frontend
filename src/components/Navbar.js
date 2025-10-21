import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const base = "px-3 py-2 rounded-lg hover:bg-black/5";
  const active = "bg-black/10";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b font-cairo">
      <div className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-800">Unibot 🤖</Link>
        <nav className="flex gap-1">
          <NavLink to="/" className={({isActive}) => `${base} ${isActive?active:""}`}>الرئيسية</NavLink>
          <NavLink to="/events" className={({isActive}) => `${base} ${isActive?active:""}`}>الاحداث</NavLink>
          <NavLink to="/chat" className={({isActive}) => `${base} ${isActive?active:""}`}>المحادثة</NavLink>
          <NavLink to="/profile" className={({isActive}) => `${base} ${isActive?active:""}`}>ملفي</NavLink>
        </nav>
        <Link to="/login" className="px-3 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800">
          دخول
        </Link>
      </div>
    </header>
  );
}
