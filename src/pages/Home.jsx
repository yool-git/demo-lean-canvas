import { useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { getCanvaes, createCanvases, deleteCanvaes } from '../api/canvas';
import Loading from '../components/Loding';
import Error from '../components/Error';
import Button from '../components/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

function Home() {
  const [gridColList, setGridColList] = useState(false);
  const [searchText, setSearchText] = useState();
  const queryClient = useQueryClient();

  //1. 데이터 조회
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['canvases', searchText],
    queryFn: () => getCanvaes({ title_like: searchText }),
    initialData: [],
  });

  //2. 데이터 등록
  const { mutate: createNewCanvas, isLoading: isLoadingCreate } = useMutation({
    mutationFn: createCanvases,
    onSuccess: queryClient.invalidateQueries(['cavases']),
    onError: err => alert(err.message),
  });

  //3. 데이터 삭제
  const { mutate: deleteCanvasMutation } = useMutation({
    mutationFn: deleteCanvaes,
    onSuccess: queryClient.invalidateQueries(['cavases']),
    onError: err => alert(err.message),
  });

  const handleSearch = e => {
    // if (e.key != 'Enter') return;
    // let newGrids = [];
    // newGrids = grids.filter(item => {
    //   return item.title.toLowerCase().includes(searchText.toLocaleLowerCase());
    // });
    // if (newGrids.length > 0) {
    //   setGridsChange(newGrids);
    // } else {
    //   setGridsChange([]);
    // }
  };

  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const handleDisplayList = e => {
    console.log('name', e.currentTarget.name);

    if (e.currentTarget.name === 'verti') {
      setGridColList(true);
    } else {
      setGridColList(false);
    }
  };

  const handleDelete = async id => {
    deleteCanvasMutation(id);
  };

  const handleCreateCanvas = async () => {
    createNewCanvas();
  };
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        {/* 여기서 부터 컴포넌트로 분리 */}
        <SearchBar
          // handleSearch={handleSearch}
          // handleSearchTextChange={handleSearchTextChange}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {/* 여기까지 컴포넌트 분리 끝 */}
        <ViewToggle
          handleDisplayList={handleDisplayList}
          gridColList={gridColList}
        />
      </div>

      <div className="flex justify-end mb-6">
        <Button loding={isLoadingCreate} onClick={handleCreateCanvas}>
          등록하기
        </Button>
      </div>
      {isLoading && <Loading />}
      {error && <Error message={error} onRetry={refetch} />}

      {/* 여기서 부터 컴포넌트로 분리 */}
      {!isLoading && !error && (
        <CanvasList
          grids={data}
          gridsChange={data}
          gridColList={gridColList}
          handleDelete={handleDelete}
        />
      )}

      {/* 여기까지 컴포넌트 분리 끝 */}
    </>
  );
}

export default Home;
