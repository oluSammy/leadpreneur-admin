export const getMonthlyReferrer = (arr, thisMonth) => {
    if(arr.length === 0) return 0;
    const monthReferrer = arr.map(obj => {
        const [key] = Object.entries(obj);
        const str = `${key}`.split(',');
        let thisMonthReferrer;
        if (str[0] === thisMonth) {
            thisMonthReferrer = str[1];
        }
        return (thisMonthReferrer);
    });
    return monthReferrer
};