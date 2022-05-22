const express = require('express');
const router = express.Router();
const financescltr = require('../controllers/finance.controller')
const auth = require('../middlewares/authentication')
router.get('/totalfinance',auth,financescltr.getFinanceTotal);

router.get('/', auth,financescltr.getFinancess);

router.get('/:id', auth,financescltr.getFinancessById);


router.post('/', auth,financescltr.addFinance);

router.patch('/:id',auth,financescltr.updateFinance)

module.exports = router;