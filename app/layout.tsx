import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'whats-app',
	description: 'an interactive social app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="text-d-blue bg-v-l-gray ">
				<ClerkProvider>{children}</ClerkProvider>
			</body>
		</html>
	);
}
