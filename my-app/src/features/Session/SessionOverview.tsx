import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { Session } from '../../models/Session';
import ActionListItem from '../Log/ActionListItem';
import { selectActions } from '../story/storySlice';

interface SessionOverviewProps {
  session: Session;
}

const SessionOverview: React.FC<SessionOverviewProps> = ({session}) => {
  const actions = useAppSelector(selectActions);

  const buildActionList = () => {
    if (!session || !session.actions) {
      return <span>Nothing of note happened</span>
    } else {
      return session.actions.map(a => {
        return <div>
          <ActionListItem action={a}></ActionListItem>
          </div>;
      });
    }
  }

  return (
    <>
      <div>
        Your session info here
        {buildActionList()}
      </div>
      <Link to="/log">Create New Log</Link>
    </>
  )
}

export default SessionOverview;