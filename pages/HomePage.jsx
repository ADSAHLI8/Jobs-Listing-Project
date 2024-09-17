import Hero from "../Components/Hero";
import HomeCards from "../Components/HomeCards";
import JobListings from "../Components/JobListings";
import ViewAllJobs from "../Components/ViewAllJobs";


function HomePage() {
  return (
    <>
      <Hero  /> {/* CALLING TITLES */}
      <HomeCards /> {/*CALLING  CARDS */}
      <JobListings /> {/* CALLING JOBS LIST */}
      <ViewAllJobs /> {/* CALLING LINK TO JOBS */}
    </>
  )
}

export default HomePage