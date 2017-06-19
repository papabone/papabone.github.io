import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL,
  GET_PHOTOS_AUTH_ERR
} from '../constants/page'

let photosArr = []
let cached = false

function makeYearPhotos(photos, selectedYear) {
  let createdYear, yearPhotos = []

  photos.forEach((item) => {
    createdYear = new Date(item.created*1000).getFullYear()
    if (createdYear === selectedYear ) {
      yearPhotos.push(item)
    }
  })

  yearPhotos.sort((a,b) => b.likes.count-a.likes.count);

  return yearPhotos
}

function getMorePhotos(offset, count, year, dispatch) {
  VK.Api.call('photos.getAll', { // eslint-disable-line no-undef
    extended: 1,
    count: count,
    offset: offset
  },(r) => {
    try {
      if (offset <= r.response[0] - count) {
        offset+=200;
        photosArr = photosArr.concat(r.response)
        getMorePhotos(offset,count,year,dispatch)
      } else {
        let photos = makeYearPhotos(photosArr, year)
        cached = true
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: photos
        })
      }
    }
    catch(e) {
      dispatch({
        type: GET_PHOTOS_FAIL,
        error: true,
        payload: new Error(e)
      })
    }

  })
}

export function getPhotos(year, name) {

  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })

    if(name == ''){
      dispatch({
        type: GET_PHOTOS_AUTH_ERR,
        error: true,
        payload: new Error('Ошибка авторизации')
      })
    } else if (cached) {
      let photos = makeYearPhotos(photosArr, year)
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: photos
      })
    } else {
      getMorePhotos(0,200,year,dispatch)
    }

  }
}