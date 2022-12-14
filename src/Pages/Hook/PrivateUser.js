import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from './useAdmin';

const PrivateUser = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user.email)
    const { data: UserData = [], isLoading } = useQuery({
        queryKey: ['allUser', user.email],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-side.vercel.app/allUser?email=${user.email}`)
            const data = res.json();
            return data
        }
    })
    const { user_role } = UserData;
    if (isLoading) {
        return <div className='text-center'><button className="btn loading">loading</button></div>
    }

    if (isAdmin || user_role === 'Buyer') {
        return children
    }
    else {
        return ''
    }
};

export default PrivateUser;