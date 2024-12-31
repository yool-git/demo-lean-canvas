import CanvasItem from './CanvasItem';
function CanvasList({ grids, gridsChange, gridColList, handleDelete }) {
  return (
    <>
      <div
        className={`text-center py-10 ${grids.length > 0 ? 'hidden' : 'block'}`}
      >
        <p className="text-xl text-gray-600">목록이 없습니다</p>
      </div>
      <div
        className={`text-center py-10 ${gridsChange.length > 0 ? 'hidden' : 'block'}`}
      >
        <p className="text-xl text-gray-600">검색 결과가 없습니다</p>
      </div>
      <div
        className={`grid gap-6 ${gridColList ? 'grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'}`}
      >
        {gridsChange.map(item => (
          <CanvasItem
            key={item.id}
            id={item.id}
            title={item.title}
            modify={item.modify}
            subTitle={item.subTitle}
            handleDelete={e => {
              e.preventDefault();
              handleDelete(item.id);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default CanvasList;
