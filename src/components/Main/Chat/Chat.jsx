import styles from "./Chat.module.scss";

const Chat = () => {
  return (
    <>
      <div className={styles.chat_container}>
        <div>
          <div className={styles.chat_title}>
            <div className={styles.chat_title_name}>LIVE CHAT</div>
            <div className={styles.chat_title_info}>
              <img src="/chat_info_icon.png" alt="icon" />
            </div>
          </div>
          <div className={styles.chat_body}>
            <div className={styles.chat_message}>
              <div className={styles.chat_message_name}>Иван Зубарев</div>
              <div className={styles.chat_message_text}>
                Спасибо Анне Анатольевне за очень интересный доклад!
              </div>
            </div>
            <div className={styles.chat_message}>
              <div className={styles.chat_message_name}>Екатерина Овсянина</div>
              <div className={styles.chat_message_text}>
                Подскажите когда секция про Остеопороз у мужчин?
              </div>
            </div>
            <div className={styles.highlighted}>
              <div className={styles.chat_message_name}>Екатерина Овсянина</div>
              <div className={styles.chat_message_text}>
                Вопрос спикеру: Факторы риска переломов бедра у мужчин?
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chat_input}>
          <img
            className={styles.chat_icon_faq}
            src="/chat_question_mark_icon.png"
            alt="icon"
          />

          <input
            className={styles.chat_input_message}
            type="text"
            placeholder="Введите сообщение"
          />

          <img
            className={styles.chat_icon_smile}
            src="/chat_smile_icon.png"
            alt="icon"
          />
          <img
            className={styles.chat_icon_send}
            src="/chat_send_icon.png"
            alt="icon"
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
