const optionsLetter = [
    {code:'192', eng:'~', ru:'ё'},
    {code:'49',eng:'1',ru:'1',shift:'!'},
    {code:'50', eng:'2', ru:'2',shift:'@'},
    {code:'51',eng:'3',ru:'3',shift:'#'},
    {code:'52', eng:'4', ru:'4',shift:'$'},
    {code:'53',eng:'5',ru:'5',shift:'%'},
    {code:'54', eng:'6', ru:'6',shift:'^'},
    {code:'55',eng:'7',ru:'7',shift:'&'},
    {code:'56', eng:'8', ru:'8',shift:'*'},
    {code:'57',eng:'9',ru:'9',shift:'('},
    {code:'48', eng:'0', ru:'0',shift:')'},
    {code:'189',eng:'-',ru:'-'},
    {code:'187', eng:'=', ru:'+'},
    {code:'8', eng:'Backspace', ru:'Backspace',fun:'1'},
    //
    {code:'9',eng:'Tab',ru:'Tab',fun:'1'},
    {code:'81',eng:'q',ru:'й'},
    {code:'87', eng:'w', ru:'ц'},
    {code:'69',eng:'e',ru:'у'},
    {code:'82', eng:'r', ru:'к'},
    {code:'84',eng:'t',ru:'е'},
    {code:'89', eng:'y', ru:'н'},
    {code:'85',eng:'u',ru:'г'},
    {code:'73', eng:'i', ru:'ш'},
    {code:'79',eng:'o',ru:'щ'},
    {code:'80', eng:'p', ru:'з'},
    {code:'219',eng:'[',ru:'х'},
    {code:'221', eng:']', ru:'ъ'},
    {code:'227',eng:'/',ru:'/'},
    {code:'46', eng:'Del', ru:'Del',fun:'1'},
    //
    {code:'20', eng:'CapsLock', ru:'CapsLock',fun:'1'},
    {code:'65',eng:'a',ru:'ф'},
    {code:'83', eng:'s', ru:'ы'},
    {code:'68',eng:'d',ru:'в'},
    {code:'70', eng:'f', ru:'а'},
    {code:'71',eng:'g',ru:'п'},
    {code:'72', eng:'h', ru:'р'},
    {code:'74',eng:'j',ru:'о'},
    {code:'75', eng:'k', ru:'л'},
    {code:'76',eng:'l',ru:'д'},
    {code:'186', eng:';', ru:'ж'},
    {code:'222',eng:' ',ru:'э'},
    {code:'13', eng:'Enter', ru:'Enter',fun:'1'},
    //
    {code:'16', eng:'Shift', ru:'Shift',fun:'1'},
    {code:'90', eng:'z', ru:'я'},
    {code:'88',eng:'x',ru:'ч'},
    {code:'67', eng:'c', ru:'с'},
    {code:'86',eng:'v',ru:'м'},
    {code:'66', eng:'b', ru:'и'},
    {code:'78',eng:'n',ru:'т'},
    {code:'77', eng:'m', ru:'ь'},
    {code:'188',eng:',',ru:'б'},
    {code:'190', eng:'.', ru:'ю'},
    {code:'191',eng:'/',ru:'ю'},
    {code:'111',eng:'/',ru:','},
    {code:'38', eng:'Up', ru:'Up',fun:'1'},
    {code:'16',eng:'Shift',ru:'Shift',fun:'1'},
    //
    {code:'17', eng:'Cntr', ru:'Cntr',fun:'1'},
    {code:'91',eng:'Win',ru:'Win',fun:'1'},
    {code:'18', eng:'Alt', ru:'Alt',fun:'1'},
    {code:'32',eng:`\u0020`,ru:'\u0020'},
    {code:'18', eng:'Alt', ru:'Alt',fun:'1'},
    {code:'17',eng:'Cntr',ru:'Cntr',fun:'1'},
    {code:'37', eng:'Left', ru:'Left',fun:'1'},
    {code:'40',eng:'Down',ru:'Down',fun:'1'},
    {code:'39', eng:'Right', ru:'Right',fun:'1'}
]