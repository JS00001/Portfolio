import Link from 'next/link';

export type ProjectProps = React.HTMLAttributes<HTMLDivElement> & {
	image: string;
	tag: string;
	title: string;
	url: string;
	description: string;
};

export const Project: React.FC<ProjectProps> = ({
	image,
	tag,
	url,
	title,
	description,
	className = '',
	...props
}) => {
	return (
		<Link href={url}>
			<div
				className={`cursor-pointer rounded-lg p-8 hover:text-primary hover:shadow-md ${className} flex flex-col`}
				{...props}
			>
				<div className='h-56 w-full'>
					<img
						src={image}
						className=' h-full w-full rounded-lg border border-gray-200 object-cover'
					/>
				</div>
				<p className='pt-6 text-xs font-medium text-gray-500'>{tag}</p>
				<p className='bg-3 text-2xl font-bold'>{title}</p>
				<p className='text-lg leading-relaxed text-gray-500'>{description}</p>
			</div>
		</Link>
	);
};
