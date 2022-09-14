import React from 'react';
import Header from '../Header';
import Section from '../Section';
import Project from '../Project';
import Content from '../../content';
import { getFileUrl } from '../../api';

export type ProjectProps = {
	projects: Project[];
};

const Projects: React.FC<ProjectProps> = ({ projects }) => {
	return (
		<Section className='py-36' id='projects'>
			<Header className='text-center lg:text-left'>
				<Header.Subject>{Content.Projects.subject}</Header.Subject>
				<Header.Title>{Content.Projects.title}</Header.Title>
			</Header>

			<div className='grid gap-4 pt-10 md:grid-cols-2 xl:grid-cols-3'>
				{projects.map((project, index) => (
					<Project
						key={index}
						url={project.attributes.link}
						image={getFileUrl(project.attributes.image)}
						tag={project.attributes.descriptor}
						title={project.attributes.title}
						description={project.attributes.description}
					/>
				))}
			</div>
		</Section>
	);
};

export default Projects;
