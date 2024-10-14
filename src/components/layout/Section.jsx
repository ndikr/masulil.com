import Container from './Container'

const Section = ({ children, className, id }) => {
    return (
        <section id={id} className={`py-20 md:py-20 flex items-center odd:bg-black-primary even:bg-black-secondary ${className}`}>
            <Container>
                {children}
            </Container>
        </section>
    )
}

export default Section