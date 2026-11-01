document.addEventListener("DOMContentLoaded", function () {
  function setupForm(formId, feedbackId, formType) {
    const form = document.getElementById(formId);
    const feedback = document.getElementById(feedbackId);
    if (!form || !feedback) return;

    const phone = form.querySelector('input[type="tel"]');
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea[name="message"]');
    const location = form.querySelector('input[name="location"]');

    // Trim whitespace-only values and validate phone numbers consistently.
    function validateTextField(field, messageText) {
      if (!field) return;
      field.addEventListener("input", function () {
        field.setCustomValidity(
          field.value.trim().length >= Math.max(1, field.minLength || 0) ? "" : messageText
        );
      });
      field.addEventListener("blur", function () {
        if (field.value.trim().length < Math.max(1, field.minLength || 0)) {
          field.setCustomValidity(messageText);
        }
      });
    }

    validateTextField(name, "Please enter your full name.");
    validateTextField(message, "Please describe your enquiry using at least 10 characters.");
    validateTextField(location, "Please enter the suburb or area where the work is needed.");

    if (phone) {
      function validatePhone() {
        const digits = phone.value.replace(/\D/g, "");
        const valid = digits.length >= 7 && digits.length <= 15;
        phone.setCustomValidity(
          valid ? "" : "Enter a valid phone number containing 7 to 15 digits."
        );
      }
      phone.addEventListener("input", validatePhone);
      phone.addEventListener("blur", validatePhone);
    }

    if (email) {
      email.addEventListener("input", function () {
        email.setCustomValidity("");
      });
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      // Native HTML validation checks required fields, email format,
      // selection fields, and the minlength/maxlength/pattern attributes.
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Prevent whitespace-only text from passing browser length checks.
      const textFields = [name, message, location].filter(Boolean);
      const blankField = textFields.find(function (field) {
        return field.value.trim().length < Math.max(1, field.minLength || 0);
      });
      if (blankField) {
        blankField.setCustomValidity("Please complete this field with meaningful information.");
        blankField.reportValidity();
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton ? submitButton.textContent : "";
      const data = new FormData(form);
      const replyTo = form.querySelector('input[name="_replyto"]');
      if (replyTo && email) {
        const replyAddress = email.value.trim();
        replyTo.value = replyAddress;
        data.set("_replyto", replyAddress);
      }

      // Send trimmed text values to the form processor.
      textFields.forEach(function (field) {
        data.set(field.name, field.value.trim());
      });
      if (email) data.set(email.name, email.value.trim());

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }
      feedback.textContent = "Submitting your message securely over HTTPS. Please wait.";
      feedback.hidden = false;
      feedback.focus();

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: { "Accept": "application/json" }
        });

        const result = await response.json();
        if (!response.ok || result.success === "false" || result.success === false) {
          throw new Error("The form service did not accept the submission.");
        }

        if (formType === "enquiry") {
          feedback.textContent = "Thank you, " + String(data.get("name") || "") + ". Your quote enquiry was submitted to the form-processing service. The business must confirm price, appointment timing, and service availability. If the recipient has not activated the service, delivery may not complete.";
        } else {
          feedback.textContent = "Thank you. Your contact message was submitted to the form-processing service. The business will need to respond separately. If the recipient has not activated the service, delivery may not complete.";
        }
        form.reset();
        form.querySelectorAll("input, textarea, select").forEach(function (field) {
          field.setCustomValidity("");
        });
      } catch (error) {
        feedback.textContent = "We could not confirm submission. Check your internet connection and try again, or call 072 426 0645. Do not assume your message was sent.";
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      }
    });
  }

  setupForm("enquiry-form", "enquiry-feedback", "enquiry");
  setupForm("contact-form", "contact-feedback", "contact");

  const serviceSearch = document.getElementById("service-search");
  const serviceCategory = document.getElementById("service-category");
  const serviceList = document.getElementById("service-list");
  const serviceResults = document.getElementById("service-results");

  if (serviceSearch && serviceCategory && serviceList && serviceResults) {
    const serviceCards = Array.from(serviceList.querySelectorAll("article"));

    function filterServices() {
      const query = serviceSearch.value.trim().toLowerCase();
      const category = serviceCategory.value;
      let visibleCount = 0;

      serviceCards.forEach(function (card) {
        const matchesText = card.textContent.toLowerCase().includes(query);
        const matchesCategory = category === "all" || card.dataset.category === category;
        const visible = matchesText && matchesCategory;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      serviceResults.textContent = visibleCount === 1
        ? "Showing 1 matching service."
        : "Showing " + visibleCount + " matching services.";

      const emptyMessage = document.getElementById("service-empty");
      if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
    }

    serviceSearch.addEventListener("input", filterServices);
    serviceCategory.addEventListener("change", filterServices);
    filterServices();

    const clearFilters = document.getElementById("clear-service-filters");
    if (clearFilters) {
      clearFilters.addEventListener("click", function () {
        serviceSearch.value = "";
        serviceCategory.value = "all";
        filterServices();
        serviceSearch.focus();
      });
    }
  }

  // Accessible gallery lightbox. The native dialog supports Escape to close.
  const galleryDialog = document.getElementById("gallery-dialog");
  const galleryImage = document.getElementById("gallery-dialog-image");
  const galleryCaption = document.getElementById("gallery-dialog-caption");
  if (galleryDialog && galleryImage && galleryCaption) {
    const galleryButtons = Array.from(document.querySelectorAll(".gallery-open"));
    const closeButton = galleryDialog.querySelector(".gallery-close");
    const previousButton = galleryDialog.querySelector(".gallery-previous");
    const nextButton = galleryDialog.querySelector(".gallery-next");
    let activeImageIndex = 0;
    let lastTrigger = null;

    function showGalleryImage(index) {
      activeImageIndex = (index + galleryButtons.length) % galleryButtons.length;
      const trigger = galleryButtons[activeImageIndex];
      const image = trigger.querySelector("img");
      galleryImage.src = image.currentSrc || image.src;
      galleryImage.alt = image.alt;
      galleryCaption.textContent = "Image " + (activeImageIndex + 1) + " of " + galleryButtons.length + ": " + image.alt;
    }

    galleryButtons.forEach(function (trigger, index) {
      trigger.addEventListener("click", function () {
        lastTrigger = trigger;
        showGalleryImage(index);
        galleryDialog.showModal();
        closeButton.focus();
      });
    });

    closeButton.addEventListener("click", function () {
      galleryDialog.close();
    });
    previousButton.addEventListener("click", function () {
      showGalleryImage(activeImageIndex - 1);
    });
    nextButton.addEventListener("click", function () {
      showGalleryImage(activeImageIndex + 1);
    });
    galleryDialog.addEventListener("click", function (event) {
      if (event.target === galleryDialog) galleryDialog.close();
    });
    galleryDialog.addEventListener("close", function () {
      if (lastTrigger) lastTrigger.focus();
    });
    galleryDialog.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showGalleryImage(activeImageIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showGalleryImage(activeImageIndex + 1);
      }
    });
  }
});
