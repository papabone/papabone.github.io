const initialState = {
  UI : {
    header: {
      en : {
        des : {
          profession: 'Designer',
          name: 'Elena Ponomarenko',
          keyword : 'Web development. Graphic design.'
        },
        dev : {
          profession: 'Developer',
          name: 'Konstantin Filon',
          keyword : 'Web development.'
        },
      },
      ru : {
        des: {
          profession: 'Дизайнер',
          name: 'Елена Пономареноко',
          keyword : 'Веб дизайн. Графический дизайн'
        },
        dev: {
          profession: 'Разработчик',
          name: 'Константин Филон',
          keyword : 'Веб разработка.'
        },
      }
    },
    middle: {
      en : {
        frontEnd: 'Front End',
        development : 'Development',
        branding : 'Branding'
      },
      ru : {
        frontEnd: 'Фронт-Энд',
        development : 'Разработка',
        branding : 'Брэндинг'
      }
    },
    footer: {
      en : {
        en: 'en',
        ru : 'ru',
        moreInf: 'More information'
      },
      ru : {
        en: 'анг',
        ru : 'ру',
        moreInf: 'Подробнее'
      }
    },
  }
}

export default function shell(state = initialState, action) {

  switch (action.type) {

    default:
      return state;
  }

}
