import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>nguyenhoang.me/</title>
        <meta name="description" content="Mảnh đất thần kỳ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:title" content="nguyenhoang.me/" />
        <meta property="og:description" content="Mảnh đất thần kỳ" />
        <meta name="google-site-verification" content="2sv7utYTeZ0DN0LfK10EIjz-paQ_f4mP84RWLmQqjs0" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="main-container">
        <div className="main-center">
          <h2>Xin chào mình là Hoàng,</h2>
          <p>
            Mình là một kỹ sư công nghệ thông tin, tốt nghiệp trường Học viện
            hoàng gia <b>PTIT</b> với GPA 3.04{' '}
            <span className="ec ec-sunglasses"></span>.
          </p>
          <p>
            Mình có một chiếc blog nho nhỏ tại{' '}
            <a href="https://notes.nguyenhoang.me/">đây</a>, lưu trữ lại những
            gì mình tìm hiểu trong quá trình làm việc, giúp mình nhớ lâu hơn(một
            lần ghi là một lần nhớ) và cũng tiện cho mình tra cứu lại nếu cần.
            Hy vọng những chiếc notes này cũng giúp ích cho bạn{' '}
            <span className="ec ec-partying"></span>.
          </p>
        </div>
      </main>
    </>
  );
}
