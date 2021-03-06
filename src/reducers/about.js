const initialState = {
  des : {
    UI : {
      en: {
        title: 'About',
        about: 'About:',
        skills: 'Skills:',
        education: 'Education:',
        contacts: 'Contacts:',
      },
      ru: {
        title: 'Обо мне',
        about: 'Обо мне:',
        skills: 'Навыки:',
        education: 'Образование:',
        contacts: 'Контакты:',
      },
    },
    description : {
      en: {
        about: 'I\'m freelance designer with 4+ years experienced in Web UI/UX and graphic Design Area. I have build more 200+  user interface and worked on a few other startups.',
        skills: ['Adobe Photoshop','Adobe Illustrator'],
        education: [
          'European Humanities University. Media and visual design.',
          'Belarusian Trade and Economics University. Marketing.'
        ],
        contacts: 'PonomarenkoHelen3@gmai.com',
      },
      ru: {
        about: 'Я фрилансер с опытом работы более 4 лет в UI, UX и графическом дизайне. За всю практику работы создала более 200 сайтов, веб-приложений и графических проектов ',
        skills: ['Adobe Photoshop','Adobe Illustrator'],
        education: [
          'Евромейский гуманитарный университет. Визуальный дизайн и медиа.',
          'Белорусский торгово-экономический университет. Маркетинг.'
        ],
        contacts: 'PonomarenkoHelen3@gmai.com',
      },
    },
  },
  dev : {
    UI : {
      en: {
        title: 'About',
        about: 'About:',
        skills: 'Skills:',
        contacts: 'Contacts:',
      },
      ru: {
        title: 'Обо мне',
        about: 'Обо мне:',
        skills: 'Навыки:',
        contacts: 'Контакты:',
      },
    },
    description : {
      en: {
        about: 'I’m a freelance Front End Developer. I specialise in creating interactive and user-friendly  interfaces whilst maintaining semantic, clean markup. I have 2 years of commercial experience in development.',
        skills: ['JS','React','Redux','SCSS','SVG','ES6','WebPack','Gulp','Git'],
        contacts: {
          mail : 'papaboneq@gmail.com',
          git : 'https://github.com/papabone'
        }
      },
      ru: {
        about: 'Я независимый Фронт-энд разработчик. Cпециализируюсь на создании интерактивных доступных пользовательских интерфейсов, с семантической, чистой разметкой. Опыт коммерческой разработки - 2 года.',
        skills: ['JS','React','Redux','SCSS','SVG','ES6','WebPack','Gulp','Git'],
        contacts: {
          mail : 'papaboneq@gmai@gmail.com',
          git : 'https://github.com/papabone'
        }
      },
    },
  },
}

export default function about(state = initialState, action) {

  switch (action.type) {

    default:
      return state;
  }

}
