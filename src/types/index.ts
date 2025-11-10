// Destination types
export interface Destination {
  image: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
}

// Experience types
export interface Experience {
  image: string;
  title: string;
  category: string;
  duration: string;
  groupSize: string;
}

// Testimonial types
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

// Navigation types
export interface NavItem {
  href: string;
  label: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Error types
export interface AppError {
  message: string;
  code?: string;
  details?: unknown;
}

// Component prop types
export interface CardProps {
  delay?: number;
  className?: string;
}

export interface DestinationCardProps extends Destination, CardProps {}
export interface ExperienceCardProps extends Experience, CardProps {}
export interface TestimonialCardProps extends Testimonial, CardProps {}
