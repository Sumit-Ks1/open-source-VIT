import intro from './intro.module.css'

export default function Intro() {
    return (
        <div className={intro.introcontainer}>
            <h1 className={intro.headings1}>
                Who are we ? What we do ? Why you should join us ?
            </h1>
            <h2 className={intro.headings2}>
                Welcome to the Open Source Initiative: Empowering Collaboration and Innovation.
            </h2>
            <h2 className={intro.headings2}>
                In the digital expanse where ideas flourish and innovation thrives, there lies a powerful movement that is reshaping the way we create, share, and grow — the open source community. At [Your Website Name], we believe in the transformative power of collaboration. Our mission is to guide and support enthusiastic minds who are eager to contribute to open source projects but may not know where to start.
            </h2>
            <h2 className={intro.headings2}>
                Open source is more than just code; it's about building a foundation where collective intelligence converges to solve complex problems and push the boundaries of what's possible. Whether you're a seasoned developer or taking your first steps into coding, our platform serves as a beacon, illuminating the path to meaningful contributions.
            </h2>
            <h2 className={intro.headings2}>
                Join us as we delve into the world of open source, where every line of code counts and every contributor holds the key to the next big breakthrough. Let's embark on this journey together, fostering a community where knowledge is open and the future is shared.
            </h2>
        </div>
    )
}
