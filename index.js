exports.typeMap = {
  avail: 'available',
  exec: 'execution',
  pcmt: 'programComment',
  pgm: 'program',
  spcmt: 'subComment',
  spgm: 'subProgram',
  pc: 'partCount',
  tid2: 'toolGroup',
  tid: 'toolNumber',
  tid3: 'toolSuffix',
  // door: 'door',
  // pltnum: 'pallet',
  // ln: 'lineNumber',
  // seq: 'sequenceNumber',
  // unit: 'unitNumber',
  estop: 'estop',
  execution: 'execution',
  emloaded: 'emloaded',
  // emoperating: 'emoperating',
  // empowered: 'empowered',
  // emworking: 'emworking',
  program_cmt: 'programComment',
  program: 'program',
  subprogram_cmt: 'subComment',
  subprogram: 'subProgram',
  PartCountAct: 'partCount',
  Tool_group: 'toolGroup',
  Tool_number: 'toolNumber',
  Tool_suffix: 'toolSuffix',
  // doorstate: 'door',
  // pallet_num: 'pallet',
  // linelabel: 'lineLabel',
  // linenumber: 'lineNumber',
  // sequenceNum: 'sequenceNumber',
  // unitNum: 'unitNumber',
  pfr: 'rapidOver',
  pfo: 'feedOver',
  Sovr: 'spindleOver',
  pfr2: 'rapidOver2',
  pfo2: 'feedOver2',
  S2ovr: 'spindleOver2',
  pgm2: 'program2',
  spgm2: 'subProgram2',
  tid1: 'toolGroup',
  tsuf1: 'toolSuffix',
  // ln2: 'lineNumber2',
  // unit2: 'unitNumber2',
  // seq2: 'sequenceNumber2',
  pc2: 'partCount2',
  tid2: 'toolNumber2',
  tid5: 'toolGroup2',
  tsuf6: 'toolSuffix2',
  exec2: 'execution2',
  pcmt2: 'programComment2',
  spcmt2: 'subComment2',
  Frapidovr: 'rapidOver',
  Fovr: 'feedOver',
  Sovr: 'spindleOver'
}

exports.oneThreeRegex = /[a,c,s,w,x,y,z]l[0-9]*\b/

exports.oneFourRegex = /[B,C,S,W,X,Y,Z][0-9]*load\b/

exports.load = /[a,b,c,s,w,x,y,z][0-8]*Load\b/

exports.expandProperties = {
  available: {
    label: 'Available'
  },
  door: {
    label: 'Door',
    component: 'pathData'
  },
  emloaded: {
    label: 'EM-Loaded'
  },
  emoperating: {
    label: 'EM-Operating'
  },
  empowered: {
    label: 'EM-Powered'
  },
  emworking: {
    label: 'EM-Working'
  },
  estop: {
    label: 'E-Stop',
    component: 'pathData'
  },
  execution: {
    label: 'Execution'
  },
  execution2: {
    label: 'Execution 2'
  },
  feedOver: {
    label: 'Feed Override',
    maxValue: 200
  },
  feedOver2: {
    label: 'Feed Override 2',
    maxValue: 200
  },
  lineLabel: {
    label: 'Line Label',
    component: 'pathData'
  },
  lineNumber: {
    label: 'Line Number',
    component: 'pathData'
  },
  lineNumber2: {
    label: 'Line Number 2',
    component: 'pathData'
  },
  pallet: {
    label: 'Pallet',
    component: 'pathData'
  },
  partCount: {
    label: 'Part Count',
    component: 'pathData'
  },
  partCount2: {
    label: 'Part Count 2',
    component: 'pathData'
  },
  program: {
    label: 'Program',
    component: 'pathData'
  },
  program2: {
    label: 'Program 2',
    component: 'pathData'
  },
  programComment: {
    label: 'Program Comment',
    component: 'pathData'
  },
  programComment2: {
    label: 'Program Comment 2',
    component: 'pathData'
  },
  rapidOver: {
    label: 'Rapid Override',
    maxValue: 100
  },
  rapidOver2: {
    label: 'Rapid Override 2',
    maxValue: 100
  },
  sequenceNumber: {
    label: 'Sequence Number',
    component: 'pathData'
  },
  sequenceNumber2: {
    label: 'Sequence Number 2',
    component: 'pathData'
  },
  spindleOver: {
    label: 'Spindle Override',
    maxValue: 150
  },
  spindleOver2: {
    label: 'Spindle Override 2',
    maxValue: 150
  },
  subComment: {
    label: 'Subprogram Comment',
    component: 'pathData'
  },
  subComment2: {
    label: 'Subprogram Comment 2',
    component: 'pathData'
  },
  subProgram: {
    label: 'Subprogram',
    component: 'pathData'
  },
  subProgram2: {
    label: 'Subprogram 2',
    component: 'pathData'
  },
  toolGroup: {
    label: 'Tool Group',
    component: 'pathData'
  },
  toolGroup2: {
    label: 'Tool Group 2',
    component: 'pathData'
  },
  toolNumber: {
    label: 'Tool Number',
    component: 'pathData'
  },
  toolNumber2: {
    label: 'Tool Number 2',
    component: 'pathData'
  },
  toolSuffix: {
    label: 'Tool Suffix',
    component: 'pathData'
  },
  toolSuffix2: {
    label: 'Tool Suffix 2',
    component: 'pathData'
  },
  unitNumber: {
    label: 'Unit Number',
    component: 'pathData'
  },
  unitNumber2: {
    label: 'Unit Number 2',
    component: 'pathData'
  }
}