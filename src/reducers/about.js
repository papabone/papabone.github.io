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
        about: 'I\'m freelance designer with 4+ years experienced in Web UI/UX and graphic Design Area. I have build more 200+  user interface and worked on a few other startups. ',
        skills: ['Adobe Photoshop','Adobe Illustrator'],
        education: [
          'European Humanities University. Media and visual design.',
          'Belarusian Trade and Economics University. Marketing.'
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
        about: 'I\'m freelance designer with 4+ years experienced in Web UI/UX and graphic Design Area. I have build more 200+  user interface and worked on a few other startups. ',
        skills: ['Photoshop','Illustrator','Adobe','SCSS','Gulp','JS','WebPack','Etc.'],
        contacts: {
          mail : 'PonomarenkoHelen3@gmai.com',
          git : 'https://github.com/papabone'
        }
      },
      ru: {
        about: 'I\'m freelance designer with 4+ years experienced in Web UI/UX and graphic Design Area. I have build more 200+  user interface and worked on a few other startups. ',
        skills: ['Photoshop','Illustrator','Adobe','SCSS','Gulp','JS','WebPack','Etc.'],
        contacts: {
          mail : 'PonomarenkoHelen3@gmai.com',
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
