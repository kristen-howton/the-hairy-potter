export const Pottery = potteryObject => {
    return `
        <article class="pottery">
            <h3>Shape: ${potteryObject.shape}</h3>
            <section>Weight: ${potteryObject.weight}</section>
            <section>Height: ${potteryObject.height}</section>
            <section>Price: ${potteryObject.price}</section>
            <button id="potteryBtn--${potteryObject.id}">Sell</button>
        </article>
    `
}