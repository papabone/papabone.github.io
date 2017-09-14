import {
  TAB_NUM_DEV,
  TAB_NUM_DES,
  FILTER_PROJECT,
  OPEN_PROJECT,
  CLOSE_PROJECT
} from '../constants/port'

const initialState = {
  tabNumDev : 0 ,
  projectFilter : 'web',
  tabNumDes : 0 ,
  projectIsOpen: false,
  portfolio : {
    dev : {
      projects : {
        en: [
          {
            name: 'landings',
            title: 'Lands',
            desc: 'I’m a freelance Front End Developer based in London.I specialise in creating interactive   experiences and user-friendly interfaces whilst maintaining semantic, clean markup and SEO  friendly code.',
            technologies: [ 'Adobe', 'Photoshop', 'Adobe', 'Illustrator', 'Photoshop', 'Adobe', 'Photoshop',  'Adobe', 'Photoshop' ],
            customer: 'KMA'
          },
          {
            name: 'oldport',
            title: 'Old Portfolio',
            desc: 'I’m a freelance ning semantic, clean markup and SEO friendly code.',
            technologies: [ 'Adobe', 'Photoshop', 'Adobe', 'Adobe', 'Photoshop', 'Adobe', 'Photoshop' ],
            customer: 'Self'
          },
          {
            name: 'spa',
            title: 'SPA',
            desc: 'SPA - bla-bla-bla',
            technologies: [ 'React', 'Redux', 'Adobe', 'Adobe', 'Photoshop', 'Adobe', 'Photoshop' ],
            customer: 'Self'
          },
        ],
        ru: [
          {
            name: 'landings',
            title: 'Лэндинги',
            desc: 'по-русски I’m a freelance Front End Developer based in London.I specialise in creating interactive   experiences and user-friendly interfaces whilst maintaining semantic, clean markup and SEO  friendly code.',
            technologies: [ 'Adobe', 'Photoshop', 'Adobe', 'Illustrator', 'Photoshop', 'Adobe', 'Photoshop',  'Adobe', 'Photoshop' ],
            customer: 'KMA'
          },
          {
            name: 'oldport',
            title: 'Старая Визика',
            desc: 'По-русски I’m a freelance ning semantic, clean markup and SEO friendly code.',
            technologies: [ 'Adobe', 'Photoshop', 'Adobe', 'Adobe', 'Photoshop', 'Adobe', 'Photoshop' ],
            customer: 'Self'
          },
          {
            name: 'spa',
            title: 'SPA',
            desc: 'SPA - bla-bla-bla по-русски',
            technologies: [ 'React', 'Redux', 'Adobe', 'Adobe', 'Photoshop', 'Adobe', 'Photoshop' ],
            customer: 'Self'
          },
        ],
      },
      UI : {
        en: {
          title: 'Portfolio',
          customer : 'Сustomer:',
          technologies: 'Technologies:'
        },
        ru: {
          title: 'Портфолио',
          customer : 'Заказчик:',
          technologies: 'Технологии:'
        },
      }
    },
    des : {
      projects : {
        en : [
          {
            name: 'kurortguru',
            title: 'Kurort Guru',
            desc: '0I’m a freelance Front End Developer based in London.I specialise in creating interactive experiences and user-friendly interfaces whilst maintaining semantic, clean markup and SEO friendly code.',
            shortDesc: 'Web application for search resorts',
            type: 'web',
            infoTipe: 'scrin',
            linkURL: '/',
            bgColor: '#dbdbdb',
            quantityOfImg: 20
          },
          {
            name: 'gem',
            title: 'The Gem',
            desc: 'I’m a freelance ning semantic, clean markup and SEO friendly code.',
            shortDesc: 'Web application for...',
            type: 'web',
            infoTipe: 'scrin',
            linkURL: '/',
            bgColor: '#000',
            quantityOfImg: 0
          },
          {
            name: 'goodlook',
            title: 'Goodlook',
            desc: 'SPA - bla-bla-bla',
            shortDesc: 'Web application for...',
            type: 'web',
            infoTipe: 'link',
            linkURL: 'http://google.com',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
          {
            name: 'goodlook1',
            title: 'Goodlook',
            desc: 'SPA - bla-bla-bla',
            shortDesc: 'Web application for...',
            type: 'branding',
            infoTipe: 'scrin',
            linkURL: '/',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
          {
            name: 'goodlook2',
            title: 'Goodlook',
            desc: '111 - bla-bla-bla',
            shortDesc: 'Web application for...',
            type: 'branding',
            infoTipe: 'link',
            linkURL: 'http://google.com',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
        ],
        ru : [
          {
            name: 'kurortguru',
            title: 'Kurort Guru',
            desc: 'Бла бла',
            shortDesc: 'Web application for...',
            type: 'web',
            infoTipe: 'scrin',
            linkURL: '/',
            bgColor: '#dbdbdb',
            quantityOfImg: 20
          },
          {
            name: 'gem',
            title: 'The Gem',
            desc: 'По русски I’m a freelance ning semantic, clean markup and SEO friendly code.',
            shortDesc: 'Web application for...',
            type: 'web',
            infoTipe: 'scrin',
            linkURL: '/',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
          {
            name: 'goodlook',
            title: 'Goodlook',
            desc: 'SPA - bla-bla-bla',
            shortDesc: 'Web application for...',
            type: 'web',
            infoTipe: 'link',
            linkURL: 'http://google.com',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
          {
            name: 'goodlook1',
            title: 'Goodlook',
            desc: 'SPA - bla-bla-bla',
            shortDesc: 'Web application for...',
            type: 'branding',
            infoTipe: 'scrin',
            linkURL: '/',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
          {
            name: 'goodlook2',
            title: 'Goodlook',
            desc: '111 - bla-bla-bla',
            shortDesc: 'Web application for...',
            type: 'branding',
            infoTipe: 'link',
            linkURL: 'http://google.com',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
        ],
      },
      UI : {
        en : {
          title: 'Portfolio',
          web: 'WEB DESIGN',
          branding: 'BRANDING',
          about : 'About:',
          moreInfo : ['View screenshot', 'Visit site' ],
          prev: 'Prev',
          next: 'Next'
        },
        ru : {
          title: 'Портфолио',
          web: 'ВЭБ ДТЗАЙН',
          branding: 'БРЭНДИНГ',
          about : 'Описание:',
          moreInfo : ['Смотреть макет', 'Посетить сайт' ],
          prev: 'Пред',
          next: 'След'
        }
      }
    },
  }
}

export default function portfolio(state = initialState, action) {

  switch (action.type) {

    case TAB_NUM_DEV:
      return { ...state, tabNumDev: action.payload }

    case TAB_NUM_DES:
      return { ...state, tabNumDes: action.payload }

    case FILTER_PROJECT:
      return { ...state, projectFilter: action.payload, tabNumDes: 0 }

    case OPEN_PROJECT:
      return { ...state, projectIsOpen: true }

    case CLOSE_PROJECT:
      return { ...state, projectIsOpen: false }

    default:
      return state;
  }

}
