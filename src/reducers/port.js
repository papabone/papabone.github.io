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
            name: 'spa',
            title: 'SPA',
            desc: 'Single Page Application is the most flexible tool in the modern world. It allows you to develop bold solutions for business and entertainment. They give users experience likewise native software.',
            technologies: [ 'React','Redux','Webpack','SVG','ES6' ],
            customer: 'Freelanse'
          },
          {
            name: 'oldport',
            title: 'Promo',
            desc: 'I especially appreciate the opportunity to work on promotional-projects, where a high proportion of creativity and experimentation',
            technologies: [ 'HTML5','CSS','JS','Canvas','SVG','Animations','GSAP' ],
            customer: 'Freelanse'
          },
          {
            name: 'landings',
            title: 'landing pages',
            desc: 'I developed a lot of landing pages. All projects were developed on the basis of responsive layout, semantic, cross-browser code, as well as modern tools for optimizing code, multimedia objects.',
            technologies: [ 'HTML5','SCSS','JS','jQuery','Bootstrap','SVG','Gulp','Photoshop','Illustrator' ],
            customer: 'KMA.biz'
          },
        ],
        ru: [
          {
            name: 'spa',
            title: 'SPA',
            desc: 'Single Page Application - это наиболее гибкий инструмент в современном мире. Он позволяет разрабатывать смелые продуктовые и промо решения, давая конечному пользователю опыт работы близкий к софтверным инструментам.',
            technologies: [ 'React','Redux','Webpack','SVG','ES6' ],
            customer: 'Фриланс'
          },
          {
            name: 'oldport',
            title: 'Визитки',
            desc: 'В особенности я ценю возможность работы над промо-проектами. Они позволяют сполна раскрыть свой творческий потенциал и поэксперементировать.',
            technologies: [ 'HTML5','CSS','JS','Canvas','SVG','Animations','GSAP' ],
            customer: 'Фриланс'
          },
          {
            name: 'landings',
            title: 'Лэндинги',
            desc: 'Обладаю большим опытом создания посадочных страниц. Все проекты разрабатывались на основе адаптивной верстки, семантического, кросбраузерного кода, а также современных инструментов оптимизации кода и объектов мультимедиа.',
            technologies: [ 'HTML5','SCSS','JS','jQuery','Bootstrap','SVG','Gulp','Photoshop','Illustrator' ],
            customer: 'KMA.biz'
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
            quantityOfImg: 1
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
            name: 'ubear',
            title: 'uBear',
            desc: 'SPA - bla-bla-bla',
            shortDesc: 'Web application for...',
            type: 'web',
            infoTipe: 'scrin',
            linkURL: '/',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
          {
            name: 'ubear1',
            title: 'uBear1',
            desc: 'SPA - bla-bla-bla',
            shortDesc: 'Web application for...',
            type: 'branding',
            infoTipe: 'scrin',
            linkURL: '/',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
          {
            name: 'tmarket1',
            title: 'T-Market1',
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
            name: 'ubear',
            title: 'uBear',
            desc: 'SPA - bla-bla-bla',
            shortDesc: 'Web application for...',
            type: 'web',
            infoTipe: 'scrin',
            linkURL: '/',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
          {
            name: 'ubear1',
            title: 'uBear1',
            desc: 'SPA - bla-bla-bla',
            shortDesc: 'Web application for...',
            type: 'branding',
            infoTipe: 'scrin',
            linkURL: '/',
            bgColor: '#dbdbdb',
            quantityOfImg: 0
          },
          {
            name: 'tmarket1',
            title: 'T-Market1',
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
