import React, { useState } from 'react';
import { PiDownloadSimple, PiEnvelopeSimple, PiCheck } from "react-icons/pi";
import fetchPDF from '../../../api/cvtopdf';

export default function CtaButtons() {
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
            <a href='https://api.whatsapp.com/send?phone=62895373847616' className='button'>
                <PiEnvelopeSimple size='1.5rem' />
                Whatsapp
            </a>

        </div>
    );
}