import '../Filter/Filter.css'
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../redux/store';

export function Filter() {
  const inputValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleFilterInput = event => {
    const { value } = event.currentTarget;
    dispatch(filter(value));
  };

  return (
    <label className="label">
      Find contacts by name
      <input
        className="input"
        type="text"
        name="filter"
        onChange={handleFilterInput}
        value={inputValue}
      ></input>
    </label>
  );
}
