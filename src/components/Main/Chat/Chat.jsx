import iconInfo from "/public/chat_info_icon.png";
import iconQuestionMark from "/public/chat_question_mark_icon.png";
import iconSmile from "/public/chat_smile_icon.png";
import iconSend from "/public/chat_send_icon.png";

import styles from "./Chat.module.scss";

const Chat = () => {
  return (
    <>
      <div className={styles.chat_container}>
        <div>
          <div className={styles.chat_title}>
            <div className={styles.chat_title_name}>LIVE CHAT</div>
            <div className={styles.chat_title_info}>
              <img src={iconInfo} alt="icon" />
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
            src={iconQuestionMark}
            alt="icon"
          />

          <input
            className={styles.chat_input_message}
            type="text"
            placeholder="Введите сообщение"
          />

          <img className={styles.chat_icon_smile} src={iconSmile} alt="icon" />
          <img className={styles.chat_icon_send} src={iconSend} alt="icon" />
        </div>
      </div>
    </>
  );
};

export default Chat;
