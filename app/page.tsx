export default function Home() {
  return (
    <main className="study-page">
      <label className="sr-only" htmlFor="research-input">
        Поле для ввода текста
      </label>
      <div className="input-area">
        <input
          id="research-input"
          className="research-input"
          type="text"
          placeholder="Введите текст"
          autoComplete="off"
          autoCapitalize="sentences"
          enterKeyHint="done"
        />
      </div>
    </main>
  );
}
