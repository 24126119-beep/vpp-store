import "./globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-gray-50">
        <Header />
        <div className="min-h-screen">
          {children}
        </div>
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="font-bold text-xl mb-2 tracking-tighter">GEMINI VPP STORE</p>
            <p className="text-gray-400 text-sm">© 2026 Bản quyền thuộc về Nhóm Sinh Viên</p>
          </div>
        </footer>
      </body>
    </html>
  );
}