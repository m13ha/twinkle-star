import { useAppContext } from '../context/app-context';

const StatsItem = ({ itemName, itemCount }) => {
  const { openStarInfoRandom } = useAppContext();

  return (
    <div className='item' onClick={openStarInfoRandom}>
      <span className='itemName'>{itemName}</span> (
      <span className='itemCount'>{itemCount}</span>)
    </div>
  );
};

export default StatsItem;
