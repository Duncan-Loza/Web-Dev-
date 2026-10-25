document.addEventListener("DOMContentLoaded", function () {
  function setupForm(formId, feedbackId, formType) {
    const form = document.getElementById(formId);
    const feedback = document.getElementById(feedbackId);
    if (!form || !feedback) return;

    const phone = form.querySelector('input[type="tel"]');
    if (phone) {
      phone.addEventListener("input", function () {
        const digits = phone.value.replace(/\\D/g, "");
        phone.setCustomValidity(
          digits.length >= 7 && digits.length <= 15
            ? ""
            : "Enter a valid phone number with 7 to 15 digits."
        );
      });
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton ? submitButton.textContent : "";
      const data = new FormData(form);
      const emailInput = form.querySelector('input[type="email"]');
      const replyTo = form.querySelector('input[name="_replyto"]');
      if (replyTo && emailInput) replyTo.value = emailInput.value.trim();

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
          feedback.textContent = "Thank you, " + String(data.get("name") || "") + ". Your quote enquiry was submitted to the form-processing service. The business must confirm price, appointment timing, and service availability. If the service has not yet been activated by the recipient, delivery may not complete.";
        } else {
          feedback.textContent = "Thank you. Your contact message was submitted to the form-processing service. The business will need to respond separately. If the service has not yet been activated by the recipient, delivery may not complete.";
        }
        form.reset();
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
    }

    serviceSearch.addEventListener("input", filterServices);
    serviceCategory.addEventListener("change", filterServices);
    filterServices();
  }
});
