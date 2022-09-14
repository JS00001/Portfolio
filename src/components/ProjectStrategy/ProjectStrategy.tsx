export type ProjectStrategyProps = React.HTMLAttributes<HTMLDivElement> & {
	title: string;
	description: string;
};

const ProjectStrategy: React.FC<ProjectStrategyProps> = ({
	title,
	description,
	className = '',
	...props
}) => {
	return (
		<div className={className} {...props}>
			<p className='pb-3 text-4xl font-extrabold'>{title}</p>
			<p className='text-xl font-medium leading-relaxed text-gray-500'>{description}</p>
		</div>
	);
};

export default ProjectStrategy;
