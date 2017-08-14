import {
  TAB_NUM_DEV,
  TAB_NUM_DES,
  FILTER_PROJECT,
} from '../constants/port'

const initialState = {
  tabNumDev : 0 ,
  projectFilter : 'web',
  tabNumDes : 0 ,
  portfolio : {
    dev : {
      projects : [
        {
          name: 'landings',
          title: 'Lands',
          desc: 'I’m a freelance Front End Developer based in London.I specialise in creating interactive experiences and user-friendly interfaces whilst maintaining semantic, clean markup and SEO friendly code.',
          technologies: [ 'Adobe', 'Photoshop', 'Adobe', 'Illustrator', 'Photoshop', 'Adobe', 'Photoshop', 'Adobe', 'Photoshop' ],
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
      terms : {
        customer : 'Сustomer:',
        technologies: 'Technologies:'
      }
    },
    des : {
      projects : [
        {
          name: 'kurortguru',
          title: 'Kurort Guru',
          desc: '0I’m a freelance Front End Developer based in London.I specialise in creating interactive experiences and user-friendly interfaces whilst maintaining semantic, clean markup and SEO friendly code.',
          type: 'web'
        },
        {
          name: 'gem',
          title: 'The Gem',
          desc: 'I’m a freelance ning semantic, clean markup and SEO friendly code.',
          type: 'web'
        },
        {
          name: 'goodlook',
          title: 'Goodlook',
          desc: 'SPA - bla-bla-bla',
          type: 'web'
        },
        {
          name: 'goodlook1',
          title: 'Goodlook',
          desc: 'SPA - bla-bla-bla',
          type: 'branding'
        },
        {
          name: 'goodlook2',
          title: 'Goodlook',
          desc: '111 - bla-bla-bla',
          type: 'branding'
        },
      ],
      terms : {
        about : 'About:',
      },
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

    default:
      return state;
  }

}
