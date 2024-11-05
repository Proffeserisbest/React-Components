import React from 'react';
import './JoinWithSocialMedia.scss';

const JoinWithSocialMedia = () => {
  return (
    <div className="join-with-social-media">
      <h2>Join With Social Media</h2>
      <div className="underline"></div>
      <p>
        By creating an account, I agree to Old-Employer{' '}
        <a href="/terms" className="link">Terms of Use</a> and <a href="/privacy" className="link">Privacy Policy</a>.
      </p>
      <div className="social-icons">
        <a href="/auth/linkedin">
          <img src="linkedin-icon.png" alt="LinkedIn" className="icon" />
        </a>
        <a href="/auth/facebook">
          <img src="facebook-icon.png" alt="Facebook" className="icon" />
        </a>
        <a href="/auth/google">
          <img src="google-icon.png" alt="Google" className="icon" />
        </a>
        <a href="/auth/twitter">
          <img src="twitter-icon.png" alt="Twitter" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default JoinWithSocialMedia;
