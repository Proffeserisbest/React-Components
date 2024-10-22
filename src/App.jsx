import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <nav>
        <ul>
          <li><Link to="/pcard">PCard</Link></li>
          <li><Link to="/logocard">LogoCard</Link></li>
          <li><Link to="/adcard">AdCard</Link></li>
          <li><Link to="/andropplelabcard">AndroppleLabCard</Link></li>
          <li><Link to="/bdrcard">BDRCard</Link></li>
          <li><Link to="/blslcandidate">BLSLCandidate</Link></li>
          <li><Link to="/breviewcard">BReviewCard</Link></li>
          <li><Link to="/card">Card</Link></li>
          <li><Link to="/companycard">CompanyCard</Link></li>
          <li><Link to="/companyform">CompanyForm</Link></li>
          <li><Link to="/companylist">CompanyList</Link></li>
          <li><Link to="/companyscroller">CompanyScroller</Link></li>
          <li><Link to="/companystatus">CompanyStatus</Link></li>
          <li><Link to="/date">Date</Link></li>
          <li><Link to="/dreviewcard">DReviewCard</Link></li>
          <li><Link to="/employerrecommendation">EmployerRecommendation</Link></li>
          <li><Link to="/entercompanyname">EnterCompanyName</Link></li>
          <li><Link to="/halloffame">HallFame</Link></li>
          <li><Link to="/filters">Filters</Link></li>
          <li><Link to="/faqaccordion">FAQAccordion</Link></li>
          <li><Link to="/jobrating">JobRating</Link></li>
          <li><Link to="/joinoldemployer">JoinOldEmployer</Link></li>
          <li><Link to="/leveespolicy">LeveesPolicy</Link></li>
          <li><Link to="/linecandi">LineCandi</Link></li>
          <li><Link to="/newcard">NewCard</Link></li>
          <li><Link to="/newcd">NewCD</Link></li>
          <li><Link to="/newggcard">NewggCard</Link></li>
          <li><Link to="/rating-list">RatingList</Link></li>
          <li><Link to="/review-card">ReviewCard</Link></li>
          <li><Link to="/scroller">Scroller</Link></li>
          <li><Link to="/search-bar">SearchBar</Link></li>
          <li><Link to="/search-candidate">SearchCandidate</Link></li>
          <li><Link to="/short-listed-candidates">ShortListedCandidates</Link></li>
          <li><Link to="/slcandidate">SLCandidate</Link></li>
          <li><Link to="/testing">Testing</Link></li>
          <li><Link to="/submit-button">SubmitButton</Link></li>
          <li><Link to="/top-rated-campines">TopRatedCampines</Link></li>
          <li><Link to="/verified">Verified</Link></li>
          <li><Link to="/vertical-ad-card">VerticalAdCard</Link></li>
          <li><Link to="/vertical-profile-card">VerticalProfileCard</Link></li>
          <li><Link to="/view-profile-card">ViewProfileCard</Link></li>
          <li><Link to="/vpcrb">VPCRB</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default App;