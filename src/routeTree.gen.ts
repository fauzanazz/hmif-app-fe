/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as NavbarImport } from './routes/_navbar'
import { Route as AppImport } from './routes/_app'
import { Route as IndexImport } from './routes/index'
import { Route as AppTimelineIndexImport } from './routes/_app/timeline/index'
import { Route as AppSettingsIndexImport } from './routes/_app/settings/index'
import { Route as AppHomeIndexImport } from './routes/_app/home/index'
import { Route as AppCoursesIndexImport } from './routes/_app/courses/index'
import { Route as AppTimelineInfoIdIndexImport } from './routes/_app/timeline/$infoId/index'

// Create Virtual Routes

const LoginIndexLazyImport = createFileRoute('/login/')()
const NavbarContohIndexLazyImport = createFileRoute('/_navbar/contoh/')()
const NavbarContohContohIdIndexLazyImport = createFileRoute(
  '/_navbar/contoh/$contohId/',
)()

// Create/Update Routes

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const NavbarRoute = NavbarImport.update({
  id: '/_navbar',
  getParentRoute: () => rootRoute,
} as any)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexLazyRoute = LoginIndexLazyImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login/index.lazy').then((d) => d.Route))

const NavbarContohIndexLazyRoute = NavbarContohIndexLazyImport.update({
  path: '/contoh/',
  getParentRoute: () => NavbarRoute,
} as any).lazy(() =>
  import('./routes/_navbar/contoh/index.lazy').then((d) => d.Route),
)

const AppTimelineIndexRoute = AppTimelineIndexImport.update({
  path: '/timeline/',
  getParentRoute: () => AppRoute,
} as any)

const AppSettingsIndexRoute = AppSettingsIndexImport.update({
  path: '/settings/',
  getParentRoute: () => AppRoute,
} as any)

const AppHomeIndexRoute = AppHomeIndexImport.update({
  path: '/home/',
  getParentRoute: () => AppRoute,
} as any)

const AppCoursesIndexRoute = AppCoursesIndexImport.update({
  path: '/courses/',
  getParentRoute: () => AppRoute,
} as any)

const NavbarContohContohIdIndexLazyRoute =
  NavbarContohContohIdIndexLazyImport.update({
    path: '/contoh/$contohId/',
    getParentRoute: () => NavbarRoute,
  } as any).lazy(() =>
    import('./routes/_navbar/contoh/$contohId/index.lazy').then((d) => d.Route),
  )

const AppTimelineInfoIdIndexRoute = AppTimelineInfoIdIndexImport.update({
  path: '/timeline/$infoId/',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_app': {
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_navbar': {
      preLoaderRoute: typeof NavbarImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      preLoaderRoute: typeof LoginIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_app/home/': {
      preLoaderRoute: typeof AppHomeIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/settings/': {
      preLoaderRoute: typeof AppSettingsIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/timeline/': {
      preLoaderRoute: typeof AppTimelineIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/courses/': {
      preLoaderRoute: typeof AppCoursesIndexImport
      parentRoute: typeof AppImport
    }
    '/_navbar/contoh/': {
      preLoaderRoute: typeof NavbarContohIndexLazyImport
      parentRoute: typeof NavbarImport
    }
    '/_app/timeline/$infoId/': {
      preLoaderRoute: typeof AppTimelineInfoIdIndexImport
      parentRoute: typeof AppImport
    }
    '/_navbar/contoh/$contohId/': {
      preLoaderRoute: typeof NavbarContohContohIdIndexLazyImport
      parentRoute: typeof NavbarImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AppRoute.addChildren([
    AppCoursesIndexRoute,
    AppHomeIndexRoute,
    AppSettingsIndexRoute,
    AppTimelineIndexRoute,
    AppTimelineInfoIdIndexRoute,
  ]),
  NavbarRoute.addChildren([
    NavbarContohIndexLazyRoute,
    NavbarContohContohIdIndexLazyRoute,
  ]),
  AboutRoute,
  LoginIndexLazyRoute,
])

/* prettier-ignore-end */
