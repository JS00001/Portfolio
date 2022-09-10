import React from 'react';
import Link from 'next/link';
import Content from '../../content';
import Section from '../Section/Section';
import { Button } from '../shared/Button';

const Contact: React.FC = () => {
	return (
		<Section className='flex flex-col items-center py-36'>
			<div className='flex max-w-2xl flex-col items-center text-center'>
				<p className='text-lg font-medium text-gray-500'>{Content.Contact.subject}</p>
				<p className='py-3 text-6xl font-black'>{Content.Contact.title}</p>
				<p className='my-4 text-xl font-medium leading-normal text-gray-500'>
					{Content.Contact.subtitle}
				</p>
				<Link href='mailto:senyitkojack@gmail.com'>
					<Button className='my-4' size='medium'>
						senyitkojack@gmail.com
					</Button>
				</Link>
			</div>
		</Section>
	);
};

export default Contact;
