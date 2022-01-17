import Container from './Container'

const Footer = () => {
  return (
    <footer className="bg-[#06020d] text-white text-[10px] md:text-base">
      <Container>
        <div className="text-center py-4">
          Ok(Built( 💖,
          <a
            href="https://github.com/Nie-Mand"
            target="_blank"
            rel="noreferrer noopener"
            className="text-cyan-500  rounded-md p-1"
          >
            @Niemand
          </a>
          , stole some stuffs ) )
        </div>
      </Container>
    </footer>
  )
}

export default Footer
