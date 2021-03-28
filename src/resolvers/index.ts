import { User } from './typesdef';
const data: User[] = [
];
const root = {
    allUsers: () => data,
    getUser: (d:User) => data.find(x => x.id === d.id),
    addUser: (d:User) => {
        const user: User = {...d};
        user.id = new Date().valueOf();
        data.push(user);
        return user;
    }
}

export default root;