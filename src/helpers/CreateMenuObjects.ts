type menuOptions = ''|'all'|'dog'|'cat'|'fish'
export const createMenuObjetcs = (activeMenu: menuOptions) =>{

    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }
    return returnObject
}
