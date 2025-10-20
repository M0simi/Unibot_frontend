import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('login/', { email, password });
      onLogin(response.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'خطأ في الاتصال بالخادم');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 animate-fade-in">
        <div className="text-center space-y-3">
          <LogIn className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900 font-cairo">دخول Unibot</h2>
          <p className="text-gray-500 text-sm font-cairo">شاتبوت الجامعة الذكي</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 font-cairo">البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 font-cairo"
                placeholder="admin@unibot.com"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 font-cairo">كلمة المرور</label>
            <div className="relative">
              <Lock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 font-cairo"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm text-center font-cairo p-3 bg-red-50 rounded-lg">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg font-cairo flex items-center justify-center space-x-2 space-x-reverse"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                جاري الدخول...
              </>
            ) : (
              <>
                <LogIn className="h-5 w-5" />
                دخول
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
