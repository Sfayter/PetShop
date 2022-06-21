import { Router } from "express"

//importando os controllers
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'

//criando a variavel para a rota

const router = Router()

//criar a rota home
router.get('/',pageController.home)
router.get('/dogs',pageController.dogs)
router.get('/cats',pageController.cats)
router.get('/fishes',pageController.fishes)

export default router