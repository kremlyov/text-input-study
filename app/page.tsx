"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const viewport = window.visualViewport;

    if (!viewport) return;

    const syncViewport = () => {
      document.documentElement.style.setProperty(
        "--visual-viewport-top",
        `${viewport.offsetTop}px`,
      );
      document.documentElement.style.setProperty(
        "--visual-viewport-height",
        `${viewport.height}px`,
      );
    };

    syncViewport();
    viewport.addEventListener("resize", syncViewport);
    viewport.addEventListener("scroll", syncViewport);

    return () => {
      viewport.removeEventListener("resize", syncViewport);
      viewport.removeEventListener("scroll", syncViewport);
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
          id="research-input"
          className="research-input"
          type="text"
          placeholder="Поле для ввода голосом"
          autoComplete="off"
          autoCapitalize="sentences"
          enterKeyHint="done"
        />
      </div>
    </main>
  );
}
