import React, { useState } from 'react';
import { PiDownloadSimple, PiEnvelopeSimple, PiCheck } from "react-icons/pi";


export default function ArrowLink1() {


    return (
        <div className='flex flex-col w-full justify-center gap-4 mt-10 xsm:flex-row'>
            <a href='https://api.whatsapp.com/send?phone=62895373847616&text=Assalamualaikum%20mas%20Ulil,%20Saya%20berminat%20menggunakan%20jasa%20Google%20Ads%20anda,%20bisa%20tolong%20dibantu?' className='button'>
                <PiEnvelopeSimple size='1.5rem' />
                Whatsapp
            </a>

        </div>
    );
}