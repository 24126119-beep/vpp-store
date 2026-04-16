// app/search/page.tsx
'use client';
import { useState } from 'react';
import { products } from '@/lib/data';
import ProductCard from '@/components/product/ProductCard';
import { Search as SearchIcon } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto mb-16">
        <h1 className="text-center text-3xl font-black mb-8">BẠN ĐANG TÌM GÌ?</h1>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Tìm theo tên sản phẩm, thương hiệu..." 
            className="w-full p-5 pl-14 rounded-2xl border-2 border-gray-100 focus:border-blue-600 focus:ring-0 transition shadow-lg text-lg"
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
        </div>
      </div>

      {query && (
        <div>
          <p className="mb-8 text-gray-500">Tìm thấy <b>{filteredProducts.length}</b> kết quả cho "{query}"</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
      
      {!query && (
        <div className="text-center py-20 text-gray-400 italic">
          Hãy nhập từ khóa để bắt đầu tìm kiếm...
        </div>
      )}
    </main>
  );
}