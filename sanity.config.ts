import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import {
  postSchema,
  teamMemberSchema,
  residentApplicationSchema,
  staffApplicationSchema,
  franchiseInquirySchema,
  partnerInquirySchema,
  contactMessageSchema,
} from "./src/sanity/schemas";

export default defineConfig({
  name: "family-care-farms-ng",
  title: "Family Care Farms Nigeria",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Blog Posts").schemaType("post").child(S.documentTypeList("post")),
            S.listItem().title("Team Members").schemaType("teamMember").child(S.documentTypeList("teamMember")),
            S.divider(),
            S.listItem().title("📋 Resident Applications").schemaType("residentApplication").child(S.documentTypeList("residentApplication")),
            S.listItem().title("👩‍⚕️ Staff Applications").schemaType("staffApplication").child(S.documentTypeList("staffApplication")),
            S.listItem().title("🌍 Franchise Inquiries").schemaType("franchiseInquiry").child(S.documentTypeList("franchiseInquiry")),
            S.listItem().title("🤝 Partner Inquiries").schemaType("partnerInquiry").child(S.documentTypeList("partnerInquiry")),
            S.listItem().title("✉️ Contact Messages").schemaType("contactMessage").child(S.documentTypeList("contactMessage")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [
      postSchema,
      teamMemberSchema,
      residentApplicationSchema,
      staffApplicationSchema,
      franchiseInquirySchema,
      partnerInquirySchema,
      contactMessageSchema,
    ],
  },
});
