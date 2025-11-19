export type NavItem = {
    href: string;
    label: string;
    scrollTo?: string;
};

export const navItems: NavItem[] = [
    { href: "/", label: "home" },
    { href: "/services", label: "services", scrollTo: "services" },
    { href: "/packages", label: "packages", scrollTo: "packages" },
    { href: "/faq", label: "faqTitle", scrollTo: "faq" },
    { href: "/about", label: "about" },
];