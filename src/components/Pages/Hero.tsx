import React from 'react';
import Link from 'next/link';
import Content from '../../content';
import Button from '../Button';
import Section from '../Section/Section';

const Hero: React.FC = () => {
	return (
		<Section className='grid py-48 xl:grid-cols-2'>
			{/* Section Header */}
			<div className='flex flex-col items-center text-center xl:mr-10 xl:items-start xl:text-left'>
				<div className='pb-5 text-6xl font-black leading-none md:text-8xl'>
					{Content.Hero.title}
				</div>
				<div className='text-2xl leading-normal text-gray-500'>{Content.Hero.subtitle}</div>
				<div className='mt-10'>
					<Link href='/contact'>
						<Button size='medium'>Contact Me</Button>
					</Link>
				</div>
			</div>

			{/* Hero Image */}
			<div className='hidden items-center justify-center xl:flex'>
				<img
					src='https://content.jacksenyitko.com/uploads/Dashboard_Design_a0c2e741f1.png'
					className='rounded-lg border border-gray-200'
				/>
			</div>
		</Section>
	);
};

export default Hero;
