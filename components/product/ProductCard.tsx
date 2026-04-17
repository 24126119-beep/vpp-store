'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../lib/data'; // Trỏ ra ngoài src để vào lib

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-2xl p-4 hover:shadow-xl transition-all bg-white flex flex-col h-full">
      <Link href={`/products/${product.id}`} className="flex-1">
        <div className="relative aspect-square overflow-hidden rounded-xl mb-4 bg-gray-50">
          <Image 
            src={product.images[0]} 
            alt={product.name} 
            fill 
            className="object-cover hover:scale-105 transition-transform"
          />
        </div>
        <h3 className="font-bold text-gray-800 line-clamp-2 h-10 text-sm">{product.name}</h3>
        <p className="text-blue-600 font-extrabold text-lg mt-2">{product.price.toLocaleString()}đ</p>
      </Link>
      <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-xl text-xs font-bold hover:bg-blue-600 transition">
        THÊM VÀO GIỎ
      </button>
    </div>
  );
}