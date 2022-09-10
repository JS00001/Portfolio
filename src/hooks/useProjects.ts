import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchApi } from '../api';

const useProjects = () => {
	const [data, setData] = useState<Project[]>([]);

	const query = useQuery(['projects'], async () => fetchApi('/projects', { populate: '*' }), {
		onSuccess: ({ data }) => setData(data),
	});

	return { data, error: query.error };
};

export default useProjects;
