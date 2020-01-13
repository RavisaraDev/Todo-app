import React from "react";
import "./styles.css";
import styled from 'styled-components'
import { useLocalStore, useObserver } from "mobx-react";

import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #ffff;
`;

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const taskStore = useLocalStore(() => ({
    tasks: [
      {
        id: 1,
        name: "Complete portfolio",
        state: true
      },
      {
        id: 2,
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        state: false
      }
    ],
    addTask: task => {
      taskStore.tasks.push({
        id: taskStore.tasks.length + 1,
        name: task,
        state: false
      });
    },
    removeTask: task => {
      taskStore.tasks.pop({
        id: taskStore.tasks.length + 1,
        name: task,
        state: false
      });
    },
    changeState: taskId => {
      taskStore.tasks[taskId - 1].state = !taskStore.tasks[taskId - 1].state;
    }
  }));

  return (
    <StoreContext.Provider value={taskStore}>{children}</StoreContext.Provider>
  );
};

export default function App() {
  return useObserver(() => (
    <StoreProvider>
      <Wrapper>
        <Title>TODO 🌿️</Title>
        <AddTask storeContext={StoreContext} />
        <TaskList storeContext={StoreContext} />
      </Wrapper>
    </StoreProvider>
  ));
}
