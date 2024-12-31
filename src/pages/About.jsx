import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Button from '../components/Button';
import { QueryClient } from '@tanstack/react-query';

function About() {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ['canvases'],
    queryFn: () =>
      axios.get('http://localhost:8000/canvases/').then(res => res.data),
    initialData: [],
  });

  const { mutate: createCanvases, isLoading: isLoadingCreate } = useMutation({
    mutationFn: newcanvas =>
      axios.post('http://localhost:8000/canvases/', newcanvas),
    onSuccess: () => {
      queryClient.invalidateQueries(['canvases']);
    },
  });

  const handleCreate = () => {
    createCanvases({ title: 'new canvas' });
  };
  return (
    <div>
      {isLoading && <p>isLoading...</p>}
      {error && <p>{error.message}</p>}
      {data?.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}

      {isLoadingCreate && <p>isLoading...</p>}
      <Button onClick={handleCreate}>등록</Button>
    </div>
  );
}

export default About;
