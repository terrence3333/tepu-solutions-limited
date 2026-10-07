import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

export const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  company: z.string().trim().max(150).optional().default(""),
  email: z.string().trim().email("Please enter a valid email").max(255),
  service: z.string().trim().min(1).max(100),
  language: z.string().trim().min(1).max(100),
  model: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1, "Please describe your project").max(5000),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) return { ok: false as const, error: "Inquiries are temporarily unavailable." };
    const sb = createClient<Database>(url, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { error } = await sb.from("contact_inquiries").insert({ ...data, company: data.company || null });
    if (error) {
      console.error("Inquiry insert failed", error.message);
      return { ok: false as const, error: "We couldn't send your inquiry. Please try again." };
    }
    return { ok: true as const };
  });
