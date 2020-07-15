const operation1 = [
  {
    key: 'op1',
    type: 'Ordering relationship effective',
    name: 'Qu Lili',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-'
  },
  {
    key: 'op2',
    type: 'Financial review',
    name: 'Fu Xiaoxiao',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: '不通过原因'
  },
  {
    key: 'op3',
    type: 'Departmental Preliminary Examination',
    name: 'Zhou Maomao',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-'
  },
  {
    key: 'op4',
    type: 'Submit orders',
    name: 'Lin Dongdong',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '很棒'
  },
  {
    key: 'op5',
    type: 'Create Order',
    name: 'Sweaty teeth',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-'
  }
]

const operation2 = [
  {
    key: 'op2',
    type: 'Financial review',
    name: 'Fu Xiaoxiao',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: '不通过原因'
  },
  {
    key: 'op3',
    type: 'Departmental Preliminary Examination',
    name: 'Zhou Maomao',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-'
  },
  {
    key: 'op4',
    type: 'Submit orders',
    name: 'Lin Dongdong',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '很棒'
  }
]

const operation3 = [
  {
    key: 'op2',
    type: 'Financial review',
    name: 'Fu Xiaoxiao',
    status: 'reject',
    updatedAt: '2017-10-03  19:23:12',
    memo: '不通过原因'
  },
  {
    key: 'op3',
    type: 'Departmental Preliminary Examination',
    name: 'Zhou Maomao',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-'
  }
]

const operationColumns = [
  {
    title: 'Operation type',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'Operator',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Results of the',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Operating time',
    dataIndex: 'updatedAt',
    key: 'updatedAt'
  },
  {
    title: 'Remarks',
    dataIndex: 'memo',
    key: 'memo'
  }
]

export {operation1, operation2, operation3, operationColumns}
