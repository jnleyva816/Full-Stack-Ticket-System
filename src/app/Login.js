"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
export const Login = ({ isPasswordLogin }) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const supabase = getSupabaseBrowserClient();
    const router = useRouter();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (isPasswordLogin) {
          supabase.auth
            .signInWithPassword({
              email: emailInputRef.current.value,
              password: passwordInputRef.current.value,
            })
            .then((result) => {
              if (result.data?.user) {
                router.push("/tickets");
              } else {
                alert("Error signing in");
              }
            });
        }
      }}
    >
      <article style={{ maxWidth: "480px", margin: "auto" }}>
        <header>Login</header>

        <fieldset>
          <label htmlFor="email">
            Email{" "}
            <input
              ref={emailInputRef}
              type="email"
              id="email"
              name="email"
              required
            />
          </label>

          {isPasswordLogin && (
            <label htmlFor="password">
              Password{" "}
              <input
                ref={passwordInputRef}
                type="password"
                id="password"
                name="password"
              />
            </label>
          )}
        </fieldset>

        <p>
          {isPasswordLogin ? (
            <Link
              href={{
                pathname: "/",
                query: { magicLink: "yes" },
              }}
            >
              Go to Magic Link Login
            </Link>
          ) : (
            <Link
              href={{
                pathname: "/",
                query: { magicLink: "no" },
              }}
            >
              Go to Password Login
            </Link>
          )}
        </p>

        <button type="submit">
          Sign in with
          {isPasswordLogin ? " Password" : " Magic Link"}
        </button>
      </article>
    </form>
  );
};
