export default function PurpleGradientBlurThree() {
  return (
    <div className="min-h-auto bg-transparent flex items-center justify-center p-8">
      {/* Main gradient blur container */}
      <div className="relative w-[300px] h-[500px]">
        {/* Core purple circle with heavy blur */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 bg-purple-600 rounded-full blur-3xl opacity-90"></div>
        </div>

        {/* Middle layer for smoother transition */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[400px] bg-purple-500 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* Outer layer for soft edges */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </div>
  );
}
