import { users, groups } from './index'

const events = [
  {
    type: 0,
    event: 'August iteration'
  },
  {
    type: 1,
    event: 'Leave a message'
  },
  {
    type: 2,
    event: 'Project Progress'
  }
]

const activities = users.map((user, index) => {
  return {
    user: Object.assign({}, user, { group: groups[user.groupId] }),
    activity: events[index % events.length],
    template: ''
  }
})

const templates = [
  (user, activity) => { return `${user.name} In <a >${user.group}</a> New Project <a>${activity.event}</a>` },
  (user, activity) => { return `${user.name} In <a >${user.group}</a> Announced <a>${activity.event}</a>` },
  (user, activity) => { return `${user.name} Will <a >${activity.event}</a> Update to published state` }
]

export { activities, templates }
