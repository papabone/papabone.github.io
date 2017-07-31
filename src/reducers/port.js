import {
  TAB_LANDINGS,
  TAB_OLD_PORT,
  TAB_SPA
} from '../constants/port'

const initialState = {
  tabName : 'landings',
  portfolio : {
    dev : {
      landings : {
        desc: 'I’m a freelance Front End Developer based in London.I specialise in creating interactive experiences and user-friendly interfaces whilst maintaining semantic, clean markup and SEO friendly code.',
        technologies: [ 'Adobe', 'Photoshop', 'Adobe', 'Illustrator', 'Photoshop', 'Adobe', 'Photoshop', 'Adobe', 'Photoshop' ],
        customer: 'KMA'
      },
      oldPort : {
        desc: 'I’m a freelance ning semantic, clean markup and SEO friendly code.',
        technologies: [ 'Adobe', 'Photoshop', 'Adobe', 'Adobe', 'Photoshop', 'Adobe', 'Photoshop' ],
        customer: 'Self'
      },
      SPA : {
        desc: 'SPA - bla-bla-bla',
        technologies: [ 'React', 'Redux', 'Adobe', 'Adobe', 'Photoshop', 'Adobe', 'Photoshop' ],
        customer: 'Self'
      },
    },
    terms : {
      customer : 'Сustomer:',
      technologies: 'Technologies:'
    }
  }
}

export default function portfolio(state = initialState, action) {

  switch (action.type) {
    case TAB_LANDINGS:
      return { ...state, tabName: action.payload }

    case TAB_OLD_PORT:
      return { ...state, tabName: action.payload }

    case TAB_SPA:
      return { ...state, tabName: action.payload }

    default:
      return state;
  }

}
