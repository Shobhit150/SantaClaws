// pages/_middleware.js
import { NextResponse } from "next/server"

export function middleware(req, ev) {
  const { pathname } = req.nextUrl
  // check if the path matches /?ref=*
  if (pathname === "/" && req.nextUrl.searchParams.has("ref")) {
    // redirect to / with replace type
    return NextResponse.redirect("https:www.santaclaws.in/", "replace")
  }
  // otherwise, continue rendering the page
  return NextResponse.next()
}
