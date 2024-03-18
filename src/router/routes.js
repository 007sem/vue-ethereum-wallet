export const routes = [
  {
    path: "/",
    component: () => import("@/Layout/index.vue"),
    redirect: "/wallet",
    children: [
      {
        path: "/wallet",
        name: "wallet",
        component: () => import("@/views/Wallet/index.vue"),
        icon: "icon-walletY",
        title: "钱包"
      },
      {
        path: "/nft",
        name: "nft",
        component: () => import("@/views/Nft/index.vue"),
        icon: "icon-read",
        title: "NFT"
      },
      {
        path: "/trend",
        name: "trend",
        component: () => import("@/views/Trend/index.vue"),
        icon:"icon-charts-line",
        title: "趋势"
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/Profile/index.vue"),
        icon: "icon-profile",
        title: "我的",
      },
    ],
  },

  {
    path: "/guide",
    name: "guide",
    component: () => import("@/views/Guide/index.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/Auth/index.vue"),
  },
];
