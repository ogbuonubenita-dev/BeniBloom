import React from "react";

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">
          🌸 <span>BeniBloom</span>
        </div>

        <button className="parent-button">
          🔒 Parent
        </button>
      </header>

      <main>
        <section className="welcome">
          <p className="hello">Hi, Maya! 👋</p>

          <h1>Ready to Bloom? 🌱</h1>

          <p>
            Let's learn something wonderful today!
          </p>

          <button className="primary-button">
            Start Learning →
          </button>
        </section>

        <section className="learning">
          <h2>Today's Learning</h2>

          <div className="cards">
            <div className="learning-card">
              <div className="icon">🔤</div>
              <h3>Letters</h3>
              <p>Meet Letter A</p>
              <button>Learn →</button>
            </div>

            <div className="learning-card">
              <div className="icon">🔢</div>
              <h3>Numbers</h3>
              <p>Count the stars</p>
              <button>Learn →</button>
            </div>

            <div className="learning-card">
              <div className="icon">🎨</div>
              <h3>Colors</h3>
              <p>Find the yellow flower</p>
              <button>Learn →</button>
            </div>
          </div>
        </section>

        <section className="garden-preview">
          <div>
            <h2>My Garden 🌸</h2>
            <p>Your learning garden is growing!</p>
          </div>

          <div className="garden">
            🌱 🌷 🦋
          </div>

          <strong>⭐ 24 Stars</strong>
        </section>
      </main>

      <nav className="bottom-nav">
        <button>🏠<span>Home</span></button>
        <button>📚<span>Learn</span></button>
        <button>🎮<span>Play</span></button>
        <button>🌸<span>Garden</span></button>
      </nav>
    </div>
  );
}
