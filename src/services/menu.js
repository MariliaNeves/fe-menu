import { http } from './config'

export default {
  allMeals: () => {    
    return http.get('menu/meals')
  }
}