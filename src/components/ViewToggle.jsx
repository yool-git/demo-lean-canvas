import { FaList, FaTh } from 'react-icons/fa';

function ViewToggle({ handleDisplayList, gridColList }) {
  return (
    <div className="flex space-x-2">
      <button
        name="Hori"
        className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!gridColList ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        aria-label="Grid view"
        onClick={handleDisplayList}
      >
        <FaTh />
      </button>
      <button
        name="verti"
        className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${gridColList ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        aria-label="List view"
        onClick={handleDisplayList}
      >
        <FaList />
      </button>
    </div>
  );
}

export default ViewToggle;
