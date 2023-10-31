const router = require('express').Router()
const facilitiesModel = require('../Model/facilitiesModel')
const auth = require('../authentication/auth')

router.post('/add', facilitiesModel.createNewFacility)
router.get('/', facilitiesModel.getAllFacilities)
router.get('/:id', facilitiesModel.getFacilityById)
router.put('/:id', facilitiesModel.uppdateFacility)
router.delete('/:id', facilitiesModel.deleteFacility)


// router.post('/add', auth.verifyTokenAdmin, packageModel.createNewPackage)
// router.get('/', packageModel.getAllPackage)
// router.get('/:id', packageModel.getAllPackage)
// router.put('/:id', auth.verifyTokenAdmin, packageModel.uppdatePackage)
// router.delete('/:id', auth.verifyTokenAdmin, packageModel.deletePackage)

module.exports = router;