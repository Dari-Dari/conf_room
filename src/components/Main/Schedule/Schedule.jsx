import { useState, useEffect } from "react";
import Slider from "react-slick";
import {
  getRoomData,
  // startRoom,
  // pauseRoom,
  // stopRoom,
  // setActiveScheduleItem,
} from "../../../utils/api.js";
import socket, {
  joinRoom,
  onJoin,
  onCurrentEvent,
  onRoomStatus,
} from "../../../utils/socket.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Schedule.module.scss";

function Schedule() {
  const [sliderRef, setSliderRef] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [status, setStatus] = useState("");
  const eventId = "AAAAA11";
  const roomId = "avrora";

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const roomData = await getRoomData(eventId, roomId);
        setSchedule(roomData.schedule);

        const activeItem = roomData.schedule.find((item) => item.is_active);
        if (roomData.is_running && activeItem) {
          setStatus(`АКТИВНАЯ СЕССИЯ: ${activeItem.item.title}`);
          moveActiveItemToFront(roomData.schedule);
        } else if (roomData.is_ended) {
          setStatus("Трансляция завершена");
        } else if (roomData.elapsed_time > 0) {
          setStatus("Трансляция приостановлена");
        } else {
          setStatus("Трансляция скоро начнется");
        }
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };

    fetchSchedule();

    joinRoom(eventId, roomId);

    onJoin((data) => {
      console.log("Joined room:", data);
    });

    onCurrentEvent((data) => {
      console.log("Current event:", data);
      setSchedule((prevSchedule) => {
        const updatedSchedule = prevSchedule.map((item) =>
          item.id === parseInt(data)
            ? { ...item, is_active: true }
            : { ...item, is_active: false }
        );

        const activeItem = updatedSchedule.find((item) => item.is_active);
        if (activeItem) {
          setStatus(`АКТИВНАЯ СЕССИЯ: ${activeItem.item.title}`);
          moveActiveItemToFront(updatedSchedule);
        }
        return updatedSchedule;
      });
    });

    onRoomStatus((data) => {
      console.log("Room status:", data);
      setStatus(data);
    });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, roomId]);

  const moveActiveItemToFront = (schedule) => {
    const activeIndex = schedule.findIndex((item) => item.is_active);
    if (activeIndex > 0) {
      const activeItem = schedule.splice(activeIndex, 1)[0];
      schedule.unshift(activeItem);
      setSchedule([...schedule]);
      if (sliderRef) {
        setTimeout(() => {
          sliderRef.slickGoTo(0);
        }, 100);
      }
    }
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: false,
    slidesToShow: 2.5,
    speed: 500,
  };

  const formatTime = (timeString) => {
    return timeString.slice(0, 5);
  };

  return (
    <div className={styles.schedule_container}>
      <div className={styles.schedule_status}>&#8226; {status}</div>
      <Slider ref={setSliderRef} {...settings}>
        {schedule.map((item, index) => (
          <div key={index} className={styles.schedule_wrapper}>
            <div className={styles.schedule_photo}>
              <img src="/schedule_photo.png" alt="photo" />
              <div
                className={styles.schedule_time}
                style={{
                  backgroundColor: item.is_active ? "#0BD28A" : "#3ea3f5",
                }}
              >
                {formatTime(item.timerange[0])} -{" "}
                {formatTime(item.timerange[1])}
              </div>
            </div>
            <div className={styles.schedule_content}>
              <div className={styles.schedule_title}>{item.item.title}</div>
              <div className={styles.schedule_speaker}>
                {item.item.subtitle}
              </div>
              <div className={styles.schedule_position}>{item.item.text}</div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        onClick={() => sliderRef?.slickPrev()}
        className={styles.schedule_pgn_left}
      >
        <img src="/schedule_pgn_left.png" alt="pgn" />
      </button>
      <button
        onClick={() => sliderRef?.slickNext()}
        className={styles.schedule_pgn_right}
      >
        <img src="/schedule_pgn_right.png" alt="pgn" />
      </button>
    </div>
  );
}

export default Schedule;
