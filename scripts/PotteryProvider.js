let id = 1

const potteryCollection = [
    
]

const pieceOfPotteryFactory = (shape, weight, height) => {
    let pieceOfPottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: id
    }

    id++

    return pieceOfPottery
}


const kiln = (potteryObject, kilnTemperature) => {
    potteryObject.fired = true
    if (kilnTemperature > 2200) {
        potteryObject.cracked = true
    } else if (kilnTemperature <= 2200) {
        potteryObject.cracked = false
    }
    return potteryObject
    }

const pieceOfPotteryToSell = pieceOfPottery => {
    if (pieceOfPottery) {
        
    } else {
        
    }
}

export const usePottery = () => {
    return potteryCollection.slice()
}