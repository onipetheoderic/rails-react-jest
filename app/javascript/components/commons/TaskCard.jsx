import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TaskCard = ({ avatar, description, checkBoxClick, time, checked }) => {
  return (
    <OverallWrapper data-testid="task-card">
      <Wrapper>
        <ImageContainer>
          <img src={avatar} alt="avatar" className="image" />
        </ImageContainer>
        <p className="description">{description}</p>
        {checked ? (
          <p className="time">{time}</p>
        ) : (
          <div className="check-box">
            <input type="checkbox" onClick={checkBoxClick} />
          </div>
        )}
      </Wrapper>
    </OverallWrapper>
  );
};

TaskCard.propTypes = {
  avatar: PropTypes.string,
  description: PropTypes.string,
  checkBoxClick: PropTypes.func,
  time: PropTypes.string,
  checked: PropTypes.bool,
};

const OverallWrapper = styled.div`
  display: flex;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  font-family: Poppins, sans-serif;
  width: 60%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .description {
    font-size: 11px;
    margin-left: 5px;
  }
  .time {
    font-size: 11px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .image {
    height: 50px;
    width: 50px;
    border-radius: 30px;
  }
`;

export default TaskCard;
