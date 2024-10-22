import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PCard from './PCard.jsx'
import LogoCard from './LogoCard.jsx'
import AdCard from './AdCard.jsx'
import AndroppleLabCard from './AndroppleLabCard.jsx'
import BDRCard from './BDRCard.jsx'
import BLSLCandidate from './BLSLCandidate.JSX'
import BReviewCard from './BReviewCard.jsx'
import Card from './Card.jsx'
import CompanyCard from './CardsComponent.jsx'
import CompanyForm from './CompanyForm.jsx'
import CompanyList from './CompanyList.jsx'
import CompanyScroller from './CompanyScroller.jsx'
import CompanyStatus from './CompanyStatus.jsx'
import PoliticalCard from './PoliticalCard.jsx'
import ProfileCard from './ProfileCard.jsx'
import RatingList from './RatingList.jsx'
import ReviewCard from './ReviewCard.jsx'
import Scroller from './Scroller.jsx'
import SearchBar from './SearchBar.jsx'
import SearchCandidate from './SearchCandidate.jsx'
import ShortListedCandidates from './ShortListedCandidates.jsx'
import SLCandidate from './SLCandidate.jsx'
import Testing from './Testing.jsx'
import SubmitButton from './SubmitButton.jsx'
import TopRatedCampines from './TopRatedCampines.jsx'
import Verified from './Verified.jsx'
import VerticalAdCard from './VerticalAdCard.jsx'
import VerticalProfileCard from './VerticalProfileCard.jsx'
import ViewProfileCard from './ViewProfileCard.jsx'
import VPCRB from './vpcrb.jsx'
// import Date from './Date.jsx'
// import DReviewCard from './DReviewCard.jsx'
// import EmployerRecommendation from './EmployerRecommendation.jsx'
// import EnterCompanyName from './EnterCompanyName.jsx'
// import HallFame from './HallFame.jsx'
// import Filters from './Filters.jsx'
// import FAQAccordion from './FAQAccordion.jsx'
// import JobRating from './JobRating.jsx'
// import JoinOldEmployer from './JoinOldEmployer.jsx'
// import LeveesPolicy from './LeveesPolicy.jsx'
// import LineCandi from './LineCandi.jsx'
// import NewCard from './NewCard.jsx'
// import NewCD from './NewCD.jsx'
// import NewggCard from './NewggCard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pcard',
    element: <PCard />,
  },
  {
    path: '/logocard',
    element: <LogoCard />,
  },
  {
    path: '/adcard',
    element: <AdCard />,
  },
  {
    path: '/andropplelabcard',
    element: <AndroppleLabCard />,
  },
  {
    path: '/bdrcard',
    element: <BDRCard />,
  },
  {
    path: '/blslcandidate',
    element: <BLSLCandidate />,
  },
  {
    path: '/breviewcard',
    element: <BReviewCard />,
  },
  {
    path: '/card',
    element: <Card />,
  },
  {
    path: '/companycard',
    element: <CompanyCard />,
  },
  {
    path: '/companyform',
    element: <CompanyForm />,
  },
  {
    path: '/companylist',
    element: <CompanyList />,
  },
  {
    path: '/companyscroller',
    element: <CompanyScroller
     />,
  },
  {
    path: '/companystatus',
    element: <CompanyStatus />,
  },
    {
      path: '/p-card',
      element: <PCard/>,
    },
    {
      path: '/political-card',
      element: <PoliticalCard/>,
    },
    {
      path: '/profile-card',
      element: <ProfileCard/>,
    },
    {
      path: '/rating-list',
      element: <RatingList/>,
    },
    {
      path: '/review-card',
      element: <ReviewCard/>,
    },
    {
      path: '/scroller',
      element: <Scroller/>,
    },
    {
      path: '/search-bar',
      element: <SearchBar/>,
    },
    {
      path: '/search-candidate',
      element: <SearchCandidate/>,
    },
    {
      path: '/short-listed-candidates',
      element: <ShortListedCandidates/>,
    },
    {
      path: '/slcandidate',
      element: <SLCandidate/>,
    },
    {
      path: '/testing',
      element: <Testing/>,
    },
    {
      path: '/submit-button',
      element: <SubmitButton/>,
    },
    {
      path: '/top-rated-campines',
      element: <TopRatedCampines/>,
    },
    {
      path: '/verified',
      element: <Verified/>,
    },
    {
      path: '/vertical-ad-card',
      element: <VerticalAdCard/>,
    },
    {
      path: '/vertical-profile-card',
      element: <VerticalProfileCard/>,
    },
    {
      path: '/view-profile-card',
      element: <ViewProfileCard/>,
    },
    {
      path: '/vpcrb',
      element: <VPCRB/>,
    }
//  {
//    path: '/date',
//    element: <Date />,
//  },
//  {
//    path: '/dreviewcard',
//    element: <DReviewCard />,
//  },
//  {
//    path: '/employerrecommendation',
//    element: <EmployerRecommendation />,
//  },
//  {
//    path: '/entercompanyname',
//    element: <EnterCompanyName />,
//  },
//  {
//    path: '/halloffame',
//    element: <HallFame />,
//  },
//  {
//    path: '/filters',
//    element: <Filters />,
//  },
//  {
//    path: '/faqaccordion',
//    element: <FAQAccordion />,
//  },
//  {
//    path: '/jobrating',
//    element: <JobRating />,
//  },
//  {
//    path: '/joinoldemployer',
//    element: <JoinOldEmployer/>,
//  },
//  {
//    path: '/leveespolicy',
//    element: <LeveesPolicy />,
//  },
//  {
//    path: '/linecandi',
//    element: <LineCandi />,
//  },
//  {
//    path: '/logocard',
//    element: <LogoCard />,
//  },
//  {
//    path: '/newcard',
//    element: <NewCard />,
//  },
//  {
//    path: '/newcd',
//    element: <NewCD />,
//  },
//  {
//    path: '/newggcard',
//    element: <NewggCard />,
//  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  
  </StrictMode>,
)
