import React from 'react';
import Section from '../../components/layout/Section';
import CtaButtons from './components/CtaButtons';
import SectionTitle from '../../components/ui/SectionTitle';
import ArrowLink from '../../components/ui/ArrowLink';
import { BiLogoTypescript, BiLogoGraphql } from 'react-icons/bi';
import { HiCommandLine } from 'react-icons/hi2';
import { TbSql } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaGitAlt, FaReact, FaPython, FaDocker, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiGooglecloud, SiNextdotjs } from 'react-icons/si';
import useInViewTransition from '../../hooks/useInViewTransition';

function AboutMe() {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        delay: 'delay-300'
    });

    return (
        <Page>
            <div className={`mx-6 md:max-w-[758px] md:mx-auto py-24`}>
                <div className={`text-center ${transitionClasses1}`} ref={ref1}>
                    <div className='flex justify-center mb-10'>
                        <div className='px-3 py-2 border-2 border-black-tertiary rounded-lg flex items-center gap-2'>
                            <div className='bg-green-500 size-2 rounded-full animate-ping' />
                            Available for work
                        </div>
                    </div>
                    <h1>Mas Ulil</h1>
                    <p className='subheading -mt-6'>{resumeData.tagline}</p>
                    <CtaButtons />
                </div>
                <div id='resume' className='mt-24 flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <Container className={`w-full min-h-[350px] md:min-h-0 md:w-1/3 bg-[url('/profilePhoto.jpeg')] bg-cover bg-center`} />
                        <Profile data={resumeData} />
                    </div>
                    <WorkedWith />
                    <WorkExperience data={resumeData} />
                    <Education />
                    {/* <Certifications /> */}
                    <Skills />
                    <Languages />
                    {/* <Awards /> */}
                    {/* <Recommendations /> */}
                </div>
                <div className={`flex flex-col items-center my-20 ${transitionClasses2}`} ref={ref2}>
                    <img src={`/profilePhoto.jpeg`} className='size-20 object-cover rounded-xl mb-4' />
                    <h3>Feel Free to Reach Out</h3>
                    <p>Let's start a productive converstaion</p>
                    <CtaButtons />
                </div>
            </div>
        </Page>
    )
}

export default AboutMe
