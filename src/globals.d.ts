interface File {
	data: {
		id: number;
		attributes: {
			name: string;
			alternativeText: string;
			caption: string;
			ext: string;
			size: number;
			url: string;
			createdAt: string;
			updatedAt: string;
		};
	};
}

interface Project {
	id: number;
	attributes: {
		descriptor: string;
		title: string;
		description: string;
		link: string;
		image: File;
		createdAt: string;
		updatedAt: string;
	};
}
