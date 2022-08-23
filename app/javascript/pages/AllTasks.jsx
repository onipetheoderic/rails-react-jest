import React, { useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Header, TaskCard, Background } from "../components/commons/Index";

const AllTasks = props => {
  const gotoAddTask = () => {
    props.history.push("/add");
  };

  const fetchTasks = () => {
    return axios.get("/tasks/index");
  };

  const editTask = taskId => {
    const url = `/tasks/${taskId}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    return axios.patch(`${url}`, {
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    });
  };

  const { isLoading, data, isError, error } = useQuery(["tasks"], fetchTasks);

  const queryClient = useQueryClient();
  const { mutate: updateTask } = useMutation(editTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["tasks"]);
      props.history.push("/");
    },
  });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <Background>
      <div data-testid="tasks">
        <Header
          title="Tasks"
          addPage={true}
          addPageClick={() => gotoAddTask()}
        />
        {data?.data.map(task => (
          <TaskCard
            key={task.id}
            avatar={task.avatar}
            description={task.description}
            checked={task.checked}
            time={task.time}
            checkBoxClick={() => updateTask(task.id)}
          />
        ))}
      </div>
    </Background>
  );
};

export default AllTasks;
