/**
 * Navigate to an in-page section by hash without pushing a new history entry.
 * Uses replaceState so the back button exits the site instead of stepping through sections.
 */
export function navigateToHash(href: string): void {
  if (!href.startsWith('#')) return;
  const id = href.slice(1);
  const el = id ? document.getElementById(id) : null;
  if (el) {
    window.history.replaceState(null, '', href);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
