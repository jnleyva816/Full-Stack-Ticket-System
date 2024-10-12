import Link from 'next/link';
export default function MagicLinkSuccessPage(){
  return (
  <div style={{textAlign: "center" }}>
      <h1>Success!</h1>
      <strong>Check your E-mail for the magic link.</strong>
      <br />
      <br />
      <Link href="/" role="button">
        Go back.
      </Link>
  </div>
  ) 
}
