import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@components/Header';
import Footer from '@/components/Footer';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Hào Trương',
	description: 'Hào Trương',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, 'max-w-5xl m-auto transition-all')}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}