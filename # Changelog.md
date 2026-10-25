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
