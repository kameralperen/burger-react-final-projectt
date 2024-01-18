import React from 'react';
import BannerImage from '../assets/banner.png';
import {Link} from 'react-router-dom';
import '../styles/Contact.css';

export const Signup = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Sitemize Kaydolun!</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />
          <label>Kullanıcı Adı</label>
          <input
            type="text"
            name="username"
            placeholder="Lütfen kullanıcı adı giriniz..."
          />
        </form>
        <Link to="/signup">
          <button className='contact-button'>Kaydol</button>
        </Link>
      </div>
    </div>
  );
};
