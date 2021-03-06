import PlanningAreaMP14 from 'sg-heatmap/dist/predefined/URA_planning_area_mp14'
import PlanningAreaMP08 from 'sg-heatmap/dist/predefined/URA_planning_area_mp08'
import PlanningAreaMP98 from 'sg-heatmap/dist/predefined/URA_planning_area_mp98'
import SubzoneMP14 from 'sg-heatmap/dist/predefined/URA_subzone_mp14'
import SubzoneMP08 from 'sg-heatmap/dist/predefined/URA_subzone_mp08'
import SubzoneMP98 from 'sg-heatmap/dist/predefined/URA_subzone_mp98'

import DwellingTypeData from '../../data/raw/DwellingType.json'
import ResidentTotalData from '../../data/raw/Resident.Total.json'
import ResidentMaleData from '../../data/raw/Resident.Male.json'
import ElectricityData from '../../data/raw/Electricity.json'

import {ONEMAP_ENDPOINTS, YEAR2MAP,
  DWELLING_TYPES_BLANK, RESIDENT_BLANK, ELECTRICITY_BLANK} from './constants'

import omit from 'lodash/omit'

export class Census2015 extends PlanningAreaMP14 {
  constructor () {
    super()
    this.registerUpdater(upsertValueAtPath)
    matchPlanningAreaName(this)
    ONEMAP_ENDPOINTS.forEach(ep => {
      const data = require('../../data/raw/' + ep + '.json')
      data.filter(d => d.year === 2015).forEach(d => {
        const path = ['2015', ep]
        if (d.gender) path.push(d.gender)
        this.update({planningArea: d.planning_area.toUpperCase()}, {
          path: path,
          value: omit(d, ['id', 'year', 'planning_area', 'gender'])
        })
      })
    })
  }
}

export class Census2010 extends PlanningAreaMP08 {
  constructor () {
    super()
    this.registerUpdater(upsertValueAtPath)
    matchPlanningAreaName(this)
    ONEMAP_ENDPOINTS.forEach(ep => {
      const data = require('../../data/raw/' + ep + '.json')
      data.filter(d => d.year === 2010).forEach(d => {
        const path = ['2010', ep]
        if (d.gender) path.push(d.gender)
        this.update({planningArea: d.planning_area.toUpperCase()}, {
          path: path,
          value: omit(d, ['id', 'year', 'planning_area', 'gender'])
        })
      })
    })
  }
}

export class Census2000 extends PlanningAreaMP98 {
  constructor () {
    super()
    this.registerUpdater(upsertValueAtPath)
    matchPlanningAreaName(this)
    ONEMAP_ENDPOINTS.forEach(ep => {
      const data = require('../../data/raw/' + ep + '.json')
      data.filter(d => d.year === 2000).forEach(d => {
        const path = ['2000', ep]
        if (d.gender) path.push(d.gender)
        this.update({planningArea: d.planning_area.toUpperCase()}, {
          path: path,
          value: omit(d, ['id', 'year', 'planning_area', 'gender'])
        })
      })
    })
  }
}

export class PopulationSubzoneMP14 extends SubzoneMP14 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchSubzoneName(this)

    YEAR2MAP['mp14'].forEach(processPopulationData().bind(this))
  }
}

export class PopulationSubzoneMP08 extends SubzoneMP08 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchSubzoneName(this)

    YEAR2MAP['mp08'].forEach(processPopulationData().bind(this))
  }
}

export class PopulationSubzoneMP98 extends SubzoneMP98 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchSubzoneName(this)

    YEAR2MAP['mp98'].forEach(processPopulationData().bind(this))
  }
}

export class PopulationPlanningAreaMP14 extends PlanningAreaMP14 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchPlanningAreaName(this)

    YEAR2MAP['mp14'].forEach(processPopulationData().bind(this))
  }
}

export class PopulationPlanningAreaMP08 extends PlanningAreaMP08 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchPlanningAreaName(this)

    YEAR2MAP['mp08'].forEach(processPopulationData().bind(this))
  }
}

export class PopulationPlanningAreaMP98 extends PlanningAreaMP98 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchPlanningAreaName(this)

    YEAR2MAP['mp98'].forEach(processPopulationData().bind(this))
  }
}

export class ElectricityConsumption extends PlanningAreaMP08 {
  constructor () {
    super()
    this.registerUpdater(customUpdater)
    matchPlanningAreaName(this)

    YEAR2MAP['electricity'].forEach(processElectricityData().bind(this))
  }
}

function processPopulationData () {
  return function (year) {
    const pathH = [year, 'DwellingType']
    const pathT = [year, 'Resident', 'Total']
    const pathM = [year, 'Resident', 'Male']

    DwellingTypeData[pathH.join('.')].forEach(record => {
      this.update({
        planningArea: record.PLN_AREA_N,
        subzone: record.SUBZONE_N
      }, {
        path: pathH,
        record: record,
        template: DWELLING_TYPES_BLANK
      })
    })

    ResidentTotalData[pathT.join('.')].forEach(record => {
      this.update({
        planningArea: record.PLN_AREA_N,
        subzone: record.SUBZONE_N
      }, {
        path: pathT,
        record: record,
        template: RESIDENT_BLANK
      })
    })

    ResidentMaleData[pathM.join('.')].forEach(record => {
      this.update({
        planningArea: record.PLN_AREA_N,
        subzone: record.SUBZONE_N
      }, {
        path: pathM,
        record: record,
        template: RESIDENT_BLANK
      })
    })

    this.children.forEach(c => {
      Object.keys(c.state).forEach(year => {
        if (!('Resident' in c.state[year])) return
        if (!('Total' in c.state[year]['Resident']) || !('Male' in c.state[year]['Resident'])) return

        c.state[year]['Resident']['Female'] = {}
        Object.keys(RESIDENT_BLANK).forEach(k => {
          c.state[year]['Resident']['Female'][k] =
            c.state[year]['Resident']['Total'][k] -
            c.state[year]['Resident']['Male'][k]
        })
      })
    })
  }
}

function processElectricityData () {
  return function (year) {
    const path = [year, 'Electricity']

    ElectricityData[path.join('.')].forEach(record => {
      this.update({
        planningArea: record.PLN_AREA_N
      }, {
        path: path,
        record: record,
        template: ELECTRICITY_BLANK
      })
    })
  }
}

function upsertValueAtPath ({path, value}, state) {
  let key
  [key, ...path] = path
  if (path.length > 0) {
    state[key] = state[key] || {}
    upsertValueAtPath({path, value}, state[key])
  } else {
    state[key] = value
  }
  return state
}

function incrementValueAtPath ({path, value}, state) {
  let key
  [key, ...path] = path
  if (path.length > 0) {
    state[key] = state[key] || {}
    incrementValueAtPath({path, value}, state[key])
  } else {
    state[key] = state[key] || 0
    state[key] += value
  }
  return state
}

function customUpdater ({path, record, template}, state) {
  Object.keys(template).forEach(key => {
    incrementValueAtPath({path: [...path, key], value: record[key]}, state)
  })
  return state
}

function matchPlanningAreaName (heatmap) {
  function inside (key) {
    return key.planningArea === this.properties.Planning_Area_Name
  }
  heatmap.bin = function (key) {
    key.planningArea = key.planningArea.replace('/', ' & ')
    return heatmap.children.filter(c => inside.call(c, key))
  }
}

function matchSubzoneName (heatmap) {
  function inside (key) {
    return key.planningArea === this.properties.Planning_Area_Name &&
           key.subzone === this.properties.Subzone_Name
  }
  heatmap.bin = function (key) {
    key.planningArea = key.planningArea.replace('/', ' & ')
    key.subzone = key.subzone.replace('/', ' & ')
    return heatmap.children.filter(c => inside.call(c, key))
  }
}
