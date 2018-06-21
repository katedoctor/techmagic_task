import React, { Component, createContext } from 'react';
import './App.css';
import Button from './components/Button/Button';
import AboutMyself from './components/AboutMyself/AboutMyself';
import ListOfSkills from './components/ListOfSkills/ListOfSkills';
import SkillsItems from './components/ListOfSkills/SkillsItems';


const content = {
  en: {
    btnEnLabel : "en",
    btnUkrLabel: "ukr",
    name: "Pynka Kateryna",
    aboutMyself: [
      {
        name: "age",
        description: "21"
      },
      {
        name: "city",
        description: "Lviv"
      },
      {
        name: "phone number",
        description: "0932441823"
      },
      {
        name: "email",
        description: "astefan1669@gmail.com"
      }
    ],
    skills: [
      {
        name: "Summary Profile",
        description: [
          "Adaptable and quick to learn new skills",
          "Good communication skills",
          "Team player"
        ]
      },
      {
        name: "Education",
        description: [
          "Lviv National Polytechnic University",
          "September 2014 – June 2018(Faculty of Information Technologies of Publishing)",
          "Training program",
          "EPAM Front-End Program, 2018"
        ]
      },
      {
        name: "Skills",
        description: [
          "JavaScript, HTML5, CSS3 (sass, less), Bootstrap, ",
          "AJAX, React, Angularjs, Angular5, MVC, ",
          "NodeJS, ExpressJS, jQuery,",
          "Responsive Web Design"
        ]
      },
      {
        name: "Languages",
        description: [
          "Ukrainian (native)",
          "Polish(elementary)",
          "Russian (advanced)",
          "English (intermediate)"
        ]
      }
    ]
  },
  ukr: {
    btnEnLabel: "анг",
    btnUkrLabel: "укр",
    name: "Пинка Катерина",
    aboutMyself: [
      {
        name: "вік",
        description: "21"
      },
      {
        name: "місто",
        description: "Львів"
      },
      {
        name: "телефон",
        description: "0932441823"
      },
      {
        name: "електронна пошта",
        description: "astefan1669@gmail.com"
      }
    ],
    skills: [
      {
        name: "Загальна інформація",
        description: [
          "Швидко адаптуюсь і навчаюсь нових навиків",
          "Володію хорошими комунікативними навиками",
          "Командний гравець"
        ]
      },
      {
        name: "Освіта",
        description: [
          "Національний університет Львівська Політехніка",
          "Вересень 2014 – Червень 2018(Факультет Інформативних Технологій Видавничої Справи)",
          "Програма тренінгу",
          "EPAM Front-End Program, 2018"
        ]
      },
      {
        name: "Навички",
        description: [
          "JavaScript, HTML5, CSS3 (sass, less), Bootstrap, ",
          "AJAX, React, Angularjs, Angular5, MVC, ",
          "NodeJS, ExpressJS, jQuery,",
          "Responsive Web Design"
        ]
      },
      {
        name: "Мова спілкування",
        description: [
          "Українска(рідна)",
          "Польська(початковий)",
          "Російська (експерт)",
          "Англійська (середній)",
        ]
      }
    ]
  }
}
const LanguageContext = createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "en"
    }
  }
  renderInformation=(el) => {
    return (
      <AboutMyself name={el.name} description={el.description} />
    )
  }
  renderListOfSkills = (el) => {
    return (
      <div className="skills-list">
        <div className="skills-name">
          <ListOfSkills name={el.name}/>
        </div>
        <div className="skills-description">
          {el.description.map(this.renderDescription)}
        </div>
      </div>
    )
  }
  renderDescription=(el)=> {
    return (
      <SkillsItems description={el}/>
    )
  }

  render() {
    return (
      <LanguageContext.Provider value={content[this.state.language]}>
        <div>
          <LanguageContext.Consumer>
            {content => {
              return (
                <div id="content">
                  <Button label={content.btnEnLabel} onClick={() => this.setState({ language: "en" })}/>
                  <Button label={content.btnUkrLabel} onClick={() => this.setState({ language: "ukr" })} />
                  <header>{content.name}</header>
                  <hr />
                  <div className="about-myself">
                    <div className="about-myself-item">
                      {content.aboutMyself.map(this.renderInformation)}
                    </div>
                    <div>
                      <img src={require('./img/photo.jpg')} alt="my_photo"/>
                    </div>
                  </div>
                  <hr />
                  {content.skills.map(this.renderListOfSkills)}
                </div>
              )
            }}
          </LanguageContext.Consumer>
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default App;
