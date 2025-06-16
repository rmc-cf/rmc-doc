import { hasGlobalComponent } from "C:/Users/10480/Desktop/a/rmc-doc/node_modules/vuepress-plugin-components/node_modules/@vuepress/helper/lib/client/index.js";
import SiteInfo from "C:/Users/10480/Desktop/a/rmc-doc/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";

import "C:/Users/10480/Desktop/a/rmc-doc/node_modules/vuepress-plugin-components/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
