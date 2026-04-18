import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './StaggerTestimonials.css';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  { tempId: 0, testimonial: "The daily live darshan connects me back to my roots.", by: "Rahul, Devotee", imgSrc: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=150&auto=format&fit=crop" },
  { tempId: 1, testimonial: "Such a divine experience from the comfort of my home.", by: "Priya, Spiritual Seeker", imgSrc: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?q=80&w=150&auto=format&fit=crop" },
  { tempId: 2, testimonial: "The digital mandir makes it feel like I'm sitting right in front of the deity.", by: "Amit, Daily Worshipper", imgSrc: "https://images.unsplash.com/photo-1532375810709-75b1d31f9b18?q=80&w=150&auto=format&fit=crop" },
  { tempId: 3, testimonial: "A life-changing way to experience daily aarti and blessings.", by: "Sunita, Devotee", imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { tempId: 4, testimonial: "I can finally participate in evening bhajans regardless of my work schedule.", by: "Vikram, Professional", imgSrc: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&auto=format&fit=crop" },
  { tempId: 5, testimonial: "The visual clarity and spiritual energy of the online darshan are unmatched.", by: "Anita, Homemaker", imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" },
  { tempId: 6, testimonial: "A beautiful fusion of technology and tradition. Truly a blessing.", by: "Karan, Tech Enthusiast", imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { tempId: 7, testimonial: "Digital Mandir has become a crucial part of my daily morning routine.", by: "Meera, Teacher", imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" },
  { tempId: 8, testimonial: "It feels so peaceful to connect with the divine any time of the day.", by: "Rohan, Student", imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
  { tempId: 9, testimonial: "I love that I can do the virtual parikrama. It brings me immense joy.", by: "Neha, Devotee", imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" }
];

const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`st-card ${isCenter ? 'st-card-center' : 'st-card-inactive'}`}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(255, 215, 0, 0.4)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="st-card-corner-line"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="st-card-img"
        style={{
          boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.5)"
        }}
      />
      <h3 className={`st-card-text ${isCenter ? 'st-text-center' : 'st-text-inactive'}`}>
        "{testimonial.testimonial}"
      </h3>
      <p className={`st-card-author ${isCenter ? 'st-author-center' : 'st-author-inactive'}`}>
        - {testimonial.by}
      </p>
    </div>
  );
};

const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const matches = window.innerWidth >= 640;
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="st-container" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="st-nav-container">
        <button
          onClick={() => handleMove(-1)}
          className="st-nav-btn"
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="st-nav-btn"
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default StaggerTestimonials;
