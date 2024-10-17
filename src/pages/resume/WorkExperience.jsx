import Container from './components/Container';
import SectionHeader from './components/SectionHeader';
import Experience from './components/Experience';
import { PiSuitcaseSimple } from 'react-icons/pi';

export default function WorkExperience({ data }) {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiSuitcaseSimple}
                title={'Tentang Layanan'}
                description={`Jasa setting dan pasang iklan Google Ads termurah, buat bisnismu berada di halaman #1 pencarian Google. Solusi meningkatkan penjualan bisnismu dengan instan dan optimal. Yang paling penting adalah offering dan unique selling point dari bisnis Anda yang relevan dengan market yang mencari based on keywordnya. Semua iklan akan tampil di percarian Google untuk Smartphone, Laptop, Tablet & Komputer.`}
            />
            <div className='flex'>
                <div className='w-[2px] bg-slate-700 mt-3 mb-1' />
                <div className='flex flex-col gap-10 w-full'>
                    {data.workExperience.map((experience, index) => (
                        <Experience key={index} {... experience} />
                    ))}
                </div>

                
            </div>
        </Container>
    )
}
