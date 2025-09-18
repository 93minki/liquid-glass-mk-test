import { createLiquidGlassCursor, LiquidGlass } from "liquid-glass-mk";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // 페이지 로드 시 커서 효과 시작
    const cleanup = createLiquidGlassCursor({
      size: 120,
      blur: 1,
      intensity: 0.3,
      color: "rgba(255, 255, 255, 0.3)", // alpha 값 높이기
      duration: 200,
    });

    // 컴포넌트 언마운트 시 정리
    return cleanup;
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background:
          "url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk1Njc4NTB8&ixlib=rb-4.1.0&q=85') center/cover no-repeat",
        position: "relative",
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        🪟 Liquid Glass Test
      </h1>

      {/* 배경 오버레이 - 이미지 위에 미묘한 그라데이션 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 기본 효과 */}
        <LiquidGlass>
          <div style={{ padding: "30px", textAlign: "center" }}>
            <h2 style={{ color: "white", marginBottom: "15px" }}>기본 효과</h2>
            <p style={{ color: "white", opacity: 0.9 }}>
              이것은 기본 liquid glass 효과입니다.
            </p>
          </div>
        </LiquidGlass>

        {/* 강한 효과 */}
        <LiquidGlass intensity="strong" blur={20} size="lg">
          <div style={{ padding: "30px", textAlign: "center" }}>
            <h2 style={{ color: "white", marginBottom: "15px" }}>강한 효과</h2>
            <p style={{ color: "white", opacity: 0.9 }}>
              더 강한 blur와 intensity를 적용했습니다.
            </p>
          </div>
        </LiquidGlass>

        {/* 약한 효과 */}
        <LiquidGlass intensity="light" blur={5} size="sm">
          <div style={{ padding: "30px", textAlign: "center" }}>
            <h2 style={{ color: "white", marginBottom: "15px" }}>약한 효과</h2>
            <p style={{ color: "white", opacity: 0.9 }}>
              더 미묘한 효과를 적용했습니다.
            </p>
          </div>
        </LiquidGlass>

        {/* 커스텀 스케일 */}
        <LiquidGlass scale={1.2} intensity="medium">
          <div style={{ padding: "30px", textAlign: "center" }}>
            <h2 style={{ color: "white", marginBottom: "15px" }}>큰 스케일</h2>
            <p style={{ color: "white", opacity: 0.9 }}>
              호버 시 더 크게 확대됩니다.
            </p>
          </div>
        </LiquidGlass>

        {/* 커스텀 호버 스타일 */}
        <LiquidGlass
          customHoverStyle={{
            transform: "rotate(5deg) scale(1.1)",
            filter: "brightness(1.2)",
          }}
          intensity="medium"
        >
          <div style={{ padding: "30px", textAlign: "center" }}>
            <h2 style={{ color: "white", marginBottom: "15px" }}>회전 효과</h2>
            <p style={{ color: "white", opacity: 0.9 }}>
              호버 시 회전하고 밝아집니다.
            </p>
          </div>
        </LiquidGlass>

        {/* 커스텀 마우스 핸들러 */}
        <LiquidGlass
          onMouseEnter={() => console.log("🎉 마우스 진입!")}
          onMouseLeave={() => console.log("👋 마우스 나감!")}
          intensity="strong"
        >
          <div style={{ padding: "30px", textAlign: "center" }}>
            <h2 style={{ color: "white", marginBottom: "15px" }}>
              커스텀 핸들러
            </h2>
            <p style={{ color: "white", opacity: 0.9 }}>콘솔을 확인해보세요!</p>
          </div>
        </LiquidGlass>

        {/* 완전 커스텀 */}
        <LiquidGlass
          disableDefaultHover={true}
          customHoverStyle={{
            transform: "translateY(-10px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            background: "rgba(255, 255, 255, 0.3)",
          }}
          customBaseStyle={{
            background:
              "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3))",
            border: "2px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <div style={{ padding: "30px", textAlign: "center" }}>
            <h2 style={{ color: "white", marginBottom: "15px" }}>
              완전 커스텀
            </h2>
            <p style={{ color: "white", opacity: 0.9 }}>
              모든 스타일을 커스터마이징했습니다.
            </p>
          </div>
        </LiquidGlass>

        {/* 숫자 값 테스트 */}
        <LiquidGlass intensity={0.5} blur={5}>
          <div style={{ padding: "30px", textAlign: "center" }}>
            <h2 style={{ color: "white", marginBottom: "15px" }}>숫자 값</h2>
            <p style={{ color: "white", opacity: 0.9 }}>
              intensity: 0.5, blur: 5px
            </p>
          </div>
        </LiquidGlass>
      </div>

      <div
        style={{
          marginTop: "60px",
          textAlign: "center",
          color: "white",
          opacity: 0.8,
        }}
      >
        <p>🪟 liquid-glass-mk 라이브러리 테스트 완료!</p>
        <p>각 카드에 마우스를 올려보세요.</p>
      </div>
    </div>
  );
}

export default App;
