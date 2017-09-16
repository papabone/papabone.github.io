import {
  OPEN_MENU,
  CLOSE_MENU
} from '../constants/menu'

const initialState = {
  menuIsOpen: false,
  UI : {
    en : {
      main: {
        title: 'Home',
        desc: 'Main page'
      },
      desAbout: {
        title: 'About designer ',
        desc: 'Elena Ponomarenko'
      },
      desPort: {
        title: 'Designer\'s portfolio ',
        desc: 'Elena Ponomarenko'
      },
      devAbout: {
        title: 'About developer ',
        desc: 'Konstantin Filon'
      },
      devPort: {
        title: 'Developer’s portfolio ',
        desc: 'Konstantin Filon'
      },
    },
    ru : {
      main: {
        title: 'Главная',
        desc: 'Главная страница'
      },
      desAbout: {
        title: 'О дизайнере',
        desc: 'Елена Пономареноко'
      },
      desPort: {
        title: 'Портфолио дизайнера ',
        desc: 'Елена Пономареноко'
      },
      devAbout: {
        title: 'О разраьотчике ',
        desc: 'Константин Филон'
      },
      devPort: {
        title: 'Портфолио разработчика ',
        desc: 'Константин Филон'
      },
    }
  }
}

export default function toggleMenu(state = initialState, action) {

  switch (action.type) {
    case OPEN_MENU:
      return { ...state, menuIsOpen: true }

    case CLOSE_MENU:
      return { ...state, menuIsOpen: false }


    default:
      return state;
  }

}
