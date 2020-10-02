export const timeStampToDate = dateObj => {
    const dateString = dateObj.toDate().toString().split(' ');
    return dateString.splice(0, 4).join(' ')
}