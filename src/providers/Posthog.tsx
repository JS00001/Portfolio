import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== 'undefined') {
	if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
		posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
			api_host:
				process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
			// Enable debug mode in development
			loaded: (posthog) => {
				if (process.env.NODE_ENV === 'development') posthog.debug();
			},
		});
	}
}

const PosthogProvider: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	const router = useRouter();

	useEffect(() => {
		// Track page views
		const handleRouteChange = () => posthog?.capture('$pageview');
		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, []);

	return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export default PosthogProvider;
