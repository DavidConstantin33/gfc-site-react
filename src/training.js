function Program({ zi, ore }) {
    return (<li>{zi}: {ore}</li>);
}

function Pret({ ab, pret }) {
    return (<li>{ab}: {pret}</li>);
}

export default function Antr() {
    return (
        <section id='training'>
            <h1>Program & Preturi</h1>
            <div className="training2">
                <div className='program'>
                    <h2>Program</h2>
                    <ul>
                        <Program zi="Luni" ore="20:30-22:00"/>
                        <Program zi="Marti" ore="08:00-09:30"/>
                        <Program zi="Miercuri" ore="20:30-22:00"/>
                        <Program zi="Joi" ore="08:00-09:30"/>
                        <Program zi="Vineri" ore="20:30-22:00"/>
                        <Program zi="Sambata" ore="14:00-15:30"/>
                        <Program zi="Duminica" ore="14:00-15:30"/>
                    </ul>
                </div>

                <div className='pret'>
                    <h2>Lista de preturi</h2>
                    <ul>
                        <Pret ab="Primul Antrenament" pret="Gratuit"/>
                        <Pret ab={"O sedinta"} pret="50 LEI"/>
                        <Pret ab="8 Sedinte" pret="300 LEI"/>
                        <Pret ab="12 Sedinte" pret="350 LEI"/>
                        <Pret ab="Nelimitat(o luna)" pret="500 LEI"/>
                        <Pret ab="Antrenamente private" pret="Discutabil*"/>
                    </ul>
                </div>
            </div>
            <p style={{marginTop: '2em', fontSize:'12px'}}>*Discutabil in urma unei discutii in prealabil si in functie de obiectivele personale</p>
        </section>
    );
}