import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#faf5ef] text-[#121212] font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#121212] mb-4">
          የሁدهድ ሬስቶራንት ናቭባር በስኬት ተሰራ!
        </h2>
        <p className="text-stone-600">ናቭባሩ ከሎጎው እና ከከለሩ ጋር ሙሉ በሙሉ ተስተካክሏል።</p>
      </div>
    </div>
  );
}

export default App;
