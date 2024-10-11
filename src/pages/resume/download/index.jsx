import Container from './components/Container';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import IconBox from '../components/IconBox';
import Location from '../components/Location';
import { IoHeadsetOutline } from "react-icons/io5";
import Header from './components/Header';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { RiUserStarLine } from "react-icons/ri";
import resumeData from '../../../resumeData.json';
import { FaGlobe } from "react-icons/fa";
import Referrals from './Referrals';

export default function index() {

    return (
        <div id='resume-download'>
            <div className={`m-auto w-[794px] h-[calc(1123px*1)] p-5 bg-[#f9f9f9] *:gap-2 *:*:gap-2 *:*:*:gap-2 *:*:*:*:gap-2`}>
                <div className='h-full overflow-hidden'>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2 flex flex-col h-[1083px]'>
                            <div className='flex'>
                                <Container className={`w-[180px] bg-[url('/profilePhoto.jpeg')] bg-cover bg-[center_-10px]`} />
                                <Container className=''>
                                    <IconBox size='sm' IconComponent={GoRocket} />
                                    <h1>Mas Ulil</h1>
                                    <p className='!text-xs'>{resumeData.tagline}</p>
                                    <Location locationText={resumeData.location} size='sm' className={'mb-0'} />
                                </Container>
                            </div>
                            <Container>
                                <Header IconComponent={RiUserStarLine} title='Profile' />
                                <h3>Professional</h3>
                                <p>{resumeData.profile.professional}</p>

                                <h3 className='mt-4'>Personal</h3>
                                <p>{resumeData.profile.personal}</p>
                            </Container>
                            <Education />
                            <Referrals />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className={`m-auto w-[794px] h-[calc(1123px*1)] p-5 bg-[#f9f9f9] *:gap-2 *:*:gap-2 *:*:*:gap-2 *:*:*:*:gap-2`}>
                <div className='h-full overflow-hidden'>
                    <div className='flex flex-col h-[1083px]'>
                        <WorkExperience data={resumeData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

