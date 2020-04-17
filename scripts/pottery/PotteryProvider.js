let id = 1

const potteryToSell = [
    {
        shape: "Kylix",
        weight: 1,
        height: 2,
        cracked: false,
        fired: true,
        kilnTemperature: 2000,
        price: 20,
        id: 1
    },
    {
        shape: "Pelike",
        weight: 2,
        height: 2,
        cracked: false,
        fired: true,
        kilnTemperature: 2100,
        price: 20,
        id: 2
    },
    {
        shape: "Olpe",
        weight: 3,
        height: 3,
        cracked: false,
        fired: true,
        kilnTemperature: 2000,
        price: 40,
        id: 3
    },
    {
        shape: "Oinochoe",
        weight: 4,
        height: 4,
        cracked: false,
        fired: true,
        kilnTemperature: 2100,
        price: 40,
        id: 4
    },
    {
        shape: "bell krater",
        weight: 4,
        height: 4,
        cracked: false,
        fired: true,
        kilnTemperature: 1000,
        price: 40,
        id: 4
    }
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
    if (!pieceOfPottery.cracked) {
        if (pieceOfPottery.weight > 3) {
            pieceOfPottery.price = 40
        } else if (pieceOfPottery.weight < 3) {
            pieceOfPottery.price = 20
        }
    } 
    return pieceOfPottery
}

export const usePottery = () => {
    return potteryToSell.slice()
}