import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="header">
        <div className="header-center">
          <Link href="/" className="pointer">
            <span className="branch">nguyenhoang.me</span>
          </Link>
          <div className="text-animate"></div>
        </div>
      </div>
      <Component {...pageProps} />
      <footer className="footer"></footer>
    </>
  );
}
