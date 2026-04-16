'use client';
import Link from 'next/link';
import { ShoppingBag, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter">
          VPP<span className="text-gray-900 underline decoration-yellow-400">STORE</span>
        </Link>

        {/* Menu chính */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition">TRANG CHỦ</Link>
          <Link href="/products" className="hover:text-blue-600 transition text-blue-600">SẢN PHẨM</Link>
          <Link href="/about" className="hover:text-blue-600 transition">GIỚI THIỆU</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">LIÊN HỆ</Link>
        </nav>

        {/* Icons bên phải */}
        <div className="flex items-center gap-5">
          <Link href="/search" className="p-2 hover:bg-gray-100 rounded-full transition text-gray-600">
            <Search size={20} />
          </Link>
          <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition text-gray-600 relative">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </Link>
          <Link href="/login" className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition flex items-center gap-2">
            <User size={16} /> LOGIN
          </Link>
        </div>
      </div>
    </header>
  );
}