import React from 'react';
import Section from '../../components/layout/Section';
import SectionTitle from '../../components/ui/SectionTitle';
import ArrowLink from '../../components/ui/ArrowLink';
import { BiLogoTypescript, BiLogoGraphql } from 'react-icons/bi';
import { HiCommandLine } from 'react-icons/hi2';
import { TbSql } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaGitAlt, FaReact, FaPython, FaDocker, FaJava, FaHtml5, FaFacebook, FaCss3Alt, FaWordpress, FaServer, FaCloudflare, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiGooglecloud, SiNextdotjs, SiGoogleads, SiNetlify, SiVisualstudio } from 'react-icons/si';
import useInViewTransition from '../../hooks/useInViewTransition';
import Googleads from '../../assets/googleads.webp';

function AboutMe() {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        delay: 'delay-100'
    });

    return (
        <Section id='about-me' className={`relative z-20`}>
            <div className='flex flex-col gap-12 lg:flex-row items-center'>
            <div ref={ref1} className={`flex flex-col lg:w-1/2 ${transitionClasses1}`}>
                    <h2>Keuntungan beriklan di Google Ads bersama Mas Ulil</h2>
                    <p>
                    <h4>Gratis Konsultasi</h4>
                    Mas Ulil memberikan konsultasi gratis bagi anda untuk memperoleh settingan terbaik untuk iklan Google Ads anda.
                    </p> 
                    <br></br>
                    <p>
                    <h4>Akses Dasboard Google Ads</h4>
                    Anda akan mendapankan akses langsung ke Dasboard Googole Ads untuk memantau performa kampanye secara realtime.
                    </p>
                    <br></br>
                    <p>
                    <h4>Riset Kata Kunci dan Kompetitor</h4>
                    Kami menggunakan berbagai strategi untuk mendapatkan buying keyword tertarget hingga menggiring brand kompetitor untuk dijadikan target khusus.
                    </p>
                    <br></br>
                    <p>
                    <h4>Advanced Bidding Strategy</h4>
                    Biaya “pembelian data” iklan lebih terjangkau dengan tahapan strategi bidding yang tepat.
                    </p>
                    <br></br>
                </div>
                <div ref={ref2} className={`flex flex-col items-center lg:items-end lg:w-1/2 ${transitionClasses2}`}>
                    <div>
                        <div className='flex justify-center items-center rounded-full bg-gray-800 relative mx-auto w-94 h-94 xsm:w-100 xsm:h-100 sm:h-120 sm:w-120'>
                        <img src={Googleads} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )

    
}

export default AboutMe
