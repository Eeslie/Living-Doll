import { useParams } from "react-router-dom";
import './BlogPost.css';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from 'react-router-dom';

export default function BlogPost () {

    const blogPosts = [
        { id: 1, title: "Romantic Ruffles", 
        excerpt: "Flowy silhouettes and soft tones define this dreamy look. This collection celebrates the essence of gentle femininity. Ruffles add texture and charm to each piece. The movement of the fabric creates an effortless elegance. Romantic Ruffles is your go-to for soft sophistication.",
        excerpt2: "Ruffles have always been a symbol of romance, grace, and timeless femininity. This collection is inspired by those soft touches that bring out the elegance in every movement. Each design is carefully crafted to flatter your form while keeping comfort in mind. Soft fabrics and pastel hues combine for a dreamy aesthetic. Whether dressing up or down, you’ll feel like a modern-day muse.",
        excerpt3: "From flowing maxi dresses to blouses that catch the breeze just right, Romantic Ruffles is designed for the woman who sees beauty in the details. Imagine walking through a sun-drenched field, your dress dancing with the wind—this is the essence of the collection. The pieces transition seamlessly from brunch to sunset strolls. Every item is made to be worn and adored. It’s time to add a touch of poetry to your wardrobe.",
        image: "/images/dress.jpg" },

        { id: 2, title: "Garden Muse", 
        excerpt: "Inspired by blooms, this look blossoms in every setting. The collection mirrors the gentle grace of nature. From petal-soft textures to floral prints, it's a celebration of the outdoors. Garden Muse is designed for elegance with ease. Every detail invites you to embrace your feminine side.",
        excerpt2: "Florals have a way of uplifting the soul. With the Garden Muse collection, we take inspiration from delicate petals and the vibrant tones of nature’s most beautiful creation: flowers. It’s more than just a seasonal trend—it’s a state of mind. These looks evoke renewal, beauty, and warmth. Let your outfit bloom like spring itself.",
        excerpt3: "Every piece feels like a love letter to springtime—flowy skirts, cinched waists, and subtle floral embroidery adorn our latest line. Designed for the modern romantic, Garden Muse invites you to step into your feminine era. Whether it's an alfresco lunch or a cozy garden party, this collection makes sure you bloom wherever you're planted. The styles are both flattering and functional. Slip into one and feel the transformation.", 
        image: "/images/dress.jpg" },

        { id: 3, title: "Soft Elegance", 
        excerpt: "Chic meets comfort in pieces designed to flow with you. Soft Elegance is all about understated luxury. Think draped silhouettes, creamy tones, and fabric that caresses the skin. Perfect for everyday wear or dressing up with minimal effort. This is timeless fashion reimagined for ease.",
        excerpt2: "Minimalism isn’t about doing less—it’s about doing more with intention. Soft Elegance brings together effortless silhouettes with premium textures to make every outfit feel like second skin. This collection is for women who value grace and simplicity. Clean lines meet soft curves in a seamless balance. Every look whispers sophistication.",
        excerpt3: "From draped dresses to breathable loungewear that you can take from indoors to errands, this edit is about feeling your best in pieces that whisper rather than shout. Soft Elegance is for the woman who doesn’t follow trends—she sets her own rhythm. Whether you’re working from a café or curling up with a book, this is quiet luxury at its finest. There’s beauty in restraint, and this line captures it effortlessly. Elevate your daily dressing with this versatile collection.", 
        image: "/images/dress2.jpg" },

        { id: 4, title: "Boho Bloom",
        excerpt: "A free-spirited twist on vintage floral charm. Boho Bloom is playful yet grounded. It’s where nature meets nostalgia. Think wide-brim hats, lace trim, and natural tones. Perfect for spontaneous adventures and golden hour photos.",
        excerpt2: "Our Boho Bloom series is all about soul and spontaneity. It’s for the woman who pairs cowboy boots with a sundress and wears her hair with the wind. The line draws inspiration from vintage patterns and bohemian lifestyle. Every piece invites self-expression. Live in layers, love in comfort.",
        excerpt3: "With retro-inspired prints, light cottons, and breezy cuts, these outfits channel a carefree attitude with an artsy twist. Imagine late afternoon picnics, barefoot beach walks, and open-air markets—Boho Bloom is made for moments like these. Layer them, mix them, love them—this collection lives and breathes versatility. It's a tribute to freedom and femininity. Let your wardrobe reflect your wild spirit.", 
        image: "/images/dress2.jpg" },

        { id: 5,  title: "Dainty Days",
        excerpt: "Everyday elegance with a hint of whimsy. Dainty Days is for those who find joy in the little things. These outfits make the ordinary feel special. Feminine details and charming prints take center stage. You deserve to feel cute every single day.",
        excerpt2: "Some days call for something simple, yet magical. That’s the essence of Dainty Days—a blend of casual comfort and charming detail. Each piece is meant to brighten your mood. It's style with a wink of playfulness. Your daily dose of dopamine dressing.",
        excerpt3: "Think peter pan collars, playful prints, and flowing hemlines made for twirls. These are outfits for sunny mornings at your favorite café or spontaneous road trips with friends. It's a reminder that you don’t need a special occasion to feel special—every day is a chance to dress up for yourself. With soft textures and just the right amount of cute, Dainty Days is your new go-to. Embrace comfort without letting go of flair.",
        image: "/images/dress.jpg" },

        { id: 6, title: "Chic Minimalist",
        excerpt: "Clean lines, confident cuts, and classic tones. Chic Minimalist proves less is more. The aesthetic is powerful in its simplicity. Perfect for the modern muse who values quality over quantity. This is fashion that speaks softly but stands tall.",
        excerpt2: "Sometimes, the boldest statement is simplicity. Chic Minimalist is our love letter to structured fashion—tailored for the woman who leads with quiet strength. Each piece is meticulously designed to flatter while maintaining a sleek profile. With neutral tones and refined silhouettes, this collection exudes calm confidence. It's elegance for every occasion.",
        excerpt3: "Featuring monochrome palettes, sleek tailoring, and versatile silhouettes, this collection is about being unapologetically refined. Whether you’re heading to a business meeting, gallery opening, or a calm dinner date, Chic Minimalist keeps your wardrobe crisp and commanding. It’s sophistication without the noise, and elegance without the effort. These outfits adapt to your lifestyle seamlessly. Confidence never looked so effortless.", 
        image: "/images/dress.jpg" },

        { id: 7, title: "Urban Poise",
        excerpt: "Modern edge meets effortless style in this urban edit. Urban Poise is sleek, bold, and unapologetically confident. It’s designed for the city girl who’s always on the move.",
        excerpt2: "This collection blends functionality with a modern silhouette. Think structured trousers, power blazers, and clean-cut lines. Urban Poise is for the fast-paced fashionista who makes a statement without saying a word. The pieces are built to last, styled to slay.",
        excerpt3: "From monochrome palettes to luxe textures, this edit brings street style sophistication into your everyday. Whether you’re striding through downtown or catching up over coffee, Urban Poise delivers on comfort and style. It’s time to power-dress your day-to-day.", 
         image: "/images/dress2.jpg" },

        { id: 8, title: "Timeless Touch",
        excerpt: "A collection where vintage inspiration meets modern tailoring. Timeless Touch blends the old with the new to give your wardrobe long-lasting appeal.",
        excerpt2: "Our designers looked to classic silhouettes and updated them with clean lines and subtle details. This is where timeless femininity meets functional fashion. Pieces that never go out of style but always feel current.",
        excerpt3: "Slip into something that’ll turn heads now—and still look chic five years from now. From tailored coats to softly structured blouses, Timeless Touch is your answer to staying effortlessly elegant in any era.", 
        image: "/images/dress2.jpg" },
    ];

    const { id } = useParams();
    const item = blogPosts.find((i) => i.id === parseInt(id));

    return (
        <div>
            <Navbar />
            <Link to="/brands" className="back-button"> Return </Link>
            <div className="blog-post">
                <div className="blog-header">
                    <img src={item.image} alt={item.title} className="blog-image" />
                </div>
                <div className="blog-content">
                    <center>
                        <h1 className="blog-title">{item.title}</h1>
                        <p className="blog-meta">Posted on April 17, 2025 · By Living Doll PH</p>
                    </center>
                    <p>{item.excerpt}</p>
                    <p>{item.excerpt2}</p>
                    <p>{item.excerpt3}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
