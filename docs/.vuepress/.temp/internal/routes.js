export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/10480/Desktop/a/rmc-doc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/10480/Desktop/a/rmc-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/zh/get-started.html", { loader: () => import(/* webpackChunkName: "zh_get-started.html" */"C:/Users/10480/Desktop/a/rmc-doc/docs/.vuepress/.temp/pages/zh/get-started.html.js"), meta: {"title":"初次见面"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"C:/Users/10480/Desktop/a/rmc-doc/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"Home"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/10480/Desktop/a/rmc-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
