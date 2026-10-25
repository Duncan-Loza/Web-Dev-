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
