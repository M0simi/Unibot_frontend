import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";        // صفحة عامة للجميع
import Home from "./pages/Home";              // صفحة محمية (داشبورد/شات)
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";

// إعداد Axios
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Token ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
    setLoading(false);
  }, [token]);

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-700 font-cairo">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  // حماية بسيطة للمسارات الخاصة
  const Protected = ({ children }) => (token ? children : <Navigate to="/login" replace />);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-cairo">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-6">
          <Routes>
            {/* الصفحة الرئيسية العامة (Landing) */}
            <Route path="/" element={<Landing />} />

            {/* تسجيل الدخول: لو مسجّل رجّعه للـ Home */}
            <Route
              path="/login"
              element={!token ? <Login onLogin={handleLogin} /> : <Navigate to="/home" replace />}
            />

            {/* الصفحات المحمية */}
            <Route
              path="/home"
              element={
                <Protected>
                  <Home onLogout={handleLogout} />
                </Protected>
              }
            />
            <Route
              path="/chat"
              element={
                <Protected>
                  <Chat />
                </Protected>
              }
            />
            <Route
              path="/profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
            <Route
              path="/admin"
              element={
                <Protected>
                  <AdminDashboard />
                </Protected>
              }
            />

            {/* أي مسار غير معروف */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
