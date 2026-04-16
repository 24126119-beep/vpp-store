'use client';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-black mb-6">LIÊN HỆ</h1>
          <p className="text-gray-500 mb-10">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600"><Phone size={20}/></div>
              <div><p className="text-xs text-gray-400 font-bold uppercase">Điện thoại</p><p className="font-bold">0123.456.789</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600"><Mail size={20}/></div>
              <div><p className="text-xs text-gray-400 font-bold uppercase">Email</p><p className="font-bold">support@geminivpp.vn</p></div>
            </div>
          </div>
        </div>

        {/* Form liên hệ */}
        <form className="bg-white border p-8 rounded-[2rem] shadow-xl space-y-4">
          <div>
            <label className="text-xs font-black uppercase mb-2 block">Họ và tên</label>
            <input type="text" placeholder="Nhập tên của bạn..." className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="text-xs font-black uppercase mb-2 block">Lời nhắn</label>
            <textarea rows={4} placeholder="Chúng tôi có thể giúp gì cho bạn?" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition">
            GỬI YÊU CẦU <Send size={18} />
          </button>
        </form>
      </div>
    </main>
  );
}