export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* هدر موقت */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
              ⚕
            </div>
            <h1 className="text-xl font-bold text-gray-800">
              فروشگاه پزشکی MEDTOO
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-gray-600">
            <a href="#" className="hover:text-blue-600 transition">
              خانه
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              محصولات
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              درباره ما
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              تماس
            </a>
          </nav>
        </div>
      </header>

      {/* بخش قهرمان (Hero) */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-6">
          🩺 سلامت شما، اولویت ماست
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          فروشگاه آنلاین
          <span className="text-blue-600"> محصولات پزشکی</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          خرید آسان و مطمئن لوازم پزشکی و تجهیزات درمانی با ارسال سریع به سراسر
          کشور
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg shadow-blue-200">
            شروع خرید
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 font-bold py-3 px-8 rounded-lg transition border border-gray-200">
            مشاهده دسته‌بندی‌ها
          </button>
        </div>
      </section>

      {/* ویژگی‌ها */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-bold text-gray-800 mb-2">ارسال سریع</h3>
            <p className="text-gray-500 text-sm">
              تحویل ۲۴ تا ۴۸ ساعته در سراسر کشور
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-bold text-gray-800 mb-2">اصالت کالا</h3>
            <p className="text-gray-500 text-sm">
              تضمین اصالت تمام محصولات پزشکی
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="font-bold text-gray-800 mb-2">پرداخت امن</h3>
            <p className="text-gray-500 text-sm">
              پرداخت آنلاین با درگاه‌های معتبر
            </p>
          </div>
        </div>
      </section>

      {/* فوتر موقت */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p className="text-sm">
          © ۱۴۰۴ فروشگاه پزشکی MEDTOO — تمامی حقوق محفوظ است
        </p>
      </footer>
    </main>
  );
}
