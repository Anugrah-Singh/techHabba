# 🧾 TechFest Event Registration Form Structure

This document describes the structure and logic for the **Event Registration Form** for our inter-college national-level TechFest.  
The form captures participant details, event preferences, and team information, and includes mandatory declarations.

---

## 🎯 Overview

The form is designed for:
- Collecting participant details for both **individual and team-based events**.
- Allowing **multi-event registration**.
- Maintaining clarity, simplicity, and validation for accurate data collection.

---

## 🧍‍♂️ Section 1: Basic Participant Details

These fields are **mandatory for all participants**.

| Field | Type | Required | Notes |
|-------|------|-----------|-------|
| Full Name | Short answer | ✅ | Participant’s full name |
| Email Address | Short answer | ✅ | Used for confirmation and updates |
| WhatsApp Number | Short answer | ✅ | Primary contact number |
| College Name | Short answer | ✅ | Required since it’s an inter-college fest |
| City & State | Short answer | ✅ | Useful for logistics or statistics |
| Department / Branch | Dropdown / Short answer | ✅ | Example: CSE, AIML, ECE, MECH, CIVIL |
| Year of Study | Dropdown | ✅ | Options: 1st / 2nd / 3rd / 4th / Other |
| College ID Upload | File upload | ✅ | For participant verification |

---

## ⚙️ Section 2: Event Selection

Participants can register for one or more events.  
Events are grouped by category for clarity.

### **Technical Events**
- Workshop  
- Competitive Programming (CP)  
- Capture The Flag (CTF)  
- Ideathon  
- Prompt to Product  
- Hackathon  
- CAED  
- Circuit Mania  
- Bridge Building Competition  

### **Gaming Events**
- FIFA  
- BGMI  
- Valorant Tournament  

### **Non-Technical Events**
- Treasure Hunt  
- Chess Tournament  

**Field Type:**  
- Multi-select checkboxes (allow multiple selections).

---

## 👥 Section 3: Team Information (Conditional)

This section appears **only if the selected event requires a team**  
(e.g., Hackathon, Ideathon, BGMI, Valorant, Treasure Hunt, Bridge Building, etc.).

| Field | Type | Required | Notes |
|-------|------|-----------|-------|
| Are you registering as a team? | Yes/No | ✅ | Controls visibility of team-related fields |
| Team Name | Short answer | Optional | Identifier for team events |
| Team Size | Dropdown | ✅ | Options: 2–5 (depending on event rules) |
| Team Leader Name | Short answer | ✅ | Default: form filler |
| Team Member Details | Paragraph | ✅ | Include: Name, Email, College for each member |

**Logic:**  
- If `Are you registering as a team? = Yes`, show other team fields.  
- Otherwise, skip to Section 6.

---

## ⚖️ Section 6: Declaration & Consent

All participants must agree to the following before submission.

### **Checkbox Statements:**
- I confirm that all the information provided is true to the best of my knowledge.  
- I agree to follow all rules, regulations, and the code of conduct of the TechFest.  
- I consent to the use of photos/videos taken during the event for promotional purposes.  
- I understand that organizers are not responsible for the loss of personal belongings.

**Field Type:**  
- Multiple required checkboxes.

---

## ✅ Notes for Implementation

- **Platform:** Google Forms, Typeform, or Tally.so recommended.  
- **Conditional Logic:** Use branching to show team details only when relevant.  
- **Validation:** All basic info fields are mandatory.  
- **Storage:** Export responses to a Google Sheet or backend database for easy management.  
- **Confirmation:** After submission, display a thank-you message and contact info for queries.

---

## 💬 Example Confirmation Message

> 🎉 Thank you for registering for **[TechFest Name]**!  
> We’ll contact you soon with event schedules and updates.  
> For queries, reach out to [official email/contact number].

---

