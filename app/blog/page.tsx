import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF6F1' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold transition-opacity hover:opacity-70" style={{ color: '#52412F' }}>
            이수진 영어
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border transition-opacity hover:opacity-60"
          style={{ color: '#52412F', borderColor: '#52412F' }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">돌아가기</span>
        </Link>

        <h1 className="text-4xl font-bold mb-4" style={{ color: '#52412F' }}>블로그</h1>
        <div className="h-px w-16 mb-16" style={{ backgroundColor: '#D4A96A' }} />

        <p className="text-gray-500">아직 작성된 글이 없습니다.</p>
      </div>
    </div>
  );
}
