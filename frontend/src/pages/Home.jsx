import { Link } from "react-router-dom";
import {
  Users,
  Brain,
  MessageCircle,
  Shield,
  Bell,
  Home as HomeIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Rent and Flatmmate
          </h1>

          <div className="hidden md:flex gap-8 font-medium">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#testimonials">Testimonials</a>
          </div>

          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Find Your Perfect{" "}
              <span className="text-blue-600">
                Roommate
              </span>{" "}
              Using AI
            </h1>

            <p className="text-xl text-gray-600 mt-6">
              Smart roommate matching based on
              lifestyle, habits, budget,
              interests and compatibility score.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/register"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Get Started
              </Link>

              <Link
                to="/listings"
                className="border px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Browse Listings
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Roommates"
              className="rounded-2xl shadow-xl w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          <StatCard
            value="500+"
            label="Active Listings"
          />

          <StatCard
            value="1000+"
            label="Users"
          />

          <StatCard
            value="95%"
            label="AI Match Accuracy"
          />

          <StatCard
            value="50+"
            label="Cities"
          />
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-24 max-w-7xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain size={40} />}
            title="AI Compatibility"
            desc="Get accurate compatibility scores with potential roommates."
          />

          <FeatureCard
            icon={<MessageCircle size={40} />}
            title="Real-Time Chat"
            desc="Connect instantly with users and discuss accommodation."
          />

          <FeatureCard
            icon={<Shield size={40} />}
            title="Verified Users"
            desc="Enhanced security with verified user profiles."
          />

          <FeatureCard
            icon={<Bell size={40} />}
            title="Notifications"
            desc="Get notified instantly for requests and messages."
          />

          <FeatureCard
            icon={<Users size={40} />}
            title="Smart Matching"
            desc="AI-powered recommendations tailored to your lifestyle."
          />

          <FeatureCard
            icon={<HomeIcon size={40} />}
            title="Property Listings"
            desc="Browse rooms, flats and PGs effortlessly."
          />
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="bg-white py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <Step
              number="1"
              title="Create Profile"
            />

            <Step
              number="2"
              title="AI Matching"
            />

            <Step
              number="3"
              title="Connect & Chat"
            />

            <Step
              number="4"
              title="Move In"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-24 max-w-6xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          What Users Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            name="Rahul Sharma"
            text="Found my roommate within 3 days. The AI compatibility score was incredibly accurate."
          />

          <TestimonialCard
            name="Priya Singh"
            text="The best platform for students and professionals looking for shared accommodation."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Ready To Find Your Perfect
            Roommate?
          </h2>

          <p className="mt-6 text-xl">
            Join thousands of users already
            using AI-powered roommate matching.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100"
          >
            Start Matching Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">
            AI RoomMate Finder
          </h3>

          <p className="mt-3 text-gray-400">
            Smart roommate matching powered by
            Artificial Intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function Step({ number, title }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
        {number}
      </div>

      <h3 className="mt-4 font-bold text-xl">
        {title}
      </h3>
    </div>
  );
}

function StatCard({
  value,
  label,
}) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl text-center">
      <h2 className="text-4xl font-bold text-blue-600">
        {value}
      </h2>
      <p>{label}</p>
    </div>
  );
}

function TestimonialCard({
  name,
  text,
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <p>⭐⭐⭐⭐⭐ {text}</p>

      <h4 className="mt-4 font-bold">
        {name}
      </h4>
    </div>
  );
}