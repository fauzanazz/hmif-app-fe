/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/_app'
import { Route as IndexImport } from './routes/index'
import { Route as AppSettingsImport } from './routes/_app/settings'
import { Route as AppTimelineIndexImport } from './routes/_app/timeline/index'
import { Route as AppSettingsIndexImport } from './routes/_app/settings/index'
import { Route as AppHomeIndexImport } from './routes/_app/home/index'
import { Route as AppDummyCalIndexImport } from './routes/_app/dummy-cal/index'
import { Route as AppAddEventIndexImport } from './routes/_app/add-event/index'
import { Route as AppAddAnnouncementIndexImport } from './routes/_app/add-announcement/index'
import { Route as AppSettingsSettingsItemImport } from './routes/_app/settings/_settings-item'
import { Route as AppHomeTestimoniImport } from './routes/_app/home/testimoni'
import { Route as AppTimelineInfoIdIndexImport } from './routes/_app/timeline/$infoId/index'
import { Route as AppHomeTestimoniIndexImport } from './routes/_app/home/testimoni/index'
import { Route as AppHomeDingdongIndexImport } from './routes/_app/home/dingdong/index'
import { Route as AppHomeCalendarIndexImport } from './routes/_app/home/calendar/index'
import { Route as AppSettingsSettingsItemSubscriptionsIndexImport } from './routes/_app/settings/_settings-item/subscriptions/index'
import { Route as AppSettingsSettingsItemCoursesIndexImport } from './routes/_app/settings/_settings-item/courses/index'
import { Route as AppHomeTestimoniTypeIndexImport } from './routes/_app/home/testimoni/$type/index'
import { Route as AppSettingsSettingsItemCoursesAddIndexImport } from './routes/_app/settings/_settings-item/courses/add/index'
import { Route as AppHomeTestimoniTypeSemesterIndexImport } from './routes/_app/home/testimoni/$type/$semester/index'
import { Route as AppHomeTestimoniTypeSemesterCourseIdIndexImport } from './routes/_app/home/testimoni_/$type/$semester/$courseId/index'

// Create Virtual Routes

const LoginIndexLazyImport = createFileRoute('/login/')()

// Create/Update Routes

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

const AppSettingsRoute = AppSettingsImport.update({
  path: '/settings',
  getParentRoute: () => AppRoute,
} as any)

const AppTimelineIndexRoute = AppTimelineIndexImport.update({
  path: '/timeline/',
  getParentRoute: () => AppRoute,
} as any)

const AppSettingsIndexRoute = AppSettingsIndexImport.update({
  path: '/',
  getParentRoute: () => AppSettingsRoute,
} as any)

const AppHomeIndexRoute = AppHomeIndexImport.update({
  path: '/home/',
  getParentRoute: () => AppRoute,
} as any)

const AppDummyCalIndexRoute = AppDummyCalIndexImport.update({
  path: '/dummy-cal/',
  getParentRoute: () => AppRoute,
} as any)

const AppAddEventIndexRoute = AppAddEventIndexImport.update({
  path: '/add-event/',
  getParentRoute: () => AppRoute,
} as any)

const AppAddAnnouncementIndexRoute = AppAddAnnouncementIndexImport.update({
  path: '/add-announcement/',
  getParentRoute: () => AppRoute,
} as any)

const AppSettingsSettingsItemRoute = AppSettingsSettingsItemImport.update({
  id: '/_settings-item',
  getParentRoute: () => AppSettingsRoute,
} as any)

const AppHomeTestimoniRoute = AppHomeTestimoniImport.update({
  path: '/home/testimoni',
  getParentRoute: () => AppRoute,
} as any)

const AppTimelineInfoIdIndexRoute = AppTimelineInfoIdIndexImport.update({
  path: '/timeline/$infoId/',
  getParentRoute: () => AppRoute,
} as any)

const AppHomeTestimoniIndexRoute = AppHomeTestimoniIndexImport.update({
  path: '/',
  getParentRoute: () => AppHomeTestimoniRoute,
} as any)

const AppHomeDingdongIndexRoute = AppHomeDingdongIndexImport.update({
  path: '/home/dingdong/',
  getParentRoute: () => AppRoute,
} as any)

const AppHomeCalendarIndexRoute = AppHomeCalendarIndexImport.update({
  path: '/home/calendar/',
  getParentRoute: () => AppRoute,
} as any)

const AppSettingsSettingsItemSubscriptionsIndexRoute =
  AppSettingsSettingsItemSubscriptionsIndexImport.update({
    path: '/subscriptions/',
    getParentRoute: () => AppSettingsSettingsItemRoute,
  } as any)

const AppSettingsSettingsItemCoursesIndexRoute =
  AppSettingsSettingsItemCoursesIndexImport.update({
    path: '/courses/',
    getParentRoute: () => AppSettingsSettingsItemRoute,
  } as any)

const AppHomeTestimoniTypeIndexRoute = AppHomeTestimoniTypeIndexImport.update({
  path: '/$type/',
  getParentRoute: () => AppHomeTestimoniRoute,
} as any)

const AppSettingsSettingsItemCoursesAddIndexRoute =
  AppSettingsSettingsItemCoursesAddIndexImport.update({
    path: '/courses/add/',
    getParentRoute: () => AppSettingsSettingsItemRoute,
  } as any)

const AppHomeTestimoniTypeSemesterIndexRoute =
  AppHomeTestimoniTypeSemesterIndexImport.update({
    path: '/$type/$semester/',
    getParentRoute: () => AppHomeTestimoniRoute,
  } as any)

const AppHomeTestimoniTypeSemesterCourseIdIndexRoute =
  AppHomeTestimoniTypeSemesterCourseIdIndexImport.update({
    path: '/home/testimoni/$type/$semester/$courseId/',
    getParentRoute: () => AppRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_app/settings': {
      id: '/_app/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AppSettingsImport
      parentRoute: typeof AppImport
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_app/home/testimoni': {
      id: '/_app/home/testimoni'
      path: '/home/testimoni'
      fullPath: '/home/testimoni'
      preLoaderRoute: typeof AppHomeTestimoniImport
      parentRoute: typeof AppImport
    }
    '/_app/settings/_settings-item': {
      id: '/_app/settings/_settings-item'
      path: ''
      fullPath: '/settings'
      preLoaderRoute: typeof AppSettingsSettingsItemImport
      parentRoute: typeof AppSettingsImport
    }
    '/_app/add-announcement/': {
      id: '/_app/add-announcement/'
      path: '/add-announcement'
      fullPath: '/add-announcement'
      preLoaderRoute: typeof AppAddAnnouncementIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/add-event/': {
      id: '/_app/add-event/'
      path: '/add-event'
      fullPath: '/add-event'
      preLoaderRoute: typeof AppAddEventIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/dummy-cal/': {
      id: '/_app/dummy-cal/'
      path: '/dummy-cal'
      fullPath: '/dummy-cal'
      preLoaderRoute: typeof AppDummyCalIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/home/': {
      id: '/_app/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof AppHomeIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/settings/': {
      id: '/_app/settings/'
      path: '/'
      fullPath: '/settings/'
      preLoaderRoute: typeof AppSettingsIndexImport
      parentRoute: typeof AppSettingsImport
    }
    '/_app/timeline/': {
      id: '/_app/timeline/'
      path: '/timeline'
      fullPath: '/timeline'
      preLoaderRoute: typeof AppTimelineIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/home/calendar/': {
      id: '/_app/home/calendar/'
      path: '/home/calendar'
      fullPath: '/home/calendar'
      preLoaderRoute: typeof AppHomeCalendarIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/home/dingdong/': {
      id: '/_app/home/dingdong/'
      path: '/home/dingdong'
      fullPath: '/home/dingdong'
      preLoaderRoute: typeof AppHomeDingdongIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/home/testimoni/': {
      id: '/_app/home/testimoni/'
      path: '/'
      fullPath: '/home/testimoni/'
      preLoaderRoute: typeof AppHomeTestimoniIndexImport
      parentRoute: typeof AppHomeTestimoniImport
    }
    '/_app/timeline/$infoId/': {
      id: '/_app/timeline/$infoId/'
      path: '/timeline/$infoId'
      fullPath: '/timeline/$infoId'
      preLoaderRoute: typeof AppTimelineInfoIdIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/home/testimoni/$type/': {
      id: '/_app/home/testimoni/$type/'
      path: '/$type'
      fullPath: '/home/testimoni/$type'
      preLoaderRoute: typeof AppHomeTestimoniTypeIndexImport
      parentRoute: typeof AppHomeTestimoniImport
    }
    '/_app/settings/_settings-item/courses/': {
      id: '/_app/settings/_settings-item/courses/'
      path: '/courses'
      fullPath: '/settings/courses'
      preLoaderRoute: typeof AppSettingsSettingsItemCoursesIndexImport
      parentRoute: typeof AppSettingsSettingsItemImport
    }
    '/_app/settings/_settings-item/subscriptions/': {
      id: '/_app/settings/_settings-item/subscriptions/'
      path: '/subscriptions'
      fullPath: '/settings/subscriptions'
      preLoaderRoute: typeof AppSettingsSettingsItemSubscriptionsIndexImport
      parentRoute: typeof AppSettingsSettingsItemImport
    }
    '/_app/home/testimoni/$type/$semester/': {
      id: '/_app/home/testimoni/$type/$semester/'
      path: '/$type/$semester'
      fullPath: '/home/testimoni/$type/$semester'
      preLoaderRoute: typeof AppHomeTestimoniTypeSemesterIndexImport
      parentRoute: typeof AppHomeTestimoniImport
    }
    '/_app/settings/_settings-item/courses/add/': {
      id: '/_app/settings/_settings-item/courses/add/'
      path: '/courses/add'
      fullPath: '/settings/courses/add'
      preLoaderRoute: typeof AppSettingsSettingsItemCoursesAddIndexImport
      parentRoute: typeof AppSettingsSettingsItemImport
    }
    '/_app/home/testimoni/$type/$semester/$courseId/': {
      id: '/_app/home/testimoni/$type/$semester/$courseId/'
      path: '/home/testimoni/$type/$semester/$courseId'
      fullPath: '/home/testimoni/$type/$semester/$courseId'
      preLoaderRoute: typeof AppHomeTestimoniTypeSemesterCourseIdIndexImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AppRoute: AppRoute.addChildren({
    AppSettingsRoute: AppSettingsRoute.addChildren({
      AppSettingsSettingsItemRoute: AppSettingsSettingsItemRoute.addChildren({
        AppSettingsSettingsItemCoursesIndexRoute,
        AppSettingsSettingsItemSubscriptionsIndexRoute,
        AppSettingsSettingsItemCoursesAddIndexRoute,
      }),
      AppSettingsIndexRoute,
    }),
    AppHomeTestimoniRoute: AppHomeTestimoniRoute.addChildren({
      AppHomeTestimoniIndexRoute,
      AppHomeTestimoniTypeIndexRoute,
      AppHomeTestimoniTypeSemesterIndexRoute,
    }),
    AppAddAnnouncementIndexRoute,
    AppAddEventIndexRoute,
    AppDummyCalIndexRoute,
    AppHomeIndexRoute,
    AppTimelineIndexRoute,
    AppHomeCalendarIndexRoute,
    AppHomeDingdongIndexRoute,
    AppTimelineInfoIdIndexRoute,
    AppHomeTestimoniTypeSemesterCourseIdIndexRoute,
  }),
  LoginIndexLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_app",
        "/login/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/settings",
        "/_app/home/testimoni",
        "/_app/add-announcement/",
        "/_app/add-event/",
        "/_app/dummy-cal/",
        "/_app/home/",
        "/_app/timeline/",
        "/_app/home/calendar/",
        "/_app/home/dingdong/",
        "/_app/timeline/$infoId/",
        "/_app/home/testimoni/$type/$semester/$courseId/"
      ]
    },
    "/_app/settings": {
      "filePath": "_app/settings.tsx",
      "parent": "/_app",
      "children": [
        "/_app/settings/_settings-item",
        "/_app/settings/"
      ]
    },
    "/login/": {
      "filePath": "login/index.lazy.tsx"
    },
    "/_app/home/testimoni": {
      "filePath": "_app/home/testimoni.tsx",
      "parent": "/_app",
      "children": [
        "/_app/home/testimoni/",
        "/_app/home/testimoni/$type/",
        "/_app/home/testimoni/$type/$semester/"
      ]
    },
    "/_app/settings/_settings-item": {
      "filePath": "_app/settings/_settings-item.tsx",
      "parent": "/_app/settings",
      "children": [
        "/_app/settings/_settings-item/courses/",
        "/_app/settings/_settings-item/subscriptions/",
        "/_app/settings/_settings-item/courses/add/"
      ]
    },
    "/_app/add-announcement/": {
      "filePath": "_app/add-announcement/index.tsx",
      "parent": "/_app"
    },
    "/_app/add-event/": {
      "filePath": "_app/add-event/index.tsx",
      "parent": "/_app"
    },
    "/_app/dummy-cal/": {
      "filePath": "_app/dummy-cal/index.tsx",
      "parent": "/_app"
    },
    "/_app/home/": {
      "filePath": "_app/home/index.tsx",
      "parent": "/_app"
    },
    "/_app/settings/": {
      "filePath": "_app/settings/index.tsx",
      "parent": "/_app/settings"
    },
    "/_app/timeline/": {
      "filePath": "_app/timeline/index.tsx",
      "parent": "/_app"
    },
    "/_app/home/calendar/": {
      "filePath": "_app/home/calendar/index.tsx",
      "parent": "/_app"
    },
    "/_app/home/dingdong/": {
      "filePath": "_app/home/dingdong/index.tsx",
      "parent": "/_app"
    },
    "/_app/home/testimoni/": {
      "filePath": "_app/home/testimoni/index.tsx",
      "parent": "/_app/home/testimoni"
    },
    "/_app/timeline/$infoId/": {
      "filePath": "_app/timeline/$infoId/index.tsx",
      "parent": "/_app"
    },
    "/_app/home/testimoni/$type/": {
      "filePath": "_app/home/testimoni/$type/index.tsx",
      "parent": "/_app/home/testimoni"
    },
    "/_app/settings/_settings-item/courses/": {
      "filePath": "_app/settings/_settings-item/courses/index.tsx",
      "parent": "/_app/settings/_settings-item"
    },
    "/_app/settings/_settings-item/subscriptions/": {
      "filePath": "_app/settings/_settings-item/subscriptions/index.tsx",
      "parent": "/_app/settings/_settings-item"
    },
    "/_app/home/testimoni/$type/$semester/": {
      "filePath": "_app/home/testimoni/$type/$semester/index.tsx",
      "parent": "/_app/home/testimoni"
    },
    "/_app/settings/_settings-item/courses/add/": {
      "filePath": "_app/settings/_settings-item/courses/add/index.tsx",
      "parent": "/_app/settings/_settings-item"
    },
    "/_app/home/testimoni/$type/$semester/$courseId/": {
      "filePath": "_app/home/testimoni_/$type/$semester/$courseId/index.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */
