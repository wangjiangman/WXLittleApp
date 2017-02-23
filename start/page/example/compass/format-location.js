function formatLocation(longitude, latitude) {
  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.').join('°') + '′',
    latitude: latitude.toString().split('.').join('°') + '′'
  }
}

module.exports = formatLocation