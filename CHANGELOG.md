# Changelog

## Clear Blue Plumbing Website - Part 2

### Website Structure

* Updated the five HTML pages for the Clear Blue Plumbing website.
* Maintained the Home, About, Services, Service Areas, and Contact pages.
* Improved the structure of the HTML documents.
* Used semantic HTML5 elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`.
* Maintained consistent navigation across all pages.

### Styling

* Added and linked an external CSS stylesheet.
* Improved the overall page layout and spacing.
* Added consistent colours, typography, buttons, and content sections.
* Improved the presentation of the plumbing service cards.
* Improved the footer layout and styling.
* Added hover and focus effects to improve usability.

### Responsive Design

* Added responsive CSS for desktop, tablet, and mobile screen sizes.
* Adjusted the navigation layout for smaller screens.
* Adjusted content spacing and font sizes for mobile devices.
* Improved the layout of service sections and the footer on smaller screens.

### Services Page

* Added eight plumbing services with individual descriptions.
* Added service cards using HTML `article` elements.
* Added a Request a Quote call-to-action.
* Added a clickable telephone link.

### About Page

* Added information about Clear Blue Plumbing.
* Added sections explaining the business, its approach, target customers, and local service area.
* Added links to the Services and Service Areas pages.
* Added a contact call-to-action.

### Contact Page

* Added contact details and business address.
* Added an enquiry form.
* Added required fields for name, email, phone number, service selection, and message.
* Added a service selection list.
* Added clickable telephone links.
* Added links to request a quote.

### Navigation and Links

* Checked navigation links between all five pages.
* Checked internal page links.
* Added clickable telephone links using the `tel:` format.
* Corrected stylesheet paths so all pages use the external CSS file.

### Testing and Corrections

* Checked the website structure and HTML formatting.
* Corrected CSS stylesheet linking issues.
* Checked navigation between pages.
* Checked the responsive layout at different screen sizes.
* Checked buttons and telephone links.
* Made final layout and formatting corrections.

### Documentation

* Added a README file containing project information and website documentation.
* Added this changelog to document the Part 2 development process.
* Added project references where required.

## Part 2 Final Version

* Completed the five-page website structure.
* Completed the external CSS styling.
* Completed responsive design improvements.
* Completed navigation and contact functionality.
* Completed project documentation.
* Prepared the website for final testing and submission.

## Part 3 — Initial SEO and Service Area Corrections

### Stylesheet Path Verification
* Corrected the stylesheet reference in `index.html`, `about.html`, `services.html`, `service-areas.html`, and `contact.html` from `css/style.css` to `style.css`, matching the stylesheet's location in the repository root.
* Re-fetched the five HTML files from the `main` branch and verified that each references `style.css`.

### SEO Metadata
* Added a unique HTML `meta name="description"` element to each of the five existing pages.
* Updated the home page title to target the plumbing service and Roodepoort location.
* Updated the About, Services, Service Areas, and Contact page titles so they describe each page's distinct purpose and local context.
* Used descriptive, location-relevant wording in titles and descriptions without making claims about rankings or guaranteed service availability.

### Service Areas Page
* Corrected the page title and main content so the page describes service areas instead of duplicating the Services page.
* Identified Witpoortjie and Roodepoort as the stated primary service area.
* Added guidance asking visitors to contact the business to confirm availability for addresses outside the primary area.
* Added internal links to the contact page and telephone link to support enquiries.

### Verification Notes
* Re-fetched the five HTML pages from GitHub after the changes.
* Verified that each page contains a title and a meta description and that the Service Areas page contains its new service-area heading.
* Browser rendering, live search indexing, and actual search ranking have not been verified.

## Part 3 — Forms and Client-Side Validation

### Dedicated Enquiry Page
* Added `enquiry.html` as a separate page for service and quote enquiries.
* Added fields for name, email, phone, work location, requested service, timing, optional budget, and a problem description.
* Added HTML validation rules including required fields, minimum and maximum lengths, email input type, and a phone-number pattern.
* Added a feedback region for the result of browser-side validation and a reminder that availability and price must be confirmed by the business.

### Contact Form
* Updated `contact.html` to use a distinct contact form rather than reusing the service enquiry form.
* Added full name, email address, phone number, message type, and message fields.
* Added validation and a prepared-message preview area.

### JavaScript and Styling
* Added `script.js` to validate form inputs, check phone-number digit counts, and display feedback without reloading the page.
* Added styling for form feedback, submit buttons, and visible keyboard-focus states in `style.css`.
* Added a Request a Quote navigation link to the existing pages.

### Known Limitations and Testing
* The forms currently perform client-side validation only. They do not transmit or store submissions.
* Actual email delivery or AJAX submission requires a configured processing endpoint and a verified recipient address.
* Tested repository content after changes by fetching the new page, script, stylesheet, and contact page from GitHub.
* Browser interaction testing and deployment testing are still outstanding.

### Contact Email Recipient
* Configured the contact-form email link to prepare a message addressed to `info@cblue.co.za`.
* Added a visible action that opens the visitor's default email application with the subject and message prefilled after form validation.
* This uses a `mailto:` link, not a server-side mail service or AJAX request. The visitor must review and send the email themselves; delivery has not been independently verified.



## Part 3 — Interactive Service Search and Filtering

### Services Page
* Added a search field that filters service cards by words in their titles and descriptions.
* Added a category selector for repairs, drains and blockages, maintenance, and urgent assistance.
* Added a live status message showing how many services match the current search and category.
* Added category data attributes to service cards so the JavaScript can filter them without reloading the page.
* Added responsive styling and a reduced-motion preference for the service-card transition.

### Verification Notes
* Checked the updated HTML and JavaScript source retrieved from the GitHub repository.
* Browser testing of the search/filter interaction is still required before claiming the feature has been fully tested.


## Part 3 — Services FAQ Accordion

* Added a Frequently Asked Questions section to `services.html`.
* Used native HTML `details` and `summary` elements so visitors can open and close answers without an additional JavaScript dependency.
* Added styling for spacing, borders, keyboard focus, and readable answers.
* Kept answers factual and directed visitors to contact the business to confirm location coverage, price, and availability.
* Browser and keyboard testing remain outstanding.


## Part 3 — Asynchronous Form Submission

* Added a FormSubmit AJAX processing endpoint to both the quote enquiry and general contact forms.
* Updated the JavaScript submit handlers to validate the form, send form data using `fetch()`, disable the submit button while processing, and show success or failure feedback without reloading the page.
* Added the visitor's email as the reply-to value so the recipient can respond to the visitor.
* Corrected malformed closing form markup in `contact.html`.
* Updated the form notes to explain that the third-party service must be activated by the recipient before live delivery can be verified.

### Important Verification Limitation
* The endpoint is configured for `info@cblue.co.za`, but the recipient must complete FormSubmit's email activation step.
* No real test submission or inbox receipt has been verified in this session. Browser testing, provider activation, and confirmation of delivery remain outstanding.


## Part 3 — Technical SEO Files and Source Checks

* Added `robots.txt` with crawler access for the public site and a sitemap reference.
* Added `sitemap.xml` listing the six HTML pages using the planned GitHub Pages URL. The URL must be confirmed after deployment and updated if different.
* Re-checked the six HTML documents for one title, one meta description, and one primary `h1` each.
* Confirmed that the current HTML files do not contain inline `img` elements; image alt text and filename checks will be required if images are added.
* Cleaned the contact and quote form markup and removed the obsolete prepared-email preview from the contact form.
* Updated the quote-form notice and README so they describe the configured third-party form processor and its activation requirement accurately.
* These checks are source-level checks only. Deployment, browser rendering, link crawling, page speed, and actual form delivery remain unverified.


## Part 3 — Google Maps and Image Presentation

### Google Maps
* Added responsive Google Maps iframe embeds to `contact.html` and `service-areas.html`, using the address stated in the project.
* Added descriptive iframe titles, lazy loading, and external links that open the location in Google Maps in a new tab with `noopener noreferrer`.
* No Google Maps API key is required for this address-based embed.
* The exact business pin and live map display still need to be checked in a browser before deployment.

### Images and Accessibility
* Added a plumbing repair illustration to the homepage and plumbing tools image to the Services page.
* Used descriptive alt text and intrinsic image dimensions; set the service image to lazy-load.
* Added responsive image styling, rounded corners, captions, and a responsive homepage hero layout.
* Captions clarify that these are illustrative photographs and are not verified images of Clear Blue Plumbing's own staff, equipment, or completed work.
* Recorded image source and license information in the README.
* Image loading, crop, and mobile layout have not been browser-tested yet.


## Part 3 — Removed Generic Plumbing Tools Image

* Removed the generic plumbing-tools image from `services.html` because it made the page feel less authentic.
* Removed the associated service-image styling and updated the README image notes and credits.
* Kept the homepage image for now, with its caption identifying it as illustrative rather than verified business work.


## Part 3 — Business Gallery Page

* Added `gallery.html` with a Facebook Page Plugin embed for the Clear Blu Plumbing Facebook page supplied by the user.
* Added a direct link to the Facebook page as a fallback if the embedded timeline is blocked or unavailable.
* Added Gallery to the navigation across all seven HTML pages.
* Added responsive styling for the embedded feed.
* Documented that Facebook controls the visibility and availability of posts and that individual photos have not been downloaded or copied into the repository.
* The live Facebook embed still needs to be checked in a browser after deployment.


## Part 3 — Homepage Repair and Removal of Unreliable Image

* Rebuilt `index.html` as a complete, valid HTML document after the existing source ended with an incomplete closing tag.
* Removed the external illustrative plumbing photograph and its caption from the homepage because the image was not displaying reliably and was not verified work by Clear Blue Plumbing.
* Kept the homepage focused on business information, services, service areas, and clear contact/quote actions; no Facebook feed section is included on the homepage.
* Restored the closing structure for the main content, footer, and HTML document and retained the site's seven-page navigation.
* Updated the README to reflect the removal of the homepage image. Browser rendering and deployment still need to be checked.


## Part 3 — Gallery Updated with Individual Plumbing Photos

* Replaced the Facebook Page Plugin gallery with six separate generic plumbing-related image tiles in `gallery.html`.
* Added descriptive alt text, intrinsic width and height attributes, and lazy loading for the images.
* Removed photo captions and comments; retained a short notice that the images are illustrative and are not verified examples of completed Clear Blue Plumbing work.
* Updated the README to describe the gallery accurately.
* Images are externally hosted, so their loading, visual content, mobile layout, and the requirement that no people appear must still be checked in a browser.


## Part 3 — Current Source and Documentation Corrections

* Updated `sitemap.xml` to include `gallery.html`, bringing the sitemap to seven HTML page URLs for the planned GitHub Pages address.
* Updated `README.md` to describe the current six-image gallery and removed duplicated gallery notes.
* The earlier entries above record changes made at earlier stages; where a later entry describes a replacement (for example, replacing the Facebook gallery embed with individual images), the later entry describes the current source.
* Confirmed source-level structure for all seven HTML pages: each has a document type, one page title, one meta description, one primary `h1`, and a reference to `style.css`. These checks do not establish browser rendering or live functionality.
* External gallery images still need browser verification for successful loading and for confirming that no people appear.


## Part 3 — Gallery Image Replacement

* Replaced the final two gallery image URLs in `gallery.html` with a rooftop solar water-heating collector and a wall-mounted exhaust fan, matching the subjects requested.
* Added descriptive alternative text and retained lazy loading and image dimensions.
* The two replacement photos are externally hosted on Wikimedia Commons; they are illustrative images, not photos of confirmed Clear Blue Plumbing jobs. Their browser loading and visual appearance should still be checked on the deployed site.


## Part 3 — Form Validation and Mobile Responsiveness

* Strengthened the JavaScript validation used by both `contact.html` and `enquiry.html`.
* Added trimmed-text checks so whitespace-only names, messages, and enquiry locations are rejected; the message and name fields must still meet their HTML minimum lengths.
* Added phone-number validation that counts digits and accepts 7 to 15 digits, alongside the existing HTML required, email, pattern, minlength, maxlength, and select-field validation.
* Kept asynchronous form submission, disabled the submit button while sending, and retained visible success/failure feedback. Actual email delivery still depends on activation by the third-party form recipient and must be tested.
* Improved small-screen navigation with a two-column link layout, made form controls and buttons easier to use on touch screens, constrained content to the viewport, and made the embedded map responsive.
* Existing tablet and mobile breakpoints were retained and extended. Browser testing at actual mobile and tablet viewport sizes remains required.


## Part 3 — Documentation, SEO and submission-readiness corrections (1 November 2026)

### README consolidation
* Reorganised the README into one current project description, seven-page inventory, implementation summary, limitations, testing status and reference list.
* Corrected older statements that described the forms as mailto-only or client-side-only; the current source uses an AJAX FormSubmit endpoint.
* Distinguished implemented source features from work that has not been verified in a real browser or inbox.
* Added keyword themes used in on-page copy and stated that no paid keyword-volume study or off-page SEO campaign is claimed.

### Sitemap and crawler directives
* Updated canonical sitemap URLs and the robots.txt sitemap directive to the Netlify project domain recorded for this deployment.
* Included all seven HTML pages in sitemap.xml.
* The exact public deployment URL and published sitemap/robots files still require direct confirmation. If the site's primary domain differs, update both files to that exact domain.

### Accuracy and assessment evidence
* Clarified that the quote form collects information for a manual business response; it does not calculate a quote or determine availability automatically.
* Clarified that an AJAX response does not prove inbox delivery; FormSubmit activation and a real test remain necessary.
* Documented that gallery images are generic illustrative assets, not verified business work, and that image licensing/attribution must be checked.
* Documented the unverified business address/map pin and outstanding browser, performance, security, accessibility and indexing checks.
* Added references for the technical guidance and third-party services documented in the README.

## Part 3 — Uploaded Gallery Assets Connected (1 November 2026)

* Added six WebP gallery image assets to the repository root: `gallery-1.webp` through `gallery-6.webp`.
* Updated the image paths in `gallery.html` from `images/gallery/gallery-*.webp` to the matching root-level filenames so the references match the uploaded repository structure.
* Verified through the GitHub repository contents listing that all six referenced image files are present.
* Updated the README to document the local image files and their paths accurately.
* The images remain illustrative and are not represented as verified completed work by Clear Blue Plumbing. Their appearance, loading on the deployed site, source permissions and attribution requirements should still be checked.


## Part 3 — Gallery Interaction, Accessibility and SEO Metadata (1 November 2026)

### Gallery lightbox
* Added buttons around all six gallery images so each image can be opened in a native HTML dialog.
* Added previous/next controls, Escape-to-close support through the native dialog, left/right arrow-key navigation, a live image caption, and focus return to the image that opened the dialog.
* Added responsive dialog styling and visible keyboard focus states.
* Source-level check confirms that all six gallery thumbnails have lightbox buttons. Actual browser interaction and screen-reader testing remain outstanding.

### Services search improvements
* Added a Clear Filters button to reset the search text and category selector.
* Added an empty-results message when no service cards match the current search and category.
* Kept the service cards in the HTML and used JavaScript to update their visibility and result status without a page reload.

### Form handling correction
* Corrected the reply-to value so the visitor's email address is also written into the FormData payload sent to the AJAX processor.
* The form processor's activation and actual inbox delivery are still unverified.

### Accessibility and search preview metadata
* Added a keyboard skip link to the main content on all seven pages and a matching main-content target.
* Added canonical URL, Open Graph title/description/site-name/URL and Twitter summary-card metadata for the current Netlify project URL.
* Added visible focus treatment, disabled-submit feedback and a stronger reduced-motion override in the stylesheet.
* Canonical URLs and social preview URLs must be updated if the Netlify project domain is renamed. Keyboard, screen-reader, browser and social-preview testing remain outstanding.


## Part 3 — Asynchronous Service Catalogue (1 November 2026)

* Added services.json containing the eight service records and their category labels.
* Updated the Services page JavaScript to retrieve the local JSON file with the Fetch API and build service cards using DOM methods and textContent.
* Retained the existing semantic HTML cards as a fallback if the JSON request fails or contains no valid records.
* Connected the loaded cards to the existing text search, category filter, clear-filters control and no-results message.
* Source files and the JSON data structure have been checked in GitHub. The deployed fetch request and fallback behaviour still require browser testing.


* Follow-up source check: added the deferred script.js reference to gallery.html so the lightbox controls are initialised on the Gallery page.


## Part 3 — Source-Level Verification After Improvements (1 November 2026)

* Re-fetched all seven HTML pages from the main branch and checked that each has exactly one title element, one meta description and one primary h1.
* Verified that all seven pages contain canonical metadata and a skip link connected to the main-content target.
* Verified that the Services, Contact, Enquiry and Gallery pages load script.js where required.
* Verified that gallery.html contains six lightbox triggers and the dialog markup.
* Parsed services.json and confirmed that it contains eight service records; confirmed script.js contains the asynchronous fetch, fallback, filtering, form reply-to and lightbox handlers.
* These are repository/source checks only. The public Netlify deployment could not be reached from this environment, so browser rendering, mobile layout, JavaScript runtime behaviour, third-party form delivery, Lighthouse scores and live sitemap/robots availability remain unverified.

## 2026-11-01 — Visual refinement

- Added a consistent `page-banner` treatment to the first content section on all seven pages, with clearer heading hierarchy, restrained blue accents, improved spacing and responsive sizing.
- Refined the navigation bar and added an active-page indicator to each page's navigation link.
- Added subtle, consistent panel borders, card depth, hover feedback and footer detailing while retaining the existing colour palette and simple student-project structure.
- Source-level verification confirmed that all seven pages contain a page banner and exactly one active navigation marker. Visual browser testing remains outstanding.

## 2026-11-01 — Banner spacing correction

- Corrected vertical rhythm across all page banners with consistent gaps between headings, descriptions and supporting content.
- Grouped the home-page calls to action into a responsive action row.
- Reworked the gallery disclaimer into a clearly labelled, restrained note panel so it reads as supporting information rather than a second unformatted paragraph.
- Added mobile-specific spacing and stacked action links for smaller screens.


## Part 3 — Hosting migration to GitHub Pages

* Changed the canonical URL and Open Graph URL on all seven HTML pages from the previous Netlify project domain to the GitHub Pages project URL: https://duncan-loza.github.io/Web-Dev-/.
* Updated all seven sitemap locations and the sitemap directive in `robots.txt` to the GitHub Pages domain.
* Updated the README hosting details, published URL, sitemap URL and crawler-file URL to identify GitHub Pages as the deployment platform.
* Retained earlier Netlify references in this changelog only where they describe historical development decisions; they are not current deployment instructions.
* Source files were updated in the `main` branch. The GitHub Pages build and live URLs still need to be checked in a browser after GitHub finishes publishing.


## Responsive CSS refinement
- Rebuilt `style.css` as a consolidated stylesheet instead of layering further overrides onto the earlier Part 2 rules.
- Standardised colour, spacing, typography, content widths, borders and shadows using CSS custom properties.
- Refined the desktop header/navigation and introduced a clearer tablet navigation layout.
- Improved mobile navigation, page gutters, banner spacing, form controls, footer stacking and touch target sizing.
- Added responsive two-column service cards and gallery layouts that collapse to one column on narrow screens.
- Refined the gallery lightbox, map frame, FAQ panels, service filters and form feedback styling.
- Preserved visible keyboard focus, skip-link styling and reduced-motion support.
- Source-level update only; verify the deployed appearance at desktop, tablet and mobile widths after GitHub Pages publishes the commit.

## SEO and structured-data refinement
- Refined all seven page titles and meta descriptions so each page has distinct, descriptive search metadata aligned with its content and local search intent.
- Added matching Open Graph descriptions, the `en_ZA` locale, and Twitter title/description metadata for consistent link previews.
- Added Schema.org `WebPage` JSON-LD to each page, identifying its title, description, canonical URL, language and parent website.
- Kept canonical URLs aligned with the GitHub Pages project URL and retained the seven-page XML sitemap and crawler-accessible `robots.txt`.
- Did not add `LocalBusiness` structured data, ratings, opening hours or service-area claims that have not been independently verified.
- Search Console ownership verification, sitemap submission, indexing checks, keyword-volume research, Lighthouse SEO evidence and off-page links remain tasks requiring separate access, research or evidence.

## 2026-11-01 — Page-specific meta keywords
- Added a distinct `meta name="keywords"` tag to each of the seven HTML pages, using relevant plumbing services, locations and page topics.
- Avoided using one identical keyword list across every page; keywords reflect each page's purpose.
- Included the tags to address the WEDE5020W Part 3 marking criterion. The tags are not represented as a Google ranking factor.

## 2026-11-01 — Descriptive gallery image filenames and alternative text
- Renamed the six generic `gallery-*.webp` assets to descriptive filenames based on the subjects already identified in the gallery.
- Updated all six image paths in `gallery.html` so the renamed local assets continue to load.
- Refined the image alternative text to describe each image's visible subject in natural language without keyword stuffing or implying that illustrative images are verified completed customer jobs.
- Preserved the existing image dimensions, lazy loading, gallery buttons and lightbox behaviour.
- Updated the README image inventory. Browser loading and assistive-technology checks should still be completed on the deployed site.


## 2026-11-01 — Google Business Profile source and address confirmation

- Updated the README to record that the student sourced the six gallery photographs from the Clear Blue Plumbing Google Business Profile.
- Replaced the generic Unsplash and Wikimedia Commons reference entries with a Google Business Profile photo reference. Individual uploaders and reuse permissions are not independently verified; permission should be confirmed before commercial use.
- Recorded the student's confirmation that the profile displays 13 Moller Street, Witpoortjie, Roodepoort, Gauteng, 1724.
- Clarified that both map embeds still use an address-based Google Maps search, not a verified business-place pin. The exact Google Maps profile URL is still required before changing the embeds to the business listing itself.
- Updated the README testing notes to reflect the browser and cross-browser checks reported by the student, while keeping keyboard/screen-reader testing, Lighthouse evidence and live form delivery as outstanding.


## 2026-11-01 — Google Maps business pin linked

- Used the Google Maps directions/share URL supplied by the student for CLEAR BLUE PLUMBING at 13 Moller St, Witpoortjie, Roodepoort, 1724.
- Updated the embedded maps on `contact.html` and `service-areas.html` to use the supplied business pin coordinates: latitude `-26.1347313`, longitude `27.831254`.
- Updated both external map links to open Google Maps centred on the supplied business pin coordinates.
- Retained the confirmed 13 Moller Street address throughout the website.
- Updated the README with the business listing source, pin coordinates and Google Maps reference.
- Repository source was updated; check both map embeds visually on the deployed website to confirm the marker and map load correctly.

## 2026-11-01 — Google Maps embed browser check

- Student visually checked the Google Maps embeds on both `contact.html` and `service-areas.html` and confirmed that they load and work as expected.
- Marked the map embed and supplied business-pin update as browser-checked based on the student's confirmation.
- This confirmation covers map loading and visible functionality only; it does not independently verify Google Business Profile ownership, third-party image permissions, or other outstanding website checks.

## 2026-11-01 — Keyboard-only accessibility testing

- Student completed keyboard-only testing on the deployed website and reported that the tested keyboard interactions work as expected.
- Recorded the keyboard-testing result in the README as a student-reported browser check.
- Screen-reader testing and Lighthouse accessibility evidence remain outstanding and are not marked as completed.

## 2026-11-01 — Windows Narrator screen-reader check

- Student tested the website using Windows Narrator and reported that the screen reader worked as expected during the test.
- Updated the README to record this as a student-reported screen-reader check.
- A comprehensive review of every page and interactive state, and Lighthouse accessibility audit evidence, remain outstanding.
