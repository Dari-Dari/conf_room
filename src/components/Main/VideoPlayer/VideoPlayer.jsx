import styles from "./VideoPlayer.module.scss";

const VideoPlayer = () => {
  return (
    <>
      <div className={styles.video_wrapper}>
        <iframe
          className={styles.video}
          src="https://rutube.ru/play/embed/ec5e642ed8c200d638c18e6aa0726a45"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlayer;
