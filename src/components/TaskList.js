import React, {useContext} from "react";
import {useObserver} from "mobx-react";
import styled from "styled-components";

import Done from '../assets/done.svg'
import Pending from '../assets/pending.svg'
import Close from '../assets/close.svg'

const Card = styled.div`
  width: 219px;
  padding: 5px 16px;
  color: white;
  margin-bottom: 10px;
  background-color: #414745;
  border-radius: 10px;
  text-decoration: none;
  margin: 25px 0;

  .status {
    text-transform: uppercase;
    font-weight: bold;
  }
  
  .doneTag{
    color: #00ff9f;
  }
  
  .pendingTag{
    color: #ffbf00;;
  }
`;

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  position: relative;
  left: 196px;
  bottom: 17px;
  background-color: #242424;
  padding: 4px 6px;
  border-radius: 40px;
  
  .btn{
    background-color: #ffffff8a;
    border-radius: 30px;
    padding: 1px 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .actionIcon{
    width: 20px;
  }
`;

export const TaskList = ({storeContext}) => {
    const store = useContext(storeContext);

    return useObserver(() => (
        <>
            {store.tasks.map(task => (
                <>
                    <Card key={task.id}>
                        <ActionBar>
                            {task.state === true ? <a className="btn" type="submit" onClick={e => {
                                store.changeState(task.id)
                            }}><img className="actionIcon" src={Pending}  alt="pending-icon"/>
                            </a> : <a className="btn" type="submit" onClick={e => {
                                store.changeState(task.id)
                            }}><img className="actionIcon" src={Done}  alt="done-icon"/>
                            </a>}&nbsp;&nbsp;
                            <a className="btn" type="submit" onClick={e => {
                                store.removeTask(task.id)
                            }}><img className="actionIcon" src={Close}  alt="done-icon"/>
                            </a>
                        </ActionBar>
                        <span className="status">{task.state === true ? <span className="doneTag">done</span> : <span className="pendingTag">pending</span>}</span>
                        <p>{task.name}</p>
                    </Card>
                </>
            ))}

        </>
    ));
};
