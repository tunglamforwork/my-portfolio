import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const hostname = host.split(':')[0];

  if (hostname === 'blog.ttlam.dev') {
    const { pathname, search } = request.nextUrl;

    // Rewrite root to /blog, and sub-paths like /some-slug to /blog/some-slug
    const rewritePath = pathname === '/' ? '/blog' : `/blog${pathname}`;
    const url = request.nextUrl.clone();
    url.pathname = rewritePath;
    url.search = search;

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except Next.js internals and static files.
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
