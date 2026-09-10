export default function Home() {
  return (
    <main className="study-page">
      <section className="instructions" aria-label="Инструкции">
        <ol>
          <li>
            Продиктуйте:
            <br />
            «Привет, как дела? Я опоздаю на 20 минут»
          </li>
          <li>Попросите исправить 20 минут на 30</li>
          <li>Попросите удалить последнее предложение</li>
          <li>Попросите добавить после «Привет» слово — «Андрей»</li>
          <li>Удалите весь текст</li>
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
          placeholder="Введите текст"
          autoComplete="off"
          autoCapitalize="sentences"
          enterKeyHint="done"
        />
      </div>
    </main>
  );
}
