import React from "react";
import Card from "../../Shared/Card/Card.component";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Participant.css";

export const Participant = (props) => {
  const data=[
    {
      img:"https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-51.jpg"
    },
    {
      img:"https://cdn.costumewall.com/wp-content/uploads/2017/01/kakashi-hatake.jpg"
    },
    {
      img:"https://i.pinimg.com/originals/a7/8c/39/a78c39b867684206242df9ddb6ca2107.jpg"
    },
    {
      img:"https://wallpapercave.com/wp/wp3961430.jpg"
    },
    {
      img:"https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-cute-anime-avatar-profile-picture-14.jpg"
    },
    {
      img:"https://i.pinimg.com/236x/d2/b9/dd/d2b9dde769e879433e5a172bd855c96f.jpg"
    },
    {
      img:"data:image/jpeg;base64,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"
    },
    {
      img:"https://i1.sndcdn.com/avatars-000747791152-2y9ctb-t500x500.jpg"
    },
    {
      img:"https://i.pinimg.com/originals/cd/e8/8c/cde88c52311f914eed185331cc4ca756.jpg"
    },
    {
      img:"https://lh3.googleusercontent.com/I2KvVQ5rXw9FWrrw_yl-RsEcBJpRRA8jkMOOBLHSI2giJhO2wLnb7qdMEhgIYA2QxFw"
    }
  ]
  let rand = Math.floor(Math.random() * (data.length))
  console.log(rand)

  const {
    curentIndex,
    currentParticipant,
    hideVideo,
    videoRef,
    showAvatar,
    currentUser,
  } = props;
  if (!currentParticipant) return <></>;
  return (
    <div className={`participant ${hideVideo ? "hide" : ""}`} style={{padding:0}}>
      <Card>
        <video
          ref={videoRef}
          className="video"
          id={`participantVideo${curentIndex}`}
          autoPlay
          playsInline
        ></video>
        {!currentParticipant.audio && (
          <FontAwesomeIcon
            className="muted"
            icon={faMicrophoneSlash}
            title="Muted"
          />
        )}
        {showAvatar && (
          <div
            style={{height:300}}
            className="avatar"
          >
            <img src={data[rand].img} alt="" srcset="" height={200} width={200}/>
            {/* {currentParticipant.name[0]} */}
          </div>
        )}
        <div className="name">
          {currentParticipant.name}
          {currentUser ? "(You)" : ""}
        </div>
      </Card>
    </div>
  );
};
