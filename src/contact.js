export default function Contact() {
    return (<section id='contact'><div className='contact'>
            <div className='contact-text'>
                <h2 style={{textAlign: 'center'}}>Contact</h2>
                <p>Înscrie-te pe grupul nostru de WhatsApp și fii parte din echipă! 💪🔥
                <br/> Sau, dacă ești mai mult pe modul „observator”, urmărește-ne pe Instagram și TikTok și vezi ce
                facem zi de
                zi! 📲😉</p>
            </div>
            <ul>
                <li>
                    <a href="https://chat.whatsapp.com/lEh1tQarlf13F8soUq4tSZ">
                        <span className="btn-social"><img src='/media/whatsapp_733585.png' alt='wapp'/></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/gedofightclub/">
                        <span className="btn-social"><img src='/media/instagram_2111463.png' alt='insta'/></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@gedofightclub">
                        <span className="btn-social"><img src='/media/tiktok_15713399.png' alt='wapp'/></span>
                    </a>
                </li>
            </ul>
        </div>
        </section>
    )
}