const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
]

const positions = [
  {
    US: 'Java engineer | Ant financial - Computing services business group - WeChat platform division'
  }, {
    US: 'Front-end engineer | Ant Financial - Computing services business group - VUE platform'
  }, {

    US: 'Front-end engineer | Ant Financial - Computing services business group - REACT platform'
  }, {

    US: 'Product analyst | Ant Financial - Computing services business group - IOS platform division'
  }
]

const sayings = [
  'It’s an inner thing, they can’t reach it, they can’t touch it.',
  'Hope is a good thing, maybe the best, good things will not die',
  'There are so many taverns in the town, but she just walked into my tavern',
  'At that time, I only wanted to think about what I wanted, and never wanted what I had.'
]

const logos = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'
]

const admins = ['ICZER', 'JACK', 'LUIS', 'DAVID']

const groups = ['High Force Design Sky Mission', 'S2 Girls Group', 'Scientific brick moving group', 'Trick you to learn computer', 'Programmer daily']

const users = [
  {
    name: 'Qu Lili',
    avatar: avatars[0],
    groupId: 0
  },
  {
    name: 'Fu Xiaoxiao',
    avatar: avatars[1],
    groupId: 0
  },
  {
    name: 'Lin Dongdong',
    avatar: avatars[2],
    groupId: 1
  },
  {
    name: '周星星',
    avatar: avatars[3],
    groupId: 2
  },
  {
    name: 'Zhu Biyou',
    avatar: avatars[4],
    groupId: 3
  },
  {
    name: 'Le Ge',
    avatar: avatars[5],
    groupId: 4
  }
]

const teams = groups.map((item, index) => {
  return {
    name: item,
    avatar: avatars[index]
  }
})

export { logos, sayings, positions, avatars, admins, groups, users, teams }
