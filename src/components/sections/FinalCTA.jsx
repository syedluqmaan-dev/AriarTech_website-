import React from 'react';
import '../../App.css';

const FinalCTA = ({ onOpenModal }) => {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Ready to Build Something Great?</h2>
        <p>
          Let's discuss your project with no pressure. We'll provide honest feedback on feasibility, timeline, and approach.
        </p>
        <button 
          className="btn btn-primary"
          onClick={onOpenModal}
        >
          <i className="fas fa-calendar-check"></i>
          Review My Project
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;