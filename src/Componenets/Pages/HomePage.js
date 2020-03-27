import React from 'react'
import Header from '../Header/Header'
import AboutFires from '../AboutFires'
import KoalaSection from '../KoalaSection'
import Counter from './Counter'


export default function HomePage() {
    return (
        <div>
            <Header />
            <AboutFires />
            <KoalaSection />
            <Counter />
        </div>
    )
}
