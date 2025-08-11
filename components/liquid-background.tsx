"use client"

export function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-teal-700 to-green-500" />

      <div className="absolute inset-0">
        <div
          className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 800px 600px at 30% 20%, rgba(20, 184, 166, 0.9) 0%, rgba(34, 197, 94, 0.7) 40%, transparent 70%)",
            animation: "float1 20s ease-in-out infinite",
            filter: "blur(60px)",
          }}
        />

        <div
          className="absolute -top-1/4 -right-1/4 w-[120%] h-[120%] opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 600px 800px at 70% 30%, rgba(59, 130, 246, 0.8) 0%, rgba(20, 184, 166, 0.6) 50%, transparent 80%)",
            animation: "float2 25s ease-in-out infinite reverse",
            filter: "blur(50px)",
          }}
        />

        <div
          className="absolute -bottom-1/2 left-0 w-full h-[120%] opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 1000px 400px at 50% 80%, rgba(13, 148, 136, 0.7) 0%, rgba(34, 197, 94, 0.5) 60%, transparent 90%)",
            animation: "float3 30s ease-in-out infinite",
            filter: "blur(40px)",
          }}
        />

        <div
          className="absolute top-1/3 left-1/3 w-[80%] h-[80%] opacity-50"
          style={{
            background: "radial-gradient(ellipse 500px 500px at 50% 50%, rgba(16, 185, 129, 0.6) 0%, transparent 70%)",
            animation: "float4 35s ease-in-out infinite",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute top-1/4 right-1/4 w-[60%] h-[60%] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 400px 600px at 60% 40%, rgba(59, 130, 246, 0.7) 0%, rgba(20, 184, 166, 0.4) 60%, transparent 80%)",
            animation: "float5 28s ease-in-out infinite",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(30px, -20px) rotate(2deg) scale(1.1); }
          66% { transform: translate(-15px, -40px) rotate(-1deg) scale(0.9); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(-40px, 25px) rotate(-3deg) scale(1.2); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0) scale(1); }
          40% { transform: translateY(-30px) scale(1.1); }
          80% { transform: translateY(15px) scale(0.95); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -15px) scale(1.05); }
          50% { transform: translate(-25px, 10px) scale(0.9); }
          75% { transform: translate(15px, -25px) scale(1.1); }
        }

        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          30% { transform: translate(-20px, 15px) rotate(1deg) scale(1.15); }
          70% { transform: translate(25px, -10px) rotate(-2deg) scale(0.85); }
        }
      `}</style>
    </div>
  )
}
