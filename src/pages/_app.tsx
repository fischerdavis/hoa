import { type AppType } from 'next/app';
import { api } from '@/utils/api';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import NavBar from '@/components/NavBar';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<NavBar/>

			<div className="container bg-background pt-10">
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
};

export default api.withTRPC(MyApp);
