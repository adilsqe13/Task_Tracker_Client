
const filterPage = async (tasks, setTasks, getAllTasks, filter) => {
    const dateFilter = (el) => {
        return (
            (new Date(el.start_date).getDate() === new Date(filter.start_date).getDate() &&
                new Date(el.start_date).getMonth() === new Date(filter.start_date).getMonth() &&
                new Date(el.end_date).getDate() === new Date(filter.end_date).getDate() &&
                new Date(el.end_date).getMonth() === new Date(filter.end_date).getMonth())
        )
    }
    if (filter.assigneeName !== '' && filter.priority === '' && filter.start_date === '' && filter.end_date === '') {
        const filteredTasks = tasks.filter((el) =>
            el.assignees.toUpperCase() === filter.assigneeName.toUpperCase()
        );
        setTasks(filteredTasks)
        setTimeout(() => {
            alert(`${filteredTasks.length} Result Found`);
        }, 1000);
    } else if (filter.assigneeName === '' && filter.priority !== '' && filter.start_date === '' && filter.end_date === '') {
        const filteredTasks = tasks.filter((el) =>
            el.priority === filter.priority
        );
        setTasks(filteredTasks)
        setTimeout(() => {
            alert(`${filteredTasks.length} Result Found`);
        }, 1000);
    } else if (filter.assigneeName !== '' && filter.priority !== '' && filter.start_date === '' && filter.end_date === '') {
        const filteredTasks = tasks.filter((el) =>
        (el.assignees.toUpperCase() === filter.assigneeName.toUpperCase() &&
            el.priority === filter.priority)
        );
        setTasks(filteredTasks)
        setTimeout(() => {
            alert(`${filteredTasks.length} Result Found`);
        }, 1000);
    } else if (filter.assigneeName === '' && filter.priority === '' && filter.start_date !== '' && filter.end_date !== '') {
        const filteredTasks = tasks.filter((el) => dateFilter(el));
        setTasks(filteredTasks)
        setTimeout(() => {
            alert(`${filteredTasks.length} Result Found`);
        }, 1000);
    } else if (filter.assigneeName !== '' && filter.priority === '' && filter.start_date !== '' && filter.end_date !== '') {
        const filteredTasks = tasks.filter((el) =>
            dateFilter(el) &&
            el.assignees.toUpperCase() === filter.assigneeName.toUpperCase());
        setTasks(filteredTasks)
        setTimeout(() => {
            alert(`${filteredTasks.length} Result Found`);
        }, 1000);
    } else if (filter.assigneeName === '' && filter.priority !== '' && filter.start_date !== '' && filter.end_date !== '') {
        const filteredTasks = tasks.filter((el) =>
            dateFilter(el) &&
            el.priority === filter.priority);
        setTasks(filteredTasks)
        setTimeout(() => {
            alert(`${filteredTasks.length} Result Found`);
        }, 1000);
    } else if (filter.assigneeName !== '' && filter.priority !== '' && filter.start_date !== '' && filter.end_date !== '') {
        const filteredTasks = tasks.filter((el) =>
            dateFilter(el) &&
            el.priority === filter.priority &&
            el.assignees.toUpperCase() === filter.assigneeName.toUpperCase())
        setTasks(filteredTasks)
        setTimeout(() => {
            alert(`${filteredTasks.length} Result Found`);
        }, 1000);
    } else {
        getAllTasks();
    }
};

export default filterPage;