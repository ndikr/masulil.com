import Section from '../../components/layout/Section';
import CtaButtons from './components/CtaButtons';
import useInViewTransition from '../../hooks/useInViewTransition';
import ScrollButton from '../../components/ui/ScrollButton';


const Hero = () => {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        delay: 'delay-300'
    });
    const { ref: ref3, transitionClasses: transitionClasses3 } = useInViewTransition({
        threshold: 0,
        delay: 'delay-700',
        offViewClasses: 'opacity-1 translate-y-full'
    });
    const { ref: ref4, transitionClasses: transitionClasses4 } = useInViewTransition({
        delay: 'delay-1000',
        offViewClasses: 'opacity-0 scale-75',
        inViewClasses: 'opacity-1 scale-100'
    });

    return (
        <Section className={`relative`}>
                                <div className='flex justify-center mb-10'>
                        <div className='px-3 py-2 border-2 border-black-tertiary rounded-lg flex items-center gap-2'>
                            <div className='bg-green-500 size-2 rounded-full animate-ping' />
                            Available for work
                        </div>
                    </div>
            <div className='flex flex-col md:flex-row mb-44 2xsm:mb-52' >
                <div className='w-full text-center flex flex-col'>
                    <h1 className={`${transitionClasses1} mb-4 sm:mb-2`} ref={ref1}>Setting dan Optimasi Google Ads</h1>
                    <p className={`subheading text-xl max-w-[520px] md:text-2xl md:max-w-[620px] lg:text-3xl lg:max-w-[800px] self-center ${transitionClasses2}`} ref={ref2}>Dapatkan Settingan Terbaik untuk Web Bisnis Anda Bisa Tampil di Halaman #1 Google Hanya Rp.100K/Minggu</p>
                </div>
            </div>
            <img src={`/profilePhoto.jpeg`} className={`absolute -bottom-5 rounded-xl w-40 left-[calc(50%-5rem)] 2xsm:w-44 2xsm:left-[calc(50%-5.5rem)] md:w-52 md:left-[calc(50%-6.5rem)] lg:w-60 lg:left-[calc(50%-7.5rem)] ${transitionClasses3}`} ref={ref3} />
            <div className={`absolute z-30 -bottom-8 left-[calc(50%-2rem)] lg:-bottom-10 lg:left-[calc(50%-2.25rem)] ${transitionClasses4}`} ref={ref4}>
                <ScrollButton href='#about-me' />
                <CtaButtons />
            </div>
        </Section>
    )
}

export default Hero;