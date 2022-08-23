import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Header, Grids, Colors, Background } from "../components/commons/Index";

const AddTask = props => {
  const [values, setValues] = useState({
    description: "",
    avatar: "",
  });

  const handleInputChange = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const addTask = task => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    return axios.post("/tasks/create", task, {
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    });
  };
  const queryClient = useQueryClient();

  const {
    mutate: createTask,
    isError,
    error,
  } = useMutation(addTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["tasks"]);
      props.history.push("/");
    },
  });

  const handleSubmit = e => {
    console.log("submitted");
    e.preventDefault();
    createTask({
      ...values,
    });
  };

  const gotoHome = () => {
    props.history.push("/");
  };

  return (
    <Background>
      <div data-testid="add-task">
        <Header
          title="Add Task"
          addPage={true}
          addPageClick={() => gotoHome()}
          page="home"
        />
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-box"
            name="description"
            id="description"
            placeholder="Enter task description"
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="input-box"
            name="avatar"
            id="avatar"
            placeholder="Enter avatar url"
            onChange={handleInputChange}
          />
          <Button>Add Task</Button>
        </Form>
      </div>
    </Background>
  );
};

const Form = styled.form`
  margin: ${Grids.ExtraLargeMargin}px ${Grids.SmallSpace}px
    ${Grids.SmallMargin}px ${Grids.SmallSpace}px;
  input {
    display: block;
    width: 50%;
    outline: 0;
    margin-bottom: ${Grids.ExtraLargeMargin}px;
    padding-bottom: ${Grids.SmallMargin}px;
    border-width: 0 0 2px;
    font-family: Poppins, sans-serif;
    border-color: ${Colors.ElectricIndigo};
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  background: ${Colors.ElectricIndigo};
  font-family: Poppins, sans-serif;
  padding: ${Grids.LargeSpace}px ${Grids.LargeMargin}px ${Grids.LargeSpace}px
    ${Grids.LargeMargin}px;
  color: ${Colors.White};
  font-size: 20px;
  outline: none;
`;

export default AddTask;
