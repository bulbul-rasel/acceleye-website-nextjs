import fs from "node:fs";
import path from "node:path";
import { slots, type ImageKey } from "@/content/imageSlots";

// Looks for a picture for each slot on disk (server only):
//   public/images/photos/<key>.jpg|jpeg|png|webp|avif   (real photographs, checked first)
//   public/images/illustrations/<key>.svg|png|webp      (illustrations)
// Set NEXT_PUBLIC_HIDE_PLACEHOLDERS=1 to hide the "photo needed" placeholders on the live site.

const PUB = path.join(process.cwd(), "public");
const EXT = ["jpg", "jpeg", "png", "webp", "avif", "svg"];

export function resolveImage(key: ImageKey): { src: string; isPhoto: boolean } | null {
  for (const [dir, isPhoto] of [["photos", true], ["illustrations", false]] as const) {
    for (const ext of EXT) {
      if (fs.existsSync(path.join(PUB, "images", dir, `${key}.${ext}`))) {
        return { src: `/images/${dir}/${key}.${ext}`, isPhoto };
      }
    }
  }
  return null;
}

export const placeholdersVisible = () => process.env.NEXT_PUBLIC_HIDE_PLACEHOLDERS !== "1";

// True when the slot will render something (a picture, or a labeled placeholder).
export function hasImage(key: ImageKey): boolean {
  if (resolveImage(key)) return true;
  return slots[key].kind === "photo" && placeholdersVisible();
}

// Optional partner logo: public/images/partners/<slug>.(svg|png|webp|jpg|jpeg)
export function partnerLogo(slug: string): string | null {
  for (const ext of ["svg", "png", "webp", "jpg", "jpeg"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", "partners", `${slug}.${ext}`))) {
      return `/images/partners/${slug}.${ext}`;
    }
  }
  return null;
}
