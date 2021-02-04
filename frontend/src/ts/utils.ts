import moment from 'moment';

const parseISODate = (date: string | undefined) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};

export { parseISODate };
