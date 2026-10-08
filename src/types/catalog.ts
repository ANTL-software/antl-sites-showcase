export type Device = "desktop" | "mobile";
export type Category = "all" | "showcase" | "booking" | "commerce";
export type SectionId = "hero" | "catalog" | "approach" | "contact";
export interface Preview { file: string; label: string; device: Device; width: number; height: number; }
export interface Template { id: string; name: string; business: string; description: string; categories: Exclude<Category, "all">[]; features: string[]; demoUrl: string; accent: string; previews: Preview[]; }
export interface Filter { id: Category; label: string; }
