import Page from '../../components/layout/Page';
import Section from '../../components/layout/Section';
import ProjectCardWrapper from '../../components/ui/ProjectCardWrapper';
import useInViewTransition from '../../hooks/useInViewTransition';
import projectsData from '../../projectsData.json';
import Page from '../../components/layout/WhatsAppButton';

export default function index() {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        threshold: 0,
        delay: 'delay-100'
    });

    return (
        
        <Page>
            <Section>
                <div className={`flex flex-col items-center ${transitionClasses1}`} ref={ref1}>
                    <h2>Buat Website Domain .com Cuma Rp600.000 </h2>
                    <p className='subheading text-center'>Daftar Pilihan Template yang Dapat Anda Gunakan Untuk Website<br /> Ingin Template lain? Whatsapp saja.</p>
                </div>
                <div className={`mt-20 ${transitionClasses2}`} ref={ref2}>
                    <ProjectCardWrapper projects={projectsData} moreComing={true} />
                </div>
            </Section>
            
        </Page>
        
    );
    return (
    <WhatsAppButton />
)
}