import React, {useContext} from "react";
import {useObserver} from "mobx-react";
import styled from "styled-components";

const TodoCard = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 21px 10px;
   border-radius: 10px;
   background-color: #414745;
   margin-bottom: 10px;
   color: #ffff
  
  p{
    margin: 0px 10px;
  }
`;

const TodoNameContainer = styled.div`
   width: 25rem;
`;

const StateContainer = styled.div`
  width: 7rem;
`;

const TodoButtonContainer = styled.div`
  width: 10rem;
`;

const Pending = styled.div`
   background-color: #ff9900c7;
   padding: 5px 10px;
   border-radius: 5px;
   width: fit-content;
}
`;

const Done = styled.div`
   background-color: #0ad752;;
   padding: 5px 10px;
   border-radius: 5px;
   width: fit-content;
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

export const TaskList = ({storeContext}) => {
    const store = useContext(storeContext);

    return useObserver(() => (
        <>
            {store.tasks.map(task => (
                <TodoCard>
                    <TodoNameContainer>
                        <p>
                            {task.name}
                        </p>
                    </TodoNameContainer>
                    <StateContainer>
                        {task.state === true ? <Done>Done</Done> : <Pending>Pending</Pending>}
                    </StateContainer>
                    <TodoButtonContainer>
                        {task.state === true ? <Button type="submit" onClick={e => {
                            store.changeState(task.id)
                        }}>Make pending
                        </Button> : <Button type="submit" onClick={e => {
                            store.changeState(task.id)
                        }}>Make done
                        </Button>}
                    </TodoButtonContainer>
                </TodoCard>
            ))}
        </>
    ));
};
