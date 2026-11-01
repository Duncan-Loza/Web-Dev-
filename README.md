# Clear Blue Plumbing Website

## Student and module details
- **Student:** Duncan Loza
- **Student number:** ST10527661
- **Module:** WEDE5020W – Introduction to Web Development
- **Project:** Clear Blue Plumbing website

## Project overview
This student website project presents Clear Blue Plumbing as a local plumbing business serving Witpoortjie and Roodepoort, Gauteng. It provides business information, service descriptions, stated service areas, an illustrative gallery, and ways to make contact or request a quote.

**Important:** This is an academic project. The address shown (13 Moller Street, Witpoortjie, Roodepoort, Gauteng, 1724) and the Google Maps pin coordinates were supplied/checked by the student against the Clear Blue Plumbing Google Business Profile. This does not independently verify that the business is operating or that services are available.

## Published website
- **Hosting platform:** GitHub Pages, publishing the `main` branch from the repository root.
- **Published URL:** https://duncan-loza.github.io/Web-Dev-/
- **Sitemap:** https://duncan-loza.github.io/Web-Dev-/sitemap.xml
- **Crawler instructions:** https://duncan-loza.github.io/Web-Dev-/robots.txt

The GitHub Pages URL includes the repository name because this is a project site. Netlify is no longer the documented hosting target.

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
- The Services page loads its eight service records asynchronously from `services.json` using the Fetch API, builds the service cards with JavaScript, and retains semantic HTML cards as a fallback if the data request fails. Search and category filtering update the visible cards and result count; a clear-filters control resets both controls, and a no-results message appears when no cards match.
- The Gallery page includes a native HTML dialog lightbox with previous/next controls, Escape-to-close support, arrow-key navigation, descriptive alternative text, and focus return to the selected thumbnail.
- Each page includes a keyboard skip link to the main content. Canonical URLs and Open Graph/Twitter preview metadata are included for the GitHub Pages project domain.
- The Services page uses native HTML `details`/`summary` elements for an FAQ accordion.
- The contact and quote forms use HTML constraints and JavaScript checks for required fields, email format, phone-number digit count and meaningful text.
- Form submissions use asynchronous `fetch()` requests to the FormSubmit AJAX endpoint. The visitor receives an on-page status message without a page reload.
- The quote form collects the requested service, work location, urgency and optional budget so the business can respond. It does **not** calculate a price or confirm appointment availability automatically.
- Responsive CSS includes tablet/mobile breakpoints, flexible form controls, map sizing and larger touch targets.

### SEO and technical files
- Each of the seven HTML pages has its own title and meta description.
- Pages use descriptive headings, internal navigation and image alternative text.
- `robots.txt` and `sitemap.xml` are included. Their canonical domain must match the final published domain; the files use the GitHub Pages project URL `https://duncan-loza.github.io/Web-Dev-`.
- The sitemap includes all seven HTML pages.
- Keyword themes used in page copy include **plumber in Roodepoort**, **plumbing services in Witpoortjie**, **plumbing repairs**, **leak repairs**, **blocked drains**, **toilet repairs** and **tap repairs**. These are on-page keyword choices, not the result of a paid keyword-volume study.
- Search-intent mapping: the Home page targets the broad local plumber query; Services targets service-specific searches; Service Areas targets location coverage; Contact and Enquiry support high-intent contact/quote searches; Gallery supports image discovery but is not a substitute for genuine project evidence.
- Off-page SEO is not claimed as completed. Future work should only use verified business details to create or maintain a Google Business Profile, request genuine customer reviews, and earn relevant local directory citations or links. Do not create fake reviews or listings.
- Local SEO work includes consistent location wording and a map embed. No Google Business Profile, backlinks, directory citations or social-media campaign is claimed as completed.

### SEO implementation notes
- Each page has a unique, descriptive title and meta description written for its own search intent; social preview titles and descriptions use the same page-specific wording.
- Open Graph locale metadata is set to `en_ZA`.
- Each page includes Schema.org `WebPage` JSON-LD with its canonical URL, language, description and parent website. This describes the page; it does not claim verified business credentials.
- No `LocalBusiness` markup, review ratings, opening hours or unconfirmed location/service claims are published as structured data.
- The sitemap and robots file are available at the published GitHub Pages URLs above. Search Console verification, sitemap submission, indexing status and search performance have not been confirmed.
- Keyword themes are incorporated naturally into page titles, headings and copy. No keyword-volume or ranking study is claimed.

## Forms: processing, privacy and limitations
Both forms submit to the FormSubmit AJAX endpoint configured for `info@cblue.co.za`. The recipient must activate the FormSubmit service, and the address must be confirmed as controlled by the intended recipient. A successful browser response is not proof that a message reached or was read in the inbox. No live delivery test has been confirmed.

Form data is sent to a third-party processor. Before collecting real customer information, verify the recipient and provider terms, provide a suitable privacy notice, and obtain any required consent. Do not submit sensitive payment or identity information through these demonstration forms.

## Images and map
The Gallery page uses six locally stored WebP files with descriptive filenames: `brass-outdoor-water-tap.webp`, `electric-geyser-copper-pipework.webp`, `solar-geyser-evacuated-tube-collector.webp`, `copper-water-pipes-renovation.webp`, `tiled-bathroom-shower-area.webp` and `clear-blue-plumbing-service-advert.webp`. Each image has concise, descriptive alternative text, intrinsic dimensions and lazy loading. The names and alt text describe the visible subject; they do not claim that the images show completed jobs by Clear Blue Plumbing. The student states that these six images were obtained from the Clear Blue Plumbing Google Business Profile. They are credited to that profile below; the individual photo uploaders and reuse permissions have not been independently verified. Confirm permission and any attribution requirements before public commercial use.

The Contact and Service Areas pages embed Google Maps centred on the business pin supplied in the Clear Blue Plumbing Google Maps directions link. The profile identifies the business as CLEAR BLUE PLUMBING, 13 Moller St, Witpoortjie, Roodepoort, 1724. The map embed uses the supplied pin coordinates (latitude -26.1347313, longitude 27.831254). The student visually checked both map embeds on the deployed website and reported that they load and work as expected.

## Testing status
Source-level checks have been made against repository files. The student has also reported browser testing of all seven deployed pages, navigation, Services search/filter and JSON fallback, gallery lightbox controls, both forms' validation, responsive layouts, and Chrome/Firefox. The student has now completed keyboard-only testing and reports that keyboard navigation and the tested interactive controls work as expected. The student has also tested the website using Windows Narrator and reports that the screen reader worked as expected during the test. On 1 November 2026, the student ran Google Chrome Lighthouse on the Home page and saved the desktop and mobile score screenshots in the repository root. The reported desktop scores were Performance 98, Accessibility 100, Best Practices 100 and SEO 100; the reported mobile scores were Performance 99, Accessibility 100, Best Practices 100 and SEO 100. The screenshots are linked below. These are student-reported test results; Lighthouse scores can vary between runs and automated accessibility checks do not establish full WCAG conformance. No independent browser recording or test report is included in the repository. The following are **not claimed as completed**:
- A comprehensive screen-reader review of every page and interactive state, including all form validation messages and the full lightbox interaction.
- Successful FormSubmit activation and inbox delivery.
- Confirmation of the gallery image source and any reuse/attribution requirements. The student identifies the six images as sourced from the Clear Blue Plumbing Google Business Profile; this source has not been independently checked in this environment.
- A comprehensive manual accessibility audit against WCAG, a security audit, or live search-engine indexing verification.
- Backlink acquisition, social-media promotion or Google Business Profile optimisation.

### Lighthouse screenshots — Home page (1 November 2026)

**Desktop:** Performance 98 · Accessibility 100 · Best Practices 100 · SEO 100

![Desktop Lighthouse results](Screenshot%202026-11-01%20163541.png)

**Mobile:** Performance 99 · Accessibility 100 · Best Practices 100 · SEO 100

![Mobile Lighthouse results](Screenshot%202026-11-01%20163628.png)

The two original PNG screenshots are stored in the repository root. The filenames are retained as uploaded so the README links point directly to the original evidence.

Before submission, test the deployed site on desktop and mobile, submit test forms only after recipient activation, inspect all links and images, and confirm the published sitemap and robots file.

## References
- FormSubmit (n.d.) *FormSubmit – Easy form endpoints*. Available at: https://formsubmit.co/ (Accessed: 1 November 2026).
- Google (n.d.) *Google Maps – CLEAR BLUE PLUMBING, 13 Moller St, Witpoortjie, Roodepoort, 1724*. Available at: https://www.google.com/maps/dir//CLEAR+BLUE+PLUMBING,+13+Moller+St,+Witpoortjie,+Roodepoort,+1724/@-26.1492117,27.7902418,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e95993c3a245d3d:0xa8b3767eda2d1f4e!2m2!1d27.831254!2d-26.1347313?entry=ttu (Accessed: 1 November 2026).
- Google (n.d.) *Google Maps – CLEAR BLUE PLUMBING, 13 Moller St, Witpoortjie, Roodepoort, 1724*. Available at: https://www.google.com/maps?q=-26.1347313%2C27.831254 (Accessed: 1 November 2026).
- Google (n.d.) *Google Maps URLs*. Available at: https://developers.google.com/maps/documentation/urls/get-started (Accessed: 1 November 2026).
- Google (n.d.) *Search Central – SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 1 November 2026).
- Schema.org (n.d.) *WebPage*. Available at: https://schema.org/WebPage (Accessed: 1 November 2026).
- MDN Web Docs (n.d.) *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 1 November 2026).
- MDN Web Docs (n.d.) *Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (Accessed: 1 November 2026).
- W3C (n.d.) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 1 November 2026).
- Google (n.d.) *Clear Blue Plumbing – Google Business Profile photographs*. Google Maps. Images accessed via the business profile on 1 November 2026. The student identifies the six gallery images as sourced from this profile; individual image uploaders and reuse permissions have not been independently verified.

## Changelog
See [CHANGELOG.md](CHANGELOG.md) for the development history and corrections.

- Added page-specific `meta keywords` tags to all seven HTML pages to document the keyword themes used for the Part 3 rubric. These tags are included for the assessment requirement; Google Search does not use the meta keywords tag as a ranking signal.
