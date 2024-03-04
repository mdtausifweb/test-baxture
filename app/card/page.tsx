

"use client"
import axios from 'axios';
import UserCard from './Cards';
import { useEffect, useState } from 'react';
import { Box, Flex } from '@mantine/core';
const UsersPage = () => {
    const [users, setUsers] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const usersFetch = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const users = await response?.data;
            if (!users) {
                setLoading(false)
                return
            }
            setUsers(users)
            setLoading(false)
        };
        usersFetch()
    }, [])
    if (loading) {
        return (
            <>
                <div>
                    loading ....
                </div>
            </>
        )
    }
    const deleteUser = (id: any) => {
        const filteruser = users?.filter((item: any) => item?.id != id)
        console.log('filteruser', filteruser);
        setUsers(filteruser)
    }
    const followUser = (id: any) => {
        const followUsers = users?.map((item: any) => item?.id !== id ? item : item.follow ? { ...item, follow: false } : { ...item, follow: true })
        setUsers(followUsers)
        console.log('followUsers', followUsers);
    }
    return (
        <Flex
            w={{ base: 400, sm: 850, md: 800, lg: "auto" }}
            justify={{ sm: 'center' }}
            wrap="wrap"
            gap={"sm"}
        >
            {users?.map((user: any, index: number) => (
                <Box key={index}
                    w={{ base: 400, sm: 400, md: 400, lg: 300 }}
                >
                    <UserCard user={user} deleteUser={deleteUser} followUser={followUser} />
                </Box>
            ))}
        </Flex>
    );
};


export default UsersPage;
