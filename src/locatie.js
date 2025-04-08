export default function Locatie() {
    return (<section id="locatie">
        <h2>Locatie</h2>
        <div className="map-container">
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.516210282035!2d26.036602599999995!3d44.443085200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2010016ff71dd%3A0xabf05fed237daf44!2sGedo%20Fight%20Club!5e0!3m2!1sro!2sro!4v1741697675334!5m2!1sro!2sro"
                    width="600"
                    height="450"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title = 'locatie'
                />
            </div>
        </div>
    </section>);
}