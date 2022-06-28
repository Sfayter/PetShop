import {Request, Response} from 'express'
import { createMenuObjetcs } from '../helpers/CreateMenuObjects'
import { Pet } from '../models/pet'

export const home = (req:Request, res:Response)=>{

    let list = Pet.getAll()

    res.render("pages/pages", {
        menu:createMenuObjetcs('all'),
        banner: {
            title:'Cantinho dos Pets!',
            background: 'allanimals.jpg'
        },
        list
    })
}

export const dogs = (req:Request, res:Response) =>{

    let list = Pet.getFromType('dog')

    res.render("pages/pages", {
        menu:createMenuObjetcs('dog'),
        banner: {
            title:'Cantinho dos Cachorros!',
            background:'banner_dog.jpg'
        },
        list
    })
}

export const cats = (req:Request, res:Response) =>{

    let list = Pet.getFromType('cat')

    res.render("pages/pages", {
        menu:createMenuObjetcs('cat'),
        banner: {
            title:'Cantinho dos Gatos!',
            background:'banner_cat.jpg'
        },
        list
    })
}

export const fishes = (req:Request, res:Response) =>{

    let list = Pet.getFromType('fish')

    res.render("pages/pages", {
        menu:createMenuObjetcs('fish'),
        banner: {
            title:'Cantinho dos Peixes!',
            background:'banner_fish.jpg'
        },
        list
    })
}