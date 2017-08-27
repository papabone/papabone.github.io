const initialState = {
  UI : {
    des : {
      en: {
        about: 'About',
        portfolio: 'Portfolio',
      },
      ru: {
        about: 'Обо мне',
        portfolio: 'Портфолио',
      },
    },
    dev : {
      en: {
        about: 'About',
        portfolio: 'Portfolio',
      },
      ru: {
        about: 'Обо мне',
        portfolio: 'Портфолио',
      },
    },
  }
}

export default function main(state = initialState, action) {

  switch (action.type) {

    default:
      return state;
  }

}
