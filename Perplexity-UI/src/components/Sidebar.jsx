// import React from "react";

// const Sidebar = () => {
//   return (
//     <div className="h-full w-60 rounded-r-2xl bg-[#434343] px-4 py-5">
//       <div className="sidebar-header flex items-center justify-between">
//         <div className="logo">
//           <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M5.73486 2L11.4299 7.24715V7.24595V2.01211H12.5385V7.27063L18.2591 2V7.98253H20.6078V16.6118H18.2663V21.9389L12.5385 16.9066V21.9967H11.4299V16.9896L5.74131 22V16.6118H3.39258V7.98253H5.73486V2ZM10.5942 9.0776H4.50118V15.5167H5.73992V13.4856L10.5942 9.0776ZM6.84986 13.9715V19.5565L11.4299 15.5225V9.81146L6.84986 13.9715ZM12.5704 15.4691L17.1577 19.4994V16.6118H17.1518V13.9663L12.5704 9.80608V15.4691ZM18.2663 15.5167H19.4992V9.0776H13.4516L18.2663 13.4399V15.5167ZM17.1505 7.98253V4.51888L13.3911 7.98253H17.1505ZM10.6028 7.98253L6.84346 4.51888V7.98253H10.6028Z"></path>
//           </svg>
//         </div>
//         <div className="sidebar-button">
//           <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM15 5H4V19H15V5ZM20 5H17V19H20V5Z"></path>
//           </svg>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";

// ================================================================
//  ICONS — plain inline SVGs, zero dependencies
//  To swap any icon: replace the <svg> inside its const below
// ================================================================

const IconLogo = () => (
  <svg width="20" height="20" viewBox="0 0 41 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.214-2.655 10.079 10.079 0 0 0-9.612 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.214 2.654 10.079 10.079 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.244-11.813zm-14.795 20.17a7.467 7.467 0 0 1-4.8-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.65zm-16.124-6.867a7.468 7.468 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zm-2.09-17.496a7.469 7.469 0 0 1 3.897-3.286c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L8.019 23.4a7.504 7.504 0 0 1-3.496-10.723zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.497v4.998l-4.331 2.5-4.331-2.5V17.058z" />
  </svg>
);

const IconNewChat = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconImages = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const IconApps = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const IconCodex = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconProjects = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const IconStar = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconExplore = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

const IconCollapse = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18" />
  </svg>
);

const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconClose = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ================================================================
//  DATA — edit arrays/object here to change sidebar content
// ================================================================

const NAV_ITEMS = [
  { id: "new-chat", label: "New chat", icon: <IconNewChat /> },
  { id: "search", label: "Search chats", icon: <IconSearch /> },
  { id: "images", label: "Images", icon: <IconImages /> },
  { id: "apps", label: "Apps", icon: <IconApps /> },
  { id: "codex", label: "Codex", icon: <IconCodex /> },
  { id: "projects", label: "Projects", icon: <IconProjects /> },
];

const GPT_ITEMS = [
  { id: "ai-logo", label: "Ai logo generator", icon: <IconStar />, accentColor: "#f97316" },
  { id: "explore", label: "Explore GPTs", icon: <IconExplore />, accentColor: "#9ca3af" },
];

const RECENT_CHATS = [
  { id: "c1", label: "Zomato LLD Diagram" },
  { id: "c2", label: "Logic UI State Problems" },
  { id: "c3", label: "UI State Transition Logic" },
  { id: "c4", label: "Remove Image Background" },
  { id: "c5", label: "UI Structure with Copilot" },
  { id: "c6", label: "Responsive UI Strategy" },
  { id: "c7", label: "Tailwind Responsive Changes" },
];

const USER = {
  name: "Akshat Sisodia",
  status: "Go",
  initials: "A",
};

// ================================================================
//  SIDEBAR — React class component
// ================================================================

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: "new-chat", // id of active nav item
      activeChat: null, // id of active chat item
      collapsed: false, // desktop: icon-only strip
      mobileOpen: false, // mobile: drawer open/closed
      isMobile: false, // true when window.innerWidth < 1024
    };
    this.handleResize = this.handleResize.bind(this);
  }

  // ── Lifecycle ──────────────────────────────────────────────────

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  // ── Event handlers ─────────────────────────────────────────────

  handleResize() {
    // lg breakpoint = 1024px (matches Tailwind's lg:)
    const isMobile = window.innerWidth < 1024;
    this.setState({ isMobile });
    if (!isMobile) {
      // returning to desktop → close the mobile drawer automatically
      this.setState({ mobileOpen: false });
    }
  }

  handleNavClick(id) {
    this.setState({ activeNav: id, activeChat: null, mobileOpen: false });
  }

  handleChatClick(id) {
    this.setState({ activeChat: id, activeNav: null, mobileOpen: false });
  }

  handleToggleCollapsed() {
    this.setState((prev) => ({ collapsed: !prev.collapsed }));
  }

  handleToggleMobileDrawer() {
    this.setState((prev) => ({ mobileOpen: !prev.mobileOpen }));
  }

  handleCloseMobileDrawer() {
    this.setState({ mobileOpen: false });
  }

  // ── Render helpers ─────────────────────────────────────────────

  // Primary nav row
  renderNavItem(item) {
    const { activeNav, activeChat } = this.state;
    const isActive = activeNav === item.id && !activeChat;
    return (
      <button key={item.id} onClick={() => this.handleNavClick(item.id)} className={"w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm " + "transition-all duration-150 text-left cursor-pointer " + (isActive ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white")}>
        <span className="shrink-0 opacity-75">{item.icon}</span>
        <span className="truncate">{item.label}</span>
      </button>
    );
  }

  // GPT row with accent-coloured icon
  renderGptItem(item) {
    return (
      <button key={item.id} onClick={() => {}} className={"w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm " + "text-gray-400 hover:bg-white/5 hover:text-white " + "transition-all duration-150 text-left cursor-pointer"}>
        <span className="shrink-0" style={{ color: item.accentColor }}>
          {item.icon}
        </span>
        <span className="truncate">{item.label}</span>
      </button>
    );
  }

  // Recent chat row
  renderChatItem(chat) {
    const { activeChat } = this.state;
    const isActive = activeChat === chat.id;
    return (
      <button key={chat.id} onClick={() => this.handleChatClick(chat.id)} className={"w-full text-left px-3 py-1.5 rounded-lg text-sm truncate " + "transition-all duration-150 cursor-pointer " + (isActive ? "bg-white/10 text-white" : "text-gray-500 hover:bg-white/5 hover:text-gray-200")}>
        {chat.label}
      </button>
    );
  }

  // Shared inner content (used by both desktop expanded & mobile drawer)
  renderSidebarInner(isMobileDrawer) {
    return (
      <>
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between px-4 py-3 shrink-0">
          {/* Logo */}
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black shrink-0">
            <IconLogo />
          </div>

          {/* Desktop: collapse | Mobile drawer: close */}
          {isMobileDrawer ? (
            <button onClick={() => this.handleCloseMobileDrawer()} title="Close sidebar" className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 cursor-pointer">
              <IconClose />
            </button>
          ) : (
            <button onClick={() => this.handleToggleCollapsed()} title="Collapse sidebar" className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 cursor-pointer">
              <IconCollapse />
            </button>
          )}
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 pb-2">
          {/* Primary navigation */}
          <nav className="flex flex-col gap-0.5">{NAV_ITEMS.map((item) => this.renderNavItem(item))}</nav>

          {/* GPTs section */}
          <p className="px-3 pt-5 pb-1 text-[11px] font-semibold text-gray-600 uppercase tracking-widest select-none">GPTs</p>
          <div className="flex flex-col gap-0.5">{GPT_ITEMS.map((item) => this.renderGptItem(item))}</div>

          {/* Your chats section */}
          <p className="px-3 pt-5 pb-1 text-[11px] font-semibold text-gray-600 uppercase tracking-widest select-none">Your chats</p>
          <div className="flex flex-col gap-0.5">{RECENT_CHATS.map((chat) => this.renderChatItem(chat))}</div>
        </div>

        {/* ── Footer / user profile ── */}
        <div className="shrink-0 border-t border-white/5 px-3 py-3">
          <button className="w-full flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-white/5 transition-colors cursor-pointer">
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-semibold shrink-0">{USER.initials}</div>
            {/* Name + status */}
            <div className="flex flex-col items-start overflow-hidden">
              <span className="text-sm text-white font-medium truncate">{USER.name}</span>
              <span className="text-xs text-gray-500">{USER.status}</span>
            </div>
          </button>
        </div>
      </>
    );
  }

  // Desktop: collapsed icon strip
  renderCollapsedDesktop() {
    const { activeNav, activeChat } = this.state;
    return (
      <aside className="hidden lg:flex flex-col items-center w-14 h-screen bg-[#0d0d0d] border-r border-white/5 py-4 gap-1 shrink-0">
        {/* Logo */}
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black mb-1">
          <IconLogo />
        </div>

        {/* Expand button */}
        <button onClick={() => this.handleToggleCollapsed()} title="Expand sidebar" className="text-gray-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 cursor-pointer">
          <IconCollapse />
        </button>

        {/* Nav icons only */}
        {NAV_ITEMS.map((item) => {
          const isActive = activeNav === item.id && !activeChat;
          return (
            <button
              key={item.id}
              title={item.label}
              onClick={() => this.handleNavClick(item.id)}
              className={"flex items-center justify-center w-9 h-9 rounded-lg " + "transition-all duration-150 cursor-pointer " + (isActive ? "bg-white/10 text-white" : "text-gray-500 hover:bg-white/5 hover:text-white")}
            >
              {item.icon}
            </button>
          );
        })}

        {/* User avatar at bottom */}
        <div className="mt-auto">
          <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-semibold">{USER.initials}</div>
        </div>
      </aside>
    );
  }

  // Desktop: full expanded sidebar
  renderExpandedDesktop() {
    return <aside className="hidden lg:flex flex-col w-[260px] h-screen bg-[#0d0d0d] border-r border-white/5 shrink-0">{this.renderSidebarInner(false)}</aside>;
  }

  // Mobile: slide-in drawer + backdrop overlay
  renderMobileDrawer() {
    const { mobileOpen } = this.state;
    return (
      <>
        {/* Backdrop — clicking it closes the drawer */}
        {mobileOpen && <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => this.handleCloseMobileDrawer()} />}

        {/* Drawer panel */}
        <aside className={"fixed top-0 left-0 z-50 flex flex-col h-full w-65" + "bg-[#0d0d0d] border-r border-white/5 lg:hidden " + "transform transition-transform duration-300 ease-in-out " + (mobileOpen ? "translate-x-0" : "-translate-x-full")}>{this.renderSidebarInner(true)}</aside>
      </>
    );
  }

  // ── Main render ────────────────────────────────────────────────

  render() {
    const { collapsed, mobileOpen } = this.state;

    return (
      <>
        {/* Desktop sidebar (collapsed strip OR full panel) */}
        {collapsed ? this.renderCollapsedDesktop() : this.renderExpandedDesktop()}

        {/* Mobile drawer + backdrop */}
        {this.renderMobileDrawer()}

        {/*
          ── Mobile hamburger button ──
          Visible only below lg (1024 px). Fixed to top-left of the screen.
          When the drawer is open it shows an ✕, otherwise ☰.
        */}
        <button
          onClick={() => this.handleToggleMobileDrawer()}
          title={mobileOpen ? "Close menu" : "Open menu"}
          className={"fixed top-4 left-4 z-30 lg:hidden " + "flex items-center justify-center w-9 h-9 rounded-lg " + "bg-[#1a1a1a] border border-white/10 text-gray-300 " + "hover:text-white hover:bg-white/10 " + "transition-all duration-150 shadow-lg cursor-pointer"}
        >
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </>
    );
  }
}

// ================================================================
//  APP — wires Sidebar into a full-screen layout
//  Delete this and use <Sidebar /> directly in your own App.jsx
// ================================================================

class App extends React.Component {
  render() {
    return (
      <div className="flex h-screen bg-[#141414] text-white overflow-hidden">
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center overflow-y-auto relative">
          {/*
            Spacer on mobile so the hamburger button doesn't sit
            on top of your content. Remove if you handle it yourself.
          */}
          <div className="lg:hidden absolute top-0 left-0 right-0 h-14" />

          <div className="text-center px-6">
            <h1 className="text-2xl font-semibold text-white/70 mb-2">What can I help with?</h1>
            <p className="text-sm text-gray-600">Select a chat or start a new one.</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
