const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services", submenu: [
    { href: "/services/acrylic-rendering", label: "Acrylic Rendering" },
    { href: "/services/blue-board-installation", label: "Blue Board Installation" },
    { href: "/services/brick-wall-rendering", label: "Brick Wall Rendering" },
    { href: "/services/brick-wall-repair", label: "Brick Wall Repair" },
    { href: "/services/cladding-installation-adelaide", label: "Cladding Installation Adelaide" },
    { href: "/services/foam-panel-installation", label: "Foam Panel Installation" },
    { href: "/services/hebel-installation-fencing", label: "Hebel Installation Fencing" },
    { href: "/services/painters-adelaide", label: "Painters Adelaide" },
    { href: "/services/texture-coating-adelaide", label: "Texture Coating Adelaide" }
  ]},
  { href: "/blog", label: "Blog" },
  {
    href: "/pages",
    label: "Pages",
    submenu: [
      { href: "/", label: "Home Page" },
      { href: "/about", label: "About Page" },
      { href: "/projects", label: "Projects Page" },
      { href: "/services", label: "Services Page" },
      { href: "/blog", label: "Blog Page" },
      { href: "/contact-us", label: "Contact Page" },
    ],
  }
];

export default menuItems;