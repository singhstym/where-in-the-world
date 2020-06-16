import React from "react";
import styled from "styled-components";

const PopupNotificationStyle = styled.div`
  position: fixed;
  text-align: center;
  z-index: 5;
  padding: 0.5rem;
  background-color: red;
  width: 200px;
  font-size: 1.3rem;
  font-weight: 800px;
  border-radius: 5px;
  top: 90%;
  right: -10%;
  display: none;
`;

function PopupNotification({ popupStat, setPopupStat }) {
  return (
    <PopupNotificationStyle
      onClick={() => setPopupStat(!popupStat)}
      popupStat={popupStat}
    >
      <div>Not Found!</div>
    </PopupNotificationStyle>
  );
}

export default PopupNotification;
