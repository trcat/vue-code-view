import { NavItem, PageData } from "@examples/types/config";
import { SocialLink } from "@examples/types/socialLink";

import {
  computed,
  defineComponent,
  h,
  inject,
  InjectionKey,
  provide,
  Ref,
} from "vue";

export function useConfig() {
  return {
    config: {
      appearance: true,
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/andurils/vue-code-view",
        },
        // {
        //   icon: "languages",
        //   link: "https://staging-cn.vuejs.org/guide/typescript/options-api.html#typing-component-props",
        // },
      ] as SocialLink[],
      // NavScreenMenu
      nav: [
        {
          text: "REPL",
          link: "/repl",
          activeMatch: "repl",
        },
        {
          text: "文档",
          activeMatch: "guide",
          items: [
            {
              text: "指南",
              link: "/guide",
            },
            {
              text: "更新日志",
              link: "/changelog",
            },
          ],
        },
        {
          text: "关于",
          items: [
            {
              text: "github",
              items: [
                {
                  text: "issues",
                  link: "https://github.com/andurils/vue-code-view/issues",
                },
                {
                  text: "changelog",
                  link: "https://github.com/andurils/vue-code-view/blob/main/CHANGELOG.zh-CN.md",
                },
              ],
            },
            {
              text: "参考",
              items: [
                {
                  text: "Ant Design",
                  link: "https://ant.design/index-cn",
                },
                {
                  text: "Ant Design Vue",
                  link: "https://www.antdv.com/components/overview",
                },
                {
                  text: "Element UI",
                  link: "https://element.eleme.cn/#/zh-CN",
                },
              ],
            },
          ],
        },
      ] as NavItem[],
      // sidebar: config.sidebar && normalizeSideBar(config.sidebar)
      sidebar: {
        "/guide/": [
          {
            text: "Essentials",
            items: [
              { text: "Introduction", link: "/guide/introduction" },
              { text: "Installation", link: "/guide/installation" },
              {
                text: "Application & Component Instances",
                link: "/guide/instance",
              },
              { text: "Template Syntax", link: "/guide/template-syntax" },
              {
                text: "Data Properties and Methods",
                link: "/guide/data-methods",
              },
              {
                text: "Computed Properties and Watchers",
                link: "/guide/computed",
              },
              {
                text: "Class and Style Bindings",
                link: "/guide/class-and-style",
              },
              { text: "Conditional Rendering", link: "/guide/conditional" },
              { text: "List Rendering", link: "/guide/list" },
              { text: "Event Handling", link: "/guide/events" },
              { text: "Form Input Bindings", link: "/guide/forms" },
              { text: "Components Basics", link: "/guide/component-basics" },
            ],
          },
          {
            text: "Components In-Depth",
            items: [
              {
                text: "Component Registration",
                link: "/guide/component-registration",
              },
              { text: "Props", link: "/guide/component-props" },
              { text: "Non-Prop Attributes", link: "/guide/component-attrs" },
              { text: "Custom Events", link: "/guide/component-custom-events" },
              { text: "Slots", link: "/guide/component-slots" },
              {
                text: "Provide / inject",
                link: "/guide/component-provide-inject",
              },
              {
                text: "Dynamic & Async Components",
                link: "/guide/component-dynamic-async",
              },
              { text: "Template refs", link: "/guide/component-template-refs" },
              {
                text: "Handling Edge Cases",
                link: "/guide/component-edge-cases",
              },
            ],
          },
          {
            text: "Transitions & Animation",
            items: [
              { text: "Overview", link: "/guide/transitions-overview" },
              {
                text: "Enter & Leave Transitions",
                link: "/guide/transitions-enterleave",
              },
              { text: "List Transitions", link: "/guide/transitions-list" },
              { text: "State Transitions", link: "/guide/transitions-state" },
            ],
          },
          {
            text: "Reusability",
            items: [
              { text: "Mixins", link: "/guide/mixins" },
              { text: "Custom Directives", link: "/guide/custom-directive" },
            ],
          },
          {
            text: "Composition API",
            items: [
              {
                text: "Introduction",
                link: "/guide/composition-api-introduction",
              },
              { text: "Setup", link: "/guide/composition-api-setup" },
              {
                text: "Lifecycle Hooks",
                link: "/guide/composition-api-lifecycle-hooks",
              },
              {
                text: "Provide / Inject",
                link: "/guide/composition-api-provide-inject",
              },
              {
                text: "Template Refs",
                link: "/guide/composition-api-template-refs",
              },
            ],
          },
          {
            text: "Advanced",
            items: [
              { text: "Teleport", link: "/guide/teleport" },
              { text: "Render Function", link: "/guide/render-function" },
              { text: "Plugins", link: "/guide/plugins" },
            ],
          },
          {
            text: "Digging Deeper",
            items: [
              { text: "Reactivity in Depth", link: "/guide/reactivity" },
              {
                text: "Reactivity Fundamentals",
                link: "/guide/reactivity-fundamentals",
              },
              {
                text: "Reactivity in Computed and Watch",
                link: "/guide/reactivity-computed-watchers",
              },
              {
                text: "Rendering Mechanisms and Optimizations",
                link: "/guide/optimizations",
              },
            ],
          },
          {
            text: "Tooling",
            items: [
              {
                text: "Single File Components",
                link: "/guide/single-file-component",
              },
              { text: "Testing", link: "/guide/testing" },
              { text: "TypeScript Support", link: "/guide/typescript-support" },
              { text: "Mobile", link: "/guide/mobile" },
              {
                text: "Production Deployment",
                link: "/guide/tooling/deployment",
              },
            ],
          },
          {
            text: "Scaling Up",
            items: [
              { text: "Routing", link: "/guide/routing" },
              { text: "State Management", link: "/guide/state-management" },
              { text: "Server-Side Rendering", link: "/guide/ssr" },
            ],
          },
          {
            text: "Accessibility",
            items: [
              { text: "Basics", link: "/guide/a11y-basics" },
              { text: "Semantics", link: "/guide/a11y-semantics" },
              { text: "Standards", link: "/guide/a11y-standards" },
              { text: "Resources", link: "/guide/a11y-resources" },
            ],
          },
        ],
        "/api/": [
          {
            text: "Global API",
            items: [
              { text: "Application", link: "/api/application" },
              { text: "Utilities", link: "/api/utilities" },
            ],
          },
          {
            text: "Component",
            items: [
              { text: "Options: State", link: "/api/options-state" },
              { text: "Options: Rendering", link: "/api/options-rendering" },
              {
                text: "Options: Lifecycle Hooks",
                link: "/api/options-lifecycle",
              },
              {
                text: "Options: Composition",
                link: "/api/options-composition",
              },
              { text: "Options: Misc", link: "/api/options-misc" },
              {
                text: "Instance",
                link: "/api/component-instance",
              },
            ],
          },
          {
            text: "Composition API",
            items: [
              { text: "setup()", link: "/api/composition-setup" },
              { text: "Reactivity", link: "/api/composition-reactivity" },
              { text: "Lifecycle", link: "/api/composition-lifecycle" },
            ],
          },
          {
            text: "Built-ins",
            items: [
              { text: "Directives", link: "/api/built-in-directives" },
              { text: "Components", link: "/api/built-in-components" },
              { text: "Special Attributes", link: "/api/special-attributes" },
            ],
          },
          {
            text: "Single File Component",
            items: [
              { text: "Specification", link: "/api/sfc-spec" },
              { text: "<script setup>", link: "/api/sfc-script-setup" },
              { text: "<style> Features", link: "/api/sfc-style" },
            ],
          },
          {
            text: "TypeScript",
            items: [{ text: "Utility Types", link: "/api/types-utility" }],
          },
          {
            text: "Advanced",
            items: [
              { text: "Render Function Helpers", link: "/api/render-function" },
              { text: "Compiler Transforms", link: "/api/compiler" },
              { text: "Server-Side Rendering", link: "/api/ssr" },
              { text: "Custom Renderer", link: "/api/custom-renderer" },
            ],
          },
        ],
      },
    },
  };
}

// https://vuepress.vuejs.org/theme/default-theme-config.html#homepage
export function useData() {
  return {
    page: {
      relativePath: "/guide/",
      headers: [
        {
          level: 2,
          title: "测试标题",
          slug: "slug1",
        },
        {
          level: 2,
          title: "测试标题2",
          slug: "slug2",
        },
        {
          level: 3,
          title: "测试标题3",
          slug: "slug3",
        },
      ],
    } as PageData,
    theme: {
      carbonAds: {
        code: "CEBDT27Y",
        placement: "vuejsorg",
      },
      footer: {
        license: {
          text: "MIT License",
          link: "https://opensource.org/licenses/MIT",
        },
        copyright: "Copyright © 2021-present Andurils",
      },
      sidebar: {
        "/guide/": [
          {
            text: "Essentials",
            items: [
              { text: "Introduction", link: "/guide/introduction" },
              { text: "Installation", link: "/guide/installation" },
              {
                text: "Application & Component Instances",
                link: "/guide/instance",
              },
              { text: "Template Syntax", link: "/guide/template-syntax" },
              {
                text: "Data Properties and Methods",
                link: "/guide/data-methods",
              },
              {
                text: "Computed Properties and Watchers",
                link: "/guide/computed",
              },
              {
                text: "Class and Style Bindings",
                link: "/guide/class-and-style",
              },
              { text: "Conditional Rendering", link: "/guide/conditional" },
              { text: "List Rendering", link: "/guide/list" },
              { text: "Event Handling", link: "/guide/events" },
              { text: "Form Input Bindings", link: "/guide/forms" },
              { text: "Components Basics", link: "/guide/component-basics" },
            ],
          },
          {
            text: "Components In-Depth",
            items: [
              {
                text: "Component Registration",
                link: "/guide/component-registration",
              },
              { text: "Props", link: "/guide/component-props" },
              { text: "Non-Prop Attributes", link: "/guide/component-attrs" },
              { text: "Custom Events", link: "/guide/component-custom-events" },
              { text: "Slots", link: "/guide/component-slots" },
              {
                text: "Provide / inject",
                link: "/guide/component-provide-inject",
              },
              {
                text: "Dynamic & Async Components",
                link: "/guide/component-dynamic-async",
              },
              { text: "Template refs", link: "/guide/component-template-refs" },
              {
                text: "Handling Edge Cases",
                link: "/guide/component-edge-cases",
              },
            ],
          },
          {
            text: "Transitions & Animation",
            items: [
              { text: "Overview", link: "/guide/transitions-overview" },
              {
                text: "Enter & Leave Transitions",
                link: "/guide/transitions-enterleave",
              },
              { text: "List Transitions", link: "/guide/transitions-list" },
              { text: "State Transitions", link: "/guide/transitions-state" },
            ],
          },
          {
            text: "Reusability",
            items: [
              { text: "Mixins", link: "/guide/mixins" },
              { text: "Custom Directives", link: "/guide/custom-directive" },
            ],
          },
          {
            text: "Composition API",
            items: [
              {
                text: "Introduction",
                link: "/guide/composition-api-introduction",
              },
              { text: "Setup", link: "/guide/composition-api-setup" },
              {
                text: "Lifecycle Hooks",
                link: "/guide/composition-api-lifecycle-hooks",
              },
              {
                text: "Provide / Inject",
                link: "/guide/composition-api-provide-inject",
              },
              {
                text: "Template Refs",
                link: "/guide/composition-api-template-refs",
              },
            ],
          },
          {
            text: "Advanced",
            items: [
              { text: "Teleport", link: "/guide/teleport" },
              { text: "Render Function", link: "/guide/render-function" },
              { text: "Plugins", link: "/guide/plugins" },
            ],
          },
          {
            text: "Digging Deeper",
            items: [
              { text: "Reactivity in Depth", link: "/guide/reactivity" },
              {
                text: "Reactivity Fundamentals",
                link: "/guide/reactivity-fundamentals",
              },
              {
                text: "Reactivity in Computed and Watch",
                link: "/guide/reactivity-computed-watchers",
              },
              {
                text: "Rendering Mechanisms and Optimizations",
                link: "/guide/optimizations",
              },
            ],
          },
          {
            text: "Tooling",
            items: [
              {
                text: "Single File Components",
                link: "/guide/single-file-component",
              },
              { text: "Testing", link: "/guide/testing" },
              { text: "TypeScript Support", link: "/guide/typescript-support" },
              { text: "Mobile", link: "/guide/mobile" },
              {
                text: "Production Deployment",
                link: "/guide/tooling/deployment",
              },
            ],
          },
          {
            text: "Scaling Up",
            items: [
              { text: "Routing", link: "/guide/routing" },
              { text: "State Management", link: "/guide/state-management" },
              { text: "Server-Side Rendering", link: "/guide/ssr" },
            ],
          },
          {
            text: "Accessibility",
            items: [
              { text: "Basics", link: "/guide/a11y-basics" },
              { text: "Semantics", link: "/guide/a11y-semantics" },
              { text: "Standards", link: "/guide/a11y-standards" },
              { text: "Resources", link: "/guide/a11y-resources" },
            ],
          },
        ],
        "/api/": [
          {
            text: "Global API",
            items: [
              { text: "Application", link: "/api/application" },
              { text: "Utilities", link: "/api/utilities" },
            ],
          },
          {
            text: "Component",
            items: [
              { text: "Options: State", link: "/api/options-state" },
              { text: "Options: Rendering", link: "/api/options-rendering" },
              {
                text: "Options: Lifecycle Hooks",
                link: "/api/options-lifecycle",
              },
              {
                text: "Options: Composition",
                link: "/api/options-composition",
              },
              { text: "Options: Misc", link: "/api/options-misc" },
              {
                text: "Instance",
                link: "/api/component-instance",
              },
            ],
          },
          {
            text: "Composition API",
            items: [
              { text: "setup()", link: "/api/composition-setup" },
              { text: "Reactivity", link: "/api/composition-reactivity" },
              { text: "Lifecycle", link: "/api/composition-lifecycle" },
            ],
          },
          {
            text: "Built-ins",
            items: [
              { text: "Directives", link: "/api/built-in-directives" },
              { text: "Components", link: "/api/built-in-components" },
              { text: "Special Attributes", link: "/api/special-attributes" },
            ],
          },
          {
            text: "Single File Component",
            items: [
              { text: "Specification", link: "/api/sfc-spec" },
              { text: "<script setup>", link: "/api/sfc-script-setup" },
              { text: "<style> Features", link: "/api/sfc-style" },
            ],
          },
          {
            text: "TypeScript",
            items: [{ text: "Utility Types", link: "/api/types-utility" }],
          },
          {
            text: "Advanced",
            items: [
              { text: "Render Function Helpers", link: "/api/render-function" },
              { text: "Compiler Transforms", link: "/api/compiler" },
              { text: "Server-Side Rendering", link: "/api/ssr" },
              { text: "Custom Renderer", link: "/api/custom-renderer" },
            ],
          },
        ],
      },
    },
    frontmatter: {
      features: [
        {
          title: "轻量快速",
          details: "无需配置环境，打开浏览器即可开始编程。",
        },
        { title: "更新实时", details: "调试代码时，可以立即看到更改的效果。" },
        {
          title: "交互丰富",
          details: "支持代码高亮、 Markdown 示例渲染，让您的项目文档更加高效。",
        },
        {
          title: "Not Setup",
          details:
            "Start coding with your favorite language on any platform, and OS.",
        },
        {
          title: "Updates live",
          details:
            "You can see the effect of changes instantly, inline, as you code.",
        },
        {
          title: "Rich interaction",
          details: "Make your project more productive with interactive docs.",
        },
      ],

      footer: "关注获取更多信息！",
      isShowFooter: true,
      returnToTop: true,
      sidebar: true,
      aside: true,
      ads: true,
      outline: "deep",
      page: true,
    },
  };
}
