import Container from './Container';

const Section = ({ children, className, id }) => {
    return (
        <section
            id={id}
            className={`py-20 md:py-40 flex items-center odd:bg-black-primary even:bg-black-secondary ${className}`}
        >
            <Container style={{ paddingBottom: '20px' }}>
                {children}
            </Container>
        </section>
    );
};

export default Section;
