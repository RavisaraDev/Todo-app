import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";

const TodoForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;
  margin-bottom: 10px;
  background-color: #414745;
  border-radius: 10px;
  text-decoration: none;
`;

const InputFeild = styled.input`
  background-color: #414745;
  color: #ffff;
  border: none;
  border-bottom: 1px solid #787878;
  height: 35px;
  padding: 0 8px;
  margin: 0px 15px 0 0;
  outline: none;
  width: -webkit-fill-available;
  
  ::placeholder {
  color: #787878;
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #787878;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #787878;
    } 

`;

const Button = styled.button`
  background-color: #787878;
  border-radius: 6px;
  padding: 8px 28px;
  font-weight: 900;
  color: #ffff;
  border: none;
  outline: none;
  margin: 5px;
`;

export const AddTask = ({ storeContext }) => {
  const store = useContext(storeContext);
  const [task, setTask] = React.useState("");

  return useObserver(() => (
    <>
      <TodoForm
        onSubmit={e => {
          store.addTask(task);
          setTask("");
          e.preventDefault();
        }}
      >
        <InputFeild
          type="text"
          placeholder="Type here"
          value={task}
          onChange={e => {
            setTask(e.target.value);
          }}
        />
        <Button type="submit">Add</Button>
      </TodoForm>
    </>
  ));
};
