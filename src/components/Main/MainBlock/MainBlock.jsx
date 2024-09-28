import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Chat from "../Chat/Chat";

import Schedule from "../Schedule/Schedule";

import styles from "./MainBlock.module.scss";

const MainBlock = () => {
  return (
    <>
      <div className={styles.main_title}>Зал амур</div>
      <div className={styles.main}>
        <VideoPlayer />
        <Chat />
      </div>

      <Schedule eventId="AAAAA11" roomId="avrora" />
    </>
  );
};

export default MainBlock;
