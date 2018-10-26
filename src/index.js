//UTILS

const importScript = (path, callback) => {
  let imported = document.createElement('script')
  imported.src = path
  imported.onload = callback
  document.head.appendChild(imported)
}

const importLink = path => {
  let imported = document.createElement('link')
  imported.href = path
  imported.rel = 'stylesheet'
  imported.type = 'text/css'
  document.head.appendChild(imported)
}

const createCanvas = (width, height) => {
  const canvas = document.createElement('canvas')
  width && canvas.setAttribute('width', width)
  height && canvas.setAttribute('height', height)
  return canvas
}

// ECHARTS
const echart = (elementId, options) => {
  importScript('../lib/echarts/echarts.min.js', () =>
    echartCallback(elementId, options)
  )
}

const echartCallback = (elementId, options) => {
  const chart = echarts.init(document.getElementById(elementId))
  chart.setOption(options)
}

//MORRIS
const morris = (type, options) => {
  importLink('../lib/morris/morris.css')
  importScript('../lib/jquery.min.js')
  importScript('../lib/morris/raphael.min.js')
  setTimeout(() => {
    importScript('../lib/morris/morris.min.js', () =>
      morrisCallback(type, options)
    )
  }, 500)
}

const morrisCallback = (type, options) => {
  new Morris[`${type}`](options)
}

//chartist
const chartist = (element, type, options, optionsView) => {
  importLink('../lib/chartist/chartist.min.css')
  importScript('../lib/chartist/chartist.min.js', () =>
    chartistCallback(element, type, options, optionsView)
  )
}

const chartistCallback = (element, type, options, optionsView) => {
  new Chartist[`${type}`](`${element}`, options, optionsView)
}

//CHART
const chart = (elementId, options) => {
  importScript('../lib/chart/chart.min.js', () =>
    chartCallback(elementId, options)
  )
}

const chartCallback = (elementId, options) => {
  const element = document.getElementById(elementId)
  let canvas = element
  if (canvas.tagName != 'CANVAS') {
    canvas = createCanvas(element.offsetWidth, element.offsetHeight)
    element.appendChild(canvas)
  }
  const ctx = canvas.getContext('2d')
  new Chart(ctx, options)
}

const ChartLibrary = { echart, morris, chartist, chart }
