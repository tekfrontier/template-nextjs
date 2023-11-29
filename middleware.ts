import i18nConfig from './features/i18n/i18nConfig';
import i18nRouter from './node_modules/next-i18n-router/dist/i18nRouter';

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\..*|_next).*)'
};