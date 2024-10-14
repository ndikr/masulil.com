import React, { useState } from 'react';
import { PiDownloadSimple, PiEnvelopeSimple, PiCheck } from "react-icons/pi";


export default function ArrowLink1() {
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            const blob = await fetchPDF();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'resume_jacob_lind.pdf';
            document.body.appendChild(link);

            link.click();

            // Short delay to ensure download starts
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }, 100);
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
            setDownloadSuccess(true);
            setTimeout(() => {
                setDownloadSuccess(false);
            }, 3000);
        } catch (error) {
            console.error('Download failed:', error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className='flex flex-col w-full justify-center gap-4 mt-10 xsm:flex-row'>
            <a href='https://api.whatsapp.com/send?phone=62895373847616&text=Assalamualaikum%20mas%20Ulil,%20Saya%20berminat%20menggunakan%20jasa%20Google%20Ads%20anda,%20bisa%20tolong%20dibantu?' className='button'>
                <PiEnvelopeSimple size='1.5rem' />
                Whatsapp
            </a>

        </div>
    );
}