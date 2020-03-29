import React from 'react'
import Header from '../Header/Header'
import AboutFires from '../AboutFires'
import KoalaSection from '../KoalaSection'
import Counter from '../Counter'
import Linebreak from '../LineBreak'
import Homes from '../Homes'
import Animals from '../Animals'
import Footer from '../Footer'


export default function HomePage() {
    return (
        <div>
            <Header />
            <AboutFires />
            <Linebreak />
            <KoalaSection />
            <Linebreak/>
            <Animals />
            <Linebreak/>
            <Counter />
            <Linebreak/>
            <Homes/>
            <Linebreak/>
            <Footer />
    
        </div>
    )
}
