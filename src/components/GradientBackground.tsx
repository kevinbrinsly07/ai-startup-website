export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Top left glow */}
      <div className="absolute -top-40 -left-40">
        <div className="w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Top right glow */}
      <div className="absolute -top-20 right-20">
        <div className="w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-25"></div>
      </div>

      {/* Center large glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
        <div className="w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Bottom left glow */}
      <div className="absolute bottom-0 -left-20">
        <div className="w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-25"></div>
      </div>

      {/* Bottom right glow */}
      <div className="absolute -bottom-40 -right-40">
        <div className="w-[500px] h-[500px] bg-purple-600 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Middle accent glow */}
      <div className="absolute top-1/2 right-1/4">
        <div className="w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>
    </div>
  );
}
