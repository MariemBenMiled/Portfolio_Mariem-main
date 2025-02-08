import React from 'react';


// About Section
const About = () => {
    return (
        <section id="about" className="wave-background text-white py-10">
            <div className="container mx-auto flex flex-col items-center text-center px-4">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    About
                </h2>


                {/* Section Description */}
                <p className="mb-6 text-lg md:text-xl font-light max-w-2xl">
                I am an E-Business student at ESSECT, I am passionate about the development of digital strategies and technological innovation. My career has allowed me to acquire solid skills in digital marketing, project management and data analysis.I master several programming languages ​​(C, C#, Java, Python, JavaScript, HTML,CSS, PHP, SQL,Reactjs) as well as tools like Visual Studio, GitHub, Oracle Database and Canva. Strong skills in web development, database management (Oracle, MySQL) and Business Intelligence. I am determined to contribute to the digital transformation of companies and to explore the opportunities offered by the digital world. I am open to collaborations and the exchange of ideas to enrich my knowledge and expand my professional network.                
                </p>
                

            </div>
        </section>
    );
};

export default About;
