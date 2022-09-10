import React from 'react';
import Link from 'next/link';
import Content from '../../content';
import { Header } from '../shared/Header';
import { Button } from '../shared/Button';
import Section from '../Section/Section';
import { ProjectStrategy } from '../shared/ProjectStrategy';

const Process: React.FC = () => {
	return (
		<Section className='py-36 text-center lg:text-left'>
			<div className='grid pb-10 lg:grid-cols-2'>
				<Header>
					<Header.Subject>{Content.Process.subject}</Header.Subject>
					<Header.Title>{Content.Process.title}</Header.Title>
					<Header.Subtitle>{Content.Process.subtitle}</Header.Subtitle>
				</Header>
				<div className='flex items-center justify-center'>
					<Link href='/#projects'>
						<Button className='mt-10 lg:mt-0'>View Projects</Button>
					</Link>
				</div>
			</div>

			<div className='grid gap-x-10 gap-y-16 py-10 lg:grid-cols-2'>
				{Content.Process.strategies.map((strategy, index) => (
					<ProjectStrategy key={index} title={strategy.title} description={strategy.description} />
				))}
			</div>
		</Section>
	);
};

export default Process;
