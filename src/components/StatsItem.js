import { useAppContext } from '../context/app-context';

const StatsItem = ({ itemName, itemCount }) => {

  return (
    <div className='item'>
      <span className='itemName'>{itemName}</span> (
      <span className='itemCount'>{itemCount}</span>)
    </div>
  );
};

export default StatsItem;
