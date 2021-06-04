const today = new Date();
const limitYear = 2019;
export const URL_API_SERVER = "http://localhost:8003"
export const URL_ITEM_REWARD = "http://localhost:8003/api/items/"
export const URL_ITEM_REWARD_100 = "http://localhost:8003/api/items/item-reward/100/"
export const LIMIT_DATE_SEARCH = {
    year: limitYear,
    month: 7,
    initialYearRange: () => {
        let fullYear = today.getFullYear();
        let yearList = []
        for (let i= limitYear; i <= fullYear; i++){
           yearList.push(i)
        }
        return yearList
    },
    initialRange: 3,
    limitEndDate: () => {
        return today.getDate() >= 18 ? 1 : 2
    },
}