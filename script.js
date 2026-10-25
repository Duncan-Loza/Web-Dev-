document.addEventListener("DOMContentLoaded", function () {
  function setupForm(formId, feedbackId, formType) {
    const form = document.getElementById(formId);
    const feedback = document.getElementById(feedbackId);
    if (!form || !feedback) return;

    const phone = form.querySelector('input[type="tel"]');
    if (phone) {
      phone.addEventListener("input", function () {
        const digits = phone.value.replace(/\D/g, "");
        phone.setCustomValidity(
          digits.length >= 7 && digits.length <= 15
            ? ""
            : "Enter a valid phone number with 7 to 15 digits."
        );
      });
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const location = String(data.get("location") || "").trim();
      const urgency = String(data.get("urgency") || "");
      let message;

      if (formType === "enquiry") {
        message = "Thank you, " + name + ". Your enquiry details passed the browser validation checks. ";
        if (urgency === "urgent") {
          message += "You marked the request as urgent. ";
        }
        if (location) {
          message += "The requested work location is " + location + ". ";
        }
        message += "Clear Blue Plumbing still needs to confirm service availability, appointment timing and price. This demo does not send or store your enquiry. Please call 072 426 0645 to contact the business.";
      } else {
        const preview = document.getElementById("contact-email-preview");
        const subject = "Website contact message - " + String(data.get("messageType") || "General enquiry");
        const body = [
          "Name: " + name,
          "Email: " + String(data.get("email") || ""),
          "Phone: " + String(data.get("phone") || ""),
          "Message type: " + String(data.get("messageType") || ""),
          "",
          "Message:",
          String(data.get("message") || "")
        ].join("\n");
        if (preview) {
          preview.value = "Subject: " + subject + "\n\n" + body;
          preview.hidden = false;
        }
        const emailLink = form.querySelector("[data-email-link]");
        if (emailLink) {
          emailLink.href = "mailto:info@cblue.co.za?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
          emailLink.hidden = false;
        }
        message = "Your message passed the browser validation checks. A prepared email is available below. Choose the button to open your email application addressed to info@cblue.co.za. The message will only be sent after you review and send it.";
      }

      feedback.textContent = message;
      feedback.hidden = false;
      feedback.focus();
    });
  }

  setupForm("enquiry-form", "enquiry-feedback", "enquiry");
  setupForm("contact-form", "contact-feedback", "contact");
});
