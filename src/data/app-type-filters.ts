/**
 * Doc filters for the left nav.
 *
 * Renders as a row of chips at the top of the sidebar with an "All" default.
 * Picking a chip shows ONLY the docs that belong to that filter — every other
 * doc (including general/universal ones) is hidden until you switch back to
 * "All". Matching sub-groups are auto-expanded so their docs are visible.
 *
 * The two products get DIFFERENT chip sets:
 *   • Suite → app types only (Web application, Salesforce, Android, iOS,
 *     Mobile web, Rest API, Windows (Lite), Windows).
 *   • Arcus → feature areas (Test Cases, Test Plans, Test Runs…); it isn't
 *     app-specific, so no platform chips.
 *
 * How matching works
 * ──────────────────
 * Each filter lists path fragments. A nav link whose href contains one of those
 * fragments belongs to that filter. A fragment may appear under more than one
 * filter (e.g. mobile-apps FAQs are shared between Android and iOS). To add,
 * remove, rename, or reorder a chip, just edit the relevant list — no code
 * changes. A doc matching NO filter only appears under "All".
 */

export interface DocFilter {
  /** Stable id used in the DOM (data-app-filter) and localStorage. */
  id: string;
  /** Chip label shown in the sidebar. */
  label: string;
  /**
   * Path fragments that mark a doc as belonging to this filter. Matched as a
   * plain substring against each nav link's href, so include the surrounding
   * slashes to avoid accidental matches.
   */
  match: string[];
}

// ── Suite: app types ────────────────────────────────────────────────────────
// Mirrors Testsigma's "Application type" picker. (Unified has no dedicated docs
// yet, so it is intentionally omitted — a chip with no matches would empty the
// nav; add it once Unified docs exist.)
export const SUITE_FILTERS: DocFilter[] = [
  {
    id: 'web',
    label: 'Web application',
    match: ['/elements/web-apps/', '/faqs/web-apps/', '/troubleshooting/web-apps/'],
  },
  {
    id: 'salesforce',
    label: 'Salesforce',
    match: ['/salesforce-testing/'],
  },
  {
    id: 'android',
    label: 'Android',
    match: ['/elements/android-apps/', '/faqs/mobile-apps/', '/troubleshooting/mobile-apps/'],
  },
  {
    id: 'ios',
    label: 'iOS',
    match: ['/elements/ios-apps/', '/faqs/mobile-apps/', '/troubleshooting/mobile-apps/'],
  },
  {
    id: 'mobile-web',
    label: 'Mobile web',
    match: ['/elements/mobile-web-application/'],
  },
  {
    id: 'rest-api',
    label: 'Rest API',
    match: ['/create-steps-restapi/', '/troubleshooting/rest-api/'],
  },
  {
    id: 'windows-lite',
    label: 'Windows (Lite)',
    match: ['/windows-lite-automation/'],
  },
  {
    id: 'windows',
    label: 'Windows',
    match: [
      '/windows-automation/',
      '/desktop-automation/',
      '/troubleshooting/desktop-windows/',
    ],
  },
];

// ── Arcus: feature areas (not app-specific) ─────────────────────────────────
export const ARCUS_FILTERS: DocFilter[] = [
  { id: 'test-cases',    label: 'Test Cases',     match: ['/test-cases/'] },
  { id: 'test-plans',    label: 'Test Plans',     match: ['/test-plans/'] },
  { id: 'test-runs',     label: 'Test Runs',      match: ['/test-runs/'] },
  { id: 'step-groups',   label: 'Step Groups',    match: ['/step-groups/'] },
  { id: 'test-capture',  label: 'Test Capture',   match: ['/test-capture/'] },
  { id: 'data-sets',     label: 'Data Sets',      match: ['/data-sets/'] },
  { id: 'atto',          label: 'Atto AI',        match: ['/atto/'] },
  { id: 'integrations',  label: 'Integrations',   match: ['/integrations/'] },
  { id: 'ci-cd',         label: 'CI/CD',          match: ['/ci-cd-integrations/'] },
  { id: 'reports',       label: 'Reports',        match: ['/reports/'] },
  { id: 'imports',       label: 'Imports/Exports', match: ['/imports-and-exports/'] },
  { id: 'two-way-sync',  label: 'Two-Way Sync',   match: ['/testsigma-two-way-integration/'] },
];

/** Returns the chip set for the given product. */
export function filtersForProduct(product: 'suite' | 'arcus'): DocFilter[] {
  return product === 'arcus' ? ARCUS_FILTERS : SUITE_FILTERS;
}
