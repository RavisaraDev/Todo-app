import React, {useContext} from "react";
import {useObserver} from "mobx-react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .input-feild {
    background-color: white;
    color: #4d4d4d;
    height: 2rem;
    border: none;
    border-radius: 10px;
    padding: 5px 20px;
  }

  .button {
    background-color: white;
    border: none;
    padding: 12px 14px;
    border-radius: 10px;
    margin-left: 10px;
    font-weight: bold;
  }
`;

export const AddTask = ({storeContext}) => {
    const store = useContext(storeContext);
    const [task, setTask] = React.useState("");

    return useObserver(() => (
        <form onSubmit={e => {
            store.addTask(task);
            setTask("");
            e.preventDefault();
        }}>
            <InputContainer>
                <input className="input-feild" type="text" placeholder="Type here" value={task}
                       onChange={e => {
                           setTask(e.target.value);
                       }}/>
                <button className="button" type="submit">
                    Add
                </button>
            </InputContainer>
        </form>
    ));
};
