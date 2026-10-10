export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export function sitePath(path: `/${string}`) {
  return `${basePath}${path}`;
}

export function appPath(pathname: string) {
  const path = basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
    ? pathname.slice(basePath.length) || "/"
    : pathname;

  return path.replace(/\/+$/, "") || "/";
}
