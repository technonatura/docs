import { useRouter } from 'next/router';

const Vercel = ({ height = 20 }) => (
	<svg height={height} viewBox="0 0 283 64" fill="none">
		<path
			fill="currentColor"
			d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
		/>
	</svg>
);

const TITLE_WITH_TRANSLATIONS = {
	'en-GB': 'The TechnoNatura API Docs',

	id: 'Dokumentasi Developer TechnoNatura',
};

export default {
	github: 'https://github.com/technonatura/docs',
	docsRepositoryBase: 'https://github.com/technonatura/docs/blob/master/pages',
	titleSuffix: ' – TechnoNatura Docs',
	search: true,
	unstable_stork: true,
	logo: () => {
		const { locale } = useRouter();
		return (
			<>
				<span className="mx-2 font-extrabold hidden md:inline select-none">
					TechnoNatura Docs
				</span>
				<span className="text-gray-600 font-normal hidden lg:!inline whitespace-no-wrap">
					{TITLE_WITH_TRANSLATIONS[locale]}
				</span>
			</>
		);
	},
	head: (
		<>
			{/* Favicons, meta */}
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/favicon/safari-pinned-tab.svg"
				color="#000000"
			/>
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="Content-Language" content="en" />
			<meta name="description" content="TechnoNatura APIs Documentation" />
			<meta name="og:description" content="TechnoNatura APIs Documentation" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@vercel" />
			<meta
				name="twitter:image"
				content="https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg"
			/>
			<meta name="og:title" content="SWR: React Hooks for Data Fetching" />
			<meta name="og:url" content="https://swr.vercel.com" />
			<meta
				name="og:image"
				content="https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg"
			/>
			<meta name="apple-mobile-web-app-title" content="SWR" />
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
				media="print"
				onLoad="this.media='all'"
			/>
		</>
	),
	footerEditLink: ({ locale }) => {
		switch (locale) {
			case 'id':
				return 'Ubah halaman ini di GitHub';
			default:
				return 'Edit this page on GitHub';
		}
	},
	footerText: ({ locale }) => {
		switch (locale) {
			case 'id':
				return (
					<p>
						<span>Made with love by </span>
						<a
							href="https://github.com/aldhanekaa"
							target="_blank"
							rel="noopener"
							className="inline-flex items-center  text-current font-semibold"
						>
							@Aldhanekaa
						</a>
					</p>
				);

			default:
				return (
					<p>
						<span>Made with love by </span>
						<a
							href="https://github.com/aldhanekaa"
							target="_blank"
							rel="noopener"
							className=" inline-flex items-center text-current font-semibold"
						>
							@Aldhanekaa
						</a>
					</p>
				);
		}
	},
	i18n: [
		{ locale: 'en-GB', text: 'English (UK)' },

		{ locale: 'id', text: 'Indonesia' },
	],
};
