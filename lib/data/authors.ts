export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

// Written from the author's own LinkedIn profile; keep it to what they've
// published there.
export const authors: Record<string, Author> = {
  zaki: {
    id: "zaki",
    name: "Muhammad Zaki Afzal",
    role: "Co-Founder, Whatching",
    bio: "Zaki is co-founder of Whatching and an AI/ML engineer based in Kolkata. He started Whatching after seeing businesses spend on Meta ads to bring in leads, then lose them to slow, manual follow-up on WhatsApp.",
    linkedin: "https://www.linkedin.com/in/md-zaki-afzal"
  }
};

export const DEFAULT_AUTHOR_ID = "zaki";

export const authorById = (id?: string) =>
  authors[id ?? DEFAULT_AUTHOR_ID] ?? authors[DEFAULT_AUTHOR_ID];
