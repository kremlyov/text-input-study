"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const viewport = window.visualViewport;

    if (!viewport) return;

    let frame = 0;

    const syncViewport = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--visual-viewport-top",
          `${viewport.offsetTop}px`,
        );
        document.documentElement.style.setProperty(
          "--visual-viewport-height",
          `${viewport.height}px`,
        );
      });
    };

    syncViewport();
    viewport.addEventListener("resize", syncViewport);
    viewport.addEventListener("scroll", syncViewport);

    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener("resize", syncViewport);
      viewport.removeEventListener("scroll", syncViewport);
    };
  }, []);

  return (
    <main className="study-page">
      <section className="instructions" aria-label="Инструкции">
        <ol>
          <li>Короткое сообщение другу о погоде</li>
          <li>Привет как дела</li>
          <li>Слево парк и дом</li>
        </ol>
      </section>
      <label className="sr-only" htmlFor="research-input">
        Поле для ввода текста
      </label>
      <div className="input-area">
        <div className="input-shell">
          <input
            ref={inputRef}
            id="research-input"
            className="research-input"
            type="text"
            value={value}
            placeholder="Поле для ввода голосом"
            autoComplete="off"
            autoCapitalize="sentences"
            enterKeyHint="done"
            onChange={(event) => setValue(event.target.value)}
            onPointerDown={(event) => {
              if (document.activeElement !== inputRef.current) {
                event.preventDefault();
                inputRef.current?.focus({ preventScroll: true });
              }
            }}
          />
          <button
            className="clear-input"
            type="button"
            aria-label="Очистить поле"
            disabled={!value}
            onPointerDown={(event) => event.preventDefault()}
            onClick={() => {
              setValue("");
              inputRef.current?.focus({ preventScroll: true });
            }}
          >
            ×
          </button>
        </div>
      </div>
    </main>
  );
}
