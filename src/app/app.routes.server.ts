import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
  ,
  {
       path: "checkout/:id",
       renderMode:RenderMode.Server
  },
  {
    path: "detailes/:id",
    renderMode:RenderMode.Server
}
];
