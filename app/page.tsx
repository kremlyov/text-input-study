"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const viewport = window.visualViewport;

    if (!viewport) return;

    const syncViewport = () => {
      document.documentElement.style.setProperty(
        "--visual-viewport-height",
        `${viewport.height}px`,
      );
    };

    syncViewport();
    viewport.addEventListener("resize", syncViewport);

    return () => {
      viewport.removeEventListener("resize", syncViewport);
    };
  }, []);

  return (
    <main className="study-page">
      <section className="instructions" aria-label="Инструкции">
        <ol>
          <li>
            Привет, как дела? Я опоздаю на 20 минут
          </li>
          <li>Попросите исправить 20 минут на 30</li>
          <li>Попросите удалить последнее предложение</li>
          <li>Попросите добавить после «Привет» слово — «Андрей»</li>
        </ol>
      </section>
      <label className="sr-only" htmlFor="research-input">
        Поле для ввода текста
      </label>
      <div className="input-area">
        <input
          ref={inputRef}
          id="research-input"
          className="research-input"
          type="text"
          placeholder="Поле для ввода голосом"
          autoComplete="off"
          autoCapitalize="sentences"
          enterKeyHint="done"
          onPointerDown={(event) => {
            if (document.activeElement !== inputRef.current) {
              event.preventDefault();
              inputRef.current?.focus({ preventScroll: true });
            }
          }}
        />
      </div>
    </main>
  );
}
