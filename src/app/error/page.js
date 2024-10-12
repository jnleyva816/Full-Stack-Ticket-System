import Link from 'next/link';
export default function ErrorPage({searchParams}){
  const {type} = searchParams;
  const knownErrors = ["login-failed", "magiclink"];
  return (
  <div style-{{textAlign: "center" }}>
      <h1>Oops!</h1>
      {type === "magiclink" && (
      <strong>Could not send a magic link. Maybe you had a typo in you E-mail?</strong>
      )}
      {type === "login-failed" &&(
      <strong>Login was not successfull, sorry.</strong>
      )}
      {!knownErrors.includes(type) && (
      <strong>Something went wrong. Please try again or contact support.</strong>
      )}
      <br />
      <br />
      <Link href="/" role="button">
        Go back.
      </Link>
  </div>
  )
}
