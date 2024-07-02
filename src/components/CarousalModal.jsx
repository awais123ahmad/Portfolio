import { Button, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import ReactPlayer from 'react-player';


// books ==============
import bookshome from '../assets/Projects/Books/home.png'
import booksabout from '../assets/Projects/Books/about.png'
import bookscart from '../assets/Projects/Books/cart.png'
import bookscontact from '../assets/Projects/Books/contact.png'
import booksdetail from '../assets/Projects/Books/detail.png'

// books admin ========

import booksdashboard from '../assets/Projects/Books/dashboard.png'
import booksschool from '../assets/Projects/Books/school.png'
import booksorders from '../assets/Projects/Books/orders.png'
import booksgrades from '../assets/Projects/Books/grades.png'
import bookslogin from '../assets/Projects/Books/login.png'
import booksform from '../assets/Projects/Books/form.png'

// crm ==============

import crmhome from '../assets/Projects/CRM_Audit_Times/home.png'
import crmabout from '../assets/Projects/CRM_Audit_Times/about.png'
import crmcontact from '../assets/Projects/CRM_Audit_Times/contact.png'
import crmpricing from '../assets/Projects/CRM_Audit_Times/pricing.png'

// jobs web =============

import jobshome from '../assets/Projects/Jobs/webhome.png'
import alljobs from '../assets/Projects/Jobs/jobs.png'
import resume from '../assets/Projects/Jobs/resume.png'
import resumeform from '../assets/Projects/Jobs/resumeform.png'
import profile from '../assets/Projects/Jobs/profile.png'


// jobs admin =============

import jobsplans from '../assets/Projects/Jobs/plans.png'
import jobsdashboard from '../assets/Projects/Jobs/dashboard.png'
import jobsform from '../assets/Projects/Jobs/jobsform.png'
import dashjobs from '../assets/Projects/Jobs/dashjobs.png'
import dashcategory from '../assets/Projects/Jobs/dashcategory.png'





const CarousalModal = ({ open, handleClose, project ,projectDescription , projectName}) => {

    const [data, setData] = useState()

    const books = [{ src: bookshome }, { src: booksabout }, { src: bookscart }, { src: bookscontact }, { src: booksdetail }]

    const booksadmin = [{ src: booksdashboard }, { src: booksschool }, { src: booksorders }, { src: booksgrades }, { src: booksform }, { src: bookslogin }]

    const crm = [{ src: crmhome }, { src: crmabout }, { src: crmcontact }, { src: crmpricing }]

    const jobs = [{ src: jobshome }, { src: alljobs }, { src: resume }, { src: profile }, { src: resumeform }]

    const jobsadmmin = [{ src: jobsdashboard }, { src: jobsform }, { src: dashjobs }, { src: jobsplans }, { src: dashcategory }]

    useEffect(() => {
        if (project === 'books') {
            setData(books)
        } else if (project === 'booksadmin') {
            setData(booksadmin)
        } else if (project === 'crm') {
            setData(crm)
        } else if (project === 'jobs') {
            setData(jobs)
        } else if (project === 'jobsadmin') {
            setData(jobsadmmin)
        }
    }, [project])


const closeModal = () => {
    setData([])
    handleClose()

}


    return (
        <div>
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: '80vw', maxWidth: 900 }}  >

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* <Carousel stopAutoPlayOnHover={true} navButtonsAlwaysVisible autoPlay={false}> */}

                            <div className='overflow-y-auto h-[90vh] bg-white'>
                                <h1 className='pl-6 pt-4 text-3xl max-md:text-[1.2rem]'>{projectName}</h1>
                                <h1 className='text-[1.2rem] p-6 max-md:text-sm'>{projectDescription}</h1>
                                {data?.map((value) => (
                                    <div className='mt-6'>
                                            <img src={value?.src} alt="image3" className='w-[100%] ml-auto mr-auto shadow-xl' />
                                        
                                    </div>

                                ))}
                            </div>
                            {/* {data?.map((value) => {
                                return (
                                    <div>
                                        {value.video ?
                                            (
                                                <ReactPlayer controls={true} url={value?.video} width={'90%'} className='ml-auto mr-auto' />
                                            )
                                            :
                                            ('')
                                        }
                                    </div>

                                )
                            })} */}

                        {/* </Carousel> */}

                    </Typography>
                    {/* <Button onClick={handleClose}>Close Modal</Button> */}
                </div>
            </Modal>
        </div>
    );
};

export default CarousalModal;
