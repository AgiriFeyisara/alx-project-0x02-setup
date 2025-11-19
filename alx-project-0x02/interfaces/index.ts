export interface ExampleInterface {
  name: string;
}
export interface CardProps {
  title: string;
  content: string;
}
export interface PostData {
  title: string;
  content: string;
}
export interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
export interface PostProps {
  title: string;
  content: string;
  body: string;
  userId: number;
}
