import ArrowLink from './ui/ArrowLink';
import Container from './layout/Container';
import SocialBar from './ui/SocialBar';
import useInViewTransition from '../hooks/useInViewTransition';

const Footer = () => {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        delay: 'delay-300'
    });

    return (
        <div className={`border-t-[1px] border-gray-500`}>
            <Container>
                <div className='lg:h-96 h-[32rem] flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center'>
                    <div className={`flex flex-col ${transitionClasses1}`} ref={ref1}>
                        <div className='flex'>
                            <img src={`/profilePhoto.jpeg`} className='rounded-full size-24 sm:h-32 sm:w-32 object-cover' />
                            <div className='ml-4 md:ml-8 my-auto'>
                                <p className='text-4xl font-semibold opacity-100'>Mas Ulil</p>
                                <p className='text-xl text-gray-400 font-medium'>Ds. Trengguli RT01 RW07 Kec. Wonosalam Kab. Demak. Jawa Tengah Kode Pos 59571</p>
                                
                            </div>
                        </div>
                        <SocialBar />
                    </div>
                    <div ref={ref2} className={transitionClasses2}>

                        <div className='flex flex-wrap lg:justify-between'>
                            <div className='w-50 mr-10 mt-5'>
                                <div className='mb-1 uppercase text-gray-400 font-semibold'>Email:</div>
                                <ArrowLink link='mailto:ndikru@gmail.com' anchorText='ndikru@gmail.com' color='text-white' size='md' />
                            </div>
                            <div className='mt-5'>
                                <div className='mb-1 uppercase text-gray-400 font-semibold'>Whatsapp:</div>
                                <ArrowLink link='https://api.whatsapp.com/send?phone=62882005295050&text=Assalamualaikum%20mas%20Ulil,%20Saya%20berminat%20menggunakan%20Jasa%20GoogleAds,%20bisa%20tolong%20dibantu?' anchorText='+62 8820-0529-5050' color='text-white' size='md' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        
    )
}

export default Footer;