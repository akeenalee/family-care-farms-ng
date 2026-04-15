// ─── Blog Post ──────────────────────────────────────────
export const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (R: any) => R.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (R: any) => R.required() },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "category", title: "Category", type: "string", options: { list: ["News", "Farm Life", "Training", "Community", "Partners"] } },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt" },
  },
};

// ─── Team Member ─────────────────────────────────────────
export const teamMemberSchema = {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    { name: "name", title: "Full Name", type: "string", validation: (R: any) => R.required() },
    { name: "role", title: "Role / Title", type: "string" },
    { name: "bio", title: "Bio", type: "text", rows: 4 },
    { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "order", title: "Display Order", type: "number" },
    { name: "linkedIn", title: "LinkedIn URL", type: "url" },
  ],
};

// ─── Resident Application ─────────────────────────────────
export const residentApplicationSchema = {
  name: "residentApplication",
  title: "Resident Application",
  type: "document",
  fields: [
    { name: "submittedAt", title: "Submitted At", type: "datetime" },
    { name: "status", title: "Status", type: "string", options: { list: ["New", "Under Review", "Contacted", "Accepted", "Declined"] }, initialValue: "New" },
    { name: "familyName", title: "Family Contact Name", type: "string" },
    { name: "familyEmail", title: "Family Contact Email", type: "string" },
    { name: "familyPhone", title: "Family Contact Phone", type: "string" },
    { name: "residentName", title: "Resident Name", type: "string" },
    { name: "residentAge", title: "Resident Age", type: "number" },
    { name: "location", title: "Current Location (State)", type: "string" },
    { name: "careNeeds", title: "Primary Care Needs", type: "string", options: { list: ["General elderly care", "Dementia / memory care", "Post-hospital recovery", "Palliative / end-of-life care", "Companionship / mild assistance"] } },
    { name: "additionalInfo", title: "Additional Information", type: "text", rows: 4 },
    { name: "howHeard", title: "How did you hear about us?", type: "string" },
  ],
  preview: {
    select: { title: "residentName", subtitle: "status" },
  },
};

// ─── Staff Application ────────────────────────────────────
export const staffApplicationSchema = {
  name: "staffApplication",
  title: "Staff Application",
  type: "document",
  fields: [
    { name: "submittedAt", title: "Submitted At", type: "datetime" },
    { name: "status", title: "Status", type: "string", options: { list: ["New", "Under Review", "Shortlisted", "Interviewed", "Hired", "Declined"] }, initialValue: "New" },
    { name: "fullName", title: "Full Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "role", title: "Role Applied For", type: "string", options: { list: ["Caregiver", "Farm Worker", "Cook / Nutritionist", "Educator / Trainer", "Community Coordinator", "Administration", "Other"] } },
    { name: "experience", title: "Years of Experience", type: "string" },
    { name: "location", title: "Current Location (State)", type: "string" },
    { name: "motivation", title: "Why do you want to join us?", type: "text", rows: 4 },
    { name: "cvFile", title: "CV (file upload note)", type: "text", description: "Note: CV URL from form upload if applicable" },
  ],
  preview: {
    select: { title: "fullName", subtitle: "role" },
  },
};

// ─── Franchise Inquiry ────────────────────────────────────
export const franchiseInquirySchema = {
  name: "franchiseInquiry",
  title: "Franchise Inquiry",
  type: "document",
  fields: [
    { name: "submittedAt", title: "Submitted At", type: "datetime" },
    { name: "status", title: "Status", type: "string", options: { list: ["New", "Under Review", "In Discussion", "Agreement Stage", "Declined"] }, initialValue: "New" },
    { name: "contactName", title: "Contact Name", type: "string" },
    { name: "organisation", title: "Organisation", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "country", title: "Country", type: "string" },
    { name: "state", title: "State / Region", type: "string" },
    { name: "landAvailable", title: "Land Available?", type: "string", options: { list: ["Yes — I own land", "Yes — I can access land", "No — seeking land", "Not sure yet"] } },
    { name: "message", title: "Message", type: "text", rows: 4 },
  ],
  preview: {
    select: { title: "contactName", subtitle: "country" },
  },
};

// ─── Partner Inquiry ──────────────────────────────────────
export const partnerInquirySchema = {
  name: "partnerInquiry",
  title: "Partner / Investor Inquiry",
  type: "document",
  fields: [
    { name: "submittedAt", title: "Submitted At", type: "datetime" },
    { name: "status", title: "Status", type: "string", options: { list: ["New", "Under Review", "In Discussion", "Agreement Stage"] }, initialValue: "New" },
    { name: "contactName", title: "Contact Name", type: "string" },
    { name: "organisation", title: "Organisation", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "partnerType", title: "Partner Type", type: "string", options: { list: ["ESG / Impact Investor", "Development Bank", "NGO / Foundation", "Government Agency", "Corporate CSR", "Individual Donor", "Other"] } },
    { name: "message", title: "Message", type: "text", rows: 4 },
  ],
  preview: {
    select: { title: "contactName", subtitle: "partnerType" },
  },
};

// ─── Contact Message ──────────────────────────────────────
export const contactMessageSchema = {
  name: "contactMessage",
  title: "Contact Message",
  type: "document",
  fields: [
    { name: "submittedAt", title: "Submitted At", type: "datetime" },
    { name: "name", title: "Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "subject", title: "Subject", type: "string" },
    { name: "message", title: "Message", type: "text", rows: 5 },
    { name: "read", title: "Read", type: "boolean", initialValue: false },
  ],
  preview: {
    select: { title: "name", subtitle: "subject" },
  },
};
