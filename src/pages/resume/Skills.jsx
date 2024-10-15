import Container from './components/Container';
import SectionHeader from './components/SectionHeader';
import SkillGroup from './components/SkillGroup';
import Skill from './components/Skill';
import { PiDiamondsFour } from 'react-icons/pi';

export default function Skills() {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiDiamondsFour}
                title={'Professional Skills & Tools'}
                description={'Kompetensi utama yang saya kuasai untuk menavigasi dan unggul dalam internet marketing.'}
            />
            <div className='flex flex-col gap-6'>
                <SkillGroup title={'Programming languages'}>
                    <Skill title={'Javascript'} />
                    <Skill title={'Python'} />
                    <Skill title={'SQL'} />
                    <Skill title={'HTML'} />
                    <Skill title={'CSS'} />
                </SkillGroup>

                <SkillGroup title={'Platform'}>
                    <Skill title={'Google Ads'} />
                    <Skill title={'Facebook Ads'} />
                    <Skill title={'Ahrefs'} />
                    <Skill title={'Linux VPS'} />
                    <Skill title={'Cloud Hosting'} />
                    <Skill title={'Cloudflare'} />
                    <Skill title={'Web Server'} />
                </SkillGroup>

                <SkillGroup title={'Others'}>
                    <Skill title={'Git'} />
                    <Skill title={'Project Management'} />
                    <Skill title={'Entrepeneurship'} />
                    <Skill title={'Business Development'} />
                    <Skill title={'Leadership'} />
                    <Skill title={'Negotiation'} />
                </SkillGroup>
            </div>
        </Container>
    )
}
