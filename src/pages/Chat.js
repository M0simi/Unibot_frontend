import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Send, Search, Bot } from 'lucide-react';

const Chat = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    const userMsg = { type: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);
    setQuery('');

    try {
      const response = await axios.post('search/', { query });
      const results = response.data.results || [];
      let botText = '';
      if (results.length > 0) {
        botText = results.map(r => `**س: ${r.question}**\nج: ${r.answer}\nالفئة: ${r.category.name}`).join('\n\n---\n\n');
      } else {
        botText = 'عذرًا، لم أجد إجابة مناسبة. جرب صياغة سؤال آخر أو تحقق من الإدارة الجامعية.';
      }
      setMessages(prev => [...prev, { type: 'bot', text: botText }]);
    } catch (err) {
      setMessages(prev => [...prev, { type: 'bot', text: 'خطأ في الاتصال بالخادم. تحقق من الإنترنت أو أعد المحاولة.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 font-cairo">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-3">
            <Bot className="h-16 w-16 opacity-50" />
            <h3 className="text-lg font-medium font-cairo">مرحباً! أنا Unibot</h3>
            <p className="text-sm font-cairo">شاتبوت الجامعة للأسئلة والأحداث</p>
            <div className="flex items-center space-x-2 space-x-reverse text-sm font-cairo">
              <Search className="h-4 w-4" />
              <span>جرب: "كيف أصل إلى المكتبة؟"</span>
            </div>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-md px-4 py-3 rounded-2xl shadow-md ${
                msg.type === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}>
                <p className={`font-cairo whitespace-pre-wrap ${msg.type === 'bot' ? 'text-sm leading-relaxed' : ''}`}>
                  {msg.text}
                </p>
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="flex justify-end">
            <div className="bg-white px-4 py-3 rounded-2xl shadow-md border border-gray-200">
              <div className="flex space-x-1 space-x-reverse">
                <div className="animate-bounce bg-blue-600 h-2 w-2 rounded-full"></div>
                <div className="animate-bounce bg-blue-600 h-2 w-2 rounded-full delay-150"></div>
                <div className="animate-bounce bg-blue-600 h-2 w-2 rounded-full delay-300"></div>
              </div>
              <p className="text-xs text-gray-500 font-cairo mt-2">Unibot يفكر...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="p-6 bg-white border-t border-gray-200">
        <div className="flex space-x-3 space-x-reverse max-w-4xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="اكتب سؤالك هنا... (مثال: كيف أصل إلى المكتبة؟)"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 font-cairo text-sm"
            disabled={loading}
            onKeyPress={(e) => e.key === 'Enter' && !loading && handleSend(e)}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-xl transition duration-200 shadow-sm hover:shadow-md flex items-center space-x-2 space-x-reverse font-cairo"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
