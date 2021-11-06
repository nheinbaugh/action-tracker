import { StoryAction } from "../../models/StoryAction";

interface ActionListItemProps {
  action: StoryAction
}

const ActionListItem: React.FC<ActionListItemProps> = ({action}) => {
  return (
    <>
      <div>
        {"The dude was " + action.focalPoint + ", action was " + action.actionText + ". I gave it these tags " + action.tags?.join(', ')}
      </div>
    </>
  )
}

export default ActionListItem;