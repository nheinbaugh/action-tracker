import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { StoryAction } from '../../models/StoryAction';
import { addAction, selectPlayers, selectTags } from '../story/storySlice';
import styles from './LogCreator.module.css';
import { RouteComponentProps } from 'react-router-dom';

export interface LogCreatorProps {
  foo?: string;
}

export const LogCreator: React.FC<RouteComponentProps<LogCreatorProps>> = ({ history }) => {
  const [action, updateAction] = useState('')
  const [currentTags, updateTags] = useState<Array<string>>([]);
  const [actor, updateActor] = useState('');
  const players = useAppSelector(selectPlayers);
  const tags = useAppSelector(selectTags);
  const dispatch = useAppDispatch();
  let tagToAdd  = '';
  const handleSubmission = () => {
    const actionToCreate: StoryAction = {
      focalPoint: actor,
      actionText: action,
      tags: currentTags
    }
    dispatch(addAction(actionToCreate))
    history.push('/');
  }

  const handleActorOnChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    if (value === '') {
      return;
    }
    updateActor(value);
  }

  const handleTagDropdownOnChange = (selectedOption: React.FormEvent<HTMLSelectElement>) => {
    const currentTagValue = selectedOption.currentTarget.value;
    if (currentTagValue === '' || currentTags.includes(currentTagValue)) {
      return;
    }
    tagToAdd = currentTagValue;
  }

  const addTag = () => {
    if (tagToAdd === '') {
      return;
    }
    updateTags([...currentTags, tagToAdd]);
  };

  /**
   * Determines if the action contents are valid for submission
   * @returns {Boolean} 
   */
  const allowSubmit = () => {
    return actor
      && action;
  }

  return (
    <div className={styles.flexList}>
      <h3>Log an Action</h3>
      <textarea value={action} placeholder="What happened?" onChange={t => updateAction(t.target.value)} />

      <span>Optional Fields</span>
      <div>
        <label>Who was involved?</label>
        <select name="players" id="involvedPlayer" onChange={handleActorOnChange}>
          <option disabled selected className={styles.disabled}>Who did it?</option>
          {players.map(player => <option value={player}>{player}</option>)}
        </select>
      </div>
      <div className="tag-section">
        <label>Event Tags</label>
        <div className="add-tags">
        <select name="newTag" id="tagOptions" onChange={handleTagDropdownOnChange}>
          <option disabled selected className={styles.disabled}>Add a tag...</option>
          {tags.map(tag => <option value={tag}>{tag}</option>)}
        </select>
        <button onClick={_ =>addTag()}>Add Tag</button>
        </div>
        <div className={`${styles.existingTags} ${styles.flexRow}`}>
          {currentTags.map(tag => <span className={styles.tag}>{tag}</span>)}
        </div>
        <button disabled={!allowSubmit()} onClick={handleSubmission}>Submit</button>
      </div>
    </div>
    
  )
}  