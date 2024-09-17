/* eslint-disable no-unused-vars */
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from '../pages/JobsPage';
import NotFoundPage from '../pages/NotFoundPage';
import  {JobPage,JobLoader} from '../pages/Jobpage';
import  AddJobPage from '../pages/AddJobPage';
import EditJobPage from '../pages/EditJobPage';



const App = () => {
  //ADD NEW JOB function ( add a new job to the json file )
  const addJob =async  (newJob) => {
    const res = await fetch('/api/jobs',{
      method : 'POST',
      headers : {
        'content-Type' : 'application/json',
      },
      body : JSON.stringify(newJob),
    });
  return ;
  };
  // DELETE JOB function ( delete a  job from the json file )
  const deleteJob = async (id) =>{
    const res = await fetch(`/api/jobs/${id}`,{
      method : 'DELETE',
    });
    return ;
  };
  // UPDATE JOB function ( update a  job in  the json file )
  const updateJob = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`,{
      method : 'PUT',
      headers : {
        'content-Type' : 'application/json',
      },
      body : JSON.stringify(job),

    })
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path = '/' element = {<MainLayout />}> {/* Call  main layout in all routes */}
        <Route index element={<HomePage />}/> {/* Call home page  */}
        <Route path = '/jobs' element={<JobsPage />}/> {/* Call All Jobs page  */}
        <Route path = '/Add-job' element={<AddJobPage addJobSubmit={addJob} />}/> {/* Call Add Job page  */}
        <Route path = '/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader = {JobLoader}/> {/* Call Edit Job page  */}
        <Route path = '/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader = {JobLoader}/> {/* Call  Job page  */}
        <Route path = '*' element={<NotFoundPage />}/> {/* Error case page   */}
    </Route>
    )
  );
  return <RouterProvider router={router}/>
};

export default App
