import { useState } from 'react';

function Program({ zi, ore }) {
    return (<li>{zi}: {ore}</li>);
}

export default function Training() {
    const [pret, setPret] = useState('');
    const [per, setPer] = useState('')

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        let price;
        let per;

        switch (selectedOption) {
            case 'Prima sedinta':
                price = 'GRATUIT';
                break;
            case '1 sedinta':
                price = '50 RON';
                break;
            case '8 sedinte':
                price = '300 RON';
                per = '/ Luna';
                break;
            case '12 sedinte':
                price = '350 RON';
                per = '/ Luna';
                break;
            case 'Nelimitat':
                price = '500 RON';
                per = '/ Luna';
                break;
            case 'Antrenamente Private':
                price = '100 RON';
                per ='/ Sedinta';
                break;
            default:
                price = '';
        }
        setPret(price);
        setPer(per);
    };

    return (
        <section id='training'>
            <div className='training'>
            <h1 style={{fontSize: '2em'}}>Program & Preturi</h1>
            <div className="training2">

                <div className='program'>
                    <h2>Program 🕒</h2>
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
                <div>

                    <div className='preturi'>
                        <h2>Lista de preturi. 🥊</h2>
                        <p>Gaseste cea mai buna optiune pentru tine!</p>

                        <select onChange={handleSelectChange}>
                            <option value="" disabled selected>Alege o optiune</option>
                            <option value="Prima sedinta">Prima sedinta</option>
                            <option value="1 sedinta">1 sedinta</option>
                            <option value="8 sedinte">8 sedinte</option>
                            <option value="12 sedinte">12 sedinte</option>
                            <option value="Nelimitat">Nelimitat</option>
                            <option value="Antrenamente Private">Antrenamente Private</option>
                        </select>

                        <p>Pret: {pret} {per}</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
