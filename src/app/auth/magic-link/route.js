import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const supabase = getSupabaseCookiesUtilClient();
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: false },
  });
  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=magiclink", request.url),
      { status: 302 },
    );
  }
  return NextResponse.redirect(new URL("/magic-thanks", request.url), {
    status: 302,
  });
}
