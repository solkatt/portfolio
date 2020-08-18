import React from 'react';
import { ReactComponent as PortfolioNext } from '../assets/arrow-right.svg'
import { ReactComponent as PortfolioPrev } from '../assets/arrow-left.svg'

const caseStudies = [
    {
        id: 1,
        subtitle: 'Development',
        title: 'Open space floor plans for your next adventure',
        img: 'code.jpg',
    },
    {

        id: 2,
        subtitle: 'Motion Design',
        title: '2D / 3D Graphics',
        img: 'temp.jpg',

    },
    {
        id: 3,
        subtitle: 'Audiovisual Art',
        title: 'Projection mapping installations',
        img: 'iol_18.jpg',
    }
]


const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container-fluid">
                {/* <div className="portfolio-navigation">
                    <div className="portfolio-arrow prev disabled">
                        <PortfolioPrev />
                    </div>
                    <div className="portfolio-arrow next">
                        <PortfolioNext />

                    </div>

                </div> */}


                <div className="row">
                    {caseStudies.map((caseItem) => (
                        <div className="case" key={caseItem.id}>
                            <div className="case-details">
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className="case-image">
                                <img src={require(`../assets/${caseItem.img}`)} alt={caseItem.title} />
                            </div>
                        </div>
                    ))}



                </div>

            </div>
        </section>
    )
}

export default Portfolio