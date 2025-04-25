import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogPostLatest.css";
import { Link } from "react-router-dom";

export default function BlogPageLatest() {
const highlightsBlog = [
  { id: 1, title: "Romantic Ruffles", excerpt: "Flowy silhouettes and soft tones define this dreamy look.", image: "/images/dress.jpg" },
  { id: 2, title: "Garden Muse", excerpt: "Inspired by blooms, this look blossoms in every setting.", image: "/images/dress.jpg" },
  { id: 3, title: "Soft Elegance", excerpt: "Chic meets comfort in pieces designed to flow with you.", image: "/images/dress2.jpg" },
  { id: 4, title: "Boho Bloom", excerpt: "A free-spirited twist on vintage floral charm.", image: "/images/dress2.jpg" },
];

const latestBlog = [
  { id: 5, title: "Dainty Days", excerpt: "Dainty Days is for those who find joy in the little things.", image: "/images/dress.jpg" },
  { id: 6, title: "Chic Minimalist", excerpt: "Clean lines, confident cuts, and classic tones.", image: "/images/dress.jpg" },
  { id: 7, title: "Urban Poise",excerpt: "Modern edge meets effortless style in this urban edit.", image: "/images/dress2.jpg" },
  { id: 8, title: "Timeless Touch", excerpt: "A collection where vintage inspiration meets modern tailoring.", image: "/images/dress2.jpg" },
];

const navigate = useNavigate();

const handleCardClick = (id) => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  navigate(`/blog/${id}`);
};

return (
  <div className="blog-page">
    {/* Featured */}
    <div className="featured-blog-container">
      <div className="featured-blog-row">
        <div className="featured-blog-image">
          <img src="/images/dress.jpg" alt="Featured Blog" />
        </div>
        <div className="featured-blog-text">
          <h2 className="featured-title">TITLE OF THE BLOG</h2>
          <p className="featured-text">
            Blog introduction. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.
          </p>
          <div className="featured-buttons">
            <button
              className="btn btn-primary"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/blog/1'); // Adjust blog ID as needed
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Highlights */}
    <div className="section">
      <h3 className="section-title">HIGHLIGHTS</h3>
      <div className="blog-grid">
        {highlightsBlog.map((post) => (
          <Link
            key={post.id}
            to={`/blogPost/${post.id}`}
            className="blog-card"
            onClick={() => handleCardClick(post.id)}
          >
            <img src={post.image} alt={post.title} className="card-image" />
            <div className="card-body">
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* Latest */}
    <div className="section">
      <h3 className="section-title">LATEST</h3>
      <div className="blog-grid">
        {latestBlog.map((post) => (
          <Link
            key={post.id}
            to={`/blogPost/${post.id}`}
            className="blog-card"
            onClick={() => handleCardClick(post.id)}
          >
            <img src={post.image} alt={post.title} className="card-image" />
            <div className="card-body">
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
}