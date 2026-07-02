import { SITE_URL } from "@/lib/site-config";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  graphSchema,
} from "@/lib/schemas";

export function GET() {
  return Response.json(
    graphSchema([
      generateOrganizationSchema(SITE_URL),
      generateWebsiteSchema(SITE_URL),
    ]),
  );
}
