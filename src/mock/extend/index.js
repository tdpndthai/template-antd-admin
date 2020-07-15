import Mock from 'mockjs'
import { logos, sayings, positions, avatars, admins } from '../common'

const Random = Mock.Random

const timeList = [
  {
    US: 'Good morning',
  }, {

    US: 'Good morning',
  }, {

    US: 'Good afternoon',
  }, {

    US: 'Good evening',
  },
]

const welcomeMessages = [
  {

    US: 'you may need a break',
  },
  {

    US: 'what are you going to eat',
  },
  {

    US: 'how about a game of DOTA',
  },
  {

    US: 'i guess you might be tired',
  }
]

Random.extend({
  admin() {
    return this.pick(admins)
  },
  welcome() {
    return this.pick(welcomeMessages)
  },
  timeFix() {
    const time = new Date()
    const hour = time.getHours()
    return hour < 9 ? timeList[0] : (hour <= 11 ? timeList[1] : (hour <= 13 ? timeList[2] : (hour <= 20 ? timeList[3] : timeList[4])))
  },
  avatar() {
    return this.pick(avatars)
  },
  position() {
    return this.pick(positions)
  },
  saying() {
    return this.pick(sayings)
  },
  logo() {
    return this.pick(logos)
  }
})
