import React from 'react';
import Section from '../../components/layout/Section';
import SectionTitle from '../../components/ui/SectionTitle';
import CtaButtons from './components/CtaButtons';
import ArrowLink from '../../components/ui/ArrowLink';
import { BiLogoTypescript, BiLogoGraphql } from 'react-icons/bi';
import { HiCommandLine } from 'react-icons/hi2';
import { TbSql } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaGitAlt, FaReact, FaPython, FaDocker, FaJava, FaHtml5, FaFacebook, FaCss3Alt, FaWordpress, FaServer, FaCloudflare, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiGooglecloud, SiNextdotjs, SiGoogleads, SiNetlify, SiVisualstudio } from 'react-icons/si';
import useInViewTransition from '../../hooks/useInViewTransition';
import Laptop from '../../assets/laptop-clouds-copy-1.png';

function AboutMe() {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        delay: 'delay-100'
    });

    return (
        <Section id='about-me' className={`relative z-20`}>
            <div className='flex flex-col gap-12 lg:flex-row items-center'>
                <div ref={ref1} className={`flex flex-col lg:w-1/2 ${transitionClasses1}`}>
                    <SectionTitle title='Tentang Mas Ulil' />
                    <h2>Berpengalaman dalam Google Ads dan Google Search</h2>
                    <p>
                    Saya memulai tertarik pada mesin percari Google sejak tahun 2016 dan pada 2019 saya bekerja sama dengan penyedia Jasa SEO, Google Ads, Pembuatan Web asal kota Kudus dan telah berhasil membantu ratusan UMKM.
                    </p>
                    <br></br>
                    <p>
                    Pengalaman saya membuat saya Insyaallah memenuhi syarat secara unik untuk inovasi dan pengembangan pemasaran digital melalui Google.
                    </p>
                    <br></br>
                    <p>
                    Tujuan saya adalah selalu menciptakan solusi yang tidak hanya memenuhi tetapi juga melampaui harapan setiap klien saya.
                    </p>
                    <br></br>
                    <p><h4>Dapatkan Jasa Setting dan Optimasi Google Ads hanya Rp100.000 /minggu</h4>
                    </p>
                    
                    <ArrowLink link='https://api.whatsapp.com/send?phone=62895373847616&text=Assalamualaikum%20mas%20Ulil,%20Saya%20berminat%20menggunakan%20jasa%20Google%20Ads%20anda,%20bisa%20tolong%20dibantu?' anchorText='+62 8953-7384-7616' size='xl' className='mt-8' />
                </div>
                <div className={`flex flex-col items-center my-20 ${transitionClasses2}`} ref={ref2}>
                    <img src={`/profilePhoto.jpeg`} className='size-20 object-cover rounded-xl mb-4' />
                    <h3>Mulai Ujicoba Gratis</h3>
                    <p>Dapatkan Settingan dan Otimasi Google Ads Gratis Selama 1 Minggu</p>
                    <CtaButtons />
                </div>
                <div ref={ref2} className={`flex flex-col items-center lg:items-end lg:w-1/2 ${transitionClasses2}`}>
                    <div>
                        <div className='flex justify-center items-center rounded-full bg-gray-800 relative mx-auto w-94 h-94 xsm:w-100 xsm:h-100 sm:h-120 sm:w-120'>
                        <img src={Laptop} alt="logo" />
                        </div>
                        <p className='mt-4 text-center'>Preview tampilan iklan Google Ads</p>
                    </div>
                </div>
            </div>
        </Section>
    )

    
}

export default AboutMe
