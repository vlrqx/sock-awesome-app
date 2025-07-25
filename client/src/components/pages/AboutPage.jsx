import React from 'react';
import './AboutPage.css';


export default function AboutPage() {
  const cardsData = [
    {
      title: 'Наша история',
      paragraphs: [
        'SockAwesome App родился из простой идеи — каждый человек уникален, и его носки должны это отражать. Мы начали как небольшая команда энтузиастов...',
        'Сегодня мы предлагаем революционную платформу для создания персонализированных носков...',
      ],
    },
    {
      title: 'Наша миссия',
      paragraphs: [
        'Мы делаем процесс создания уникальных носков простым, увлекательным и доступным для всех. Наша цель — дать каждому возможность выразить свою индивидуальность через дизайн.',
        'Мы используем передовые технологии и высококачественные материалы...',
      ],
    },
  ];

  const featuresData = [
    { title: 'Простота', description: 'Интуитивный интерфейс, понятный даже новичкам' },
    { title: 'Качество', description: 'Высококачественные материалы и печать' },
    { title: 'Уникальность', description: 'Каждый дизайн — отражение вашей личности' },
  ];

  return (
    <div className="wrapper">
      <section>
        <div className="header">
          <h1>
            О компании <span>SockAwesome App</span>
          </h1>
          <p>Мы создаем уникальные носки, которые отражают вашу индивидуальность</p>
        </div>

        <div className="top-cards">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <h2>{card.title}</h2>
              {card.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="why-choose">
          <h2>Почему выбирают нас</h2>
          <div className="features-row">
            {featuresData.map((feature, index) => (
              <div key={index} className="feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}
