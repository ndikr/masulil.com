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
                description={`<p>Jasa setting dan pasang iklan Google Ads termurah, buat bisnismu berada di halaman #1 pencarian Google. Solusi meningkatkan penjualan bisnismu dengan instan dan optimal.</p> <br/> <p>Yang paling penting adalah offering dan unique selling point dari bisnis Anda yang relevan dengan market yang mencari based on keywordnya.</p> <br/> <p>Semua iklan akan tampil di percarian Google untuk Smartphone, Laptop, Tablet &amp; Komputer.</p> <br/> <h3>Alasan Beriklan Bersama Mas Ulil</h3> <br/> <h5>Fokus pada Hasih</h5> <p>Tidak hanya meningkatkan traffic dan impression ke web, Mas Ulil mengutamakan optimalisasi conversi.</p> <br/> <h5>Biaya Transparan</h5> <p>Anda dapat mengakses Dashboard Google Ads untuk melihat langsung biaya dan performa iklan Anda.</p> <br/> <h5>Berpengalaman</h5> <p>Kami berpengalaman menangani berbagai jenis permasaran melalui internet sejak 2017.</p> <br/> <h5>Merketing Improvement</h5> <p>Dalalam seiring waktu improvisasi dari strategi Kami akan terus melakukan improvisasi dari strategi untuk mendapatkan dampat yang lebih baik untuk bisnis Anda.</p><br/> <h5>Gratis Uji Coba</h5> <p>Gratis biaya setting dan optimasi iklan satu minggu pertama.</p><br/> <h3>Pertanyaan yang Sering Ditanyakan</h3> <br/> <h5>Berapa biaya setting dan optimasi iklan?</h> <p>Hanya Rp100.000 /minggu.</p> <br/> <h5>Rp100.000 apakah sudah termasuk saldo iklan?</h5> <p>Belum termasuk saldo iklan, saldo iklan bisa Anda isi sendiri langsung ke akunnya.</p> <br/> <h5>Iklan apakah bisa di posisi teratas Pencarian Google?</h5> <p>Iya iklan akan tampil pada halaman 1 Google.</p> <br/> <h5>Akun iklannya apakah bisa di akses?</h5> <p>Iya bisa di akses sercara realtime. kami akan undang akses akun Dashboard iklan menggunakan email Anda.</p> <br/> <h5>Apakah kata kunci bisa disesuai dengan permintaan?</h5> <p>Iya sangat bisa. Kami akan riset terlebih dahulu mana saja kata kunci yang relevan untuk bisnis Anda dan memiliki pencarian terbanyak.</p><br/> <h5>Bagaimana kalau belum punya website?</h5> <p>Kami menyediakan paket hemat website + jasa setting iklan dengan harga yang sangat terjangkau.</p><br/>`}
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
