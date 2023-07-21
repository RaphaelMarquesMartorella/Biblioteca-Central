const express = require('express')
const router = express.Router()

const {createDetail, getAllDetails, getDetail, updateDetail, deleteDetail} = require('../controllers/bookDetails')

router.post('/livros', createDetail)
router.get('/livros', getAllDetails).get('/livros/:id', getDetail)
router.put('/livros/:id', updateDetail)
router.delete('/livros/:id', deleteDetail)

module.exports = router