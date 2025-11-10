/*
  # Create Destinations and Bookings Schema

  ## Overview
  This migration creates the core schema for the travel booking application,
  including destinations, experiences, testimonials, and bookings.

  ## New Tables
  
  ### `destinations`
  Stores travel destination information
  - `id` (uuid, primary key)
  - `title` (text) - Destination name
  - `location` (text) - Geographic location
  - `description` (text) - Detailed description
  - `image_url` (text) - Image URL
  - `rating` (numeric) - Average rating
  - `review_count` (integer) - Number of reviews
  - `price_from` (integer) - Starting price in USD
  - `featured` (boolean) - Featured destination flag
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `experiences`
  Stores travel experiences and activities
  - `id` (uuid, primary key)
  - `title` (text) - Experience name
  - `category` (text) - Category (e.g., Water Sports, Adventure)
  - `description` (text) - Detailed description
  - `image_url` (text) - Image URL
  - `duration` (text) - Duration (e.g., "4 hours")
  - `group_size` (text) - Maximum group size
  - `destination_id` (uuid, foreign key) - Related destination
  - `created_at` (timestamptz) - Creation timestamp

  ### `testimonials`
  Stores customer testimonials and reviews
  - `id` (uuid, primary key)
  - `name` (text) - Customer name
  - `location` (text) - Customer location
  - `rating` (integer) - Rating (1-5)
  - `text` (text) - Testimonial text
  - `avatar_url` (text) - Avatar image URL
  - `approved` (boolean) - Approval status
  - `created_at` (timestamptz) - Creation timestamp

  ### `bookings`
  Stores customer booking requests
  - `id` (uuid, primary key)
  - `destination_id` (uuid, foreign key) - Selected destination
  - `travel_date` (date) - Requested travel date
  - `travelers` (integer) - Number of travelers
  - `customer_name` (text) - Customer name
  - `customer_email` (text) - Customer email
  - `customer_phone` (text) - Customer phone
  - `special_requests` (text) - Special requests
  - `status` (text) - Booking status (pending, confirmed, cancelled)
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  
  - Enable RLS on all tables
  - Public read access for destinations, experiences, and approved testimonials
  - Authenticated users can create bookings
  - Only service role can manage destinations and approve testimonials
*/

-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  location text NOT NULL,
  description text,
  image_url text NOT NULL,
  rating numeric(2,1) DEFAULT 4.5,
  review_count integer DEFAULT 0,
  price_from integer NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create experiences table
CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  description text,
  image_url text NOT NULL,
  duration text NOT NULL,
  group_size text NOT NULL,
  destination_id uuid REFERENCES destinations(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text text NOT NULL,
  avatar_url text,
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id uuid REFERENCES destinations(id) ON DELETE SET NULL,
  travel_date date NOT NULL,
  travelers integer NOT NULL CHECK (travelers > 0),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  special_requests text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Destinations policies (public read)
CREATE POLICY "Anyone can view destinations"
  ON destinations FOR SELECT
  TO public
  USING (true);

-- Experiences policies (public read)
CREATE POLICY "Anyone can view experiences"
  ON experiences FOR SELECT
  TO public
  USING (true);

-- Testimonials policies (public read for approved)
CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (approved = true);

-- Bookings policies (anyone can create)
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view own bookings"
  ON bookings FOR SELECT
  TO public
  USING (customer_email = current_setting('request.jwt.claims', true)::json->>'email');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_destinations_featured ON destinations(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_experiences_destination ON experiences(destination_id);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved) WHERE approved = true;
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_customer_email ON bookings(customer_email);

-- Insert sample destinations
INSERT INTO destinations (title, location, description, image_url, rating, review_count, price_from, featured) VALUES
('Maldives', 'Indian Ocean', 'Crystal clear waters and pristine beaches await in this tropical paradise', 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800', 4.9, 2341, 2499, true),
('Santorini', 'Greece', 'Iconic white-washed buildings with stunning sunset views over the Aegean Sea', 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800', 4.8, 1876, 1899, true),
('Bali', 'Indonesia', 'Rich culture, lush landscapes, and world-class beaches in Southeast Asia', 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800', 4.9, 3204, 1299, true),
('Swiss Alps', 'Switzerland', 'Majestic mountain peaks and charming alpine villages', 'https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=800', 4.7, 1543, 2799, true),
('Paris', 'France', 'The City of Light with iconic landmarks and world-renowned cuisine', 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800', 4.9, 4521, 1599, true),
('Tokyo', 'Japan', 'Modern metropolis blending ancient traditions with cutting-edge technology', 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800', 4.8, 3102, 1799, false),
('Iceland', 'Nordic Europe', 'Land of fire and ice with stunning natural wonders', 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800', 4.9, 2156, 2299, false),
('Dubai', 'UAE', 'Luxury and innovation in the heart of the desert', 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800', 4.7, 2845, 1999, false)
ON CONFLICT DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (name, location, rating, text, approved) VALUES
('Sarah Johnson', 'New York, USA', 5, 'The trip to Bali was absolutely magical! Every detail was perfectly planned and the experiences were unforgettable. This is how travel should be!', true),
('Michael Chen', 'Singapore', 5, 'From booking to the actual trip, everything exceeded expectations. The local guides were fantastic and knew all the hidden gems that made it special.', true),
('Emma Williams', 'London, UK', 5, 'I''ve used many travel services, but this stands out. Professional, attentive, and they truly care about creating memorable experiences.', true)
ON CONFLICT DO NOTHING;
