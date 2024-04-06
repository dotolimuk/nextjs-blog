
  import Link from 'next/link';
  export default function FirstPost() {
    return (
      <>
        <h1>안녕하세요</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </>
    );
  }