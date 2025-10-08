export default function PurpleGradientBlur() {
  return (
    <div className="min-h-auto bg-transparent flex items-center justify-center p-8">
      {/* Main gradient blur container */}
      <div className="relative w-[600px] h-96">
        {/* Core purple circle with heavy blur */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl opacity-90"></div>
        </div>

        {/* Middle layer for smoother transition */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* Outer layer for soft edges */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </div>
  );
}
