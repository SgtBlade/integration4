const ROUTES = {
  home: "/",
  login: "/login",
  register: "/register",
  map: "/map",
  TaskFrance: "/Frankrijk/opdracht",
  TaskSpain: "/map",
  TaskItaly: "/map",
  Spain: "/Spanje",
  Italy: "/Italië",
  France: "/Frankrijk",
  Friends: "/vrienden",
  FriendRequests: "/vrienden/verzoeken",
  FriendScan: "/vrienden/scannen",
  Postcards: { path: "/postkaarten/:id/:user/:loc", to: "/postkaarten/" },
  FriendsProjects: "/projecten/vrienden",
  FriendsProjectsOverview: {
    path: "/projecten/vrienden/werkjes/:id",
    to: "/projecten/vrienden/werkjes/",
  },
  MyProjects: "/projecten/mijnwerkjes",
  MyProjectsOverview: {
    path: "/projecten/mijnprojecten/werkjes/:id",
    to: "/projecten/mijnprojecten/werkjes/",
  },
};

export { ROUTES };
