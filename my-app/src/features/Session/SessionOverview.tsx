import { stringify } from 'querystring';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectActions } from '../story/storySlice';

const SessionOverview: React.FC = (props) => {
  const actions = useAppSelector(selectActions);
  return (
    <>
      <div>
        Your session info here
        {actions.map(a => {
          return <div>
            {"Actor was " + a.focalPoint + ", action was " + a.actionText + ". I gave it these tags " + a.tags?.join(', ')}
            </div>;
        })}
      </div>
      <Link to="/log">Create New Log</Link>
    </>
  )
}

export default SessionOverview;