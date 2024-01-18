import React from 'react'
import BannerYeni from '../assets/banneryeni.jpg';
import '../styles/About.css';

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${BannerYeni})` }}>
      </div>
      <div className='aboutBottom'>
        <h1 style={{marginTop: '20px'}}>Hakkımızda</h1>
        <p>Hoş Geldiniz!

          Biz, lezzetin ve tutkunun bir araya geldiği bir yerde buluşuyoruz. Kamer Burger, kendine özgü tarifleri ve sıcak atmosferi ile burger tutkunları için vazgeçilmez bir nokta haline gelmiştir. Misafirperverliğimiz, taze malzemelerimiz ve yaratıcı tariflerimizle, sizi unutulmaz bir lezzet yolculuğuna davet ediyoruz. <br/>
          <br/>
          Lezzet Dolu Yolculuk <br/><br/>

          Burgerlerimiz, en kaliteli malzemelerden özenle seçilir ve ustalarımızın özel tarifleriyle hazırlanır. Her lokmada lezzetin zirvesine çıkmanız için özel olarak tasarlanan menümüz, damak zevkinize hitap edecek çeşitlilikte seçenekler sunar. Sadece et severler için değil, vejetaryen ve vegan seçenekleri ile herkesin tat alma deneyimini önemsiyoruz.<br/><br/>

          Kalite ve Taze İçeriğe Bağlılık<br/><br/>

          Bizim için kalite sadece bir tercih değil, bir taahhüttür. Her gün taze malzemelerle çalışarak, müşterilerimize en yüksek standartlarda lezzet sunmayı amaçlıyoruz. Etlerimiz lokal çiftliklerden, sebzelerimiz ise mevsimine göre seçilir. Hijyen ve güvenlik standartlarımızı en üst seviyede tutarak, sizlere güvenilir bir yemek deneyimi sunuyoruz.<br/><br/>

          Sizin İçin Buradayız<br/><br/>

          Kamer Burger, sadece bir restoran değil, aynı zamanda bir topluluktur. Sizleri ailemizin bir parçası gibi hissettirmek, keyifli bir ortam sunmak ve her bir ziyaretinizi özel kılmak için buradayız. Memnuniyetiniz bizim için ön planda, bu nedenle her geri bildirimi değerli buluyor ve sürekli olarak kendimizi geliştirmek için çaba gösteriyoruz.<br/><br/>

          Bizi Tanıyın, Lezzetimize Güvenin<br/><br/>

          Kamer Burger, lezzet dolu bir yolculuğa çıkmanız için burada! Sizi ağırlamaktan mutluluk duyuyoruz ve unutulmaz bir burger deneyimi yaşamanız için sabırsızlanıyoruz.<br/><br/>

          Teşekkür ederiz,
          Kamer Burger Ekibi</p>
      </div>
    </div>
  )
}
