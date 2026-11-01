# Clear Blue Plumbing Website

## Student and module details
- **Student:** Duncan Loza
- **Student number:** ST10527661
- **Module:** WEDE5020W – Introduction to Web Development
- **Project:** Clear Blue Plumbing website

## Project overview
This student website project presents Clear Blue Plumbing as a local plumbing business serving Witpoortjie and Roodepoort, Gauteng. It provides business information, service descriptions, stated service areas, an illustrative gallery, and ways to make contact or request a quote.

**Important:** This is an academic project. It does not verify that the business is operating, that the listed address is correct, or that services are available. The business owner should verify all business details, contact information, imagery and map location before real-world use.

## Website pages
| Page | Purpose |
|---|---|
| `index.html` | Home page and overview |
| `about.html` | Business information |
| `services.html` | Service descriptions, search/filter and FAQ accordion |
| `service-areas.html` | Stated service area and map |
| `gallery.html` | Illustrative plumbing-related images |
| `contact.html` | Contact details and general contact form |
| `enquiry.html` | Service and quote enquiry form |

## Part 3 implementation
### Functionality
- Services search and category filter run in the browser using JavaScript and update visible service cards and the result count.
- The Services page uses native HTML `details`/`summary` elements for an FAQ accordion.
- The contact and quote forms use HTML constraints and JavaScript checks for required fields, email format, phone-number digit count and meaningful text.
- Form submissions use asynchronous `fetch()` requests to the FormSubmit AJAX endpoint. The visitor receives an on-page status message without a page reload.
- The quote form collects the requested service, work location, urgency and optional budget so the business can respond. It does **not** calculate a price or confirm appointment availability automatically.
- Responsive CSS includes tablet/mobile breakpoints, flexible form controls, map sizing and larger touch targets.

### SEO and technical files
- Each of the seven HTML pages has its own title and meta description.
- Pages use descriptive headings, internal navigation and image alternative text.
- `robots.txt` and `sitemap.xml` are included. Their canonical domain must match the final published domain; the current files use the Netlify project URL recorded for this deployment.
- The sitemap includes all seven HTML pages.
- Keyword themes used in page copy include **plumber in Roodepoort**, **plumbing services in Witpoortjie**, **plumbing repairs**, **leak repairs**, **blocked drains**, **toilet repairs** and **tap repairs**. These are on-page keyword choices, not the result of a paid keyword-volume study.
- Local SEO work includes consistent location wording and a map embed. No Google Business Profile, backlinks, directory citations or social-media campaign is claimed as completed.

## Forms: processing, privacy and limitations
Both forms submit to the FormSubmit AJAX endpoint configured for `info@cblue.co.za`. The recipient must activate the FormSubmit service, and the address must be confirmed as controlled by the intended recipient. A successful browser response is not proof that a message reached or was read in the inbox. No live delivery test has been confirmed.

Form data is sent to a third-party processor. Before collecting real customer information, verify the recipient and provider terms, provide a suitable privacy notice, and obtain any required consent. Do not submit sensitive payment or identity information through these demonstration forms.

## Images and map
The Gallery page contains six generic externally hosted images with descriptive alt text, dimensions and lazy loading. They are illustrative only and are not presented as verified Clear Blue Plumbing jobs. Image availability and third-party licensing/attribution should be checked before public commercial use.

The Contact and Service Areas pages embed Google Maps using the address currently written in the project (13 Moller Street, Witpoortjie, Roodepoort). The business owner must confirm that address and map pin; the embed is not proof of the business's location.

## Testing status
Source-level checks have been made against repository files. The following are **not claimed as completed** unless separately recorded with evidence:
- End-to-end browser testing of every form and search/filter state.
- Successful FormSubmit activation and inbox delivery.
- Verification of all external gallery images and their reuse rights.
- Confirmation of the correct business address and Google Maps pin.
- Lighthouse/page-speed measurement, security audit, accessibility audit or live search-engine indexing.
- Backlink acquisition, social-media promotion or Google Business Profile optimisation.

Before submission, test the deployed site on desktop and mobile, submit test forms only after recipient activation, inspect all links and images, and confirm the published sitemap and robots file.

## References
- FormSubmit (n.d.) *FormSubmit – Easy form endpoints*. Available at: https://formsubmit.co/ (Accessed: 1 November 2026).
- Google (n.d.) *Google Maps URLs*. Available at: https://developers.google.com/maps/documentation/urls/get-started (Accessed: 1 November 2026).
- Google (n.d.) *Search Central – SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 1 November 2026).
- MDN Web Docs (n.d.) *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 1 November 2026).
- MDN Web Docs (n.d.) *Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (Accessed: 1 November 2026).
- W3C (n.d.) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 1 November 2026).
- Unsplash (n.d.) *Unsplash*. Available at: https://unsplash.com/ (Accessed: 1 November 2026). Retain the individual source page and licence details for each image used.
- Wikimedia Commons (n.d.) *Wikimedia Commons*. Available at: https://commons.wikimedia.org/ (Accessed: 1 November 2026). Verify each file page's licence and attribution requirements before reuse.

## Changelog
See [CHANGELOG.md](CHANGELOG.md) for the development history and corrections.
