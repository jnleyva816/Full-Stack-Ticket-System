import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { NextResponse } from "next/server";

export async function Get(request) {
  const { searchParams } = new URL(request.url);
  const hashed_token = searchParams.get("hashed_token");
  const supabase = getSupabaseCookiesUtilClient();
  const { error } = await supabase.auth.verifyOtp({
    type: "magiclink",
    tocken_hash: hashed_token,
  });
  if (error) {
    return NextResponse.redirect(
      new Url("/error?type=invalid_magiclink", request.url),
    );
  } else {
    if (isRecovery) {
      return NextResponse.redirect(
        new Url("/tickets/change-password", request.url),
      );
    } else {
      return NextResponse.redirect(new Url("/tickets", request.url));
    }
  }
}
